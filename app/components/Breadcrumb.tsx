// components/Breadcrumb.tsx

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm mb-4">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index + 1 !== items.length ? (
              <Link href={item.href} className="text-blue-500 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index + 1 !== items.length && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
