
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title text-brand-blue-dark">
          Fale Conosco
        </h2>
        <p className="section-subtitle">
          Estamos prontos para ajudar a tornar seu evento um sucesso
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-brand-blue-dark">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5562993363020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    (62) 99336-3020
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Área de Atendimento</h4>
                  <p>Anápolis e região</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Observação: Cobramos por km rodado para locações fora da região.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-brand-gray-light rounded-lg border border-gray-200">
              <h4 className="font-bold mb-2">Horário de Atendimento</h4>
              <p>Segunda a Sábado: 8h às 18h</p>
              <p>Domingo: Atendimento apenas para emergências</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-soft h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122901.88957561244!2d-49.00399713386724!3d-16.32700249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea41a5c7424d1%3A0x45378f5f17c996d!2sAn%C3%A1polis%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1691066234648!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
