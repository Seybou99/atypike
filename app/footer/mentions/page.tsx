'use client';

import React from 'react';

const MentionsLegales: React.FC = () => {
  return (
    
      <div className="bg-gray-100 text-gray-900">
      {/* En-tête */}
      <header className="bg-green-700 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Mentions Légales</h1>
        </div>
      </header>
{/* Contenu principal */}
<main className="container mx-auto p-6">
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Informations légales</h2>
        <p className="mb-4">
          Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site <strong>AtypikHouse</strong> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Dénomination Sociale</strong> : AtypikHouse SARL</li>
          <li><strong>Siège Social</strong> : 123 Rue des Aventuriers, 60000 Pierrefonds, France</li>
          <li><strong>Statut Juridique</strong> : Société à Responsabilité Limitée (SARL)</li>
          <li><strong>Capital Social</strong> : 10 000€</li>
          <li><strong>Numéro RCS</strong> : Compiègne B 123 456 789</li>
          <li><strong>Numéro SIREN</strong> : 123 456 789</li>
          <li><strong>Numéro SIRET</strong> : 123 456 789 00010</li>
          <li><strong>APE/NAF</strong> : 6201Z (Programmation informatique)</li>
          <li><strong>Numéro de TVA Intracommunautaire</strong> : FR12 345678901</li>
          <li><strong>Directeur de la publication</strong> : Jean Dupont</li>
          <li><strong>Contact</strong> : jean.dupont@atypikhouse.com</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Propriété intellectuelle et contrefaçons</h2>
        <p>
          AtypikHouse SARL est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, vidéos et icônes.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Limitation de responsabilité</h2>
        <p>
          AtypikHouse SARL ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l’utilisateur, lors de l&apos;accès au site <strong>AtypikHouse</strong>, et résultant de l&apos;utilisation d&apos;un matériel non conforme.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Gestion des données personnelles</h2>
        <p>
          En utilisant le site <strong>AtypikHouse</strong>, certaines données personnelles peuvent être collectées, notamment l&apos;URL, l&apos;adresse IP, etc. Conformément à la loi, vous disposez de droits d&apos;accès, de rectification et d&apos;opposition aux informations vous concernant.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Liens hypertextes et cookies</h2>
        <p>
          La navigation sur le site <strong>AtypikHouse</strong> peut provoquer l&apos;installation de cookies sur l&apos;appareil de l&apos;utilisateur. Vous pouvez configurer votre navigateur pour refuser ces cookies.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Droit applicable et attribution de juridiction</h2>
        <p>
          Tout litige en relation avec l&apos;utilisation du site <strong>AtypikHouse</strong> est soumis au droit français. Les tribunaux compétents seront ceux de Compiègne.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">7. Les principales lois concernées</h2>
        <ul className="list-disc ml-6">
          <li>Loi n° 78-17 du 6 janvier 1978 modifiée.</li>
          <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">8. Lexique</h2>
        <ul className="list-disc ml-6">
          <li><strong>Utilisateur</strong> : Internaute se connectant au site.</li>
          <li><strong>Données personnelles</strong> : Informations permettant d&apos;identifier une personne physique, directement ou indirectement.</li>
        </ul>
      </section>
      </main>
      </div>
  );
};

export default MentionsLegales;
