
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Tent, Warehouse, Mic, Bath } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
  return (
    <AnimatedSection id="services" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title text-brand-blue-dark">
          O Que Oferecemos
        </h2>
        <p className="section-subtitle">
          Soluções completas para eventos de todos os tamanhos
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Tent className="text-brand-blue" />}
            title="Tendas Piramidais"
            description="Locação e venda de tendas com diferentes tamanhos para variados tipos de eventos."
            imageSrc="https://images.unsplash.com/photo-1533654793924-4fc4949fb71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
          <ServiceCard
            icon={<Warehouse className="text-brand-blue" />}
            title="Túneis para Eventos"
            description="Estruturas versáteis para criar ambientes conectados e espaçosos."
            imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <ServiceCard
            icon={<Mic className="text-brand-blue" />}
            title="Palcos e Gradil"
            description="Estruturas seguras para shows, apresentações e controle de público."
            imageSrc="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <ServiceCard
            icon={<Bath className="text-brand-blue" />}
            title="Banheiros Químicos"
            description="Soluções sanitárias higiênicas e bem mantidas para qualquer evento."
            imageSrc="https://images.unsplash.com/photo-1624808685340-caa5447fd5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
