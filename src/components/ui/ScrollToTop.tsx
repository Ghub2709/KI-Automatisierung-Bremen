"use client";

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  // Überwache das Scrollen und zeige den Button nur an, wenn nach unten gescrollt wurde
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    // Event-Listener für das Scrollen hinzufügen
    window.addEventListener('scroll', handleScroll);
    
    // Initialen Zustand setzen
    handleScroll();
    
    // Event-Listener beim Aufräumen entfernen
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Funktion zum Scrollen zum Seitenanfang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Zum Seitenanfang scrollen"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
} 