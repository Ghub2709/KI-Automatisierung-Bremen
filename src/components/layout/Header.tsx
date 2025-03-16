'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          {/* You can replace this with an actual logo image */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
            KI
          </div>
          <span className={`font-heading font-bold text-xl ${isScrolled || isMenuOpen ? 'text-neutral-900' : 'text-white'}`}>
            KI-Automatisierung
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-medium text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-white/70'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/leistungen" 
            className={`font-medium text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-white/70'} transition-colors`}
          >
            Leistungen
          </Link>
          <Link 
            href="/kontakt" 
            className={`font-medium text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-white/70'} transition-colors`}
          >
            Kontakt
          </Link>
          <Link 
            href="/impressum" 
            className={`font-medium text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-white/70'} transition-colors`}
          >
            Impressum
          </Link>
          <Link 
            href="/datenschutz" 
            className={`font-medium text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-white/70'} transition-colors`}
          >
            Datenschutz
          </Link>
          
          {/* CTA Button */}
          <Link 
            href="/kontakt" 
            className="btn-primary ml-4"
          >
            Termin vereinbaren
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden z-10 focus:outline-none"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-neutral-900" />
          ) : (
            <Bars3Icon className={`w-8 h-8 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-4">
            <button 
              onClick={toggleMenu} 
              className="absolute top-6 right-6 focus:outline-none"
              aria-label="Menü schließen"
            >
              <XMarkIcon className="w-8 h-8 text-neutral-900" />
            </button>
            <nav className="flex flex-col items-center space-y-6 text-center">
              <Link 
                href="/"
                onClick={toggleMenu}
                className="font-medium text-xl text-neutral-900 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/leistungen"
                onClick={toggleMenu}
                className="font-medium text-xl text-neutral-900 hover:text-primary transition-colors"
              >
                Leistungen
              </Link>
              <Link 
                href="/kontakt"
                onClick={toggleMenu}
                className="font-medium text-xl text-neutral-900 hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
              <Link 
                href="/impressum"
                onClick={toggleMenu}
                className="font-medium text-xl text-neutral-900 hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz"
                onClick={toggleMenu}
                className="font-medium text-xl text-neutral-900 hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
              <Link 
                href="/kontakt"
                onClick={toggleMenu}
                className="btn-primary mt-4"
              >
                Termin vereinbaren
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 