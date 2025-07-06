
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Bankstel Reiniging - Voor & Na",
      description: "Complete transformatie van een lichtkleurig bankstel met vlekken",
      image: "/lovable-uploads/7b20d1da-b569-4f61-8cdf-4fedbfe84b27.png"
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
    },
    {
      id: 4,
      title: "Hoekbank Dieptereiniging",
      description: "Spectaculaire transformatie van een hoekbank met hardnekkige vlekken",
      image: "/lovable-uploads/51719155-02b2-499c-9ca6-ee2839adb727.png"
    },
    {
      id: 5,
      title: "Leren Bank Restauratie",
      description: "Van beschadigd leer naar perfect gereinigd resultaat",
      image: "/lovable-uploads/6e6a08e2-ef2a-4ccb-ad82-7937d1ba7185.png"
    },
    {
      id: 6,
      title: "Hoekbank Vlekverwijdering",
      description: "Complete verwijdering van hardnekkige vlekken uit hoekbank",
      image: "/lovable-uploads/e9aeab97-606c-425d-93b6-18c6d354609c.png"
    },
    {
      id: 7,
      title: "Stoelkussen Reiniging",
      description: "Professionele reiniging van stoelkussens met zichtbaar resultaat",
      image: "/lovable-uploads/8476f9e2-a77a-4719-8787-5f80c3087c32.png"
    },
    {
      id: 8,
      title: "Bankstel Vlekverwijdering",
      description: "Effectieve verwijdering van diverse vlekken uit bankstel",
      image: "/lovable-uploads/a90b2816-375f-4854-b1cb-d664e4423c2b.png"
    },
    {
      id: 9,
      title: "Lichtgekleurde Bank Reiniging",
      description: "Herstel van lichtgekleurde bank naar originele staat",
      image: "/lovable-uploads/f3391daf-67be-4673-a699-724801ab95c3.png"
    },
    {
      id: 10,
      title: "Hoekbankstel Transformatie",
      description: "Complete transformatie van een hoekbankstel met vlekken",
      image: "/lovable-uploads/df3188a7-2b77-44fc-a156-fe80dab432cb.png"
    },
    {
      id: 11,
      title: "Grote Hoekbank Reiniging",
      description: "Professionele reiniging van grote hoekbank met uitstekend resultaat",
      image: "/lovable-uploads/2dce2dfe-7017-4738-8fcf-670c3602bf27.png"
    },
    {
      id: 12,
      title: "Donkere Bank Dieptereiniging",
      description: "Intensieve reiniging van donkere bank met zichtbare verbetering",
      image: "/lovable-uploads/e2a786b9-8340-4329-a921-e303dfd4e4ba.png"
    },
    {
      id: 13,
      title: "Modulaire Bank Reiniging",
      description: "Complete reiniging van modulaire bank met perfecte resultaten",
      image: "/lovable-uploads/55273858-294e-4ee2-a0f2-49df481a4029.png"
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
              onClick={() => window.open('tel:+31613003226', '_self')}
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
