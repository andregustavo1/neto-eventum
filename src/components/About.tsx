
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
              Neto Tendas: Qualidade e Estrutura para Seu Evento
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
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Equipe Neto Tendas"
              className="w-full h-full object-cover"
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
