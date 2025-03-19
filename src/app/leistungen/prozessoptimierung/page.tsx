import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CogIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import { 
  SparklesIcon, 
  Cog6ToothIcon, 
  RectangleStackIcon, 
  CalendarIcon 
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Prozessoptimierung | KI-Automatisierung Bremen',
  description: 'Optimieren Sie Ihre internen Abläufe und eliminieren Sie Ineffizienzen mit KI-gestützter Prozessoptimierung. Automatisieren Sie Workflows, Qualitätskontrolle und Ressourcenplanung.',
};

export default function ProzessoptimierungPage() {
  const features = [
    {
      id: 1,
      title: 'Workflow-Automatisierung',
      description: 'KI-gesteuerte Prozessabläufe für wiederkehrende Aufgaben, die Routinetätigkeiten automatisieren und einen reibungslosen, effizienten Arbeitsablauf gewährleisten.',
      icon: <Cog6ToothIcon className="w-8 h-8 text-accent" />,
      benefits: ['Minimierung manueller Eingriffe', 'Elimination von Redundanzen', 'Beschleunigte Durchlaufzeiten']
    },
    {
      id: 2,
      title: 'Automatisierte Qualitätskontrolle',
      description: 'KI-basierte Überprüfung von Arbeitsergebnissen, die menschliche Fehler erkennt und minimiert sowie konsistente Qualitätsstandards sicherstellt.',
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-accent" />,
      benefits: ['Kontinuierliche Qualitätsüberwachung', 'Früherkennung von Fehlern', 'Dokumentierte Qualitätssicherung']
    },
    {
      id: 3,
      title: 'Intelligente Ressourcenplanung',
      description: 'Optimale Zuteilung von Zeit und Ressourcen durch KI-gestützte Analysen, die Engpässe vorhersagen und Lösungen zur Kapazitätsoptimierung vorschlagen.',
      icon: <RectangleStackIcon className="w-8 h-8 text-accent" />,
      benefits: ['Optimierte Auslastung', 'Präventives Engpass-Management', 'Effizienter Ressourceneinsatz']
    },
    {
      id: 4,
      title: 'Projektmanagement-Automatisierung',
      description: 'KI-unterstützte Projektplanung und -überwachung, die Meilensteine verfolgt, Risiken identifiziert und Projektleiter bei datenbasierten Entscheidungen unterstützt.',
      icon: <CalendarIcon className="w-8 h-8 text-accent" />,
      benefits: ['Automatisierte Fortschrittsverfolgung', 'Intelligente Terminerinnerungen', 'Proaktives Risikomanagement']
    }
  ];

  const processMetrics = [
    { id: 1, label: 'Durchlaufzeit von Prozessen', before: '100%', after: '60%', improvement: '40% schneller' },
    { id: 2, label: 'Fehlerquote', before: '8-12%', after: '1-2%', improvement: '~85% weniger Fehler' },
    { id: 3, label: 'Zeit für Routineaufgaben', before: '15h / Woche', after: '3h / Woche', improvement: '80% Zeitersparnis' },
    { id: 4, label: 'Ressourcenauslastung', before: '65%', after: '90%', improvement: '38% effizientere Nutzung' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-green-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-green-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Gear/workflow patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className="absolute rounded-full border-2 border-white" style={{
                height: `${40 + Math.random() * 40}px`,
                width: `${40 + Math.random() * 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}></div>
            ))}
            {Array.from({length: 12}).map((_, i) => (
              <div key={`line-${i}`} className="absolute bg-white" style={{
                height: '2px',
                width: `${100 + Math.random() * 150}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse mr-2"></span>
                Prozessoptimierung
              </div>
              
              <h1 className="text-white mb-6">
                <span className="gradient-text font-bold">Optimierte Prozesse</span> für maximale Effizienz
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Eliminieren Sie Ineffizienzen, automatisieren Sie wiederkehrende Aufgaben und optimieren Sie 
                Ihre internen Abläufe mit KI-gestützter Prozessoptimierung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-green-400 to-accent flex items-center justify-center">
                  <CogIcon className="w-24 h-24 text-white" />
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
            <h2 className="mb-6">Vorteile unserer KI-gestützten Prozessoptimierung</h2>
            <p className="text-lg text-neutral-600">
              Entdecken Sie, wie intelligente Prozessautomatisierung Zeit spart, Fehler minimiert und Ihre Ressourcen optimal nutzt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-green-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zeitersparnis</h3>
                <p className="text-neutral-700">6-10 Stunden pro Woche durch Automatisierung wiederkehrender Aufgaben.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-green-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <ArrowPathIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Schnellere Prozesse</h3>
                <p className="text-neutral-700">30% schnellere Projektabwicklung durch optimierte Workflows und automatisierte Arbeitsschritte.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-green-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gesteigerte Produktivität</h3>
                <p className="text-neutral-700">Steigerung der Gesamtproduktivität um 25-35% durch intelligente Prozessoptimierung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-green-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-green-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Prozessoptimierung im Detail</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Lösungen für Prozessoptimierung bieten zahlreiche Features, die Ihre internen Abläufe effizienter gestalten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-green-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-accent">{feature.title}</h3>
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
      
      {/* Process Improvement Metrics */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">Messbare Ergebnisse</span>
            <h2 className="mb-6">Der Unterschied durch KI-Prozessoptimierung</h2>
            <p className="text-lg text-neutral-600">
              Vergleichen Sie herkömmliche Prozesse mit unseren KI-optimierten Workflows und entdecken Sie das Potenzial.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg border border-green-100">
            <div className="bg-accent text-white p-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 font-bold text-lg">Prozessmetrik</div>
                <div className="text-center font-bold text-lg">Vorher</div>
                <div className="text-center font-bold text-lg">Mit KI</div>
              </div>
            </div>
            
            <div className="divide-y divide-green-100">
              {processMetrics.map((metric, index) => (
                <div key={metric.id} className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-green-50'}`}>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-2 font-medium">{metric.label}</div>
                    <div className="text-center text-neutral-700">{metric.before}</div>
                    <div className="text-center font-semibold text-accent flex flex-col items-center">
                      {metric.after}
                      <span className="text-xs text-primary mt-1">{metric.improvement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Workflow Visualization */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">Visualisierung</span>
            <h2 className="mb-6">KI-optimierte Prozessabläufe</h2>
            <p className="text-lg text-neutral-600">
              So transformieren wir Ihre Geschäftsprozesse mit KI-gestützter Prozessoptimierung.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative flex flex-col md:flex-row">
              {/* Before optimization */}
              <div className="flex-1 p-6 bg-white rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 border border-green-100">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Herkömmlicher Prozess</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">1</div>
                    <div className="flex-1 p-3 border border-neutral-200 rounded-md">
                      <p className="text-neutral-700">Manuelle Dateneingabe und -verarbeitung</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-neutral-300"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">2</div>
                    <div className="flex-1 p-3 border border-neutral-200 rounded-md">
                      <p className="text-neutral-700">Manuelle Kontrolle und Freigabe</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-neutral-300"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">3</div>
                    <div className="flex-1 p-3 border border-neutral-200 rounded-md">
                      <p className="text-neutral-700">Wartezeit für Bearbeitung</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-neutral-300"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">4</div>
                    <div className="flex-1 p-3 border border-neutral-200 rounded-md">
                      <p className="text-neutral-700">Manuelle Weiterverarbeitung</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-neutral-300"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">5</div>
                    <div className="flex-1 p-3 border border-neutral-200 rounded-md">
                      <p className="text-neutral-700">Abschluss und Archivierung</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-neutral-100 rounded-md">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-neutral-700 mr-2" />
                    <p className="text-neutral-700">Durchschnittliche Durchlaufzeit: <strong>3-5 Tage</strong></p>
                  </div>
                </div>
              </div>
              
              {/* Arrow for larger screens */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              {/* Mobile arrow */}
              <div className="md:hidden flex justify-center mb-8">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              
              {/* After optimization */}
              <div className="flex-1 p-6 bg-white rounded-lg shadow-lg border border-green-100">
                <h3 className="text-xl font-bold text-accent mb-4">KI-optimierter Prozess</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 text-accent font-bold">1</div>
                    <div className="flex-1 p-3 border border-accent/20 rounded-md bg-green-50">
                      <p className="text-neutral-700">Automatisierte Datenerfassung und -verarbeitung</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-accent/30"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 text-accent font-bold">2</div>
                    <div className="flex-1 p-3 border border-accent/20 rounded-md bg-green-50">
                      <p className="text-neutral-700">KI-gestützte Qualitätsprüfung in Echtzeit</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-accent/30"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 text-accent font-bold">3</div>
                    <div className="flex-1 p-3 border border-accent/20 rounded-md bg-green-50">
                      <p className="text-neutral-700">Automatische Weiterleitung und Bearbeitung</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-md">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 text-accent mr-2" />
                    <p className="text-neutral-700">Durchschnittliche Durchlaufzeit: <strong className="text-accent">4-6 Stunden</strong></p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <SparklesIcon className="w-5 h-5 text-accent mr-2" />
                  <p className="text-accent font-medium">Bis zu 90% schnellere Prozesse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Case / Case Study */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">Anwendungsbeispiel</span>
            <h2 className="mb-6">So optimieren wir den Rechnungsprozess eines Bremer Unternehmens</h2>
            <p className="text-lg text-neutral-600">
              Entdecken Sie, wie ein mittelständisches Unternehmen aus Bremen seine Rechnungsprozesse mit unserer KI-Lösung transformierte.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-gradient-to-br from-accent to-green-600 p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Die Herausforderung</h3>
                <p className="text-white/90 mb-6">Ein mittelständischer Dienstleister aus Bremen hatte mit ineffizienten Rechnungsprozessen zu kämpfen, die Zeit kosteten und fehleranfällig waren.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Durchlaufzeit von 5-7 Tagen pro Rechnung</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">Fehlerquote von 12% bei manueller Datenerfassung</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                    <p className="text-white/90">2 Vollzeitmitarbeiter nur für Rechnungsbearbeitung</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <h3 className="text-xl font-bold text-accent mb-4">Die Lösung</h3>
                <p className="text-neutral-700 mb-6">
                  Wir implementierten unsere KI-gestützte Prozessoptimierungslösung, die den gesamten Rechnungsprozess automatisierte – von der Erfassung bis zur Archivierung.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-accent mb-2">Automatische Datenerfassung</h4>
                    <p className="text-sm text-neutral-700">KI-gestützte Extraktion aller relevanten Informationen aus eingehenden Rechnungen.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-accent mb-2">Intelligente Validierung</h4>
                    <p className="text-sm text-neutral-700">Automatische Prüfung auf Vollständigkeit, Richtigkeit und Compliance.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-accent mb-2">Workflow-Automatisierung</h4>
                    <p className="text-sm text-neutral-700">Automatische Weiterleitung zur Genehmigung mit intelligenten Erinnerungen.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-accent mb-2">Integration</h4>
                    <p className="text-sm text-neutral-700">Nahtlose Verbindung mit bestehendem ERP-System und Buchhaltungssoftware.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">Die Ergebnisse</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">90%</div>
                    <p className="text-sm text-neutral-700">Reduzierte Bearbeitungszeit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">1%</div>
                    <p className="text-sm text-neutral-700">Neue Fehlerquote</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">37k€</div>
                    <p className="text-sm text-neutral-700">Jährliche Kosteneinsparung</p>
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
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">Nahtlose Integration</span>
            <h2 className="mb-6">Kompatibel mit Ihren bestehenden Systemen</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Lösungen für Prozessoptimierung lassen sich einfach in Ihre bestehende IT-Infrastruktur integrieren.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ERP-Systeme', 'CRM-Software', 'Projektmanagement-Tools', 'Cloud-Speicher', 'Dokumentenmanagementsysteme', 'Buchhaltungssoftware', 'Kommunikationstools', 'Zeiterfassungstools'].map((system, index) => (
              <div key={index} className="bg-white rounded-lg border border-green-100 p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-neutral-800">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute h-96 w-96 rounded-full bg-accent -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-green-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
          
          {Array.from({length: 15}).map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}>
              <CogIcon className="text-green-700 opacity-10" style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
              }} />
            </div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-accent" />
              Häufige Fragen
            </span>
            <h2 className="mb-6">Ihre Fragen zur KI-gestützten Prozessoptimierung</h2>
            <p className="text-lg text-neutral-600">
              Erfahren Sie mehr über die praktischen Aspekte und Umsetzungsmöglichkeiten unserer KI-Lösungen für effizientere Prozesse.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Wie lange dauert die Implementierung einer KI-gestützten Prozessoptimierung?",
                  answer: "Die Implementierungsdauer hängt von der Komplexität Ihrer bestehenden Prozesse und dem Umfang der Automatisierung ab. In der Regel können erste Ergebnisse bereits nach 2-4 Wochen erzielt werden, während umfassendere Transformationen 2-3 Monate in Anspruch nehmen können. Jedes Unternehmen hat jedoch einzigartige Anforderungen und Herausforderungen. In einem kostenlosen Erstgespräch analysieren wir Ihre spezifische Situation und erstellen einen realistischen Zeitplan für Ihr Unternehmen."
                },
                {
                  question: "Welche Prozesse eignen sich am besten für die KI-Automatisierung?",
                  answer: "Besonders geeignet sind repetitive, regelbasierte Prozesse mit hohem Standardisierungsgrad, wie Datenerfassung, Dokumentenverarbeitung, Genehmigungsworkflows oder Qualitätskontrollen. Aber auch komplexere Prozesse mit Entscheidungspunkten können durch moderne KI-Systeme optimiert werden. Die Identifikation der vielversprechendsten Prozesse für Ihr Unternehmen erfordert jedoch eine individuelle Analyse. Vereinbaren Sie ein unverbindliches Erstgespräch, um gemeinsam mit unseren Experten die größten Optimierungspotenziale in Ihrem Unternehmen zu identifizieren."
                },
                {
                  question: "Wie hoch sind die Kosten für eine KI-gestützte Prozessoptimierung?",
                  answer: "Die Investition variiert je nach Umfang und Komplexität der zu optimierenden Prozesse. Typischerweise amortisieren sich die Kosten bereits innerhalb von 3-6 Monaten durch die erzielten Effizienzgewinne und Kosteneinsparungen. Wir bieten flexible Modelle an, von projektbasierten Implementierungen bis hin zu monatlichen Subscription-Modellen mit kontinuierlicher Optimierung. Die tatsächlichen Kosten und der ROI für Ihr spezifisches Unternehmen lassen sich am besten in einem persönlichen Gespräch ermitteln. Nutzen Sie unser kostenloses Erstgespräch, um eine maßgeschneiderte Wirtschaftlichkeitsberechnung zu erhalten."
                },
                {
                  question: "Benötigen wir spezielle IT-Infrastruktur für die KI-Prozessoptimierung?",
                  answer: "In den meisten Fällen können wir unsere Lösungen in Ihre bestehende IT-Landschaft integrieren, ohne dass umfangreiche Neuanschaffungen notwendig sind. Unsere Systeme sind flexibel und können sowohl mit Cloud-basierten als auch mit On-Premise-Lösungen arbeiten. Die genauen Anforderungen hängen von Ihren spezifischen Prozessen und bestehenden Systemen ab. Die Praxis zeigt jedoch, dass die technische Implementierung oft komplexer ist als sie auf den ersten Blick erscheint. In einem unverbindlichen Erstgespräch prüfen wir Ihre vorhandene Infrastruktur und beraten Sie zu den optimalen Lösungsansätzen."
                },
                {
                  question: "Wie wird sichergestellt, dass die KI-optimierten Prozesse zuverlässig funktionieren?",
                  answer: "Wir implementieren mehrschichtige Qualitätssicherungsmaßnahmen, darunter automatisierte Tests, menschliche Überwachung in kritischen Phasen und kontinuierliches Monitoring. Zudem bauen wir Feedback-Schleifen ein, die eine ständige Verbesserung ermöglichen. In der Anfangsphase wird ein Parallelbetrieb gefahren, um die Ergebnisse zu validieren. Die Realität zeigt jedoch, dass jedes Unternehmen individuelle Anforderungen an Zuverlässigkeit und Kontrolle hat. Vereinbaren Sie ein kostenloses Beratungsgespräch, in dem wir gemeinsam ein maßgeschneidertes Qualitätssicherungskonzept für Ihre spezifischen Prozesse entwickeln."
                },
                {
                  question: "Wie werden unsere Mitarbeiter auf die neuen automatisierten Prozesse vorbereitet?",
                  answer: "Change Management ist ein wesentlicher Bestandteil unserer Implementierungsstrategie. Wir bieten umfassende Schulungen, detaillierte Dokumentationen und kontinuierliche Unterstützung während der Übergangsphase. Ihre Mitarbeiter werden aktiv in den Veränderungsprozess einbezogen, um Akzeptanz zu schaffen und Widerstände abzubauen. Die praktische Erfahrung zeigt jedoch, dass die Mitarbeiterakzeptanz einer der komplexesten Aspekte bei der Einführung neuer Technologien ist. In einem persönlichen Erstgespräch entwickeln wir eine auf Ihre Unternehmenskultur zugeschnittene Change-Management-Strategie, die den Erfolg Ihrer Prozessoptimierung nachhaltig sichert."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-green-100"
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
                    <div className="p-6 pt-0 bg-gradient-to-br from-green-50 to-white">
                      <div className="text-neutral-700 space-y-3">
                        {faq.answer.split('. ').map((sentence, i) => {
                          // Wenn der Satz mit einem Punkt endet, ist es vermutlich ein eigenständiger Satz
                          if (sentence.trim().length > 0) {
                            return <p key={i}>{sentence.trim() + (sentence.endsWith('.') ? '' : '.')}</p>;
                          }
                          return null;
                        })}
                      </div>
                      <div className="mt-4 flex items-center text-green-700">
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
              <div className="inline-block p-6 bg-gradient-to-br from-accent/10 to-white rounded-xl border border-green-100 shadow-md">
                <h3 className="text-xl font-bold text-accent mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Experten stehen Ihnen für alle Fragen zur Prozessoptimierung zur Verfügung.
                </p>
                <Link 
                  href="/kontakt" 
                  className="btn bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full inline-flex items-center"
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-accent to-primary">
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
              Bereit, Ihre Prozesse zu revolutionieren?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihre internen Abläufe optimieren und Effizienz steigern können.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-accent hover:bg-green-50 px-8 py-3 rounded-full shadow-lg">
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