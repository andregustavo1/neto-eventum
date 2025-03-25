
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  stepNumber: number;
  isLast?: boolean;
  className?: string;
}

const ProcessStep = ({ 
  icon, 
  title, 
  description, 
  stepNumber, 
  isLast = false,
  className 
}: ProcessStepProps) => {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {/* Step Number Circle */}
      <div className="z-10 w-16 h-16 flex items-center justify-center rounded-full bg-brand-blue text-white text-xl font-bold">
        {icon}
      </div>
      
      {/* Horizontal Line */}
      {!isLast && (
        <div className="absolute left-[50%] top-8 w-full h-0.5 bg-brand-blue-light opacity-50"></div>
      )}
      
      {/* Content */}
      <div className="mt-4 text-center">
        <h4 className="font-bold mb-1">{title}</h4>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default ProcessStep;
