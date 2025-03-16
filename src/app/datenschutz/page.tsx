import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | KI-Automatisierung Bremen',
  description: 'Datenschutzerklärung von KI-Automatisierung Bremen. Erfahren Sie, wie wir mit Ihren Daten umgehen.',
};

export default function DatenschutzPage() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative bg-gradient-to-br from-purple-900 via-primary-dark to-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          {/* Binary data visualization - reduziert und auf viewport beschränkt */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-wrap opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="text-white/20 text-xs" style={{ position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 80}%` }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
          
          {/* Data flow streams - reduziert und zentriert */}
          <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-10"></div>
          <div className="absolute top-0 right-1/2 h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-20"></div>
          <div className="absolute top-0 right-2/3 h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-10"></div>
          
          {/* Data protection shield pattern - zentriert */}
          <div className="absolute bottom-5 left-5 w-24 h-24 rounded-full border border-white/10 opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full border border-white/10 opacity-10"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              Ihre Daten in sicheren Händen
            </div>
            
            <div className="text-center max-w-full w-full">
              <h1 className="mb-6 text-white">
                <span className="text-xl sm:text-2xl text-white/70 mb-2 block">KI-Automatisierung Bremen</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block">
                  Datenschutzerklärung
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/80 via-primary/80 to-transparent"></div>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                So schützen wir Ihre Daten in Zeiten der KI und Digitalisierung
              </p>
              
              <div className="mt-6 sm:mt-10 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 sm:p-2 md:p-4 flex flex-col items-center border border-white/10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-1 sm:mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm">Sicher</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 sm:p-2 md:p-4 flex flex-col items-center border border-white/10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-1 sm:mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm">Geschützt</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 sm:p-2 md:p-4 flex flex-col items-center border border-white/10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-1 sm:mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm">Transparent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Datenerfassung auf unserer Website</h3>
            <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
            </p>
            
            <p className="mb-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            
            <p className="mb-2"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
            <p className="mb-4">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-bold mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-2">KI-Automatisierung Bremen</p>
            <p className="mb-2">Im Hollergrund 175A</p>
            <p className="mb-2">28357 Bremen</p>
            <p className="mb-2">Deutschland</p>
            <p className="mb-2">Telefon: <a href="tel:+491632099861" className="text-primary hover:underline">+49 163 209 98 61</a></p>
            <p className="mb-2">E-Mail: <a href="mailto:datenschutz@ki-automatisierung-bremen.de" className="text-primary hover:underline">datenschutz@ki-automatisierung-bremen.de</a></p>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in ein gängiges, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 