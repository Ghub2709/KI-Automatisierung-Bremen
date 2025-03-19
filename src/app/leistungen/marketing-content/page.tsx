import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  MegaphoneIcon,
  CheckCircleIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { 
  SparklesIcon,
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon, 
  CalendarIcon 
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Marketing & Content | KI-Automatisierung Bremen',
  description: 'Automatisieren Sie Ihre Marketing- und Content-Erstellung mit KI-Lösungen. Erstellen Sie hochwertige Inhalte für Newsletter, Social Media und mehr.',
};

export default function MarketingContentPage() {
  const features = [
    {
      id: 1,
      title: 'Content-Erstellung',
      description: 'KI-gestützte Generierung von hochwertigen Texten für Newsletter, Blog-Beiträge, Social Media und andere Marketingkanäle.',
      icon: <DocumentTextIcon className="w-8 h-8 text-red-500" />,
      benefits: ['80% Zeitersparnis bei der Content-Erstellung', 'Konsistente Markensprache', 'Hochwertige Inhalte ohne Schreibblockaden']
    },
    {
      id: 2,
      title: 'Personalisierte Kundenansprache',
      description: 'Automatische Segmentierung von Kundendaten und Erstellung individualisierter Kommunikation für verschiedene Zielgruppen.',
      icon: <UserGroupIcon className="w-8 h-8 text-red-500" />,
      benefits: ['Höhere Öffnungs- und Klickraten', 'Stärkere Kundenbindung', 'Mehr Conversions durch Relevanz']
    },
    {
      id: 3,
      title: 'Kundenfeedback-Analyse',
      description: 'Automatische Auswertung von Bewertungen, Kommentaren und anderem Feedback mit Sentiment-Analyse und Trendidentifikation.',
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-red-500" />,
      benefits: ['Tiefe Einblicke in Kundenmeinungen', 'Frühzeitige Erkennung von Problemen', 'Datenbasierte Produktverbesserungen']
    },
    {
      id: 4,
      title: 'Automatisierte Social-Media-Planung',
      description: 'KI-gestützte Erstellung, Planung und Optimierung von Social-Media-Beiträgen für maximale Reichweite und Engagement.',
      icon: <CalendarIcon className="w-8 h-8 text-red-500" />,
      benefits: ['Optimale Posting-Zeiten', 'Konsistente Präsenz', 'Höhere Engagement-Raten']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Dynamic AI-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-700 to-primary-dark"></div>
        
        {/* Decorative tech patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-red-300 blur-3xl top-20 -left-10"></div>
          <div className="absolute h-56 w-56 rounded-full bg-red-200 blur-3xl -top-10 right-1/4"></div>
          
          {/* Content/media pattern suggestion */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="absolute rounded-md bg-white" style={{
                height: `${Math.random() > 0.5 ? 10 : 20}px`,
                width: `${60 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}></div>
            ))}
            {Array.from({length: 8}).map((_, i) => (
              <div key={`square-${i}`} className="absolute bg-white" style={{
                height: `${30 + Math.random() * 20}px`,
                width: `${30 + Math.random() * 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="inline-block w-3 h-3 rounded-full bg-red-400 animate-pulse mr-2"></span>
                Marketing & Content
              </div>
              
              <h1 className="text-white mb-6">
                <span className="gradient-text font-bold">KI-unterstützte Inhalte</span> für überzeugende Kommunikation
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Erstellen Sie regelmäßig hochwertige Marketing-Inhalte und erreichen Sie Ihre Zielgruppe effektiver – 
                mit unseren intelligenten Content-Automatisierungslösungen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-base rounded-full px-8 py-4 shadow-lg hover:shadow-xl">
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <MegaphoneIcon className="w-24 h-24 text-white" />
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
            <h2 className="mb-6">Die Vorteile unserer KI-Marketinglösungen</h2>
            <p className="text-lg text-neutral-600">
              Steigern Sie die Effizienz und Effektivität Ihres Marketings durch intelligente Automatisierung und gewinnen Sie mehr Kunden bei geringerem Aufwand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-bordered hover:shadow-md bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kreative Entlastung</h3>
                <p className="text-neutral-700">Beseitigen Sie Schreibblockaden und erzeugen Sie kontinuierlich frische Ideen für Ihre Inhalte.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Höheres Engagement</h3>
                <p className="text-neutral-700">40% höhere Engagement-Rate durch personalisierte und zielgruppenspezifische Inhalte.</p>
              </div>
            </div>
            
            <div className="card-bordered hover:shadow-md bg-red-50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Bessere Kundenbeziehungen</h3>
                <p className="text-neutral-700">Stärkere Kundenbindung durch relevante und personalisierte Kommunikation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features Grid Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-red-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-red-50 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">Unsere Lösungen</span>
            <h2 className="mb-6">Marketing-Automatisierung im Detail</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-gestützten Marketing- und Content-Lösungen automatisieren und optimieren Ihre gesamte Content-Strategie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-red-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-red-600">{feature.title}</h3>
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
      
      {/* Content Showcase */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary-dark tracking-wider uppercase mb-3">
              <SparklesIcon className="h-5 w-5 inline-block mr-1 text-primary-dark" />
              Vorher/Nachher
            </span>
            <h2 className="mb-6">KI-Optimierter Content im Vergleich</h2>
            <p className="text-lg text-neutral-600">
              Sehen Sie den Unterschied zwischen traditionellem und KI-optimiertem Content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-neutral-200 rounded-lg p-8 bg-neutral-50 relative shadow-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border border-neutral-200 px-4 py-1 rounded-full text-sm font-bold text-neutral-700">
                Traditioneller Content
              </div>
              <h3 className="text-xl font-bold mb-4">Email Newsletter</h3>
              <div className="prose max-w-none text-neutral-700">
                <p>Sehr geehrte Kunden,</p>
                <p>hiermit möchten wir Sie über unsere neuesten Angebote informieren. Wir haben diese Woche spezielle Rabatte auf alle Produkte in unserem Sortiment. Besuchen Sie unsere Website, um mehr zu erfahren.</p>
                <p>Mit freundlichen Grüßen,<br />Ihr Team</p>
              </div>
              <div className="mt-6 rounded-md bg-white p-4 border border-neutral-200">
                <p className="text-sm text-neutral-500 mb-2">Ergebnisse:</p>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-neutral-600">Öffnungsrate:</span> <span className="font-bold">18%</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Klickrate:</span> <span className="font-bold">2.5%</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Konversion:</span> <span className="font-bold">0.8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-8 bg-blue-50 relative shadow-md">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-dark text-white px-4 py-1 rounded-full text-sm font-bold">
                KI-Optimierter Content
              </div>
              <h3 className="text-xl font-bold mb-4">Email Newsletter</h3>
              <div className="prose max-w-none text-neutral-700">
                <p>Hallo [Personalisierter Name],</p>
                <p>basierend auf Ihren letzten Einkäufen haben wir exklusive Angebote für Sie zusammengestellt! Diese Woche erhalten Sie 15% auf [spezifische Produktkategorie], die perfekt zu Ihren bisherigen Einkäufen passen.</p>
                <p>Entdecken Sie jetzt Ihre personalisierten Empfehlungen!</p>
                <p>Herzliche Grüße,<br />Ihr [Firmenname]-Team</p>
              </div>
              <div className="mt-6 rounded-md bg-white p-4 border border-blue-200">
                <p className="text-sm text-neutral-500 mb-2">Ergebnisse:</p>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-neutral-600">Öffnungsrate:</span> <span className="font-bold text-green-600">42%</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Klickrate:</span> <span className="font-bold text-green-600">8.7%</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Konversion:</span> <span className="font-bold text-green-600">3.2%</span>
                  </div>
                </div>
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
              <PencilSquareIcon className="text-blue-700 opacity-10" style={{
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
            <h2 className="mb-6">Ihre Fragen zu KI-gestütztem Marketing und Content</h2>
            <p className="text-lg text-neutral-600">
              Erfahren Sie mehr über die praktischen Aspekte und Implementierung unserer Marketing- und Content-Automatisierungslösungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Wie stellt KI sicher, dass der generierte Content zu meiner Marke passt?",
                  answer: "Unsere KI-Systeme arbeiten mit einem mehrschichtigen Anpassungsprozess: Zunächst erfolgt eine tiefgehende Markenanalyse, bei der wir Ihre Markenrichtlinien, bestehende Inhalte und Stilmerkmale detailliert erfassen. Auf dieser Basis erstellen wir ein individuelles KI-Modell, das auf Ihre spezifische Tonalität, Sprachwahl und Wertevorstellungen trainiert wird. Dies wird ergänzt durch einen redaktionellen Workflow - die KI generiert Inhaltsvorschläge, die Sie vor der Veröffentlichung prüfen und bei Bedarf anpassen können. Mit fortschreitender Nutzung lernt das System kontinuierlich aus Ihrem Feedback und verfeinert seine Ausgaben. Für besonders sensible Bereiche implementieren wir zusätzlich einen Human-in-the-Loop-Prozess, der menschliche Expertise in kritischen Entscheidungspunkten einbezieht. Die optimale Balance zwischen Automatisierung und Markentreue ist jedoch individuell verschieden. In einem unverbindlichen Erstgespräch analysieren wir Ihre Markenidentität und entwickeln eine maßgeschneiderte Content-Strategie für Ihr Unternehmen."
                },
                {
                  question: "Welche Arten von Marketing-Content kann die KI erstellen und optimieren?",
                  answer: "Unsere KI-Lösungen decken das gesamte Content-Spektrum ab: Bei textuellen Inhalten erstellen wir E-Mail-Kampagnen, Newsletter, Blog-Artikel, Produktbeschreibungen, Landing Pages, Social-Media-Posts und Ad-Kreative. Im Bereich der visuellen Inhalte generieren wir Bildideen, Grafikkonzepte und einfache Designelemente wie Banner, Social-Media-Grafiken und Infografiken. Für Multi-Channel-Marketing orchestrieren wir konsistente Kommunikation über verschiedene Kanäle hinweg. Die KI übernimmt zudem Content-Optimierung durch A/B-Testing, SEO-Verbesserungen und datenbasierte Content-Personalisierung für unterschiedliche Zielgruppen und Customer-Journey-Phasen. Besonders effektiv ist die KI bei der Skalierung von Content-Produktion für verschiedene Produktlinien, Märkte oder regionale Anpassungen. Die Qualität des KI-generierten Contents hängt jedoch maßgeblich von der Implementierung und dem Training ab. In einem kostenlosen Erstgespräch analysieren wir Ihre Content-Anforderungen und zeigen auf, welche spezifischen Inhaltstypen für Ihr Unternehmen am besten geeignet sind."
                },
                {
                  question: "Wie personalisiert die KI den Content für verschiedene Kundensegmente?",
                  answer: "Unsere KI-gestützte Personalisierung arbeitet auf mehreren Ebenen: Beginnend mit einer automatisierten Kundensegmentierung, die Nutzer basierend auf Demografie, Kaufhistorie, Browsing-Verhalten und Engagement-Mustern gruppiert. Für jeden Kunden erstellt die KI individuelle Präferenzprofile, die kontinuierlich durch Echtzeit-Interaktionsdaten aktualisiert werden. Auf dieser Basis generiert das System dynamische Content-Variationen, die automatisch an das jeweilige Segment angepasst werden - von personalisierten Produktempfehlungen über individuelle Newsletter-Inhalte bis hin zu maßgeschneiderten Website-Erlebnissen. Die KI optimiert kontinuierlich durch A/B-Tests und Predictive Analytics, um die effektivsten Personalisierungsstrategien zu identifizieren. Besonders fortschrittlich ist unsere kontextbezogene Personalisierung, die zusätzlich Faktoren wie Tageszeit, Gerät oder aktuelle Ereignisse berücksichtigt. Der Grad und die Tiefe der Personalisierung hängen jedoch von Ihren spezifischen Kundendaten und Geschäftszielen ab. In einem unverbindlichen Erstgespräch analysieren wir Ihre Kundendatenbasis und entwickeln eine maßgeschneiderte Personalisierungsstrategie für Ihr Unternehmen."
                },
                {
                  question: "Wie kann ich den ROI meiner KI-gestützten Marketingmaßnahmen messen?",
                  answer: "Die ROI-Messung für KI-Marketing erfolgt über ein mehrdimensionales Framework: Wir implementieren detaillierte Conversion-Tracking-Systeme, die den gesamten Customer Journey von der ersten Interaktion bis zum Abschluss verfolgen. Die Performance-Analyse umfasst traditionelle KPIs wie Engagement-Raten, Conversion-Rates und Customer Acquisition Costs, ergänzt durch KI-spezifische Metriken wie Content-Produktionseffizienz (Zeitersparnis), Content-Performance-Vergleiche (KI vs. manuell erstellte Inhalte) und Personalisierungseffektivität. Besonders aussagekräftig sind A/B-Tests zwischen traditionellen und KI-optimierten Kampagnen unter sonst gleichen Bedingungen. Für die Kosten-Nutzen-Analyse werden direkte Einsparungen (reduzierte Produktionskosten, typischerweise 30-50%) sowie indirekte Benefits (höhere Conversion-Raten, durchschnittlich 20-35% Steigerung) berücksichtigt. Die Attribution erfolgt über Multi-Touch-Modelle, die den Einfluss der KI-Maßnahmen im Gesamtmarketing-Mix bewerten. Die konkreten Messmethoden müssen jedoch an Ihre spezifischen Geschäftsziele angepasst werden. In einem kostenlosen Erstgespräch entwickeln wir ein maßgeschneidertes ROI-Tracking-Framework für Ihre KI-Marketingmaßnahmen."
                },
                {
                  question: "Ist die KI in der Lage, SEO-optimierten Content zu erstellen?",
                  answer: "Unsere KI-Systeme sind speziell für SEO-Optimierung konzipiert und arbeiten auf mehreren Ebenen: Die KI führt zunächst automatisierte Keyword-Recherchen durch, die Suchvolumen, Wettbewerb und User Intent analysieren. Basierend darauf erstellt sie strukturierte Content-Briefs mit optimalen Keyword-Verteilungen, semantisch verwandten Begriffen und Themen-Clustern. Bei der Content-Erstellung achtet die KI auf SEO-relevante Faktoren wie optimale Textlänge, Überschriftenstruktur (H1-H6), Keyword-Dichte und -Platzierung, internes Linking und semantische Relevanz. Besonders effektiv ist die KI bei der Optimierung bestehender Inhalte durch Gap-Analysen und Content-Refreshes. Das System berücksichtigt aktuelle SEO-Trends wie Featured Snippets, Passage Ranking und Mobile-First-Indexierung. Zusätzlich integrieren wir technische SEO-Elemente wie strukturierte Daten und Meta-Informationen. Die SEO-Ergebnisse unserer KI-Systeme übertreffen in den meisten Fällen manuell erstellte Inhalte mit durchschnittlich 35% höheren Rankings. Die genaue SEO-Strategie muss jedoch auf Ihre spezifische Wettbewerbssituation abgestimmt werden. In einem unverbindlichen Erstgespräch analysieren wir Ihre SEO-Anforderungen und entwickeln eine maßgeschneiderte Content-Strategie für bessere Suchmaschinenplatzierungen."
                },
                {
                  question: "Wie gewährleisten Sie Originalität und vermeiden Plagiate bei KI-generiertem Content?",
                  answer: "Originalität und Plagiatsvermeidung stehen im Zentrum unserer Content-Strategie und werden durch ein mehrstufiges System sichergestellt: Unsere KI-Modelle sind so trainiert, dass sie Konzepte verstehen und neu formulieren, anstatt bestehende Inhalte zu kopieren. Jeder generierte Content durchläuft automatische Plagiatsprüfungen durch spezialisierte Software, die ihn mit Milliarden von Online-Publikationen vergleicht. Zusätzlich implementieren wir einen Human-in-the-Loop-Prozess, bei dem erfahrene Redakteure den Content auf Originalität und Markenkonformität prüfen. Besonders wichtig ist unsere kontinuierliche Modelloptimierung - wir analysieren regelmäßig die Outputs, identifizieren potenzielle Problemmuster und verfeinern die zugrundeliegenden Algorithmen. Für Domains mit spezifischem Fachwissen erstellen wir zudem maßgeschneiderte Trainingsmaterialien, die Fachterminologie und Branchenkenntnisse korrekt vermitteln. Unser internes Qualitätssicherungssystem bewertet Content nach Originalität, Informationsgehalt und Lesernutzen mit einem Zielwert von mindestens 95% Einzigartigkeit. Die optimale Balance zwischen Effizienz und Originalität ist jedoch für jeden Anwendungsfall spezifisch. In einem kostenlosen Erstgespräch analysieren wir Ihre Content-Anforderungen und entwickeln ein maßgeschneidertes Konzept, das höchste Originalitätsstandards sicherstellt."
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
              <div className="inline-block p-6 bg-gradient-to-br from-primary-dark/10 to-white rounded-xl border border-blue-100 shadow-md">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Content- und Marketing-Experten stehen Ihnen für alle Fragen zur Verfügung.
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
      
      {/* Content Creation Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">Der Prozess</span>
            <h2 className="mb-6">So funktioniert unsere Content-Automatisierung</h2>
            <p className="text-lg text-neutral-600">
              Unser 4-Schritte-Prozess transformiert Ihre Marketing-Kommunikation durch KI-Unterstützung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-white rounded-xl p-6 shadow-md border border-red-100">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">1</div>
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-3 text-red-600">Datenanalyse</h3>
                <p className="text-neutral-700">Die KI analysiert Ihre Zielgruppe, bisherige Inhalte und Markttrends, um optimale Content-Strategien zu identifizieren.</p>
              </div>
              
              <div className="absolute right-4 bottom-4 transform rotate-12 opacity-10">
                <ChartBarIcon className="w-20 h-20 text-red-600" />
              </div>
            </div>
            
            <div className="relative bg-white rounded-xl p-6 shadow-md border border-red-100">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">2</div>
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-3 text-red-600">Content-Generierung</h3>
                <p className="text-neutral-700">Auf Basis der Analyse erstellt die KI personalisierte, zielgruppengerechte Inhalte in Ihrem Markenton.</p>
              </div>
              
              <div className="absolute right-4 bottom-4 transform rotate-12 opacity-10">
                <DocumentTextIcon className="w-20 h-20 text-red-600" />
              </div>
            </div>
            
            <div className="relative bg-white rounded-xl p-6 shadow-md border border-red-100">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">3</div>
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-3 text-red-600">Optimierung & Distribution</h3>
                <p className="text-neutral-700">Die Inhalte werden für verschiedene Kanäle optimiert und zu den wirkungsvollsten Zeitpunkten veröffentlicht.</p>
              </div>
              
              <div className="absolute right-4 bottom-4 transform rotate-12 opacity-10">
                <CalendarIcon className="w-20 h-20 text-red-600" />
              </div>
            </div>
            
            <div className="relative bg-white rounded-xl p-6 shadow-md border border-red-100">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-lg">4</div>
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-3 text-accent">Analyse & Verbesserung</h3>
                <p className="text-neutral-700">Kontinuierliche Auswertung der Performance und automatische Anpassung für noch bessere Ergebnisse.</p>
              </div>
              
              <div className="absolute right-4 bottom-4 transform rotate-12 opacity-10">
                <SparklesIcon className="w-20 h-20 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">Nahtlose Integration</span>
            <h2 className="mb-6">Kompatibel mit Ihren Marketing-Tools</h2>
            <p className="text-lg text-neutral-600">
              Unsere KI-Marketing-Lösungen integrieren sich problemlos in Ihre bestehende Marketing-Infrastruktur.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['E-Mail-Marketing', 'Social Media', 'CMS-Systeme', 'CRM-Software', 'Analytics-Tools', 'Werbe-Plattformen', 'Landing-Page-Builder', 'SEO-Tools'].map((system, index) => (
              <div key={index} className="bg-white rounded-lg border border-red-100 p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-neutral-800">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-red-600 to-primary">
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
              Revolutionieren Sie Ihr Marketing mit KI-Unterstützung
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie unsere KI-Lösungen 
              Ihr Marketing auf ein neues Level heben können.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="btn bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full shadow-lg">
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