
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import ProcessStep from './ui/ProcessStep';
import { Phone, Truck, PartyPopper, Construction } from 'lucide-react';

const Process = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue/5">
      <div className="container">
        <h2 className="section-title text-brand-blue-dark">
          Como Funciona
        </h2>
        <p className="section-subtitle">
          Um processo simples e eficiente para garantir o sucesso do seu evento
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep
            icon={<Phone />}
            title="Pedido de Orçamento"
            description="Entre em contato via WhatsApp para solicitar seu orçamento personalizado."
            stepNumber={1}
          />
          <ProcessStep
            icon={<Truck />}
            title="Montagem no Local"
            description="Nossa equipe vai até o local do evento para montagem das estruturas."
            stepNumber={2}
          />
          <ProcessStep
            icon={<PartyPopper />}
            title="Evento Acontece"
            description="Aproveite seu evento com a tranquilidade de estruturas seguras."
            stepNumber={3}
          />
          <ProcessStep
            icon={<Construction />}
            title="Desmontagem e Retirada"
            description="Após o evento, cuidamos da desmontagem e retirada das estruturas."
            stepNumber={4}
            isLast
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Process;
