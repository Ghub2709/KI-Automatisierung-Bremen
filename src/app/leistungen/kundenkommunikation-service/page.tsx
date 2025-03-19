import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ChatBubbleLeftRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Kundenkommunikation & Service | KI-Automatisierung Bremen',
  description: 'Steigern Sie Ihre Kundenkommunikation mit unseren KI-basierten Automatisierungslösungen. 24/7 Reaktion, Omnichannel-Integration und intelligente Chatbots für Bremer Unternehmen.',
};

export default function KundenkommunikationServicePage() {
  const useCases = [
    {
      id: 1,
      title: 'Automatisierte E-Mail-Beantwortung',
      description: 'Lassen Sie E-Mail-Anfragen automatisch kategorisieren und mit personalisierten Antworten versehen – rund um die Uhr verfügbar.',
      benefits: ['Sofortige Erstantwort zu jeder Tageszeit', 'Konsistente Kommunikation', 'Priorisierung dringender Anfragen']
    },
    {
      id: 2,
      title: 'Intelligente Chatbots',
      description: 'Integration smarter Chatbots auf Ihrer Website und Social-Media-Kanälen, die Standardfragen sofort beantworten und komplexe Anliegen an das Team weiterleiten.',
      benefits: ['24/7 Verfügbarkeit', 'Lernt kontinuierlich dazu', 'Nahtlose Übergabe an Mitarbeiter']
    },
    {
      id: 3,
      title: 'Omnichannel-Kommunikationsmanagement',
      description: 'Zentralisierung aller Kommunikationskanäle in einem intelligenten Dashboard mit KI-gestützter Priorisierung und Antwortvorschlägen.',
      benefits: ['Keine verpassten Nachrichten mehr', 'Kanalübergreifender Kontext', 'Zeitersparnis durch Vorlagen']
    },
    {
      id: 4,
      title: 'Sprach-zu-Text Konvertierung',
      description: 'Automatische Transkription von Sprachnachrichten und Anrufen mit Sentiment-Analyse und automatisierter Weiterleitung.',
      benefits: ['Bessere Dokumentation', 'Schnellere Reaktionszeit', 'Priorisierung nach Dringlichkeit']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden max-w-[100vw]">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-blue-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-blue-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Chat bubble patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 15}).map((_, i) => (
              <div key={i} className="rounded-lg border border-white/30" style={{
                position: 'absolute',
                height: `${20 + Math.random() * 30}px`,
                width: `${100 + Math.random() * 150}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                opacity: 0.1 + Math.random() * 0.1
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3 w-full">
              <div className="inline-flex flex-wrap items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 max-w-full overflow-hidden">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400 animate-pulse mr-2 flex-shrink-0"></span>
                <span className="break-all sm:break-normal">Kundenkommunikation & Service</span>
              </div>
              
              <h1 className="text-white mb-6 break-words hyphens-auto" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                Intelligente <span className="gradient-text font-bold">Kunden&shy;kommunikation</span> rund um die Uhr
              </h1>
              
              <p className="text-xl text-white/80 mb-8 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                Transformieren Sie Ihre Kunden&shy;kommunikation mit KI-gestützten Automatisierungs&shy;lösungen. 
                Bieten Sie erstklassigen Service – 24/7, ohne zusätzliches Personal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-24 h-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Vorteile unserer KI-gestützten Kundenkommunikation</h2>
            <p className="text-lg text-neutral-600">
              Erleben Sie eine neue Dimension der Kundenkommunikation – effizienter, konsistenter und rund um die Uhr verfügbar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-blue-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zeitersparnis</h3>
                <p className="text-neutral-700">5-10 Stunden pro Woche, die Sie für wichtigere Aufgaben nutzen können.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-blue-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kundenzufriedenheit</h3>
                <p className="text-neutral-700">Steigerung der Kundenzufriedenheit durch sofortige Reaktion auf Anfragen.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-blue-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <SparklesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Qualitätssteigerung</h3>
                <p className="text-neutral-700">Reaktionszeit von Stunden auf Sekunden reduziert und konstante Servicequalität.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-blue-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-blue-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Funktionen und Möglichkeiten</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Lösungen für Kundenkommunikation bieten zahlreiche Features, die Ihren Kundenservice auf ein neues Level heben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-blue-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{useCase.title}</h3>
                  <p className="text-neutral-700 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, index) => (
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
      
      {/* Detailed Service Description */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="max-w-xl">
                <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">24/7 Service</span>
                <h2 className="mb-6">Nie wieder verpasste Kundenanfragen</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Unsere intelligenten KI-Systeme kümmern sich rund um die Uhr um Ihre Kundenkommunikation – 
                  egal ob per E-Mail, Chat, Social Media oder Telefon. So geht keine Anfrage mehr verloren.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <span className="text-primary font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Intelligente Erstreaktion</h4>
                      <p className="text-neutral-700">Automatische Beantwortung von Standardfragen und Weiterleitung komplexer Anfragen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <span className="text-primary font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Lernfähiges System</h4>
                      <p className="text-neutral-700">Die KI lernt kontinuierlich aus jeder Interaktion und verbessert sich stetig.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <span className="text-primary font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Multikanalfähigkeit</h4>
                      <p className="text-neutral-700">Eine zentrale Lösung für alle Kommunikationskanäle mit einheitlicher Kundenerfahrung.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/kontakt" className="btn-primary">
                  Unverbindlich beraten lassen
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* AI Customer Service Illustration */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 shadow-xl">
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative">
                  <div className="py-4 px-6 bg-white rounded-lg shadow-md mb-6 max-w-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm font-semibold">KI-Assistent</div>
                    </div>
                    <p className="text-neutral-800">Guten Tag! Wie kann ich Ihnen heute weiterhelfen?</p>
                  </div>
                  
                  <div className="py-4 px-6 bg-primary/5 rounded-lg shadow-md mb-6 ml-auto max-w-sm">
                    <p className="text-neutral-800">Ich interessiere mich für Ihre Dienstleistungen. Welche Pakete bieten Sie an?</p>
                  </div>
                  
                  <div className="py-4 px-6 bg-white rounded-lg shadow-md max-w-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-sm font-semibold">KI-Assistent</div>
                    </div>
                    <p className="text-neutral-800">Wir bieten ein Komplettpaket für 500€ pro Monat mit unbegrenzter Nutzung aller KI-Automatisierungen. Möchten Sie mehr Details erfahren?</p>
                  </div>
                  
                  <div className="absolute -right-4 -bottom-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Nahtlose Integration</span>
            <h2 className="mb-6">Kompatibel mit Ihren bestehenden Systemen</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Lösungen für Kundenkommunikation lassen sich einfach in Ihre bestehende Infrastruktur integrieren.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['E-Mail-Systeme', 'Website', 'CRM-Software', 'Social Media', 'Telefonsysteme', 'Chat-Tools', 'Ticketing-Systeme', 'Messenger-Dienste'].map((system, index) => (
              <div key={index} className="bg-white rounded-lg border border-blue-100 p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-neutral-800">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Beispielsystem */}
      <section className="py-20 bg-neutral-50 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute h-96 w-96 bg-blue-200 rounded-full blur-3xl -bottom-20 -right-20"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-700 p-8 text-white">
                <h3 className="text-xl font-bold mb-4">KI-Dashboard für Kundenkommunikation</h3>
                <p className="text-white/90 mb-6">
                  Unser zentrales Dashboard für alle Kundenanfragen vereint sämtliche Kommunikationskanäle und unterstützt Sie mit KI-Empfehlungen.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Zentrale Verwaltung aller Kanäle</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Automatische Kategorisierung</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">KI-unterstützte Antwortvorschläge</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Intelligente Priorisierung</p>
                  </div>
                </div>
                
                <Link href="/kontakt" className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-full">
                  Demo vereinbaren
                </Link>
              </div>
              
              <div className="lg:col-span-3 p-4 md:p-8">
                <div className="h-full flex items-center">
                  <div className="w-full bg-blue-50 rounded-lg p-4 border border-blue-100 shadow-sm">
                    <div className="mb-4 flex justify-between items-center pb-3 border-b border-blue-100">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm text-neutral-600">Kommunikations-Dashboard</span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary">E-Mail</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary">Chat</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary">Social</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-4 bg-white p-3 rounded shadow-sm border border-blue-50">
                        <div className="text-xs text-neutral-500 mb-1">Eingang</div>
                        <div className="text-sm font-medium">3 neue Anfragen</div>
                        <div className="mt-2 text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block">
                          Automatisch beantwortet: 2
                        </div>
                      </div>
                      
                      <div className="col-span-4 bg-white p-3 rounded shadow-sm border border-blue-50">
                        <div className="text-xs text-neutral-500 mb-1">In Bearbeitung</div>
                        <div className="text-sm font-medium">1 Anfrage</div>
                        <div className="mt-2 text-xs px-2 py-1 rounded-full bg-blue-100 text-primary inline-block">
                          KI-Vorschlag verfügbar
                        </div>
                      </div>
                      
                      <div className="col-span-4 bg-white p-3 rounded shadow-sm border border-blue-50">
                        <div className="text-xs text-neutral-500 mb-1">Erledigt</div>
                        <div className="text-sm font-medium">27 heute</div>
                        <div className="mt-2 text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-800 inline-block">
                          Ø Antwortzeit: 3 Min
                        </div>
                      </div>
                      
                      <div className="col-span-12 mt-3 bg-white p-3 rounded shadow-sm border border-blue-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                            <span className="text-sm font-medium">Priorität: Hoch</span>
                          </div>
                          <span className="text-xs text-neutral-500">Vor 5 Min</span>
                        </div>
                        <p className="text-sm mb-2">Anfrage zur Produktlieferung #12345</p>
                        <div className="text-xs bg-blue-50 p-2 rounded text-primary mb-2">
                          <span className="font-medium">KI-Empfehlung:</span> Versandbestätigung senden und Tracking-Nummer mitteilen.
                        </div>
                        <div className="flex justify-end">
                          <button className="text-xs px-3 py-1 bg-primary text-white rounded-full">Empfehlung anwenden</button>
                        </div>
                      </div>
                    </div>
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
          <div className="absolute h-96 w-96 rounded-full bg-primary -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-blue-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
          
          {Array.from({length: 15}).map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}>
              <ChatBubbleLeftRightIcon className="text-blue-700 opacity-10" style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
              }} />
            </div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-primary" />
              Häufige Fragen
            </span>
            <h2 className="mb-6">Ihre Fragen zur KI-gestützten Kundenkommunikation</h2>
            <p className="text-lg text-neutral-600">
              Entdecken Sie, wie unsere intelligenten Lösungen Ihre Kundenkommunikation revolutionieren können.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Kann KI wirklich menschliche Kundenkommunikation ersetzen?",
                  answer: "KI ersetzt nicht die menschliche Kommunikation, sondern ergänzt und verstärkt sie. Unsere Lösungen übernehmen Routineanfragen und einfache Interaktionen, wodurch Ihr Team mehr Zeit für komplexe und emotionale Kundenanliegen hat. Die Technologie übernimmt die repetitiven Aufgaben, während Ihre Mitarbeiter sich auf wertschöpfende Gespräche konzentrieren können. So entsteht eine perfekte Synergie zwischen KI-Effizienz und menschlicher Empathie. Die optimale Balance zwischen Automatisierung und persönlichem Service ist jedoch für jedes Unternehmen einzigartig. In einem kostenlosen Erstgespräch entwickeln wir gemeinsam die ideale Strategie für Ihre spezifischen Anforderungen."
                },
                {
                  question: "Wie lange dauert die Integration in unsere bestehenden Kommunikationskanäle?",
                  answer: "Die Implementierungsdauer variiert je nach Anzahl und Komplexität Ihrer Kommunikationskanäle. Typischerweise können erste Kanäle bereits innerhalb von 1-2 Wochen integriert werden, während eine vollständige Omnichannel-Integration 4-6 Wochen in Anspruch nehmen kann. Wir arbeiten mit den gängigsten CRM- und Kommunikationsplattformen und bieten fertige Integrationen für viele Systeme an. Die Praxis zeigt jedoch, dass jedes Unternehmen einzigartige Anforderungen und technische Voraussetzungen hat. Vereinbaren Sie ein unverbindliches Erstgespräch, in dem wir Ihre bestehende Infrastruktur analysieren und einen maßgeschneiderten Implementierungsplan erstellen."
                },
                {
                  question: "Wie werden Datenschutz und Vertraulichkeit bei der KI-Kommunikation gewährleistet?",
                  answer: "Datenschutz hat für uns höchste Priorität. Unsere Lösungen sind vollständig DSGVO-konform und werden auf Servern in Deutschland gehostet. Wir implementieren Verschlüsselung auf allen Ebenen und gewährleisten, dass sensible Kundendaten niemals ohne entsprechende Genehmigungen verarbeitet werden. Zudem bieten wir granulare Zugriffskontrollen und umfassende Audit-Trails für alle Interaktionen. Die Umsetzung effektiver Datenschutzmaßnahmen erfordert jedoch ein tiefes Verständnis Ihrer spezifischen Geschäftsprozesse und Datenflüsse. In einem persönlichen Erstgespräch entwickeln wir ein maßgeschneidertes Datenschutzkonzept, das sowohl rechtliche Anforderungen erfüllt als auch das Vertrauen Ihrer Kunden sichert."
                },
                {
                  question: "Welche Sprachen und Kommunikationskanäle werden unterstützt?",
                  answer: "Unsere KI-Lösungen unterstützen über 40 Sprachen und können auf praktisch allen relevanten Kommunikationskanälen eingesetzt werden, darunter E-Mail, Live-Chat, WhatsApp, Messenger, Instagram, Facebook, Twitter/X, Telefonie, SMS und branchenspezifische Plattformen. Die Spracherkennung und -verarbeitung erreicht dabei in den gängigsten Geschäftssprachen nahezu menschliches Niveau. Jeder Kommunikationskanal hat jedoch seine eigenen Besonderheiten und Anforderungen. Die erfolgreiche Integration aller Kanäle in eine nahtlose Omnichannel-Erfahrung erfordert sorgfältige Planung und Anpassung. In einem kostenlosen Beratungsgespräch analysieren wir gemeinsam Ihre Kommunikationsanforderungen und entwickeln eine optimale Kanalstrategie."
                },
                {
                  question: "Wie lässt sich der ROI der KI-Kundenkommunikation messen?",
                  answer: "Der ROI unserer Lösungen wird durch mehrere Schlüsselmetriken erfasst: Reduzierte Antwortzeiten, erhöhte Kundenzufriedenheit (CSAT/NPS), gesteigerte Effizienz des Serviceteams, verringerte Personalkosten und höhere Conversion-Raten durch schnelle Reaktionen. Typischerweise sehen unsere Kunden eine Effizienzsteigerung von 30-50% und eine Reduzierung der Antwortzeiten um bis zu 90%. Wir implementieren umfassende Analysetools, die diese Metriken transparent machen. Die Realität zeigt jedoch, dass die Definition relevanter KPIs und deren Messung für jedes Unternehmen einzigartig ist. In einem unverbindlichen Erstgespräch entwickeln wir ein maßgeschneidertes ROI-Modell, das Ihre spezifischen Geschäftsziele und Erfolgskriterien berücksichtigt."
                },
                {
                  question: "Wie viel Training benötigt die KI, um unsere Produkte und Services zu verstehen?",
                  answer: "Die Initial-Trainingsphase dauert typischerweise 2-4 Wochen, abhängig vom Umfang Ihrer Produkte und Services. Wir nutzen bestehende Dokumentationen, FAQs, Produktbeschreibungen und historische Kundeninteraktionen, um die KI mit Ihrem spezifischen Wissen anzureichern. Nach der Implementierung lernt das System kontinuierlich aus neuen Interaktionen und verbessert sich stetig. Dies ist jedoch ein kontinuierlicher Prozess - während die KI schnell grundlegende Fragen beantworten kann, erfordert die Abdeckung komplexerer Szenarien mehr Zeit und Feinabstimmung. Die Implementierung eines effektiven Trainingsplans erfordert tiefes Verständnis Ihrer Geschäftsprozesse. Vereinbaren Sie ein kostenloses Erstgespräch, um einen maßgeschneiderten Trainingsplan für Ihre KI-Kundenservice-Lösung zu entwickeln."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-blue-100"
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
              <div className="inline-block p-6 bg-gradient-to-br from-primary/10 to-white rounded-xl border border-blue-100 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Experten stehen Ihnen für alle Fragen zur KI-gestützten Kundenkommunikation zur Verfügung.
                </p>
                <Link 
                  href="/kontakt" 
                  className="btn bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full inline-flex items-center"
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
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
              Bereit, Ihre Kundenkommunikation zu revolutionieren?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihren Kundenservice auf ein neues Level heben können.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-full shadow-lg">
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