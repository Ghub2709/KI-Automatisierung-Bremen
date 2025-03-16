import React from 'react';
import { Metadata } from 'next';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/contact/ContactForm';
import CalendlyEmbed from '@/components/contact/CalendlyEmbed';
import ProcessSteps from '@/components/contact/ProcessSteps';

export const metadata: Metadata = {
  title: 'Kontakt | KI-Automatisierung Bremen',
  description: 'Nehmen Sie Kontakt mit KI-Automatisierung Bremen auf. Wir beraten Sie gerne zu KI-Lösungen für Ihr Unternehmen.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-dark to-indigo-900 z-0"></div>
        
        {/* Geometric network pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
          <div className="absolute w-full h-full">
            {/* Connection lines */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="10" y1="20" x2="90" y2="80" stroke="white" strokeWidth="0.1" />
              <line x1="20" y1="10" x2="80" y2="90" stroke="white" strokeWidth="0.1" />
              <line x1="30" y1="10" x2="70" y2="90" stroke="white" strokeWidth="0.1" />
              <line x1="40" y1="10" x2="60" y2="90" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="30" x2="90" y2="70" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="40" x2="90" y2="60" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="60" x2="90" y2="40" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="70" x2="90" y2="30" stroke="white" strokeWidth="0.1" />
              <line x1="10" y1="80" x2="90" y2="20" stroke="white" strokeWidth="0.1" />
            </svg>
            
            {/* Connection nodes */}
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[20%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[80%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[10%] left-[20%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[90%] left-[80%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[10%] left-[30%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[90%] left-[70%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[10%] left-[40%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[90%] left-[60%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[30%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[70%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[40%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[60%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[50%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[50%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[60%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[40%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[70%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[30%] left-[90%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[80%] left-[10%]"></div>
            <div className="absolute w-2 h-2 bg-white/50 rounded-full top-[20%] left-[90%]"></div>
          </div>
        </div>
        
        {/* Communication visualization elements */}
        <div className="absolute right-5 lg:right-16 top-1/3 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-accent/30 blur-xl z-0"></div>
        <div className="absolute left-5 lg:left-16 bottom-1/3 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-secondary/30 blur-xl z-0"></div>
        
        {/* Abstract message bubbles */}
        <div className="absolute right-10 top-1/4 w-12 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-tr-xl rounded-bl-xl rounded-br-xl z-0"></div>
        <div className="absolute left-10 bottom-1/4 w-12 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl z-0"></div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Sprechen Sie mit uns
            </div>
            
            <div className="text-center">
              <h1 className="mb-6 text-white">
                <span className="text-2xl text-white/70 mb-2 block">KI-Automatisierung Bremen</span>
                <span className="text-5xl font-bold relative inline-block">
                  Kontakt
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-transparent"></div>
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam die KI-Zukunft Ihres Unternehmens gestalten
              </p>
            </div>
            
            <div className="mt-10 w-full max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Termin vereinbaren</h3>
                <p className="text-white/70 mb-4 text-sm">Buchen Sie direkt einen Beratungstermin mit uns</p>
                <a href="#calendly" className="text-accent hover:text-white text-sm font-medium transition-colors">
                  Zum Kalender →
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Mail senden</h3>
                <p className="text-white/70 mb-4 text-sm">Schreiben Sie uns eine Nachricht</p>
                <a href="mailto:kontakt@ki-automatisierung-bremen.de" className="text-accent hover:text-white text-sm font-medium transition-colors">
                  kontakt@ki-automatisierung-bremen.de →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="section bg-white" id="calendly">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Beratungstermin vereinbaren</h2>
            <p className="text-lg text-gray-600 mb-6">
              Wählen Sie einen passenden Termin für ein kostenloses Erstgespräch. Wir freuen uns darauf, mehr über Ihre Anforderungen zu erfahren und gemeinsam KI-Lösungen für Ihr Unternehmen zu entwickeln.
            </p>
          </div>
          
          <div className="calendly-container">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="section bg-neutral-50">
        <ProcessSteps />
      </section>

      {/* Contact Info Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-gray-600">Im Hollergrund 175A<br />28357 Bremen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <p className="text-gray-600"><a href="tel:+491632099861" className="hover:text-primary transition-colors">+49 163 209 98 61</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-Mail</h4>
                      <p className="text-gray-600"><a href="mailto:kontakt@ki-automatisierung-bremen.de" className="hover:text-primary transition-colors">kontakt@ki-automatisierung-bremen.de</a></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Geschäftszeiten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Montag - Freitag</span>
                    <span className="text-gray-600">9:00 - 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samstag</span>
                    <span className="text-gray-600">Geschlossen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sonntag</span>
                    <span className="text-gray-600">Geschlossen</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Hinweis:</h4>
                  <p className="text-gray-600">
                    Termine außerhalb der Geschäftszeiten sind nach Absprache möglich. Nutzen Sie einfach unseren Online-Kalender, um einen passenden Termin zu finden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 