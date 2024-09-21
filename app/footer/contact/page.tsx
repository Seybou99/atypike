'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contact@atypikhouse.com',
          subject: `Soumission d'un nouveau formulaire de contact: ${formData.subject}`,
          text: `
            Nom: ${formData.name}
            Email: ${formData.email}
            Sujet: ${formData.subject}
            Message: ${formData.message}
          `,
        }),
      });

      if (response.ok) {
        alert('Message envoyé avec succès!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Échec de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Impossible d\'envoyer le message. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Nos coordonnées</h2>
            <div className="space-y-4">
              <p className="flex items-center text-emerald-700">
                <FaEnvelope className="mr-2" /> contact@atypikhouse.com
              </p>
              <p className="flex items-center text-emerald-700">
                <FaPhone className="mr-2" /> +33 1 23 45 67 89
              </p>
              <p className="flex items-center text-emerald-700">
                <FaMapMarkerAlt className="mr-2" /> 123 Rue des Aventuriers, 60000 Pierrefonds, France
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-emerald-700 font-semibold mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-emerald-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-emerald-700 font-semibold mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-emerald-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition duration-300 ease-in-out"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
