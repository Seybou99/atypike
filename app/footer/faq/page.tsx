'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Qu'est-ce qu'Atypik House ?",
      answer: "Atypik House est une plateforme qui propose des hébergements uniques et originaux pour des expériences de séjour inoubliables."
    },
    {
      question: "Comment puis-je réserver un hébergement ?",
      answer: "Pour réserver, il suffit de naviguer sur notre site, choisir votre hébergement préféré, sélectionner vos dates et suivre le processus de réservation en ligne."
    },
    {
      question: "Quels types d'hébergements proposez-vous ?",
      answer: "Nous proposons une variété d'hébergements atypiques tels que des cabanes dans les arbres, des yourtes, des tiny houses, et bien d'autres options uniques."
    },
    // Add more FAQ items as needed
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">Foire Aux Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-semibold text-emerald-800">{item.question}</span>
                {openIndex === index ? <FaChevronUp className="text-emerald-600" /> : <FaChevronDown className="text-emerald-600" />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-emerald-50">
                  <p className="text-emerald-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
