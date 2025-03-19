import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { 
  SparklesIcon,
  ChartBarIcon, 
  UserGroupIcon, 
  ClockIcon 
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Strategische Geschäftsentwicklung | KI-Automatisierung Bremen',
  description: 'Treffen Sie datenbasierte Entscheidungen und identifizieren Sie neue Geschäftschancen mit KI-gestützter strategischer Geschäftsentwicklung.',
};

export default function StrategischeGeschaeftsentwicklungPage() {
  const features = [
    {
      id: 1,
      title: 'Automatisierte Wettbewerbsanalyse',
      description: 'Kontinuierliches Monitoring von Mitbewerbern, Marktentwicklungen und Identifikation von Marktlücken durch KI-gestützte Datenanalyse.',
      icon: <ChartBarIcon className="w-8 h-8 text-amber-500" />,
      benefits: ['Frühzeitige Erkennung von Marktveränderungen', 'Identifikation von Wettbewerbsvorteilen', 'Datenbasierte Strategieentwicklung']
    },
    {
      id: 2,
      title: 'Vorausschauendes Kundenservice-Management',
      description: 'Proaktive Antizipation von Kundenanliegen und -bedürfnissen durch prädiktive Analysen und Verhaltensmuster.',
      icon: <UserGroupIcon className="w-8 h-8 text-amber-500" />,
      benefits: ['Höhere Kundenzufriedenheit', 'Reduzierung von Kundenabwanderung', 'Stärkere Kundenbindung']
    },
    {
      id: 3,
      title: 'Echtzeit-Verfügbarkeitsmanagement',
      description: 'KI-basierte Kapazitätssteuerung und optimale Ressourcenallokation für maximale Effizienz und Kundenzufriedenheit.',
      icon: <ClockIcon className="w-8 h-8 text-amber-500" />,
      benefits: ['Optimale Auslastung', 'Vermeidung von Engpässen', 'Erhöhung der Profitabilität']
    },
    {
      id: 4,
      title: 'Automatisierte Trendanalyse',
      description: 'KI-gestützte Erkennung und Analyse von Markttrends und neuen Geschäftsmöglichkeiten für strategische Weiterentwicklung.',
      icon: <LightBulbIcon className="w-8 h-8 text-amber-500" />,
      benefits: ['Frühzeitige Identifikation neuer Chancen', 'Datenbasierte Innovationsstrategie', 'Zukunftssichere Geschäftsentwicklung']
    }
  ];

  const businessInsights = [
    { id: 1, label: 'Durchschnittliche Marktentwicklung', value: '2-3%', aiValue: '8-12%', improvement: '+300%' },
    { id: 2, label: 'Reaktionszeit auf Marktveränderungen', value: '6-12 Monate', aiValue: '2-4 Wochen', improvement: '6-12x schneller' },
    { id: 3, label: 'Genauigkeit strategischer Prognosen', value: '40-60%', aiValue: '75-85%', improvement: '+60%' },
    { id: 4, label: 'Neue Geschäftsmöglichkeiten pro Jahr', value: '1-2', aiValue: '4-6', improvement: '+250%' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/90 via-amber-700 to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-amber-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-amber-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Chart/business pattern suggestion */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 10}).map((_, i) => (
              <div key={i} className="absolute bg-white" style={{
                height: '2px',
                width: `${100 + Math.random() * 150}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}></div>
            ))}
            {Array.from({length: 5}).map((_, i) => (
              <div key={`bar-${i}`} className="absolute bg-white" style={{
                height: `${20 + Math.random() * 60}px`,
                width: '10px',
                bottom: '20%',
                left: `${20 + i * 30}%`,
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-amber-400 animate-pulse mr-2"></span>
                Strategische Geschäftsentwicklung
              </div>
              
              <h1 className="text-white mb-6">
                <span className="gradient-text font-bold">Datenbasierte Entscheidungen</span> für nachhaltiges Wachstum
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Treffen Sie fundierte strategische Entscheidungen und identifizieren Sie neue Geschäftschancen – 
                mit unseren KI-gestützten Lösungen für strategische Geschäftsentwicklung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <BuildingOfficeIcon className="w-24 h-24 text-white" />
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
            <h2 className="mb-6">Vorteile unserer KI-gestützten Geschäftsentwicklung</h2>
            <p className="text-lg text-neutral-600">
              Nutzen Sie die Macht der künstlichen Intelligenz, um Ihr Unternehmen zukunftssicher zu machen und neue Wachstumspotentiale zu erschließen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-amber-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <PresentationChartLineIcon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Datenbasierte Strategien</h3>
                <p className="text-neutral-700">Entwickeln Sie Geschäftsstrategien auf Basis konkreter Marktdaten statt Bauchgefühl.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-amber-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Schnellere Marktanpassung</h3>
                <p className="text-neutral-700">Reagieren Sie 6-12x schneller auf Marktveränderungen als Ihre Mitbewerber.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-amber-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Neue Geschäftschancen</h3>
                <p className="text-neutral-700">Identifizieren Sie 2-3x mehr neue Geschäftsmöglichkeiten pro Jahr durch KI-gestützte Analysen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features Grid Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-amber-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-amber-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-amber-600 tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Strategische Geschäftsentwicklung im Detail</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-gestützten Lösungen für strategische Geschäftsentwicklung helfen Ihnen, fundiertere Entscheidungen zu treffen und neue Wachstumspotentiale zu erschließen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-amber-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-amber-600">{feature.title}</h3>
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
      
      {/* Business Insights Comparison */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-amber-600 tracking-wider uppercase mb-3">Der KI-Vorteil</span>
            <h2 className="mb-6">Der messbare Unterschied für Ihr Business</h2>
            <p className="text-lg text-neutral-600">
              Vergleichen Sie herkömmliche Geschäftsentwicklung mit unseren KI-gestützten Lösungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg border border-amber-100">
            <div className="bg-amber-600 text-white p-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 font-bold text-lg">Kennzahl</div>
                <div className="text-center font-bold text-lg">Herkömmlich</div>
                <div className="text-center font-bold text-lg">Mit KI</div>
              </div>
            </div>
            
            <div className="divide-y divide-amber-100">
              {businessInsights.map((insight, index) => (
                <div key={insight.id} className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}`}>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-2 font-medium">{insight.label}</div>
                    <div className="text-center text-neutral-700">{insight.value}</div>
                    <div className="text-center font-semibold text-amber-600 flex flex-col items-center">
                      {insight.aiValue}
                      <span className="text-xs text-accent mt-1">{insight.improvement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Insights Dashboard Example */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-amber-600 tracking-wider uppercase mb-3">Visualisierung</span>
            <h2 className="mb-6">Das strategische KI-Dashboard für Ihr Unternehmen</h2>
            <p className="text-lg text-neutral-600">
              Erhalten Sie wertvolle strategische Einblicke auf einen Blick mit unserem intuitiven KI-Dashboard.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-amber-600">Strategisches Dashboard</h3>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-neutral-600">Live-Daten</span>
                  </div>
                </div>
                
                {/* Main Chart Area */}
                <div className="bg-neutral-50 rounded-lg p-4 h-48 flex items-center justify-center border border-neutral-200">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-end justify-around px-6">
                      {[35, 55, 40, 60, 75, 55, 85].map((height, i) => (
                        <div key={i} className="w-8 flex flex-col items-center">
                          <div 
                            className={`w-full rounded-t-sm ${i === 6 ? 'bg-accent' : 'bg-amber-500'}`} 
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs text-neutral-500 mt-1">{`Q${i+1}`}</div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-4 left-4 text-sm font-medium text-neutral-700">Marktpotential</div>
                  </div>
                </div>
                
                {/* Three Small Charts */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                    <div className="text-xs font-medium text-neutral-700 mb-2">Wettbewerbsanalyse</div>
                    <div className="flex items-end justify-around h-20">
                      <div className="w-4 h-12 bg-neutral-300 rounded-t-sm"></div>
                      <div className="w-4 h-14 bg-neutral-400 rounded-t-sm"></div>
                      <div className="w-4 h-10 bg-neutral-300 rounded-t-sm"></div>
                      <div className="w-4 h-16 bg-amber-500 rounded-t-sm"></div>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                    <div className="text-xs font-medium text-neutral-700 mb-2">Kundenverhaltens-Trends</div>
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-full h-px bg-neutral-300 relative">
                        <div className="absolute top-0 left-0 h-12 w-full">
                          <svg viewBox="0 0 100 30" className="w-full h-full">
                            <path d="M0,15 Q30,5 50,20 T100,15" fill="none" stroke="#F59E0B" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                    <div className="text-xs font-medium text-neutral-700 mb-2">Marktanteil-Prognose</div>
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-amber-200 flex items-center justify-center relative">
                        <div className="absolute inset-0 border-4 border-amber-500 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }}></div>
                        <span className="text-sm font-bold text-amber-600">68%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Strategic Insights */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center mb-4">
                  <SparklesIcon className="w-5 h-5 text-amber-500 mr-2" />
                  <h3 className="text-lg font-bold text-amber-700">KI-Strategieempfehlungen</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <div className="text-sm font-semibold text-neutral-800">Markterweiterung</div>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1">Expansion in den Norddeutschen Raum mit aktuellen Produktlinien zeigt Potential für 23% Wachstum.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      <div className="text-sm font-semibold text-neutral-800">Produktinnovation</div>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1">Bedarf an KI-Lösungen für kleine Dienstleister wächst um 48% - Entwicklung spezifischer Module empfohlen.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <div className="text-sm font-semibold text-neutral-800">Partnerschaftspotential</div>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1">Strategische Partnerschaft mit Tech-Anbieter XYZ könnte Umsatzsteigerung von 15-20% ermöglichen.</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs text-amber-600 font-medium">KI-Vertrauenswert: 92%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <div className="flex items-center">
                <SparklesIcon className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-neutral-600">Powered by KI-Automatisierung Bremen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary-dark tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-primary-dark" />
              Erfolgsbeispiel
            </span>
            <h2 className="mb-6">Wie ein Bremer Unternehmen neue Marktchancen entdeckte</h2>
            <p className="text-lg text-neutral-600">
              Ein reales Beispiel, wie unsere KI-gestützten Geschäftsentwicklungslösungen Wachstum ermöglichen.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6 text-primary-dark">Expandierender Handwerksbetrieb in Bremen</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center mr-3">
                        <ExclamationTriangleIcon className="h-4 w-4 text-primary-dark" />
                      </div>
                      Herausforderung
                    </h4>
                    <p className="text-neutral-700">
                      Ein etablierter Handwerksbetrieb mit 25 Mitarbeitern wollte expandieren, 
                      hatte aber Schwierigkeiten, profitable neue Geschäftsfelder zu identifizieren 
                      und quantifizieren.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center mr-3">
                        <WrenchScrewdriverIcon className="h-4 w-4 text-primary-dark" />
                      </div>
                      Lösung
                    </h4>
                    <p className="text-neutral-700">
                      Wir implementierten eine KI-gestützte Marktanalyse und Wettbewerbsbeobachtung, 
                      die lokale Trends, Kundenbedürfnisse und unbesetzte Nischen identifizierte.
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Automatisierte Analyse von Kundenanfragen und -feedback</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>KI-gestützte Wettbewerbsanalyse regionaler Anbieter</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Predictive Analytics für Marktwachstumspotenziale</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center mr-3">
                        <TrophyIcon className="h-4 w-4 text-primary-dark" />
                      </div>
                      Ergebnis
                    </h4>
                    <p className="text-neutral-700">
                      Das Unternehmen identifizierte zwei lukrative neue Geschäftsfelder und 
                      konnte durch datengestützte Entscheidungen den Umsatz innerhalb eines Jahres um 32% steigern.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-green-600">+32%</div>
                        <p className="text-sm text-neutral-600">Umsatzsteigerung</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-green-600">2</div>
                        <p className="text-sm text-neutral-600">Neue Geschäftsfelder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-dark/10 p-8 lg:p-12 flex items-center justify-center">
                <img 
                  src="/images/strategic-business-case.svg" 
                  alt="Strategische Geschäftsentwicklung Fallstudie" 
                  className="max-w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute h-96 w-96 rounded-full bg-primary-dark -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-blue-400 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
          
          {Array.from({length: 15}).map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}>
              <ChartBarIcon className="text-blue-700 opacity-10" style={{
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
            <h2 className="mb-6">Ihre Fragen zur KI-gestützten Geschäftsentwicklung</h2>
            <p className="text-lg text-neutral-600">
              Erfahren Sie mehr über die praktischen Aspekte und Implementierung unserer strategischen KI-Lösungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Wie genau kann KI neue Geschäftsmöglichkeiten identifizieren?",
                  answer: "Unsere KI-Systeme identifizieren Geschäftsmöglichkeiten durch einen mehrschichtigen Analyseprozess: Zunächst erfolgt eine umfassende Datenerhebung aus diversen Quellen wie Marktberichten, Branchenpublikationen, Social-Media-Trends, Patentdatenbanken und Kundenfeedback. Diese Daten werden dann durch fortschrittliche Natural Language Processing (NLP) und Predictive Analytics Algorithmen verarbeitet, um aufkommende Trends, unerfüllte Kundenbedürfnisse und Marktlücken zu erkennen. Die KI analysiert hierbei Muster und Korrelationen, die für das menschliche Auge oft nicht erkennbar sind. Besonders wertvoll ist die Fähigkeit der KI, Nischen zu identifizieren, in denen hohe Nachfrage auf geringes Angebot trifft, sowie aufkommende Trends frühzeitig zu erkennen, bevor sie Mainstream werden. Die KI bewertet zudem die Passung potentieller Geschäftsfelder zu Ihren bestehenden Kompetenzen und Ressourcen. Die Identifikation von Geschäftsmöglichkeiten ist jedoch nur der erste Schritt eines erfolgreichen Expansionsprozesses. In einem unverbindlichen Erstgespräch analysieren wir Ihre spezifische Marktsituation und zeigen, wie KI Ihre Geschäftsentwicklung konkret unterstützen kann."
                },
                {
                  question: "Wie verlässlich sind die Prognosen der KI für strategische Geschäftsentscheidungen?",
                  answer: "Die Verlässlichkeit unserer KI-Prognosen basiert auf mehreren Schlüsselfaktoren: Wir setzen auf fortschrittliche probabilistische Modelle, die nicht nur Punktprognosen, sondern vollständige Wahrscheinlichkeitsverteilungen liefern - inklusive Best-Case, Worst-Case und Most-Likely-Szenarien. Diese Modelle wurden an historischen Daten aus über 200 realen Geschäftsentwicklungsprojekten trainiert und validiert. Die Genauigkeit wird durch einen Multi-Modell-Ansatz maximiert, bei dem verschiedene Algorithmen parallel arbeiten und ihre Ergebnisse aggregiert werden, was Einzelfehler deutlich reduziert. Im Vergleich zu traditionellen Prognosen erreichen unsere KI-Modelle eine um 40-60% höhere Genauigkeit bei mittelfristigen Markttrends (6-18 Monate). Besonders wertvoll ist die kontinuierliche Modelloptimierung: Unsere Systeme lernen konstant aus neuen Daten und passen Prognosen in Echtzeit an. Wir integrieren zudem strukturiert menschliche Expertise, um blinde Flecken der KI auszugleichen. Trotz dieser Fortschritte ist wichtig zu verstehen, dass selbst die fortschrittlichsten Prognosen gewissen Unsicherheiten unterliegen. In einem kostenlosen Erstgespräch demonstrieren wir die Zuverlässigkeit unserer Prognosen anhand von Beispielen aus Ihrer Branche und entwickeln ein maßgeschneidertes Prognosesystem für Ihre spezifischen strategischen Herausforderungen."
                },
                {
                  question: "Wie können kleine und mittlere Unternehmen von KI-gestützter Geschäftsentwicklung profitieren?",
                  answer: "KMUs profitieren von unseren KI-Lösungen durch mehrere spezifisch angepasste Ansätze: Anders als Großunternehmen haben KMUs oft nicht die Ressourcen für umfangreiche Marktforschung - unsere KI-Systeme demokratisieren den Zugang zu tiefgehenden Markteinblicken zu einem Bruchteil der traditionellen Kosten. Die KI priorisiert Geschäftsmöglichkeiten basierend auf Ihrer spezifischen Ressourcensituation und identifiziert gezielt Nischen, in denen auch kleinere Akteure gegen etablierte Wettbewerber bestehen können. Besonders wertvoll ist die lokalspezifische Analyse, die regionale Besonderheiten und Wettbewerbsdynamiken berücksichtigt - ein entscheidender Vorteil für lokal operierende KMUs. Unsere modularen Lösungen erlauben einen schrittweisen Einstieg mit niedrigen initialen Investitionen und schrittweiser Skalierung. Die Implementierung erfolgt mit minimaler Disruption des Tagesgeschäfts und einer typischen ROI-Zeit von 3-6 Monaten. Konkrete Erfolgsbeispiele umfassen KMUs, die durch KI-gestützte Marktanalysen Umsatzsteigerungen von 15-40% innerhalb eines Jahres erzielten. Die optimale Implementierungsstrategie ist jedoch für jedes Unternehmen einzigartig. In einem unverbindlichen Erstgespräch analysieren wir Ihre spezifische Situation und entwickeln einen maßgeschneiderten Ansatz, der die Vorteile der KI-gestützten Geschäftsentwicklung für Ihr Unternehmen maximiert."
                },
                {
                  question: "Welche Daten benötigt die KI für eine effektive strategische Analyse?",
                  answer: "Für eine effektive strategische Analyse arbeitet unsere KI mit einem dreistufigen Datenkonzept: Als Basis dienen Ihre internen Unternehmensdaten wie Umsätze, Kundeninteraktionen, Produktleistungen und historische Geschäftsentwicklung - je detaillierter, desto besser, aber auch grundlegende Datensätze liefern bereits wertvolle Einblicke. Diese werden angereichert durch externe Marktdaten, die wir aus über 500 Quellen sammeln, darunter Branchenberichte, Wirtschaftsindikatoren, Patentdatenbanken, Social Media Trends und Wettbewerberanalysen. Den dritten Layer bilden lokal-spezifische Daten für den Bremer und norddeutschen Markt, einschließlich regionaler Wirtschaftstrends, Demografie und lokaler Wettbewerbsdynamiken. Der Implementierungsprozess beginnt mit einer Bestandsaufnahme Ihrer vorhandenen Daten, gefolgt von einer gezielten Anreicherung mit externen Quellen. Die Integration erfolgt über sichere APIs oder Batch-Uploads, wobei alle Daten DSGVO-konform verarbeitet werden. Die KI identifiziert automatisch Datenlücken und priorisiert deren Schließung. Die konkrete Datenstrategie muss jedoch individuell auf Ihre Unternehmenssituation zugeschnitten werden. In einem kostenlosen Erstgespräch analysieren wir Ihre vorhandene Datenbasis und entwickeln einen pragmatischen Plan zur Datennutzung für Ihre strategische Geschäftsentwicklung."
                },
                {
                  question: "Wie lässt sich KI-gestützte Geschäftsentwicklung mit traditionellen strategischen Planungsprozessen verbinden?",
                  answer: "Die Integration von KI in strategische Planungsprozesse erfolgt durch einen hybriden Ansatz, der das Beste aus beiden Welten vereint: Unsere KI-Systeme fungieren als Entscheidungsunterstützung, nicht als Ersatz für menschliche Strategen. Sie erweitern traditionelle SWOT-, PESTEL- und Porter's Five Forces-Analysen durch tiefgreifendere, datengestützte Einblicke und quantitative Bewertungen. Der Integrationsprozess beginnt mit einer Identifikation der kritischen Entscheidungspunkte in Ihrem bestehenden Strategieprozess, an denen datengestützte KI-Einblicke den größten Mehrwert liefern. Die KI übernimmt die rechenintensive Analyse und Szenarienbildung, während menschliche Strategen sich auf die Interpretation und kreative Lösungsentwicklung konzentrieren können. Typischerweise entwickeln wir ein Stage-Gate-Modell, bei dem KI-Analysen strategische Optionen generieren, die dann durch menschliche Expertise und Unternehmenskultur gefiltert werden. Komplementär dazu implementieren wir agile Feedback-Loops, die kontinuierliches Lernen und Anpassen der Strategie ermöglichen. Die optimale Balance zwischen KI-gestützter Analyse und traditionellen Strategieprozessen variiert jedoch je nach Unternehmenskultur und Branchendynamik. In einem unverbindlichen Erstgespräch analysieren wir Ihre aktuellen strategischen Planungsprozesse und entwickeln einen maßgeschneiderten Integrationsplan für KI-gestützte Entscheidungsunterstützung."
                },
                {
                  question: "Wie kann KI dabei helfen, Risiken bei der Erschließung neuer Geschäftsfelder zu minimieren?",
                  answer: "Unsere KI-Systeme minimieren Expansionsrisiken durch einen mehrschichtigen Risikomanagement-Ansatz: Zunächst ermöglicht die KI eine umfassendere Markt- und Wettbewerbsanalyse, die blinde Flecken traditioneller Analysen aufdeckt. Durch Monte-Carlo-Simulationen und probabilistische Modellierung werden Erfolgschancen und potenzielle Hindernisse verschiedener Expansionsszenarien quantifiziert. Besonders wertvoll ist die Identifikation versteckter Korrelationen und Kausalitäten zwischen verschiedenen Marktfaktoren. Die KI entwickelt optimale Markteintrittsstrategien mit minimalem Ressourceneinsatz und maximalem Lerneffekt, basierend auf dem Prinzip des iterativen Testing. Kontinuierliches Monitoring von Frühindikatoren erlaubt schnelle Kursanpassungen, bevor größere Verluste entstehen. Die KI identifiziert zudem den optimalen Zeitpunkt für strategische Entscheidungen (Go/No-Go) basierend auf Marktdynamiken. Durch dynamische Ressourcenallokationsmodelle wird sichergestellt, dass Investitionen stets den vielversprechendsten Projekten zugeteilt werden. Praktische Erfahrungen zeigen, dass dieser Ansatz das Risiko von Fehlschlägen bei Expansionen um 40-60% reduzieren kann. Die effektivste Risikominimierungsstrategie ist jedoch stets individuell. In einem kostenlosen Erstgespräch analysieren wir die spezifischen Risiken Ihrer geplanten Geschäftsentwicklung und erstellen einen maßgeschneiderten Plan zur KI-gestützten Risikominimierung."
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
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-6 pt-0 bg-gradient-to-br from-blue-50 to-white">
                      <div className="text-neutral-700 space-y-3">
                        {faq.answer.split('. ').map((sentence, i) => {
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
              <div className="inline-block p-6 bg-gradient-to-br from-primary-dark/10 to-white rounded-xl border border-blue-100 shadow-md">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Experten für strategische Geschäftsentwicklung stehen Ihnen für alle Fragen zur Verfügung.
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-amber-600 to-primary">
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
              Bereit für die strategische Transformation Ihres Unternehmens?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihnen helfen können, fundierte strategische Entscheidungen zu treffen und neue Wachstumschancen zu erschließen.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full shadow-lg">
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