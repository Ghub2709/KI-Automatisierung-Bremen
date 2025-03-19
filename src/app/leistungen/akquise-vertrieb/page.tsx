import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  PhoneIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Akquise & Vertrieb | KI-Automatisierung Bremen',
  description: 'Automatisieren Sie Ihre Lead-Generierung und Vertriebsprozesse mit KI-gestützten Lösungen. Generieren Sie kontinuierlich neue Leads und konvertieren Sie diese effizienter zu Kunden.',
};

export default function AkquiseVertriebPage() {
  const features = [
    {
      id: 1,
      title: 'Automatisierte Lead-Generierung',
      description: 'KI-gestützte Identifikation und Qualifizierung potentieller Kunden aus verschiedenen Quellen wie LinkedIn, XING und Branchenverzeichnissen.',
      benefits: ['Kontinuierlicher Zufluss neuer Leads', 'Qualitativ hochwertige Kontakte', 'Fokus auf die vielversprechendsten Prospects']
    },
    {
      id: 2,
      title: 'Personalisierte Erst-Kontakt-Automatisierung',
      description: 'Maßgeschneiderte Outreach-Kampagnen mit KI-generierten, personalisierten Nachrichten, die eine höhere Antwortrate erzielen als Standard-Templates.',
      benefits: ['2-3x höhere Antwortrate', 'Zeitsparende Automatisierung', 'Konsistente Kommunikation']
    },
    {
      id: 3,
      title: 'KI-Telefon-Outreach',
      description: 'Automatisierte Anrufe zur Terminvereinbarung mit natürlich klingender KI-Stimme und intelligenter Gesprächsführung.',
      benefits: ['Mehr Termine bei gleichem Aufwand', 'Keine verpassten Follow-Ups', 'Kalenderintegration']
    },
    {
      id: 4,
      title: 'Social-Media-Lead-Generierung',
      description: 'Automatisierte Identifikation und Ansprache potentieller Kunden über LinkedIn und XING mit personalisierten Kontaktanfragen.',
      benefits: ['Kontinuierliche Netzwerkerweiterung', 'Zielgruppenspezifische Ansprache', 'Messbare Erfolge']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-teal-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-teal-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Network pattern suggestion */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 20}).map((_, i) => (
              <React.Fragment key={i}>
                <div className="absolute rounded-full bg-white" style={{
                  height: '8px',
                  width: '8px',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}></div>
                {Array.from({length: 3}).map((_, j) => (
                  <div key={`${i}-${j}`} className="absolute bg-white/30" style={{
                    height: '1px',
                    width: `${50 + Math.random() * 100}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}></div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-teal-400 animate-pulse mr-2"></span>
                Akquise & Vertrieb
              </div>
              
              <h1 className="text-white mb-6">
                <span className="gradient-text font-bold">KI-gestützte Leadgenerierung</span> für kontinuierliches Wachstum
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Generieren Sie kontinuierlich neue, qualifizierte Leads und konvertieren Sie diese effizienter zu Kunden – 
                mit unseren intelligenten Akquise- und Vertriebslösungen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-teal-400 to-secondary flex items-center justify-center">
                  <PhoneIcon className="w-24 h-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Die Vorteile unserer KI-gestützten Akquise</h2>
            <p className="text-lg text-neutral-600">
              Steigern Sie die Effizienz Ihres Vertriebs durch intelligente Automatisierung und gewinnen Sie mehr Kunden bei geringerem Aufwand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-teal-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zeitersparnis</h3>
                <p className="text-neutral-700">10-15 Stunden pro Woche, die Sie für wichtigere Vertriebsaktivitäten nutzen können.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-teal-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mehr Leads</h3>
                <p className="text-neutral-700">Bis zu 3x mehr qualifizierte Leads durch kontinuierliche, KI-gestützte Akquise-Aktivitäten.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-teal-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Höhere Konversionsrate</h3>
                <p className="text-neutral-700">2-3x höhere Antwortrate durch personalisierte, KI-optimierte Erst-Kontakt-Kampagnen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-teal-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-teal-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-secondary tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Akquise-Automatisierung im Detail</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Lösungen für Akquise und Vertrieb bieten zahlreiche Features, die Ihnen helfen, mehr Kunden zu gewinnen und zu binden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-teal-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-neutral-700 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                        <span className="text-neutral-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI-Powered Pipeline Visual Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="lg:col-span-5 text-center mb-12">
              <span className="inline-block text-sm font-semibold text-secondary tracking-wider uppercase mb-3">Der Prozess</span>
              <h2 className="mb-6">Ihr automatisierter Akquise-Prozess</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                So funktioniert unser KI-gestützter Akquise-Prozess – von der Lead-Generierung bis zum Abschluss.
              </p>
            </div>
            
            {/* Step 1 */}
            <div className="lg:col-span-1 relative">
              <div className="bg-teal-50 rounded-lg p-6 h-full border border-teal-100 relative z-10">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-secondary font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Lead-Identifikation</h3>
                <p className="text-neutral-700">KI analysiert Datenquellen und identifiziert potenzielle Kunden.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2 z-0">
                <svg className="w-8 h-8 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="lg:col-span-1 relative">
              <div className="bg-teal-50 rounded-lg p-6 h-full border border-teal-100 relative z-10">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-secondary font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Qualifizierung</h3>
                <p className="text-neutral-700">Automatische Bewertung und Priorisierung der Leads nach Kaufwahrscheinlichkeit.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2 z-0">
                <svg className="w-8 h-8 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="lg:col-span-1 relative">
              <div className="bg-teal-50 rounded-lg p-6 h-full border border-teal-100 relative z-10">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-secondary font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Personalisierte Ansprache</h3>
                <p className="text-neutral-700">KI erstellt maßgeschneiderte Kontaktnachrichten basierend auf Kundenprofil.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2 z-0">
                <svg className="w-8 h-8 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="lg:col-span-1 relative">
              <div className="bg-teal-50 rounded-lg p-6 h-full border border-teal-100 relative z-10">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-secondary font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Follow-Up</h3>
                <p className="text-neutral-700">Automatische Nachfassaktionen mit optimiertem Timing und Inhalt.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2 z-0">
                <svg className="w-8 h-8 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-lg p-6 h-full border border-accent/30 text-white">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-accent font-bold">5</div>
                <h3 className="text-lg font-bold mb-2">Terminvereinbarung</h3>
                <p className="text-white/90">Automatische Terminvorschläge und Integration in Ihren Kalender.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial-Style Case Study */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-secondary to-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Erfolgsgeschichte</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">300% mehr Leads im ersten Monat</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Antwortrate von 35% statt vorher 12%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Zeitersparnis von 14 Stunden pro Woche</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Umsatzsteigerung von 27% nach 3 Monaten</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-neutral-700 mb-6">
                      "Dank der KI-Automatisierung im Vertrieb konnten wir unsere Akquise-Aktivitäten deutlich steigern, ohne zusätzliche Mitarbeiter einzustellen. Die personalisierten Erst-Kontakt-Nachrichten erzielen eine Antwortrate, die weit über dem Branchendurchschnitt liegt."
                    </blockquote>
                  </div>
                  
                  <div>
                    <p className="font-bold">Thomas Müller</p>
                    <p className="text-neutral-600 text-sm">Vertriebsleiter, mittelständisches Unternehmen aus Bremen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-20 bg-neutral-50 overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-secondary tracking-wider uppercase mb-3">Erfolgsgeschichte</span>
            <h2 className="mb-6">Wie ein Bremer Handwerksbetrieb seine Auftragslage verdreifacht hat</h2>
            <p className="text-lg text-neutral-600">
              Eine lokale Erfolgsgeschichte: Durch intelligente Akquise-Automatisierung von Neukunden zu einem konstanten Auftragsfluss.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-teal-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-gradient-to-br from-secondary to-teal-600 p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Die Herausforderung</h3>
                <p className="text-white/90 mb-6">Ein Bremer Handwerksbetrieb mit 8 Mitarbeitern kämpfte mit stark schwankender Auftragslage und ineffizienten manuellen Akquiseprozessen.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Zeitaufwändige manuelle Akquise</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Unregelmäßiger Auftragseingang</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Keine Zeit für strategisches Wachstum</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Die Lösung</h3>
                <p className="text-neutral-700 mb-6">
                  Wir implementierten unsere KI-gestützte Akquise-Automatisierung, die kontinuierlich neue Leads identifiziert, 
                  qualifiziert und personalisiert anspricht.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Lead-Generierung</h4>
                    <p className="text-sm text-neutral-700">Automatisierte Identifikation potenzieller Kunden im Bremer Raum.</p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Personalisierte Ansprache</h4>
                    <p className="text-sm text-neutral-700">KI-generierte, individuelle Kontaktaufnahme per E-Mail und Telefon.</p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Automatisiertes Follow-up</h4>
                    <p className="text-sm text-neutral-700">Intelligente Nachverfolgung mit perfektem Timing.</p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Terminplanung</h4>
                    <p className="text-sm text-neutral-700">Automatische Vereinbarung von Beratungsterminen.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-accent mb-4">Die Ergebnisse</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">+195%</div>
                    <p className="text-sm text-neutral-700">Mehr Kundenanfragen</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">+310%</div>
                    <p className="text-sm text-neutral-700">Umsatzsteigerung</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">14h</div>
                    <p className="text-sm text-neutral-700">Zeitersparnis pro Woche</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute h-96 w-96 rounded-full bg-secondary -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-teal-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
          
          {Array.from({length: 15}).map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}>
              <PhoneIcon className="text-teal-700 opacity-10" style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
              }} />
            </div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-secondary tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-secondary" />
              Häufige Fragen
            </span>
            <h2 className="mb-6">Ihre Fragen zur KI-gestützten Akquise und Vertrieb</h2>
            <p className="text-lg text-neutral-600">
              Erfahren Sie mehr über die Möglichkeiten und praktische Umsetzung unserer intelligenten Akquise-Lösungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Ist KI-gestützte Akquise wirklich persönlich genug für B2B-Geschäfte?",
                  answer: "Moderne KI-Systeme erreichen heute ein erstaunliches Maß an Personalisierung, das in vielen Fällen von menschlich erstellten Nachrichten kaum zu unterscheiden ist. Unsere Lösungen analysieren tiefgehend die Zielunternehmen und deren Entscheider, um wirklich relevante Ansprachen zu generieren. Die Systeme berücksichtigen dabei Branche, aktuelle Herausforderungen, Firmengröße, Unternehmenskultur und sogar persönliche Hintergründe der Ansprechpartner. Das Ergebnis sind maßgeschneiderte Outreach-Kampagnen mit 2-3x höherer Antwortrate als generische Templates. Die Balance zwischen Automatisierung und authentischer Personalisierung ist jedoch für jede Branche und jeden Verkaufsprozess unterschiedlich. In einem unverbindlichen Erstgespräch analysieren wir Ihre spezifischen Anforderungen und entwickeln einen maßgeschneiderten Ansatz."
                },
                {
                  question: "Wie funktioniert die KI-basierte Lead-Qualifizierung genau?",
                  answer: "Unsere KI-Systeme bewerten potenzielle Leads anhand zahlreicher Faktoren: Firmendaten (Größe, Branche, Standort), digitale Signale (Webseitenbesuche, Content-Interaktionen), technische Indikatoren (verwendete Software, IT-Infrastruktur), wirtschaftliche Indikatoren (Wachstum, Stellenausschreibungen, Finanzierung) und Verhaltensanalysen (Reaktionen auf vorherige Kampagnen). Diese Daten werden mit Ihren historischen Verkaufserfolgen abgeglichen, um ein präzises Scoring-Modell zu erstellen, das kontinuierlich lernt und sich verbessert. Die intelligente Priorisierung ermöglicht es Ihrem Vertriebsteam, sich auf die vielversprechendsten Leads zu konzentrieren. Die Implementierung eines effektiven Lead-Scoring-Systems erfordert jedoch tiefes Verständnis Ihrer spezifischen Verkaufsprozesse. Vereinbaren Sie ein kostenloses Erstgespräch, in dem wir gemeinsam ein maßgeschneidertes Qualifizierungsmodell für Ihr Unternehmen entwickeln."
                },
                {
                  question: "Wie lange dauert es, bis wir erste Ergebnisse sehen?",
                  answer: "Die ersten messbaren Ergebnisse zeigen sich typischerweise innerhalb von 2-4 Wochen nach Implementierung unserer Lösungen. In dieser Zeit werden bereits neue Leads generiert und erste Kontakte hergestellt. Die volle Wirkung mit optimierter Conversion-Rate und effizienten Followup-Prozessen entfaltet sich nach 1-3 Monaten, wenn die KI ausreichend Daten gesammelt hat, um ihre Personalisierungs- und Timing-Algorithmen zu optimieren. Beachten Sie jedoch, dass die tatsächlichen Zeitrahmen je nach Vertriebszyklus, Branche und Komplexität Ihrer Produkte oder Dienstleistungen variieren können. Die effektive Implementierung erfordert eine sorgfältige Abstimmung auf Ihre spezifischen Geschäftsprozesse. In einem unverbindlichen Erstgespräch entwickeln wir einen realistischen Zeitplan mit konkreten Meilensteinen für Ihr Unternehmen."
                },
                {
                  question: "Welche Vertriebskanäle können durch KI automatisiert werden?",
                  answer: "Unsere KI-Lösungen können praktisch alle relevanten Vertriebskanäle automatisieren: E-Mail-Outreach mit personalisierten Sequenzen, LinkedIn und XING mit automatisierter Kontaktaufnahme und Nachverfolgung, Telefonakquise mit KI-gestützten Anrufen und intelligenten Skripten, Webformular-Follow-ups mit sofortiger Reaktion auf eingehende Anfragen, Chat-Bots für Website-Besucher sowie personalisiertes Content-Marketing. Die Systeme arbeiten dabei kanalübergreifend und koordinieren die Kommunikation für ein konsistentes Kundenerlebnis. Die Auswahl und Konfiguration der optimalen Kanäle für Ihr Unternehmen hängt jedoch von Ihrer Zielgruppe und Ihrem Verkaufsprozess ab. Die praktische Implementierung erfordert zudem eine sorgfältige Integration in Ihre bestehenden Systeme. Vereinbaren Sie ein kostenloses Erstgespräch, um gemeinsam Ihre ideale Multi-Channel-Strategie zu entwickeln."
                },
                {
                  question: "Wie integriert sich die KI-Akquise in unsere bestehenden CRM-Systeme?",
                  answer: "Unsere Lösungen bieten nahtlose Integrationen mit allen gängigen CRM-Systemen wie Salesforce, HubSpot, Pipedrive, Microsoft Dynamics und vielen weiteren. Die Implementierung erfolgt über Standard-APIs und erfordert in der Regel keine Änderungen an Ihrer bestehenden IT-Infrastruktur. Die KI synchronisiert kontinuierlich Daten in beide Richtungen: Sie zieht Informationen aus dem CRM für die Personalisierung und schreibt neue Leads, Aktivitäten und Erkenntnisse zurück. So bleibt Ihr CRM die zentrale Quelle der Wahrheit für alle Vertriebsaktivitäten. Die Integration geht über technische Aspekte hinaus und umfasst auch die Anpassung an Ihre Vertriebsprozesse. Die Praxis zeigt, dass die technische Implementierung oft komplexer ist als sie auf den ersten Blick erscheint. In einem unverbindlichen Erstgespräch analysieren wir Ihre CRM-Landschaft und entwickeln einen maßgeschneiderten Integrationsplan."
                },
                {
                  question: "Wie misst man den ROI von KI-gestützter Akquise?",
                  answer: "Der ROI unserer Akquise-Automatisierung wird anhand mehrerer Schlüsselkennzahlen gemessen: Steigerung der Anzahl qualifizierter Leads, erhöhte Konversionsraten in jeder Phase des Verkaufstrichters, verkürzte Verkaufszyklen, reduzierte Akquisekosten pro Kunde (CAC) und Zeitersparnis des Vertriebsteams. Wir implementieren umfassendes Tracking für all diese Metriken und erstellen transparente ROI-Berichte. Typischerweise sehen unsere Kunden eine Rendite von 300-500% innerhalb der ersten 6 Monate. Die Automatisierung spart nicht nur Kosten, sondern erschließt auch neue Umsatzpotenziale durch konstantere und skalierbarere Leadgenerierung. Die Definition und Messung der relevanten KPIs ist jedoch für jedes Unternehmen einzigartig. In einem kostenlosen Erstgespräch entwickeln wir ein maßgeschneidertes ROI-Modell, das Ihre spezifischen Geschäftsziele und Erfolgskriterien berücksichtigt."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-teal-100"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                      <span className="text-lg font-bold text-neutral-800">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-6 pt-0 bg-gradient-to-br from-blue-50 to-white">
                      <div className="text-neutral-700 space-y-3">
                        {faq.answer.split('. ').map((sentence, i) => {
                          // Wenn der Satz mit einem Punkt endet, ist es vermutlich ein eigenständiger Satz
                          if (sentence.trim().length > 0) {
                            return <p key={i}>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</p>;
                          }
                          return null;
                        })}
                      </div>
                      <div className="mt-4 flex items-center text-primary-dark">
                        <SparklesIcon className="h-5 w-5 mr-2" />
                        <Link href="/kontakt" className="font-medium hover:underline">
                          Jetzt unverbindliches Erstgespräch vereinbaren
                        </Link>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block p-6 bg-gradient-to-br from-secondary/10 to-white rounded-xl border border-teal-100 shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Experten stehen Ihnen für alle Fragen zu KI-gestützter Akquise zur Verfügung.
                </p>
                <Link 
                  href="/kontakt" 
                  className="btn bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full inline-flex items-center"
                >
                  Kontakt aufnehmen
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{
              height: `${10 + Math.random() * 40}px`,
              width: `${10 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3
            }}></div>
          ))}
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Steigern Sie Ihren Vertriebserfolg durch KI-Automatisierung
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihre Akquise und Ihren Vertrieb effizienter gestalten können.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-secondary hover:bg-teal-50 px-8 py-3 rounded-full shadow-lg">
                Erstgespräch vereinbaren
              </Link>
              <Link href="/leistungen" className="btn bg-transparent text-white border-2 border-white/30 hover:bg-white/10 px-8 py-3 rounded-full">
                Alle Leistungen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 