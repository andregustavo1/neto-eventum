
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Check, Mic, Home, Navigation } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="container">
        <h2 className="section-title text-brand-blue-dark">
          Estruturas que Transformam Seu Evento
        </h2>
        <p className="section-subtitle">
          Por que escolher a Neto Tendas para seu próximo evento?
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Check />}
            title="Tendas Piramidais Premium"
            description="Cobertura elegante e resistente para eventos de qualquer tamanho."
          />
          <FeatureCard
            icon={<Mic />}
            title="Palcos Profissionais"
            description="Estruturas seguras e modulares para apresentações e shows."
          />
          <FeatureCard
            icon={<Home />}
            title="Banheiros Químicos Higienizados"
            description="Soluções de sanitários limpos e bem mantidos para seu público."
          />
          <FeatureCard
            icon={<Navigation />}
            title="Cobertura Regional"
            description="Atendimento em Anápolis e regiões próximas com eficiência."
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
