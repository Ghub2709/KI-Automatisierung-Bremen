"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-neutral-200 last:border-0 py-6 transition-all duration-300">
      <button 
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold pr-8">{question}</h3>
        <ChevronDownIcon 
          className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="text-neutral-600 space-y-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns in einem kostenfreien Erstgespräch herausfinden, welche Prozesse in Ihrem Unternehmen automatisiert werden können.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Kontaktieren Sie uns für eine individuelle ROI-Berechnung für Ihr Unternehmen.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie ein Gespräch, um zu erfahren, wie unkompliziert KI-Automatisierung sein kann.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              In einem kostenfreien Prozess-Audit identifizieren wir gemeinsam Ihre Automatisierungspotenziale.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Kontaktieren Sie uns für einen detaillierten Zeitplan für Ihr spezifisches Projekt.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie ein Gespräch, um mehr über unsere Datenschutzmaßnahmen zu erfahren.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns prüfen, wie wir Ihre bestehenden Systeme optimal mit KI erweitern können.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Sprechen Sie mit uns über Ihre Qualitätsanforderungen und erfahren Sie, wie unsere KI diese erfüllt.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Lassen Sie uns gemeinsam einen Plan entwickeln, wie KI Ihre Mitarbeiter entlasten und stärken kann.
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
            <Link href="/kontakt" className="text-primary hover:text-primary-dark font-medium">
              Vereinbaren Sie ein unverbindliches Erstgespräch und testen Sie unsere Leistungen ohne Risiko.
            </Link>
          </p>
        </>
      )
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Häufige Fragen</span>
          <h2 className="mb-6">Ihre Fragen zur KI-Automatisierung</h2>
          <p className="text-lg text-neutral-600">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren KI-Automatisierungslösungen für Solopreneure und kleine Unternehmen.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-neutral-100">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-neutral-600 mb-6">
              Haben Sie weitere Fragen? Wir helfen Ihnen gerne persönlich weiter.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 