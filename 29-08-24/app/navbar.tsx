// Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navitems = [
  { path: "/", value: "Home" },
  { path: "/products", value: "Products" },
  { path: "/about", value: "About" },
  { path: "/contact", value: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-sky-900 text-white p-7 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-6 items-center justify-center">
          {navitems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  pathname === item.path 
                    ? "text-teal-400 border-b-2 border-teal-400 pb-1" 
                    : "hover:text-teal-500"
                }`}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
