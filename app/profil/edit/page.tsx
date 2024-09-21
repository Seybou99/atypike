'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';
import ImageUpload from '@/app/components/inputs/ImageUpload';
import Breadcrumb from '@/app/components/Breadcrumb'; // Import du fil d'Ariane

const EditProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/profil');
      const userData = await response.json();
      setName(userData.name || '');
      setEmail(userData.email || '');
      setImageSrc(userData.image || '');
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/profil', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, image: imageSrc }),
    });
    if (response.ok) {
      router.push('/profil');
    }
  };

  const goback = () => {
    router.back();
  };

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Profil', href: '/profil' },
    { label: 'Modifier le profil', href: '/profil/edit' },
  ];

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        
        <div className="container mx-auto p-4">
          {/* Ajout du fil d'Ariane */}
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="text-2xl text-center font-bold mb-4">Modifier le profil</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Nom</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block">Image de profil</label>
              <ImageUpload
                onChange={(value) => setImageSrc(value)}
                value={imageSrc}
              />
            </div>
            <Button 
              label="Enregistrer les modifications"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
              }}
            />
          </form>

          <div className="flex flex-col gap-2 py-3">
            <div className="flex flex-row items-center gap-4 w-full">
              <Button label="Annuler" outline onClick={goback} />
              <Button label="Changer le mot de passe" onClick={() => router.push('/profil/change-password')} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
