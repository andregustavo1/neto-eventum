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
            videoSrc="/images/2.mp4"
          />
          <ServiceCard
            icon={<Warehouse className="text-brand-blue" />}
            title="Túneis para Eventos"
            description="Estruturas versáteis para criar ambientes conectados e espaçosos."
            videoSrc="/images/3.mp4"
          />
          <ServiceCard
            icon={<Mic className="text-brand-blue" />}
            title="Palcos e Gradil"
            description="Estruturas seguras para shows, apresentações e controle de público."
            videoSrc="/images/4.mp4"
          />
          <ServiceCard
            icon={<Bath className="text-brand-blue" />}
            title="Banheiros Químicos"
            description="Soluções sanitárias higiênicas e bem mantidas para qualquer evento."
            videoSrc="/images/5.mp4"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
