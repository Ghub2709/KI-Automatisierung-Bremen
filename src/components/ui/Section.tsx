import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'primary' | 'secondary';
  id?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  bgColor = 'white',
  id,
}) => {
  const bgColorMap = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
  };

  return (
    <section className={`section ${bgColorMap[bgColor]} ${className}`} id={id}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section; 