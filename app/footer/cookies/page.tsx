'use client';

import React from 'react';
import Head from 'next/head';

const CookiePolicy = () => {
  return (
    <>
      <Head>
        <title>Politique de Cookies | Atypik House</title>
        <meta name="description" content="Découvrez notre politique de cookies chez Atypik House" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Politique de Cookies</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p className="text-gray-700">
            Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site web. 
            Il nous aide à améliorer votre expérience et à personnaliser nos services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Comment utilisons-nous les cookies ?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Pour mémoriser vos préférences</li>
            <li>Pour analyser le trafic et l&apos;utilisation du site</li>
            <li>Pour personnaliser le contenu et les publicités</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Types de cookies utilisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-700">Cookies essentiels</h3>
              <p>Nécessaires au fonctionnement du site</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-700">Cookies de performance</h3>
              <p>Pour améliorer les performances du site</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-700">Cookies de fonctionnalité</h3>
              <p>Pour personnaliser votre expérience</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-700">Cookies de ciblage</h3>
              <p>Pour la publicité personnalisée</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Gestion des cookies</h2>
          <p className="text-gray-700 mb-4">
            Vous pouvez gérer vos préférences en matière de cookies à tout moment. Voici comment :
          </p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition duration-300">
            Gérer mes préférences de cookies
          </button>
        </section>
      </div>
    </>
  );
};

export default CookiePolicy;
