import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Before/After Slider Background */}
      <div className="absolute inset-0 w-full h-full">
        <BeforeAfterSlider
          beforeImage="/lovable-uploads/cea1426b-7648-4063-acc7-68834848b896.png"
          afterImage="/lovable-uploads/4858c318-6195-4a05-a415-e63cbb915453.png"
          beforeAlt="Vieze bank voor reiniging"
          afterAlt="Schone bank na professionele reiniging"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-blue-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Professionele 
            <span className="text-blue-300 block">Meubelreiniging</span>
            in Heel Nederland
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Vlekken? Geuren? Geef jouw meubels een tweede leven!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4 hover-scale">
                Vraag Direct een Offerte Aan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover-scale">
                Bekijk Resultaten
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="drop-shadow-sm">100% Tevredenheidsgarantie</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="drop-shadow-sm">Binnen 24 uur afspraak</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="drop-shadow-sm">Geen voorrijkosten</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;