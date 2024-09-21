'use client';

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-10 px-4">
      <header className="bg-green-700 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            Politique de Confidentialité d&apos;AtypikHouse SARL
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Introduction</h2>
          <p className="mb-4">
            Chez AtypikHouse SARL, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Collecte des données</h2>
          <p className="mb-4">
            Nous collectons les informations que vous nous fournissez directement, telles que :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Informations de paiement</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Utilisation des données</h2>
          <p className="mb-4">
            Nous utilisons vos données personnelles pour :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Gérer votre compte et vos réservations</li>
            <li>Vous fournir les services demandés</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
            <li>Vous envoyer des communications marketing (avec votre consentement)</li>
          </ul>
        </section>

        {/* Add more sections as needed */}

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Vos droits</h2>
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l&apos;effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Contact</h2>
          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter à :
          </p>
          <p className="mb-4">
            Email : <a href="mailto:privacy@atypikhouse.fr" className="text-green-500 hover:underline">privacy@atypikhouse.fr</a>
          </p>
          <p>
            Adresse : AtypikHouse SARL, 123 Rue des Aventuriers, 60000 Pierrefonds, France
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
