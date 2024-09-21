import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-200 py-12 px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-emerald-900 text-white py-6 px-8">
        <h1 className="text-3xl font-bold">Plan du site</h1>
      </div>
      <div className="p-8">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/properties" className="text-blue-600 hover:underline">
              Propriétés
            </Link>
          </li>
          <li>
            <Link href="/reservations" className="text-blue-600 hover:underline">
              Réservations
            </Link>
          </li>
          <li>
            <Link href="/trips" className="text-blue-600 hover:underline">
              Voyages
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-blue-600 hover:underline">
              Profil
            </Link>
          </li>
          <li>
            <Link href="/footer/apropos" className="text-blue-600 hover:underline">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/footer/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/footer/faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/footer/mentions" className="text-blue-600 hover:underline">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/footer/cgu" className="text-blue-600 hover:underline">
              CGU
            </Link>
          </li>
          <li>
            <Link href="/footer/cgv" className="text-blue-600 hover:underline">
              CGV
            </Link>
          </li>
          <li>
            <Link href="/footer/cookies" className="text-blue-600 hover:underline">
            Politique de cookies
            </Link>
          </li>
          <li>
            <Link href="/footer/confidentialite" className="text-blue-600 hover:underline">
            Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SitemapPage;
