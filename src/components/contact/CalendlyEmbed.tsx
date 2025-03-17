'use client';

import React from 'react';

interface CalendlyEmbedProps {
  url?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url = "https://calendly.com/ki-automatisierung-bremen/erstgespraech" }) => {
  return (
    <div className="calendly-embed-container h-96">
      <p className="text-center p-8 bg-gray-100 rounded-lg">
        Calendly Terminbuchung wird geladen...
        <br />
        <span className="text-sm mt-2 block text-gray-500">
          In der vollständigen Implementation würde hier ein Calendly-Kalender eingebettet sein.
        </span>
      </p>
    </div>
  );
};

export default CalendlyEmbed; 