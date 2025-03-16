import React from 'react';
import { CheckIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/solid';

type ServiceCategoryProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefit: {
    timeSaving: string;
    qualityImprovement: string;
  };
  iconColor: string;
  bgColor: string;
  borderColor: string;
  className?: string;
};

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  icon,
  title,
  description,
  features,
  benefit,
  iconColor = 'text-primary',
  bgColor = 'bg-blue-50',
  borderColor = 'border-primary/20',
  className = '',
}) => {
  return (
    <div className={`p-6 rounded-xl border ${borderColor} ${bgColor} hover:shadow-lg transition-all duration-300 h-full ${className}`}>
      <div className="mb-6">
        <div className={`w-14 h-14 rounded-xl mb-6 p-3 flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-sm tracking-wider uppercase text-primary">Funktionen:</h4>
          <ul className="space-y-4">
            {features.map((feature, index) => {
              // Split the feature string by the hyphen to separate the title from the description
              const [featureTitle, featureDesc] = feature.split(' - ');
              
              return (
                <li key={index} className="flex">
                  <CheckIcon className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <span className="font-medium text-neutral-800">{featureTitle}</span>
                    {featureDesc && <span className="text-neutral-500"> - {featureDesc}</span>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="mt-auto pt-5 border-t border-neutral-200">
        <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-primary">Nutzen:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <ClockIcon className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium text-sm text-neutral-700">Zeitersparnis</span>
            </div>
            <p className="text-lg font-semibold text-neutral-900">{benefit.timeSaving}</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <SparklesIcon className="h-5 w-5 text-accent mr-2" />
              <span className="font-medium text-sm text-neutral-700">Qualitätsverbesserung</span>
            </div>
            <p className="text-lg font-semibold text-neutral-900">{benefit.qualityImprovement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory; 