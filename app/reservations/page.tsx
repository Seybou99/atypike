import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "./ReservationsClient";
import Breadcrumb from "@/app/components/Breadcrumb"; // Importez le composant Breadcrumb

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  // Définissez les éléments du fil d'Ariane
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Réservations', href: '/reservations' },
  ];

  if (!currentUser) {
    return (
      <ClientOnly> 
        <Breadcrumb items={breadcrumbItems} /> {/* Ajout du fil d'Ariane */}
        <EmptyState
          title="Non autorisé"
          subtitle="Veuillez vous connecter"
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <Breadcrumb items={breadcrumbItems} /> {/* Ajout du fil d'Ariane */}
        <EmptyState
          title="Aucune réservation trouvée"
          subtitle="Il semble que vous n'ayez aucune réservation."
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
 
export default ReservationsPage;
