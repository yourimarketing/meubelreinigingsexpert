
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
              className="hidden sm:flex items-center space-x-2"
              onClick={() => window.open('tel:+31613003226', '_self')}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Bel Ons</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('diensten')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Diensten
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Reviews
              </button>
              <button onClick={() => scrollToSection('boek-nu')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Boek Nu
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
                Contact
              </button>
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button 
                  className="w-full"
                  onClick={() => scrollToSection('boek-nu')}
                >
                  Offerte Aanvragen
                </Button>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('tel:+31613003226', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Bel Direct
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
