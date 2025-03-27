
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Truck, Hammer, DollarSign, MapPin } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const About = () => {
  return (
    <AnimatedSection id="about" className="section-padding bg-brand-gray-light">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-brand-blue-dark">
              <span className='font-bold'>Neto Tendas & CIA:</span> Qualidade e Estrutura para Seu Evento
            </h2>
            <p className="text-lg">
              Somos especializados em fornecer estruturas completas para eventos, desde pequenas festas a grandes ocasiões. Garantimos segurança, durabilidade e um atendimento personalizado.
            </p>
            <p>
              Na Neto Tendas, entendemos que cada evento é único e merece atenção aos detalhes. Nossa equipe está preparada para oferecer soluções que se adaptam às suas necessidades específicas.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <video
              src="/images/1.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <FeatureCard
            icon={<Truck />}
            title="Entrega Rápida"
            description="Entregamos e montamos no prazo combinado, garantindo tranquilidade para seu evento."
          />
          <FeatureCard
            icon={<Hammer />}
            title="Estruturas Resistentes"
            description="Materiais de alta qualidade para garantir segurança e durabilidade."
          />
          <FeatureCard
            icon={<DollarSign />}
            title="Preço Justo"
            description="Soluções para todos os orçamentos sem comprometer a qualidade."
          />
          <FeatureCard
            icon={<MapPin />}
            title="Atendemos Toda a Região"
            description="Cobertura completa em Anápolis e regiões adjacentes."
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
