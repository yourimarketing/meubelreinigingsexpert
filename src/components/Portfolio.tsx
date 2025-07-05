
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Bankstel Reiniging - Voor & Na",
      description: "Complete transformatie van een lichtkleurig bankstel met vlekken",
      image: "/lovable-uploads/d45d549e-dee5-4df5-a570-08b551e79167.png"
    },
    {
      id: 2,
      title: "Trapbekleding Reiniging - Voor & Na",
      description: "Professionele reiniging van trapbekleding met vlekverwijdering",
      image: "/lovable-uploads/a6147c31-8d70-4180-9379-8fb718137823.png"
    },
    {
      id: 3,
      title: "Stoelen Reiniging - Voor & Na",
      description: "Grondige reiniging van stoelen met zichtbare resultaten",
      image: "/lovable-uploads/03cdd1ae-9e78-4ecb-b039-a298737fe29f.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voor & Na Resultaten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek de kracht van professionele meubelreiniging door onze resultaten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card key={item.id} className="hover-scale transition-all duration-500 hover:shadow-xl animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    VOOR & NA
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Wilt u ook zulke resultaten? Vraag een vrijblijvende offerte aan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('boek-nu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Offerte Aanvragen
            </button>
            <button 
              onClick={() => window.open('tel:+31612345678', '_self')}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Direct Bellen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
