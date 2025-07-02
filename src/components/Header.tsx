
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Meubelreiniging Expert</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('diensten')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Diensten
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('boek-nu')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Boek Nu
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('boek-nu')}
              className="hidden sm:flex"
            >
              Offerte Aanvragen
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('boek-nu')}
              className="hidden sm:flex"
            >
              Direct Boeken
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="flex items-center space-x-2"
              onClick={() => window.open('tel:+31612345678', '_self')}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Bel Ons</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
