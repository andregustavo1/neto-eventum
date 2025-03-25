
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  imageSrc?: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, imageSrc, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "group rounded-xl overflow-hidden bg-white shadow-soft transition-all duration-300 hover:shadow-hover",
      className
    )}>
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4 text-brand-blue text-3xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;
