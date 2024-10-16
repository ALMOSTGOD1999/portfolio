"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden mr-4">
            <Menu className="h-6 w-6" />
          </button>
          <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'absolute top-16 left-0 bg-background w-full p-4 shadow-md z-10' : 'hidden md:flex'}`}>
            <li>
              <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#projects" className={pathname === '/#projects' ? 'font-bold' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#about" className={pathname === '/#about' ? 'font-bold' : ''}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}