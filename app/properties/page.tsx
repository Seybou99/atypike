import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import Breadcrumb from "@/app/components/Breadcrumb"; // Import du composant Breadcrumb

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Non autorisé"
      subtitle="Veuillez vous connecter"
    />
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Aucune propriété trouvée"
          subtitle="Il semble que vous n'ayez aucune propriété."
        />
      </ClientOnly>
    );
  }

  // Ajout du fil d'Ariane
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Propriétés", href: "/properties" }
  ];

  return (
    <ClientOnly>
      <div>
        <Breadcrumb items={breadcrumbItems} /> {/* Fil d'Ariane ajouté ici */}
        <PropertiesClient
          listings={listings}
          currentUser={currentUser}
        />
      </div>
    </ClientOnly>
  );
}

export default PropertiesPage;
