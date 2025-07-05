import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale p-0"
        onClick={() => window.open('https://wa.me/31613003226?text=Hallo, ik wil graag contact opnemen voor meubelreiniging', '_blank')}
        aria-label="WhatsApp contact"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Phone Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale p-0"
        onClick={() => window.open('tel:+31613003226', '_self')}
        aria-label="Bel direct"
      >
        <Phone className="w-6 h-6" />
      </Button>

      {/* Mobile Labels */}
      <div className="hidden sm:flex flex-col gap-3 absolute right-16 top-0">
        <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
          WhatsApp
        </div>
        <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
          Direct Bellen
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;