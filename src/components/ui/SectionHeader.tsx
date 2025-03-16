import React from 'react';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`mb-4 font-bold ${titleClassName}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${subtitleClassName}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader; 