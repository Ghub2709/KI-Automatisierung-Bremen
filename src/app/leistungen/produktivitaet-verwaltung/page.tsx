import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline';
import { 
  SparklesIcon,
  DocumentDuplicateIcon, 
  InboxIcon, 
  CalendarDaysIcon 
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Produktivität & Verwaltung | KI-Automatisierung Bremen',
  description: 'Automatisieren Sie administrative Aufgaben mit KI-gestützten Lösungen für E-Mail-Management, Rechnungsstellung, Dokumentenverarbeitung und Terminplanung.',
};

export default function ProduktivitaetVerwaltungPage() {
  const features = [
    {
      id: 1,
      title: 'E-Mail-Management',
      description: 'Automatische Kategorisierung, Zusammenfassung und Beantwortung von E-Mails nach Priorität und Thema.',
      icon: <InboxIcon className="w-8 h-8 text-purple-500" />,
      benefits: ['90% weniger Zeitaufwand für E-Mail-Bearbeitung', 'Keine übersehenen wichtigen Nachrichten', 'Automatische Prioritätensetzung']
    },
    {
      id: 2,
      title: 'Rechnungsmanagement',
      description: 'Automatische Erstellung, Versand und Verfolgung von Rechnungen mit Integration in Ihr Buchhaltungssystem.',
      icon: <DocumentDuplicateIcon className="w-8 h-8 text-purple-500" />,
      benefits: ['Pünktliche Rechnungsstellung', 'Automatische Mahnungen', 'Verbesserte Zahlungsmoral']
    },
    {
      id: 3,
      title: 'Dokumentenverarbeitung',
      description: 'Automatisches Auslesen, Kategorisieren und Archivieren von Dokumenten mit intelligenter Datenextraktion.',
      icon: <DocumentTextIcon className="w-8 h-8 text-purple-500" />,
      benefits: ['Sofortige Datenverfügbarkeit', 'Fehlerfreie Dokumentenverarbeitung', 'Nahtlose Systemintegration']
    },
    {
      id: 4,
      title: 'Intelligente Terminplanung',
      description: 'KI-gestützte Koordination, Erinnerungen und Optimierung Ihrer Termine und Meetings.',
      icon: <CalendarDaysIcon className="w-8 h-8 text-purple-500" />,
      benefits: ['Optimierte Zeitplanung', 'Keine verpassten Termine', 'Reduzierung unnötiger Meetings']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700 to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-purple-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-purple-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Document pattern suggestion */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 15}).map((_, i) => (
              <div key={i} className="absolute bg-white rounded-md" style={{
                height: `${30 + Math.random() * 30}px`,
                width: `${70 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-400 animate-pulse mr-2"></span>
                Produktivität & Verwaltung
              </div>
              
              <h1 className="text-white mb-6">
                <span className="gradient-text font-bold">Administrative Automatisierung</span> für mehr wertschöpfende Zeit
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Reduzieren Sie den Verwaltungsaufwand und gewinnen Sie wertvolle Zeit für Ihr Kerngeschäft 
                durch intelligente KI-Lösungen für Produktivität und Verwaltung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <DocumentTextIcon className="w-24 h-24 text-white" />
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
            <h2 className="mb-6">Vorteile unserer KI-gestützten Verwaltungslösungen</h2>
            <p className="text-lg text-neutral-600">
              Unsere Automatisierungslösungen für administrative Aufgaben steigern Ihre Effizienz und reduzieren Fehler erheblich.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-purple-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zeitersparnis</h3>
                <p className="text-neutral-700">8-12 Stunden pro Woche, die Sie für strategisch wichtigere Aufgaben einsetzen können.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-purple-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fehlerreduzierung</h3>
                <p className="text-neutral-700">Reduzierung von Fehlern um bis zu 90% durch standardisierte, automatisierte Prozesse.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-purple-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Skalierbarkeit</h3>
                <p className="text-neutral-700">Bewältigung steigender Arbeitslasten ohne zusätzliches Personal oder Überstunden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features Grid Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-purple-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-purple-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-purple-600 tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Verwaltungsautomatisierung im Detail</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-gestützten Verwaltungslösungen automatisieren repetitive Aufgaben und optimieren Ihre administrativen Prozesse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-purple-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-purple-600">{feature.title}</h3>
                  </div>
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
      
      {/* Use Case Example Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-purple-600 tracking-wider uppercase mb-3">Praxisbeispiel</span>
            <h2 className="mb-6">Automatisierte Dokumentenverarbeitung</h2>
            <p className="text-lg text-neutral-600">
              Sehen Sie, wie unsere KI-Lösung eingehende Dokumente verarbeitet, wichtige Informationen extrahiert und in Ihre Systeme integriert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="max-w-xl">
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="text-3xl font-bold text-purple-600 mr-4">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Dokumentenerfassung</h4>
                        <p className="text-neutral-700">Die KI scannt eingehende Dokumente aus verschiedenen Quellen (E-Mail, Scanner, Upload) und beginnt mit der Analyse.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="text-3xl font-bold text-purple-600 mr-4">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Datenextraktion</h4>
                        <p className="text-neutral-700">Relevante Informationen wie Datum, Beträge, Kontaktdaten und Schlüsselbegriffe werden automatisch erkannt und extrahiert.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="text-3xl font-bold text-purple-600 mr-4">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Klassifizierung & Routing</h4>
                        <p className="text-neutral-700">Das Dokument wird automatisch kategorisiert und an die entsprechende Abteilung oder in das richtige System weitergeleitet.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent rounded-lg p-6 border-l-4 border-accent/70 text-white">
                    <div className="flex items-start">
                      <div className="text-3xl font-bold text-white mr-4">4</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Integration & Aktion</h4>
                        <p className="text-white/90">Die extrahierten Daten werden in Ihre Systeme integriert und lösen bei Bedarf automatische Folgeaktionen aus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-white p-6">
                <div className="absolute top-0 right-0 h-32 w-32 bg-purple-100/50 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-purple-100/50 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative">
                  {/* Document processing visualization */}
                  <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative z-20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-neutral-800">Eingehende Rechnung</div>
                      <div className="text-sm text-purple-500">Gerade eingegangen</div>
                    </div>
                    <div className="p-3 border border-dashed border-neutral-300 rounded bg-neutral-50 flex justify-center items-center h-32">
                      <DocumentTextIcon className="h-12 w-12 text-neutral-400" />
                    </div>
                  </div>
                  
                  {/* Processing arrows */}
                  <div className="flex justify-center my-3">
                    <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  {/* Processed results */}
                  <div className="bg-white rounded-lg shadow-md p-4 relative z-20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-neutral-800">Extrahierte Daten</div>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
                        <div className="text-sm text-accent">Verarbeitet</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm p-2 bg-neutral-50 rounded">
                        <span className="font-medium text-neutral-600">Rechnungsnummer:</span>
                        <span className="text-neutral-800">RE-2023-4872</span>
                      </div>
                      <div className="flex justify-between text-sm p-2 bg-neutral-50 rounded">
                        <span className="font-medium text-neutral-600">Datum:</span>
                        <span className="text-neutral-800">15.03.2023</span>
                      </div>
                      <div className="flex justify-between text-sm p-2 bg-neutral-50 rounded">
                        <span className="font-medium text-neutral-600">Betrag:</span>
                        <span className="text-neutral-800">€1.240,50</span>
                      </div>
                      <div className="flex justify-between text-sm p-2 bg-neutral-50 rounded">
                        <span className="font-medium text-neutral-600">Lieferant:</span>
                        <span className="text-neutral-800">TechSolutions GmbH</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI indicator */}
                  <div className="absolute -right-2 -bottom-2 z-30">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                      <SparklesIcon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ROI Calculator Section */}
      <section className="py-20 bg-purple-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-purple-600 to-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ihr Einsparpotenzial</h3>
                <p className="mb-8 text-white/90">
                  Unsere KI-Lösungen für Produktivität und Verwaltung können Ihrem Unternehmen erhebliche Einsparungen und Effizienzsteigerungen bringen:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Reduzierung administrativer Arbeitszeit um bis zu 70%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Senkung der Fehlerquote und damit verbundener Kosten um 90%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Beschleunigung von Durchlaufzeiten um das 5-fache</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">ROI bereits nach 2-3 Monaten</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-purple-600">Beispielrechnung für ein kleines Unternehmen</h3>
                
                <div className="space-y-4">
                  <div className="p-3 border border-purple-100 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Durchschnittliche Verwaltungszeit pro Woche:</span>
                      <span className="font-bold text-purple-600">20 Stunden</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-purple-100 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Stundensatz (intern):</span>
                      <span className="font-bold text-purple-600">40€</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-purple-100 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Wöchentliche Kosten ohne Automatisierung:</span>
                      <span className="font-bold text-purple-600">800€</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-purple-100 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Zeitersparnis durch KI-Automatisierung:</span>
                      <span className="font-bold text-purple-600">70%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monatliche Einsparung:</span>
                      <span className="font-bold text-xl text-purple-600">2.240€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Automation Tools Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/automation-tools.svg" alt="KI-Automatisierung Werkzeuge" className="max-w-full h-auto" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="max-w-xl">
                <span className="inline-block text-sm font-semibold text-primary-dark tracking-wider uppercase mb-3">Unsere Werkzeuge</span>
                <h2 className="mb-6">Die passenden Tools für Ihre Verwaltungsaufgaben</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Unsere Produktivitätslösungen basieren auf modernsten KI-Modellen und lassen sich nahtlos in Ihre bestehenden 
                  Workflows integrieren. Wir nutzen ausschließlich sichere, DSGVO-konforme Technologien.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-dark/10 flex items-center justify-center">
                      <DocumentTextIcon className="w-5 h-5 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Dokumentverarbeitung</h3>
                      <p className="text-neutral-700">OCR und KI-Analyse für automatische Datenextraktion aus allen Dokumenttypen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-dark/10 flex items-center justify-center">
                      <EnvelopeIcon className="w-5 h-5 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">E-Mail-Intelligenz</h3>
                      <p className="text-neutral-700">Automatische Kategorisierung, Priorisierung und Beantwortung von E-Mails.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-dark/10 flex items-center justify-center">
                      <CalculatorIcon className="w-5 h-5 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Finanzassistenz</h3>
                      <p className="text-neutral-700">Automatisierte Rechnungsstellung, Mahnwesen und Finanzreporting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute h-96 w-96 rounded-full bg-primary-dark -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-indigo-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
          
          {Array.from({length: 15}).map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}>
              <DocumentTextIcon className="text-indigo-700 opacity-10" style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
              }} />
            </div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary-dark tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-primary-dark" />
              Häufige Fragen
            </span>
            <h2 className="mb-6">Ihre Fragen zur KI-gestützten Produktivität und Verwaltung</h2>
            <p className="text-lg text-neutral-600">
              Erfahren Sie mehr über die praktischen Aspekte und Implementierung unserer administrativen KI-Lösungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Welche Verwaltungsaufgaben lassen sich am besten durch KI automatisieren?",
                  answer: "Die effizientesten Automatisierungsmöglichkeiten liegen in Bereichen mit repetitiven, regelbasierten Aufgaben: E-Mail-Management (Sortierung, Priorisierung, Standardantworten), Dokumentenverarbeitung (Datenextraktion aus Rechnungen, Verträgen, Formularen), Terminplanung und Kalenderoptimierung, Rechnungsstellung und Mahnwesen, Reisekostenabrechnung, Dateneingabe und -synchronisierung zwischen Systemen sowie regelmäßige Berichterstattung und Datenvisualisierung. Der Automatisierungsgrad variiert dabei je nach Komplexität und Variabilität der Aufgaben. Die optimale Kombination von zu automatisierenden Aufgaben ist jedoch für jedes Unternehmen einzigartig. In einem unverbindlichen Erstgespräch analysieren wir Ihre administrativen Prozesse und identifizieren die vielversprechendsten Bereiche für eine KI-Automatisierung in Ihrem Betrieb."
                },
                {
                  question: "Wie sicher ist die KI-gestützte Verarbeitung sensibler Geschäftsdokumente?",
                  answer: "Datensicherheit und Vertraulichkeit haben bei unseren Lösungen höchste Priorität. Wir setzen auf mehrschichtige Sicherheitsmaßnahmen: Alle Daten werden Ende-zu-Ende verschlüsselt, sowohl bei der Übertragung als auch im Ruhezustand. Unsere Systeme sind DSGVO-konform und werden ausschließlich auf deutschen oder EU-Servern gehostet. Wir implementieren strenge Zugriffskontrollen mit Multi-Faktor-Authentifizierung und detaillierten Audit-Trails. Für besonders sensible Dokumente bieten wir On-Premise-Lösungen an, bei denen alle Daten ausschließlich in Ihrer IT-Infrastruktur verbleiben. Die praktische Implementierung robuster Sicherheitsmaßnahmen erfordert jedoch ein tiefes Verständnis Ihrer spezifischen Anforderungen. In einem kostenlosen Erstgespräch entwickeln wir ein maßgeschneidertes Sicherheitskonzept für Ihre administrativen Prozesse."
                },
                {
                  question: "Wie integrieren sich Ihre KI-Lösungen in unsere bestehenden Systeme wie ERP oder CRM?",
                  answer: "Unsere Lösungen wurden für nahtlose Integrationen konzipiert und unterstützen alle gängigen ERP- und CRM-Systeme wie SAP, Microsoft Dynamics, Salesforce, Oracle, HubSpot und viele weitere. Wir bieten standardisierte Konnektoren für über 200 Businessanwendungen sowie flexible API-Schnittstellen für kundenspezifische Systeme. Die Integration erfolgt typischerweise ohne Eingriffe in Ihre bestehende IT-Infrastruktur und ermöglicht bidirektionalen Datenaustausch in Echtzeit. Alle Automatisierungen arbeiten dabei synchron mit Ihren primären Systemen. Die technische Integration ist jedoch nur ein Teil der Aufgabe - die sinnvolle Einbettung in Ihre Geschäftsprozesse erfordert sorgfältige Planung. In einem unverbindlichen Erstgespräch analysieren wir Ihre Systemlandschaft und entwickeln einen maßgeschneiderten Integrationsplan für Ihre spezifischen Anforderungen."
                },
                {
                  question: "Welche Kosten und ROI können wir bei der Automatisierung administrativer Aufgaben erwarten?",
                  answer: "Die Investition in unsere Produktivitätslösungen ist skalierbar und richtet sich nach dem Umfang der zu automatisierenden Prozesse. Typischerweise liegen die monatlichen Kosten zwischen 300€ für kleine Unternehmen und 2.500€ für umfassendere Implementierungen. Der ROI manifestiert sich in mehreren Dimensionen: Direkte Kosteneinsparungen durch Reduktion des manuellen Aufwands (typischerweise 8-12 Stunden pro Woche pro Mitarbeiter), höhere Prozessqualität durch Minimierung menschlicher Fehler (Reduktion um bis zu 90%), schnellere Durchlaufzeiten (60-80% Zeitersparnis bei Dokumentenverarbeitung) und strategische Vorteile durch Freisetzung von Mitarbeiterressourcen für wertschöpfende Tätigkeiten. Die tatsächlichen Einsparungen hängen von Ihren spezifischen Prozessen ab. In einem persönlichen Erstgespräch erstellen wir eine maßgeschneiderte ROI-Kalkulation basierend auf Ihren konkreten Geschäftsprozessen."
                },
                {
                  question: "Wie lange dauert die Implementierung und Schulung für KI-Produktivitätslösungen?",
                  answer: "Die Implementierungsdauer variiert je nach Umfang und Komplexität der zu automatisierenden Prozesse. Typischerweise können einfache E-Mail- oder Dokumentenverarbeitungslösungen innerhalb von 2-3 Wochen produktiv sein. Umfassendere Automatisierungen mit Integration in mehrere Systeme benötigen 4-8 Wochen. Wir verfolgen einen agilen Ansatz mit schnellen Iterationen, sodass Sie bereits frühzeitig erste Ergebnisse sehen. Die Schulung erfolgt parallel zur Implementierung und umfasst sowohl technische Einweisungen als auch Prozessanleitungen. Der tatsächliche Zeitplan hängt jedoch stark von Ihren spezifischen Anforderungen und der Komplexität Ihrer bestehenden Systeme ab. In einem kostenlosen Erstgespräch analysieren wir Ihre aktuellen Prozesse und erstellen einen realistischen Projektplan mit konkreten Meilensteinen."
                },
                {
                  question: "Wie gehen wir mit Ausnahmen und Sonderfällen in automatisierten Prozessen um?",
                  answer: "Unsere KI-Systeme sind darauf ausgelegt, Muster zu erkennen und zwischen Routine- und Ausnahmefällen zu unterscheiden. Für den Umgang mit Ausnahmen implementieren wir einen mehrstufigen Ansatz: Die KI erkennt zunächst, wenn ein Fall nicht den Standardkriterien entspricht. Basierend auf Konfidenzwerten werden klare Ausnahmen automatisch an verantwortliche Mitarbeiter eskaliert, während Grenzfälle mit Lösungsvorschlägen zur Überprüfung vorgelegt werden. Das System lernt kontinuierlich aus menschlichen Entscheidungen und verbessert so seine Fähigkeit, auch komplexere Fälle korrekt zu verarbeiten. Mit zunehmender Nutzungsdauer sinkt der Anteil der Ausnahmen typischerweise um 30-50%. Die effektive Behandlung von Ausnahmen erfordert jedoch ein tiefes Verständnis Ihrer geschäftlichen Anforderungen. In einem unverbindlichen Erstgespräch entwickeln wir ein maßgeschneidertes Ausnahmemanagement für Ihre spezifischen Prozesse."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-indigo-100"
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
                    <div className="p-6 pt-0 bg-gradient-to-br from-indigo-50 to-white">
                      <div className="text-neutral-700 space-y-3">
                        {faq.answer.split('. ').map((sentence, i) => {
                          // Wenn der Satz mit einem Punkt endet, ist es vermutlich ein eigenständiger Satz
                          if (sentence.trim().length > 0) {
                            return <p key={i}>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</p>;
                          }
                          return null;
                        })}
                      </div>
                      <div className="mt-4 flex items-center text-indigo-600">
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
              <div className="inline-block p-6 bg-gradient-to-br from-primary-dark/10 to-white rounded-xl border border-indigo-100 shadow-md">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Experten stehen Ihnen für alle Fragen zu administrativer KI-Automatisierung zur Verfügung.
                </p>
                <Link 
                  href="/kontakt" 
                  className="btn bg-primary-dark hover:bg-primary-dark/90 text-white px-6 py-2 rounded-full inline-flex items-center"
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-purple-600 to-primary">
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
              Befreien Sie sich von administrativer Belastung
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihre administrativen Prozesse optimieren und automatisieren können.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full shadow-lg">
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