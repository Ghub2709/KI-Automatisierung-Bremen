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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Was genau ist KI-Automatisierung und wie kann sie meinem Unternehmen helfen?",
      answer: (
        <>
          <p>
            KI-Automatisierung nutzt künstliche Intelligenz, um wiederkehrende und zeitintensive Aufgaben in Ihrem Unternehmen zu übernehmen. Im Gegensatz zu herkömmlicher Software-Automatisierung kann KI aus Daten lernen, sich anpassen und komplexe Entscheidungen treffen.
          </p>
          <p>
            Für kleine Unternehmen und Solopreneure bedeutet das konkret:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Zeitersparnis von durchschnittlich 15-20 Stunden pro Woche</li>
            <li>Reduktion von Routineaufgaben um bis zu 70%</li>
            <li>Konstant hohe Qualität bei wiederkehrenden Prozessen</li>
            <li>24/7 Verfügbarkeit für Ihre Kunden ohne Personalmehraufwand</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Lassen Sie uns in einem kostenfreien Erstgespräch herausfinden, welche Prozesse in Ihrem Unternehmen automatisiert werden können.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie hoch sind die Kosten für KI-Automatisierung und ab wann rechnet sich die Investition?",
      answer: (
        <>
          <p>
            Mit unserem transparenten Komplettpaket für 500€ pro Monat erhalten Sie Zugang zu allen KI-Automatisierungslösungen inklusive individueller Anpassung und Support. Im Gegensatz zu herkömmlichen IT-Projekten fallen keine hohen Anfangsinvestitionen an.
          </p>
          <p className="mt-2">
            Die Amortisation beginnt typischerweise innerhalb von 1-3 Monaten. Bei einer durchschnittlichen Zeitersparnis von 15 Stunden pro Woche und einem Stundensatz von 50€ ergibt sich ein monatlicher Gegenwert von etwa 3.000€.
          </p>
          <p className="mt-2">
            Hinzu kommen Qualitätsverbesserungen und die Möglichkeit, Ihr Geschäft zu skalieren, ohne proportional mehr Personal einstellen zu müssen.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Kontaktieren Sie uns für eine individuelle ROI-Berechnung für Ihr Unternehmen.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Brauche ich technisches Vorwissen, um KI-Automatisierung in meinem Unternehmen einzusetzen?",
      answer: (
        <>
          <p>
            Nein, Sie benötigen keinerlei technisches Vorwissen. Unser Ansatz unterscheidet sich grundlegend von herkömmlichen KI-Lösungen, die oft eine steile Lernkurve erfordern.
          </p>
          <p className="mt-2">
            Wir übernehmen für Sie:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Die vollständige Implementierung aller KI-Lösungen</li>
            <li>Die Anpassung an Ihre bestehenden Prozesse und Systeme</li>
            <li>Die Schulung Ihrer Mitarbeiter (falls gewünscht)</li>
            <li>Die fortlaufende Überwachung und Optimierung</li>
          </ul>
          <p className="mt-2">
            Sie müssen die KI lediglich nutzen – wir kümmern uns um alles andere.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Vereinbaren Sie ein Gespräch, um zu erfahren, wie unkompliziert KI-Automatisierung sein kann.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Welche Prozesse in meinem Unternehmen lassen sich am besten automatisieren?",
      answer: (
        <>
          <p>
            Die besten Kandidaten für KI-Automatisierung sind Prozesse, die:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Wiederkehrend und zeitintensiv sind</li>
            <li>Nach klaren Regeln ablaufen</li>
            <li>Datenverarbeitung und -analyse beinhalten</li>
            <li>Viel Kommunikation erfordern</li>
          </ul>
          <p className="mt-2">
            Besonders erfolgreich automatisieren wir:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Kundenanfragen und Erstgespräche</li>
            <li>E-Mail-Management und Kommunikation</li>
            <li>Content-Erstellung für Marketing</li>
            <li>Lead-Generierung und Nachverfolgung</li>
            <li>Rechnungsstellung und Buchhaltungsvorarbeiten</li>
            <li>Terminplanung und Koordination</li>
          </ul>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              In einem kostenfreien Prozess-Audit identifizieren wir gemeinsam Ihre Automatisierungspotenziale.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie lange dauert die Implementierung und Einrichtung der KI-Automatisierung?",
      answer: (
        <>
          <p>
            Die Implementierungszeit variiert je nach Komplexität und Anzahl der zu automatisierenden Prozesse, liegt jedoch typischerweise zwischen 2-4 Wochen. Unser Implementierungsprozess folgt einem bewährten Ablauf:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>Prozess-Audit und Bedarfsanalyse (1-2 Tage)</li>
            <li>Erstellung eines individuellen Automatisierungsplans (3-5 Tage)</li>
            <li>Konfiguration und Anpassung der KI-Lösungen (7-14 Tage)</li>
            <li>Integration in Ihre bestehenden Systeme (3-5 Tage)</li>
            <li>Testphase und Feinabstimmung (3-7 Tage)</li>
          </ol>
          <p className="mt-2">
            Erste Ergebnisse sehen Sie bereits nach wenigen Tagen, da wir die Implementierung priorisieren und schrittweise vorgehen.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Kontaktieren Sie uns für einen detaillierten Zeitplan für Ihr spezifisches Projekt.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie sicher sind meine Daten bei der Nutzung von KI-Automatisierungslösungen?",
      answer: (
        <>
          <p>
            Der Schutz Ihrer Daten hat für uns höchste Priorität. Alle unsere KI-Automatisierungslösungen entsprechen den strengen deutschen und europäischen Datenschutzstandards (DSGVO).
          </p>
          <p className="mt-2">
            Unsere Sicherheitsmaßnahmen umfassen:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Verschlüsselung aller Daten (sowohl bei der Übertragung als auch bei der Speicherung)</li>
            <li>Hosting in deutschen Rechenzentren</li>
            <li>Regelmäßige Sicherheitsaudits und Updates</li>
            <li>Klare Datenverarbeitungsverträge gemäß Art. 28 DSGVO</li>
            <li>Minimale Datenspeicherung nach dem "Need-to-know"-Prinzip</li>
          </ul>
          <p className="mt-2">
            Wir arbeiten ausschließlich mit KI-Anbietern, die höchste Datenschutzstandards garantieren und keine Trainingsdaten aus Kundendaten generieren.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Vereinbaren Sie ein Gespräch, um mehr über unsere Datenschutzmaßnahmen zu erfahren.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Kann KI-Automatisierung an meine bestehenden Systeme und Software angebunden werden?",
      answer: (
        <>
          <p>
            Ja, unsere KI-Automatisierungslösungen sind so konzipiert, dass sie sich nahtlos in Ihre bestehende IT-Infrastruktur integrieren lassen. Wir unterstützen Integrationen mit:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>CRM-Systemen (z.B. Salesforce, HubSpot, Pipedrive)</li>
            <li>ERP-Systemen (z.B. SAP, Microsoft Dynamics)</li>
            <li>Buchhaltungssoftware (z.B. DATEV, lexoffice, Sage)</li>
            <li>Marketing-Tools (z.B. Mailchimp, Sendinblue)</li>
            <li>Kommunikationsplattformen (z.B. Microsoft Teams, Slack)</li>
            <li>Projektmanagement-Tools (z.B. Asana, Trello, Monday)</li>
            <li>Und viele weitere gängige Business-Tools</li>
          </ul>
          <p className="mt-2">
            Dank API-Schnittstellen und maßgeschneiderter Konnektoren können wir auch Systeme anbinden, die keine standardmäßigen Integrationen anbieten.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Lassen Sie uns prüfen, wie wir Ihre bestehenden Systeme optimal mit KI erweitern können.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Wie wird sichergestellt, dass die KI-Lösungen die richtigen Entscheidungen treffen?",
      answer: (
        <>
          <p>
            Die Qualitätssicherung unserer KI-Lösungen basiert auf einem mehrstufigen Ansatz:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Initiale Kalibrierung:</strong> Wir trainieren und konfigurieren die KI-Systeme anhand Ihrer spezifischen Anforderungen und Geschäftsprozesse</li>
            <li><strong>Menschliche Überwachung:</strong> Kritische Entscheidungen werden stets von Menschen überprüft, besonders in der Anfangsphase</li>
            <li><strong>Feedback-Schleifen:</strong> Die KI lernt kontinuierlich aus Feedback und verbessert ihre Leistung über Zeit</li>
            <li><strong>Eskalationsmechanismen:</strong> Bei Unsicherheiten wird automatisch an menschliche Mitarbeiter eskaliert</li>
            <li><strong>Regelmäßige Audits:</strong> Wir überprüfen die KI-Entscheidungen regelmäßig auf Qualität und Konsistenz</li>
          </ul>
          <p className="mt-2">
            Für jede Automatisierung definieren wir gemeinsam mit Ihnen klare Qualitätsmetriken und Schwellenwerte, bei deren Unterschreitung ein Mensch eingreift.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Sprechen Sie mit uns über Ihre Qualitätsanforderungen und erfahren Sie, wie unsere KI diese erfüllt.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Werden durch KI-Automatisierung Arbeitsplätze in meinem Unternehmen überflüssig?",
      answer: (
        <>
          <p>
            KI-Automatisierung ersetzt in der Regel keine Mitarbeiter, sondern befähigt sie, wertvoller zu arbeiten. Besonders für kleine Unternehmen und Solopreneure bedeutet das:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Mitarbeiter werden von repetitiven, zeitraubenden Aufgaben entlastet</li>
            <li>Wertvolle Arbeitszeit wird für kreative und strategische Tätigkeiten freigesetzt</li>
            <li>Das Unternehmen kann wachsen, ohne proportional mehr Personal einstellen zu müssen</li>
            <li>Bestehende Kapazitäten werden effektiver genutzt</li>
          </ul>
          <p className="mt-2">
            In unserer Erfahrung führt KI-Automatisierung zu zufriedeneren Mitarbeitern, da sie sich auf anspruchsvollere Aufgaben konzentrieren können, die ihren Fähigkeiten besser entsprechen und mehr Erfüllung bieten.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Lassen Sie uns gemeinsam einen Plan entwickeln, wie KI Ihre Mitarbeiter entlasten und stärken kann.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Gibt es eine Vertragsbindung oder kann ich die KI-Automatisierung jederzeit beenden?",
      answer: (
        <>
          <p>
            Wir arbeiten ohne lange Vertragsbindungen. Unsere Leistungen können Sie flexibel buchen:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Monatliche Kündigungsfrist bei unserem Komplettpaket</li>
            <li>Keine versteckten Kosten oder Gebühren</li>
            <li>Volle Transparenz über alle enthaltenen Leistungen</li>
            <li>Kein Vendor Lock-in – Sie behalten volle Kontrolle über Ihre Daten</li>
          </ul>
          <p className="mt-2">
            Wir sind von der Qualität unserer Leistungen überzeugt und möchten Sie durch Resultate überzeugen, nicht durch Verträge binden. Die überwiegende Mehrheit unserer Kunden bleibt langfristig bei uns, weil die KI-Automatisierung messbare Vorteile bringt.
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
              Vereinbaren Sie ein unverbindliches Erstgespräch und testen Sie unsere Leistungen ohne Risiko.
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
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
            Ihre Fragen zur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">KI-Automatisierung</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren KI-Automatisierungslösungen für Solopreneure und kleine Unternehmen.
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

export default FAQ; 