
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Bankstel Reiniging - Voor & Na",
      description: "Complete transformatie van een lichtkleurig bankstel met vlekken",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Matras Dieptereiniging",
      description: "Hygiënische reiniging van een matras met vlekverwijdering",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Eetkamerstoelen Renovatie",
      description: "Professionele reiniging van design eetkamerstoelen",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Auto-interieur Reiniging",
      description: "Complete reiniging van leren autostoelen",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Vloerkleed Restauratie",
      description: "Diepe reiniging van een vintage Perzisch tapijt",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg"
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

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                          <img 
                            src={item.beforeImage} 
                            alt={`Voor - ${item.title}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            VOOR
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={item.afterImage} 
                            alt={`Na - ${item.title}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            NA
                          </div>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
