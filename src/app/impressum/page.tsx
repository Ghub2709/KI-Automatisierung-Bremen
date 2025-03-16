import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | KI-Automatisierung Bremen',
  description: 'Impressum und rechtliche Informationen von KI-Automatisierung Bremen.',
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-neutral-900 relative overflow-hidden">
        {/* Futuristic circuit-like patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-neutral-900"></div>
        
        {/* Circuit pattern elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Horizontal lines */}
          <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute h-px w-full top-2/4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          
          {/* Vertical lines */}
          <div className="absolute w-px h-full left-1/4 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute w-px h-full left-2/4 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute w-px h-full left-3/4 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          
          {/* Circuit nodes */}
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-1/4 left-1/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-1/4 left-2/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-1/4 left-3/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-2/4 left-1/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-2/4 left-2/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-2/4 left-3/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-3/4 left-1/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-3/4 left-2/4 transform -translate-x-1.5 -translate-y-1.5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-white/50 top-3/4 left-3/4 transform -translate-x-1.5 -translate-y-1.5"></div>
        </div>
        
        {/* Data blocks (decorative) */}
        <div className="absolute right-10 top-1/3 w-8 h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden">
          <div className="h-1/3 w-full bg-primary/20"></div>
        </div>
        <div className="absolute left-10 bottom-1/3 w-8 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden">
          <div className="h-1/4 w-full bg-secondary/20"></div>
          <div className="h-1/4 w-full bg-secondary/20 mt-1/4"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-12 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">§</span>
              Rechtliche Informationen
            </div>
            
            <div className="text-center">
              <h1 className="mb-6 text-white inline-flex flex-col items-center">
                <span className="text-2xl text-white/70 mb-2">KI-Automatisierung Bremen</span>
                <span className="text-5xl font-bold relative">
                  Impressum
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Rechtliche Informationen zu KI-Automatisierung Bremen
              </p>
              
              <div className="mt-12 flex justify-center space-x-4">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-md border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-md border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-md border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">KI-Automatisierung Bremen</p>
            <p className="mb-2">Im Hollergrund 175A</p>
            <p className="mb-2">28357 Bremen</p>
            <p className="mb-2">Deutschland</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="mb-2">Telefon: <a href="tel:+491632099861" className="text-primary hover:underline">+49 163 209 98 61</a></p>
            <p className="mb-2">E-Mail: <a href="mailto:kontakt@ki-automatisierung-bremen.de" className="text-primary hover:underline">kontakt@ki-automatisierung-bremen.de</a></p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="mb-2">DE XXX XXX XXX</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-2">Stephan Grosser</p>
            <p className="mb-2">Im Hollergrund 175A</p>
            <p className="mb-2">28357 Bremen</p>
            <p className="mb-2">Telefon: <a href="tel:+491632099861" className="text-primary hover:underline">+49 163 209 98 61</a></p>
            <p className="mb-2">E-Mail: <a href="mailto:kontakt@ki-automatisierung-bremen.de" className="text-primary hover:underline">kontakt@ki-automatisierung-bremen.de</a></p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl font-bold mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 