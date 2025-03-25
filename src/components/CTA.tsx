
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <AnimatedSection className="py-16" animation="fade-in-down">
      <div className="container">
        <div className="bg-brand-blue rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpIj48cGF0aCBkPSJNMjAgMCBMMjAgNDAgTDAgMjAgTDQwIDIwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiAvPjwvc3ZnPg==')]"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar Seu Evento?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Entre em contato agora mesmo e solicite um orçamento sem compromisso para seu próximo evento.
            </p>
            <a 
              href="https://wa.me/5562993363020" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-blue-dark rounded-md font-semibold text-lg transition-all hover:bg-opacity-90 hover:shadow-lg"
            >
              <MessageSquare className="mr-2 h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTA;
