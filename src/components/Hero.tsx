
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-brand-blue-dark/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Evento com tendas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-brand-blue text-white text-sm font-medium">
            Tendas e Estruturas para Eventos
          </span>
          <h1 className="font-bold mb-6 leading-tight">
            Soluções Completas para Seu Evento
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Locação e venda de tendas, palcos e estruturas premium em Anápolis e região.
          </p>
          <a 
            href="https://wa.me/5562993363020" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            <MessageSquare className="mr-2 h-6 w-6" />
            Orçamento via WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
