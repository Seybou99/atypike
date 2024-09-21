import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";
import Breadcrumb from "@/app/components/Breadcrumb";  // Import du fil d'Ariane

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  const breadcrumbItems = [
    { label: 'Accueil', href: '/', active: false },
    { label: 'Favoris', href: '/favorites', active: true },
  ];

  return (
    <ClientOnly>
      {/* Ajout du fil d'Ariane, maintenant visible dans tous les cas */}
      <Breadcrumb items={breadcrumbItems} />

      {listings.length === 0 ? (
        <EmptyState
          title="Aucun favori trouvé"
          subtitle="Il semblerait que vous n'ayez aucune annonce favorite."
        />
      ) : (
        <FavoritesClient
          listings={listings}
          currentUser={currentUser}
        />
      )}
    </ClientOnly>
  );
}

export default ListingPage;
