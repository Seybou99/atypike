
'use client';

import React from 'react';
import Image from 'next/image';

const Apropos = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="relative h-60">
        <Image
          src="/images/nature.jpeg"
          layout="fill"
          objectFit="cover"
          alt="AtypikHouse Nature"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Découvrez AtypikHouse</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Notre Histoire</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <p className="mb-4">
                Fondée en 2020, AtypikHouse est née d&apos;une passion pour l&apos;hébergement insolite et le tourisme durable. Notre voyage a commencé avec une simple idée : offrir des expériences uniques en harmonie avec la nature.
              </p>
              <p>
                Aujourd&apos;hui, nous sommes fiers de proposer une sélection soigneusement choisie d&apos;habitats alternatifs à travers la France, chacun racontant sa propre histoire et offrant une aventure incomparable.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <Image
                src="/images/apropos.jpeg"
                width={500}
                height={300}
                alt="Fondateurs d&apos;AtypikHouse"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Notre Mission</h2>
          <p className="mb-4">
            Chez AtypikHouse, nous nous engageons à :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Promouvoir un tourisme responsable et écologique</li>
            <li>Offrir des expériences uniques et mémorables</li>
            <li>Soutenir les communautés locales</li>
            <li>Préserver et valoriser les environnements naturels</li>
          </ul>
          <p>
            Chaque séjour avec AtypikHouse est une opportunité de se reconnecter avec la nature et de vivre des moments authentiques.
          </p>
        </section>

   
        {/* Our Philosophie */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
           <h2 className="text-2xl font-semibold text-green-700 mb-4">Notre Philosophie</h2>
           <p className="mb-4">
             AtypikHouse est bien plus qu&apos;une simple entreprise de location d&apos;habitats alternatifs. C&apos;est un mode de vie, une philosophie qui prône l&apos;harmonie avec la nature, le respect de l&apos;environnement et le partage d&apos;expériences authentiques. Chaque hébergement proposé, qu&apos;il s&apos;agisse d&apos;une cabane dans les arbres, d&apos;une yourte ou d&apos;une cabane flottante, est soigneusement sélectionné pour son caractère unique et son empreinte écologique minimale.
           </p>
           <p>
             Chez AtypikHouse, l&apos;accueil chaleureux et la convivialité sont au cœur de chaque séjour. Les propriétaires, véritables passionnés, ouvrent leurs portes aux voyageurs du monde entier, les invitant à découvrir la beauté de la nature et à créer des souvenirs intemporels.
          </p>
        </section>

        {/* Legal Information */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
           <h2 className="text-2xl font-semibold text-green-700 mb-4">Informations Légales</h2>
           <ul className="list-disc list-inside">
             <li><strong>Dénomination Sociale :</strong> AtypikHouse SARL</li>
             <li><strong>Siège Social :</strong> 123 Rue des Aventuriers, 60000 Pierrefonds, France</li>
             <li><strong>Statut Juridique :</strong> Société à Responsabilité Limitée (SARL)</li>
             <li><strong>Capital Social :</strong> 10 000€</li>
             <li><strong>Numéro RCS :</strong> Compiègne B 123 456 789</li>
             <li><strong>Numéro SIREN :</strong> 123 456 789</li>
             <li><strong>Numéro SIRET :</strong> 123 456 789 00010</li>
             <li><strong>APE/NAF :</strong> 6201Z (Programmation informatique)</li>
             <li><strong>Numéro de TVA Intracommunautaire :</strong> FR12 345678901</li>
             <li><strong>Responsable de la Publication :</strong> Jean Dupont</li>
             <li><strong>Contact :</strong> <a href="mailto:jean.dupont@atypikhouse.com" className="text-green-700 hover:underline">jean.dupont@atypikhouse.com</a></li>
           </ul>
         </section>
      </main>
    </div>
  );
};

export default Apropos;
