import React from 'react';
import { 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: 'Erstgespräch',
      description: '30-minütiges kostenfreies Kennenlernen und Bedarfsanalyse',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
      color: 'from-blue-500 to-primary',
    },
    {
      id: 2,
      title: 'Individuelles Konzept',
      description: 'Wir erstellen einen maßgeschneiderten Automatisierungsplan',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      color: 'from-secondary to-teal-500',
    },
    {
      id: 3,
      title: 'Umsetzung',
      description: 'Schnelle Implementierung der KI-Lösungen',
      icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 4,
      title: 'Kontinuierliche Optimierung',
      description: 'Regelmäßige Updates und Erweiterungen',
      icon: <ArrowPathIcon className="h-8 w-8" />,
      color: 'from-accent to-green-500',
    },
  ];

  return (
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Prozess</span>
        <h2 className="mb-6">So geht es nach Ihrer Kontaktaufnahme weiter</h2>
        <p className="text-lg text-neutral-600">
          Unser transparenter Prozess sorgt für einen reibungslosen Start in die Zusammenarbeit
        </p>
      </div>
      
      <div className="relative">
        {/* Progress Line (Desktop) */}
        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-neutral-200 transform -translate-y-1/2 z-0"></div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative bg-white rounded-xl shadow-md p-6 z-10 border border-neutral-100 hover:shadow-lg transition-all">
              {/* Step Number with Icon */}
              <div className="flex flex-col items-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center mb-3 shadow-lg`}>
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-900">{step.id}</div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              
              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary z-20">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps; 