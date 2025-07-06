
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-gray-800/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8f9b5045-d8a4-4429-9063-896083ce9c7d.png" 
              alt="Meubelreiniging Expert Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white">Meubelreiniging Expert</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/diensten" 
              className={`transition-colors ${isActive('/diensten') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
            >
              Diensten
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors ${isActive('/portfolio') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/over-ons" 
              className={`transition-colors ${isActive('/over-ons') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
            >
              Over Ons
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm"
                className="hidden sm:flex"
              >
                Offerte Aanvragen
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="sm"
                className="hidden sm:flex"
              >
                Direct Boeken
              </Button>
            </Link>
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
        <div className="md:hidden bg-gray-800 border-t border-gray-600 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors py-2 ${isActive('/') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
              >
                Home
              </Link>
              <Link 
                to="/diensten" 
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors py-2 ${isActive('/diensten') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
              >
                Diensten
              </Link>
              <Link 
                to="/portfolio" 
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors py-2 ${isActive('/portfolio') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
              >
                Portfolio
              </Link>
              <Link 
                to="/over-ons" 
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors py-2 ${isActive('/over-ons') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
              >
                Over Ons
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors py-2 ${isActive('/contact') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'}`}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-600 space-y-3">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full">
                    Offerte Aanvragen
                  </Button>
                </Link>
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
