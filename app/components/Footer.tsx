
'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import router from 'next/router';

import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour gérer l'inscription à la newsletter
    console.log('Inscription à la newsletter avec:', email);
    setEmail(''); // Réinitialiser le champ email après inscription
  };

  return (
    <>
    <footer className="bg-emerald-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Informations sur l'Entreprise */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4"> <a href="/footer/apropos" className="hover:text-green-300 transition duration-300">À propos</a></h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/contact" className="hover:text-green-300 transition duration-300">Contact</a></h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/faq" className="hover:text-green-300 transition duration-300">FAQ</a></h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/plan" className="hover:text-green-300 transition duration-300">Plan du Site</a></h4>
            
           
          </div>

          {/* Liens Légaux */}
          <div className="text-center md:text-left">
           
            
            <h4 className="text-base font-semibold mb-4"><a href="/footer/mentions" className="hover:text-green-300 transition duration-300">Mentions légales</a></h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/cgv" className="hover:text-green-300 transition duration-300">CGV</a> / <a href="/footer/cgu" className="hover:text-green-300 transition duration-300">CGU</a> </h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/cookies" className="hover:text-green-300 transition duration-300">Politique de cookies</a></h4>
            <h4 className="text-base font-semibold mb-4"><a href="/footer/confidentialite" className="text-white hover:text-green-300 transition-transform duration-300 transform hover:scale-150"
              >Politique de confidentialité</a></h4>
              
            
        
          </div>

          {/* Réseaux Sociaux */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a href="https://www.facebook.com/atypik.house.14/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-transform duration-300 transform hover:scale-150">
                <FaFacebookF />
              </a>
              <a href="https://x.com/atypikhouse11" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-transform duration-300 transform hover:scale-150">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/atypik.house_g2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-transform duration-300 transform hover:scale-150">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/atypik-house-5b36b3236/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-transform duration-300 transform hover:scale-150">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-sm">&copy; 2024 Atypik House. Tous droits réservés.</p>
          </div>

          {/* Formulaire d'Inscription à la Newsletter */}
          <div className="text-center md:text-left">
          <Image
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer" 
            src="/images/logo.png" 
            height= "180"
            width="180" 
            alt="logo_atypikHouse" 
          />
            <h4 className="text-base font-semibold mb-4">Inscrivez-vous à notre newsletter</h4>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="p-2 rounded-md text-black mb-2 md:mb-0 md:mr-2"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>

        </div>
    </div>

    
    </footer>
    
         {/* Red Ribbon */}
         <div className="bg-red-600 py-2 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <p className="text-center text-white font-bold animate-pulse">
              Ce site est un projet de fin d&apos;étude - Atypik House
            </p>
          </div>
          <div className="absolute inset-0 skew-y-3 bg-red-700 -z-1"></div>
        </div>

    </>
  );
};

export default Footer;

