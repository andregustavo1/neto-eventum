
import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-heading font-bold text-brand-blue-dark">
          Neto Tendas
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-brand-blue transition-colors">
            Home
          </a>
          <a href="#services" className="font-medium hover:text-brand-blue transition-colors">
            Serviços
          </a>
          <a href="#about" className="font-medium hover:text-brand-blue transition-colors">
            Sobre
          </a>
          <a href="#contact" className="font-medium hover:text-brand-blue transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <a 
          href="https://wa.me/5562993363020" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center"
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          <span className="hidden sm:inline">Fale no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
