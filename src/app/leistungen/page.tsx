import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  BuildingOfficeIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import ServiceCategory from '@/components/services/ServiceCategory';
import ServicesFAQ from '@/components/services/FAQ';

export const metadata: Metadata = {
  title: 'Leistungen | KI-Automatisierung Bremen',
  description: 'Entdecken Sie unsere KI-Automatisierungslösungen: Kundenkommunikation, Akquise, Verwaltung, Marketing, Geschäftsentwicklung und Prozessoptimierung.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 1,
      title: 'Kundenkommunikation & Service',
      description: 'Reagieren Sie schneller auf Kundenanfragen und bieten Sie rund um die Uhr erstklassigen Service.',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
      features: [
        '24/7 Intelligente Erstreaktion - Automatische Beantwortung von Anfragen rund um die Uhr',
        'Omnichannel-Kommunikationsassistent - Zentralisierte Erfassung und Bearbeitung aller Anfragen',
        'KI-Chat für Website und Social Media - Sofortige Beantwortung von Standardfragen',
        'Sprach-zu-Text-Konvertierung - Anrufannahme und Transkription bei Abwesenheit',
      ],
      benefit: {
        timeSaving: '5-10 Stunden pro Woche',
        qualityImprovement: 'Reaktionszeit von Stunden auf Sekunden reduziert',
      },
      iconColor: 'text-primary',
      bgColor: 'bg-blue-50',
      borderColor: 'border-primary/20',
    },
    {
      id: 2,
      title: 'Akquise & Vertrieb',
      description: 'Generieren Sie kontinuierlich neue Leads und konvertieren Sie diese effizienter zu Kunden.',
      icon: <PhoneIcon className="h-8 w-8" />,
      features: [
        'Automatisierte Lead-Generierung - KI-gestützte Extraktion und Qualifizierung potentieller Kunden',
        'Personalisierte Erst-Kontakt-Automatisierung - Maßgeschneiderte Outreach-Kampagnen',
        'KI-Telefon-Outreach - Automatisierte Anrufe zur Terminvereinbarung',
        'Social-Media-Lead-Generierung - Automatisierte Prospektierung über LinkedIn/XING',
      ],
      benefit: {
        timeSaving: '10-15 Stunden pro Woche',
        qualityImprovement: '2-3x höhere Antwortrate als bei Standard-Templates',
      },
      iconColor: 'text-secondary',
      bgColor: 'bg-teal-50',
      borderColor: 'border-secondary/20',
    },
    {
      id: 3,
      title: 'Produktivität & Verwaltung',
      description: 'Automatisieren Sie administrative Aufgaben und fokussieren Sie sich auf wertschöpfende Tätigkeiten.',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      features: [
        'E-Mail-Management - Automatische Kategorisierung und Beantwortung von E-Mails',
        'Rechnungsmanagement - Automatische Erstellung und Verfolgung von Rechnungen',
        'Dokumentenverarbeitung - Automatisches Auslesen von Informationen aus Dokumenten',
        'Terminplanung - KI-gestützte Terminkoordination und -erinnerungen',
      ],
      benefit: {
        timeSaving: '8-12 Stunden pro Woche',
        qualityImprovement: 'Reduzierung von Fehlern um bis zu 90%',
      },
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      id: 4,
      title: 'Marketing & Content',
      description: 'Erstellen Sie regelmäßig hochwertige Inhalte und erreichen Sie Ihre Zielgruppe effektiver.',
      icon: <MegaphoneIcon className="h-8 w-8" />,
      features: [
        'Content-Erstellung - KI-gestützte Generierung von Newsletter- und Social-Media-Inhalten',
        'Personalisierte Kundenansprache - Segmentierung und individualisierte Kommunikation',
        'Kundenfeedback-Analyse - Automatische Auswertung von Bewertungen und Feedback',
        'Automatische Social-Media-Planung - Zeitoptimierte Veröffentlichung von Inhalten',
      ],
      benefit: {
        timeSaving: '5-8 Stunden pro Woche',
        qualityImprovement: '40% höhere Engagement-Rate',
      },
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      id: 5,
      title: 'Strategische Geschäftsentwicklung',
      description: 'Treffen Sie datenbasierte Entscheidungen und identifizieren Sie neue Geschäftschancen.',
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      features: [
        'Automatisierte Wettbewerbsanalyse - Monitoring von Mitbewerbern und Marktlücken',
        'Vorausschauendes Kundenservice-Management - Proaktive Antizipation von Kundenanliegen',
        'Echtzeit-Verfügbarkeitsmanagement - KI-basierte Kapazitätssteuerung',
        'Automatisierte Trendanalyse - Erkennung neuer Geschäftsmöglichkeiten',
      ],
      benefit: {
        timeSaving: '5-8 Stunden pro Woche',
        qualityImprovement: 'Schnellere Marktanpassung',
      },
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      id: 6,
      title: 'Prozessoptimierung',
      description: 'Optimieren Sie Ihre internen Abläufe und eliminieren Sie Ineffizienzen.',
      icon: <CogIcon className="h-8 w-8" />,
      features: [
        'Workflow-Automatisierung - KI-gesteuerte Prozessabläufe für wiederkehrende Aufgaben',
        'Automatisierte Qualitätskontrolle - KI-basierte Überprüfung von Arbeitsergebnissen',
        'Intelligente Ressourcenplanung - Optimale Zuteilung von Zeit und Ressourcen',
        'Projektmanagement-Automatisierung - KI-unterstützte Projektplanung und -überwachung',
      ],
      benefit: {
        timeSaving: '6-10 Stunden pro Woche',
        qualityImprovement: '30% schnellere Projektabwicklung',
      },
      iconColor: 'text-accent',
      bgColor: 'bg-green-50',
      borderColor: 'border-accent/20',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark to-neutral-900"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-secondary blur-3xl top-20 -left-10"></div>
          <div className="absolute h-40 w-40 rounded-full bg-accent blur-3xl bottom-10 left-1/4"></div>
          <div className="absolute h-56 w-56 rounded-full bg-primary-light blur-3xl -top-10 right-1/4"></div>
          <div className="absolute h-32 w-32 rounded-full bg-secondary blur-3xl bottom-20 right-10"></div>
          
          {/* Binary pattern suggestion */}
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-6 gap-4 opacity-10">
            {Array.from({length: 10}).map((_, i) => (
              <div key={i} className="h-5 w-20 bg-white rounded-md" style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.1 + Math.random() * 0.1
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content with tech elements */}
        <div className="container relative z-10">
          <div className="relative flex flex-col items-center text-center">
            {/* Decorative circle */}
            <div className="absolute w-24 h-24 rounded-full border-4 border-white/10 -top-12 left-1/4 opacity-50"></div>
            <div className="absolute w-16 h-16 rounded-full border-2 border-white/10 top-20 right-1/3 opacity-30"></div>
            
            {/* Main content */}
            <div className="max-w-3xl mx-auto text-center z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-accent animate-pulse mr-2"></span>
                KI-Automatisierung der nächsten Generation
              </div>
              
              <h1 className="mb-6 text-white relative">
                <span className="relative inline-block">
                  Unsere <span className="gradient-text font-bold">KI-Lösungen</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70"></div>
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Entdecken Sie, wie intelligente Automatisierungen in jedem Bereich Ihres Unternehmens Zeit sparen und die Qualität verbessern können.
              </p>
              
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full p-1.5 pl-6">
                <span className="text-white">Durchschnittliche Zeitersparnis:</span>
                <span className="px-5 py-2 bg-accent rounded-full text-white font-bold">70%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Unsere KI-Lösungen im Detail</h2>
            <p className="text-lg text-neutral-600">
              Wir bieten maßgeschneiderte Lösungen für alle Bereiche Ihres Unternehmens, 
              die Zeit sparen und Ihre Effizienz steigern.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category) => (
              <ServiceCategory
                key={category.id}
                icon={category.icon}
                title={category.title}
                description={category.description}
                features={category.features}
                benefit={category.benefit}
                iconColor={category.iconColor}
                bgColor={category.bgColor}
                borderColor={category.borderColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServicesFAQ />

      {/* CTA Section */}
      <section className="section py-20 md:py-28 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
        <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-white/5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Maßgeschneiderte Lösungen für Ihr Unternehmen
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Jedes Unternehmen ist einzigartig. In einem persönlichen Gespräch ermitteln wir Ihr individuelles Automatisierungspotential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-lg bg-white text-primary hover:bg-neutral-100 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Kostenfreies Erstgespräch vereinbaren
              </Link>
              <Link href="/kontakt" className="btn-lg bg-transparent text-white border-2 border-white/30 hover:bg-white/10 font-medium">
                Kontakt aufnehmen
              </Link>
            </div>
            
            <p className="text-white/60 mt-8">Keine Vertragsbindung. Unverbindliches Erstgespräch.</p>
          </div>
        </div>
      </section>
    </>
  );
} 