import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          controls={false}
          disablePictureInPicture
          className="w-full h-full object-cover" 
          onLoadStart={() => console.log('Video loading started')} 
          onCanPlay={() => console.log('Video can play')} 
          onError={e => {
        console.log('Video failed to load, showing fallback background');
        // Hide video if it fails to load and show animated background
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling?.nextElementSibling as HTMLElement;
        if (fallback) {
          fallback.style.display = 'block';
          console.log('Fallback background activated');
        }
      }}>
          <source src="/lovable-uploads/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
        {/* Animated fallback background - hidden by default */}
        <div className="absolute inset-0 hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-blue-400/30 animate-float"></div>
        </div>
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
            <Button size="lg" className="text-lg px-8 py-4 hover-scale" onClick={() => scrollToSection('boek-nu')}>
              Vraag Direct een Offerte Aan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover-scale" onClick={() => scrollToSection('portfolio')}>
              Bekijk Resultaten
            </Button>
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