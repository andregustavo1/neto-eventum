
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white shadow-soft transition-all duration-300 hover:shadow-hover hover:transform hover:translate-y-[-5px]",
      className
    )}>
      <div className="mb-4 text-brand-blue-dark text-3xl">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default FeatureCard;
