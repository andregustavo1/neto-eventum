
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
            imageSrc="https://http2.mlstatic.com/D_NQ_NP_761991-MLB40814109924_022020-O-tenda-piramidal-6x6.webp"
          />
          <ServiceCard
            icon={<Warehouse className="text-brand-blue" />}
            title="Túneis para Eventos"
            description="Estruturas versáteis para criar ambientes conectados e espaçosos."
            imageSrc="https://www.spada.com.br/wp-content/uploads/2019/11/16-spada-eventos-tuneis-estruturados-n4-45.jpg"
          />
          <ServiceCard
            icon={<Mic className="text-brand-blue" />}
            title="Palcos e Gradil"
            description="Estruturas seguras para shows, apresentações e controle de público."
            imageSrc="https://img.freepik.com/free-vector/concert-stage-with-spotlights-show-scene-entertainment-disco-party_1284-42792.jpg?t=st=1742931738~exp=1742935338~hmac=fff343e6736282c3d6cebbe92ab37e8689ba74594d0a0f28480aba5141fd6553&w=740"
          />
          <ServiceCard
            icon={<Bath className="text-brand-blue" />}
            title="Banheiros Químicos"
            description="Soluções sanitárias higiênicas e bem mantidas para qualquer evento."
            imageSrc="https://desentop.com.br/wp-content/uploads/2017/07/banheiro-quimico.jpg"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
