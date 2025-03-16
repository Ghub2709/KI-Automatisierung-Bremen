import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div 
      className={`card ${hover ? 'hover:shadow-lg' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 