'use client';

import { useEffect, useState, useCallback } from 'react';
import Modal from './Modal';


const CookieConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true); // si pas de consentement, on ouvre le modal
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsOpen(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsOpen(false);
  }, []);

  if (!isOpen) {
    return null; // si déjà accepté ou refusé, ne rien afficher
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleDecline} // Si l'utilisateur ferme sans choisir, on décline
      onSubmit={handleAccept}
      title="Respect de la vie privée"
      body={
        <div>
          <p>Nous utilisons des cookies pour améliorer votre expérience. En acceptant, vous nous permettez de collecter des informations à cette fin.</p>
        </div>
      }
      actionLabel="Accepter les cookies"
      secondaryAction={handleDecline}
      secondaryActionLabel="Continuer sans accepter"
    />
  );
};

export default CookieConsentModal;


// pour tester à nouveau le modal,on supprime la clé cookieConsent du localStorage via la console du navigateur avec la commande suivante : localStorage.removeItem('cookieConsent');

