"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
};

const FAQItem = ({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) => {
  const gradientClasses = [
    "from-primary-light to-primary",
    "from-secondary-light to-secondary",
    "from-accent to-blue-400",
    "from-purple-400 to-primary",
    "from-secondary to-green-400",
  ];
  
  const gradientClass = gradientClasses[index % gradientClasses.length];
  
  return (
    <div className="mb-5 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        onClick={toggleOpen}
        className={`flex justify-between items-center w-full text-left p-5 ${isOpen ? `bg-gradient-to-r ${gradientClass} text-white` : 'bg-white/80 hover:bg-white/90'} transition-all duration-300`}
      >
        <h3 className="text-lg font-bold pr-8 flex items-center">
          {isOpen && <SparklesIcon className="h-5 w-5 mr-2 animate-pulse" />}
          {question}
        </h3>
        <div className={`rounded-full p-1 ${isOpen ? 'bg-white/20' : 'bg-primary/10'} flex items-center justify-center transition-transform duration-500`}>
          <ChevronDownIcon 
            className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-primary'} transition-transform duration-500 ${isOpen ? 'transform rotate-180' : ''}`} 
          />
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white p-6 text-neutral-600 space-y-4 border-t border-neutral-100">
          {answer}
        </div>
      </div>
    </div>
  );
};

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Wie unterscheiden sich Ihre KI-Lösungen von herkömmlichen Automatisierungstools?",
      answer: (
        <>
          <p>
            Unsere KI-Lösungen gehen weit über einfache regelbasierte Automatisierungen hinaus:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Lernfähigkeit:</strong> Unsere KI lernt kontinuierlich aus Ihren Geschäftsdaten und passt sich an</li>
            <li><strong>Natürliche Kommunikation:</strong> Verarbeitung von natürlicher Sprache ermöglicht menschenähnliche Interaktionen</li>
            <li><strong>Intelligente Entscheidungen:</strong> Treffen von komplexen Entscheidungen auf Basis von Datenanalyse</li>
            <li><strong>Unstrukturierte Daten:</strong> Verarbeitung von Emails, Dokumenten und Bildern ohne vorherige Formatierung</li>
            <li><strong>Kontinuierliche Verbesserung:</strong> Die Systeme werden mit der Zeit besser und angepasster</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie eine Demo, um den Unterschied live zu erleben.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Für welche Branchen sind Ihre KI-Automatisierungslösungen besonders geeignet?",
      answer: (
        <>
          <p>
            Unsere KI-Lösungen sind besonders erfolgreich in diesen Branchen:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Dienstleistungen:</strong> Beratung, Coaching, Consulting, Marketing-Agenturen</li>
            <li><strong>Einzelhandel:</strong> Online-Shops, lokale Geschäfte mit Kundenkommunikation</li>
            <li><strong>Handwerk:</strong> Terminkooordination, Angebotserstellung, Kundenbetreuung</li>
            <li><strong>Immobilien:</strong> Interessentenqualifizierung, Objektbeschreibungen, Terminkoordination</li>
            <li><strong>Gesundheitswesen:</strong> Terminkooordination, Erstanfragen, Informationsbereitstellung</li>
            <li><strong>Freiberufler:</strong> Content-Erstellung, Kundenakquise, Administrative Aufgaben</li>
          </ul>
          <p className="mt-2">
            Grundsätzlich eignen sich unsere Lösungen für jedes Unternehmen mit wiederkehrenden Kommunikations- und Verwaltungsprozessen.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns gemeinsam herausfinden, wie KI-Automatisierung in Ihrer Branche eingesetzt werden kann.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie konkret verbessert KI-Automatisierung meine Kundenkommunikation?",
      answer: (
        <>
          <p>
            Unsere KI-Lösungen transformieren Ihre Kundenkommunikation durch:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>24/7 Verfügbarkeit:</strong> Sofortige Reaktion auf Kundenanfragen, auch außerhalb der Geschäftszeiten</li>
            <li><strong>Personalisierung:</strong> Maßgeschneiderte Antworten basierend auf Kundenhistorie und -präferenzen</li>
            <li><strong>Multi-Kanal-Management:</strong> Einheitliche Kommunikation über Website, Email, Social Media und Messaging</li>
            <li><strong>Intelligente Priorisierung:</strong> Wichtige Anfragen werden erkannt und bevorzugt behandelt</li>
            <li><strong>Automatische Nachverfolgung:</strong> Kein Kunde wird vergessen durch systematisches Follow-up</li>
          </ul>
          <p className="mt-2">
            Konkrete Beispiele aus unserer Praxis:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Ein Handwerksbetrieb konnte seine Reaktionszeit von durchschnittlich 8 Stunden auf unter 2 Minuten reduzieren</li>
            <li>Eine Marketingagentur steigerte ihre Conversion-Rate bei Erstanfragen um 43%</li>
            <li>Ein Onlineshop reduzierte die Anzahl unbeantworteter Kundenanfragen auf nahezu null</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Erfahren Sie in einem persönlichen Gespräch, wie wir Ihre Kundenkommunikation revolutionieren können.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Welche KI-Technologien setzen Sie für die Lead-Generierung und Vertriebsautomatisierung ein?",
      answer: (
        <>
          <p>
            Für die Optimierung Ihrer Lead-Generierung und Vertriebsprozesse nutzen wir eine Kombination aus folgenden KI-Technologien:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Intelligente Lead-Identifikation:</strong> KI-Algorithmen erkennen potenzielle Kunden anhand von Online-Verhalten und demografischen Merkmalen</li>
            <li><strong>Prädiktive Analysen:</strong> Vorhersage der Kaufwahrscheinlichkeit und optimaler Ansprachezeitpunkte</li>
            <li><strong>Natürliche Sprachverarbeitung (NLP):</strong> Für personalisierte, kontextbezogene Kommunikation</li>
            <li><strong>Multimodale KI:</strong> Integration von Text-, Sprach- und Bildverarbeitung für reichhaltige Interaktionen</li>
            <li><strong>Automatisierte Outreach-Sequenzen:</strong> KI-gesteuerte, mehrstufige Kommunikationskampagnen</li>
          </ul>
          <p className="mt-2">
            In der Praxis bedeutet das für Sie:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Automatisch generierte, personalisierte Erst-Kontakt-Emails mit 3-5x höheren Öffnungsraten</li>
            <li>Intelligente Nachverfolgung mit dynamisch angepasster Frequenz und Tonalität</li>
            <li>Automatische Qualifizierung von Leads nach Ihrer spezifischen Idealkunden-Definition</li>
            <li>Nahtlose Übergabe an menschliche Vertriebsmitarbeiter zum optimalen Zeitpunkt</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns Ihre Vertriebsprozesse analysieren und einen maßgeschneiderten Automatisierungsplan erstellen.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie genau automatisieren Sie die Content-Erstellung für Marketing?",
      answer: (
        <>
          <p>
            Unsere KI-Lösungen für Content-Marketing automatisieren den gesamten Content-Lebenszyklus:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Themenrecherche:</strong> Identifikation relevanter, trendender Themen in Ihrer Branche</li>
            <li><strong>Content-Generierung:</strong> Erstellung von Blogbeiträgen, Social Media Posts, Newsletter und mehr</li>
            <li><strong>Content-Optimierung:</strong> SEO-freundliche Anpassung und Verbesserung bestehender Inhalte</li>
            <li><strong>Content-Distribution:</strong> Automatische Veröffentlichung auf den richtigen Kanälen zum optimalen Zeitpunkt</li>
            <li><strong>Performance-Analyse:</strong> Auswertung der Content-Performance mit automatischen Verbesserungsvorschlägen</li>
          </ul>
          <p className="mt-2">
            Die Inhalte werden dabei stets:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>An Ihren Markenton und Ihre CI angepasst</li>
            <li>Für Ihre spezifische Zielgruppe optimiert</li>
            <li>Mit Ihren Experteninputs veredelt</li>
            <li>Auf aktuelle Trends und Entwicklungen abgestimmt</li>
          </ul>
          <p className="mt-2">
            Ein typisches Beispiel: Für einen Steuerberater generieren wir wöchentlich 3 Social-Media-Posts, einen Blogartikel und einen Newsletter mit aktuellen steuerrechtlichen Themen – vollautomatisch mit minimaler Freigabezeit.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Entdecken Sie, wie wir Ihre Content-Produktion revolutionieren können – bei gleichzeitig reduziertem Zeitaufwand.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie unterstützt KI-Automatisierung die strategische Geschäftsentwicklung?",
      answer: (
        <>
          <p>
            Unsere KI-Lösungen für die strategische Geschäftsentwicklung wirken auf mehreren Ebenen:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Datenbasierte Entscheidungsfindung:</strong> Automatische Analyse von Markt-, Kunden- und Unternehmensdaten</li>
            <li><strong>Wettbewerbsbeobachtung:</strong> Kontinuierliches Monitoring der Konkurrenz, ihrer Angebote und Strategien</li>
            <li><strong>Trendfrüherkennung:</strong> Identifikation von Markttrends und Kundenbedarfen bevor sie Mainstream werden</li>
            <li><strong>Szenarioplanung:</strong> KI-gestützte Simulation verschiedener Geschäftsszenarien und deren Auswirkungen</li>
            <li><strong>Kapazitätsplanung:</strong> Optimale Ressourcenallokation basierend auf Bedarfsprognosen</li>
          </ul>
          <p className="mt-2">
            Konkrete Anwendungsbeispiele:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Für einen Einzelhändler identifizierte unsere KI Produktkategorien mit steigender Nachfrage 3 Monate vor dem breiten Markttrend</li>
            <li>Bei einem Dienstleister optimierten wir die Personalplanung durch präzise Prognose von Auftragsspitzen</li>
            <li>Einem Handwerksbetrieb ermöglichten wir die geografische Expansion durch KI-gestützte Marktanalyse</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Entdecken Sie das strategische Potenzial von KI für Ihre Geschäftsentwicklung in einem persönlichen Gespräch.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie funktioniert Ihre KI-gestützte Prozessoptimierung im Detail?",
      answer: (
        <>
          <p>
            Unsere KI-gestützte Prozessoptimierung verläuft in fünf Phasen:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li><strong>Prozessanalyse:</strong> Detaillierte Erfassung und Visualisierung bestehender Prozesse durch KI-basierte Prozessminingsoftware</li>
            <li><strong>Optimierungspotenzial-Identifikation:</strong> Automatische Erkennung von Ineffizienzen, Engpässen und manuellen Aufwänden</li>
            <li><strong>Lösungsdesign:</strong> Entwicklung maßgeschneiderter KI-Automatisierungen für die identifizierten Prozesse</li>
            <li><strong>Implementation:</strong> Schrittweise Einführung der Automatisierungslösungen mit kontinuierlichem Feedback</li>
            <li><strong>Kontinuierliche Verbesserung:</strong> Laufende Überwachung und selbstlernende Optimierung durch KI</li>
          </ol>
          <p className="mt-2">
            Typische Optimierungsbereiche:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Dokumentenbasierte Workflows (Rechnungen, Verträge, Formulare)</li>
            <li>Genehmigungsprozesse und Entscheidungsfindung</li>
            <li>Datenerfassung und -verarbeitung</li>
            <li>Interne Kommunikationsabläufe</li>
            <li>Reporting und Compliance</li>
          </ul>
          <p className="mt-2">
            Ein Beispiel aus der Praxis: Bei einem mittelständischen Dienstleister haben wir den Prozess der Angebotsstellung von durchschnittlich 4 Stunden auf 30 Minuten reduziert, bei gleichzeitiger Verbesserung der Angebotsqualität.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie eine kostenfreie Prozessanalyse, um Ihre größten Optimierungspotenziale zu identifizieren.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Welche messbaren Ergebnisse kann ich von der KI-Automatisierung erwarten?",
      answer: (
        <>
          <p>
            Unsere Kunden erzielen typischerweise folgende messbare Ergebnisse:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Zeitersparnis:</strong> 15-25 Stunden pro Woche für Solopreneure, 10-15 Stunden pro Mitarbeiter bei kleinen Unternehmen</li>
            <li><strong>Kosteneinsparung:</strong> Reduzierung administrativer Kosten um 30-50%</li>
            <li><strong>Umsatzsteigerung:</strong> Durchschnittliche Steigerung um 15-30% durch verbesserte Lead-Konvertierung und Kundenbindung</li>
            <li><strong>Fehlerreduktion:</strong> Verringerung von Prozessfehlern um 70-90%</li>
            <li><strong>Skalierbarkeit:</strong> Bewältigung von 2-3x höherem Arbeitsvolumen ohne zusätzliches Personal</li>
          </ul>
          <p className="mt-2">
            Branchenspezifische Beispiele:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Beratung:</strong> 45% höhere Abschlussrate durch automatisiertes Lead Nurturing</li>
            <li><strong>E-Commerce:</strong> 38% Steigerung des Customer Lifetime Value durch personalisierte Kommunikation</li>
            <li><strong>Handwerk:</strong> 62% weniger verpasste Termine durch intelligente Terminkoordination</li>
            <li><strong>Agentur:</strong> 40% höhere Projektmarge durch effizientere Prozesse</li>
          </ul>
          <p className="mt-2">
            Wir definieren mit Ihnen von Anfang an klare KPIs und messen regelmäßig den Erfolg unserer Lösungen anhand dieser Kennzahlen.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns gemeinsam Ihre individuellen Erfolgsmetriken definieren und einen ROI-Plan erstellen.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie unterscheidet sich Ihr Ansatz von großen KI-Plattformen wie ChatGPT, Claude oder Gemini?",
      answer: (
        <>
          <p>
            Im Gegensatz zu generischen KI-Plattformen bieten wir einen grundlegend anderen Ansatz:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-4 mb-4 border-collapse">
              <thead>
                <tr className="bg-primary/10 border-b border-neutral-200">
                  <th className="py-3 px-4 text-left font-bold">Aspekt</th>
                  <th className="py-3 px-4 text-left font-bold">Generische KI-Plattformen</th>
                  <th className="py-3 px-4 text-left font-bold">Unser KI-Automatisierungsansatz</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 px-4 font-medium">Implementierung</td>
                  <td className="py-3 px-4">Sie müssen selbst lernen und implementieren</td>
                  <td className="py-3 px-4">Wir übernehmen die komplette Implementierung</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 px-4 font-medium">Anpassung</td>
                  <td className="py-3 px-4">Generisch, minimale Anpassungsmöglichkeiten</td>
                  <td className="py-3 px-4">Vollständig auf Ihr Unternehmen zugeschnitten</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 px-4 font-medium">Integration</td>
                  <td className="py-3 px-4">Erfordert technisches Know-how und API-Kenntnisse</td>
                  <td className="py-3 px-4">Nahtlose Integration in Ihre bestehenden Systeme</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 px-4 font-medium">Autonomie</td>
                  <td className="py-3 px-4">Erfordert ständige manuelle Steuerung</td>
                  <td className="py-3 px-4">Arbeitet autonom nach definierten Prozessen</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 px-4 font-medium">Support</td>
                  <td className="py-3 px-4">Minimaler oder kein persönlicher Support</td>
                  <td className="py-3 px-4">Persönliche Betreuung und kontinuierliche Optimierung</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Wir nutzen zwar die besten verfügbaren KI-Technologien als Grundlage, erweitern diese aber durch:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Spezialisierte Branchenlösungen für Ihre spezifischen Anwendungsfälle</li>
            <li>Integration multipler KI-Dienste für optimale Ergebnisse</li>
            <li>Eigene Entwicklungen für Prozessautomatisierung und Systemintegration</li>
            <li>Kontinuierliches Training mit Ihren spezifischen Daten und Feedback</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Erleben Sie den Unterschied in einer persönlichen Demo unserer maßgeschneiderten KI-Lösungen.
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie beginne ich am besten mit KI-Automatisierung in meinem Unternehmen?",
      answer: (
        <>
          <p>
            Der optimale Einstieg in die KI-Automatisierung folgt unserem bewährten 4-Schritte-Prozess:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-4">
            <li>
              <strong>Kostenloses Erstgespräch (30 Min)</strong>
              <p className="mt-1">Wir lernen Ihr Unternehmen kennen und identifizieren gemeinsam die vielversprechendsten Automatisierungsbereiche. Hier bekommen Sie bereits konkrete Einblicke in die Möglichkeiten.</p>
            </li>
            <li>
              <strong>Prozess-Audit und Potenzialanalyse (2-3 Tage)</strong>
              <p className="mt-1">Wir analysieren im Detail Ihre aktuellen Prozesse, identifizieren Zeitfresser und berechnen Ihr spezifisches Automatisierungspotenzial mit konkreten ROI-Prognosen.</p>
            </li>
            <li>
              <strong>Maßgeschneiderter Automatisierungsplan</strong>
              <p className="mt-1">Sie erhalten einen detaillierten Plan mit priorisierten Automatisierungsmaßnahmen, konkreten Zeitplänen und erwarteten Ergebnissen.</p>
            </li>
            <li>
              <strong>Schrittweise Implementierung</strong>
              <p className="mt-1">Wir beginnen mit den Bereichen, die den schnellsten und größten ROI versprechen, und erweitern die Automatisierung dann sukzessive.</p>
            </li>
          </ol>
          <p className="mt-4">
            Unser Ansatz ist darauf ausgelegt, dass Sie bereits innerhalb der ersten 2-4 Wochen messbare Ergebnisse sehen. Sie können mit einem kleinen Teilbereich starten und die Automatisierung dann sukzessive ausweiten.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie jetzt Ihr kostenloses 30-minütiges Erstgespräch und entdecken Sie Ihr Automatisierungspotenzial.
            </Link>
          </p>
        </>
      )
    }
  ];

  return (
    <section className="section relative overflow-hidden py-20">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50 z-0"></div>
      
      {/* AI-themed decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-xl"></div>
      
      {/* Connection nodes pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0">
        <div className="absolute w-full h-full">
          {/* Connection lines */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.1" className="text-primary" />
            <line x1="20" y1="80" x2="80" y2="20" stroke="currentColor" strokeWidth="0.1" className="text-primary" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" className="text-primary" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" className="text-primary" />
          </svg>
          
          {/* Connection nodes */}
          <div className="absolute w-2 h-2 bg-primary/30 rounded-full top-[20%] left-[20%]"></div>
          <div className="absolute w-2 h-2 bg-primary/30 rounded-full top-[20%] left-[80%]"></div>
          <div className="absolute w-2 h-2 bg-primary/30 rounded-full top-[80%] left-[20%]"></div>
          <div className="absolute w-2 h-2 bg-primary/30 rounded-full top-[80%] left-[80%]"></div>
          <div className="absolute w-3 h-3 bg-secondary/30 rounded-full top-[50%] left-[50%]"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-6">
            <SparklesIcon className="h-5 w-5 mr-2" />
            Alles was Sie wissen müssen
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihre Fragen zu unseren <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Leistungen</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Erfahren Sie mehr über die technischen Details und praktischen Aspekte unserer KI-Automatisierungslösungen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Haben Sie weitere Fragen?</h3>
                <p className="text-neutral-600">
                  Wir helfen Ihnen gerne persönlich weiter und beantworten alle Ihre Fragen.
                </p>
              </div>
              <Link href="/kontakt" className="btn-primary flex items-center group">
                <span>Kontakt aufnehmen</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ; 