import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "./TripsClient";
import Breadcrumb from "@/app/components/Breadcrumb"; // Importez votre composant Breadcrumb

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Voyages', href: '/trips' },
  ];

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <Breadcrumb items={breadcrumbItems} /> {/* Ajout du fil d'Ariane */}
        <EmptyState
          title="Aucun voyage trouvé"
          subtitle="Il semblerait que vous n'ayez aucun voyage."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Breadcrumb items={breadcrumbItems} /> {/* Ajout du fil d'Ariane */}
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}

export default TripsPage;
