import React from 'react';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  BuildingOfficeIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: 'Kundenkommunikation & Service',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20',
      href: '/leistungen/kundenkommunikation-service',
    },
    {
      id: 2,
      title: 'Akquise & Vertrieb',
      icon: <PhoneIcon className="h-8 w-8" />,
      bgColor: 'bg-teal-50',
      iconColor: 'text-secondary',
      borderColor: 'border-secondary/20',
      href: '/leistungen/akquise-vertrieb',
    },
    {
      id: 3,
      title: 'Produktivität & Verwaltung',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-200',
      href: '/leistungen/produktivitaet-verwaltung',
    },
    {
      id: 4,
      title: 'Marketing & Content',
      icon: <MegaphoneIcon className="h-8 w-8" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      borderColor: 'border-red-200',
      href: '/leistungen/marketing-content',
    },
    {
      id: 5,
      title: 'Strategische Geschäftsentwicklung',
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
      borderColor: 'border-amber-200',
      href: '/leistungen/strategische-geschaeftsentwicklung',
    },
    {
      id: 6,
      title: 'Prozessoptimierung',
      icon: <CogIcon className="h-8 w-8" />,
      bgColor: 'bg-green-50',
      iconColor: 'text-accent',
      borderColor: 'border-accent/20',
      href: '/leistungen/prozessoptimierung',
    },
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Unsere Leistungen</span>
          <h2 className="mb-6">Unsere KI-Lösungen im Überblick</h2>
          <p className="text-lg text-neutral-600">
            Von der Kundenakquise bis zur Prozessoptimierung - wir automatisieren alle Bereiche Ihres Unternehmens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`p-6 rounded-lg border ${service.borderColor} ${service.bgColor} hover:shadow-md transition-all duration-300`}>
              <div className={`${service.iconColor} mb-4`}>{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <Link href={service.href} className="text-sm text-primary hover:text-primary-light flex items-center mt-4">
                Mehr erfahren
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/leistungen" className="btn-primary">
            Alle Leistungen entdecken
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 