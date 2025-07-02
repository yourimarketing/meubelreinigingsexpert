
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Bankstel Reinigen",
      description: "Professionele reiniging van alle soorten bankstellen en hoekbanken",
      icon: "🛋️"
    },
    {
      title: "Stoel & Eetkamerstoel",
      description: "Grondige reiniging van stoelen en eetkamerstoelen",
      icon: "🪑"
    },
    {
      title: "Vloerkleden & Tapijt",
      description: "Diepe reiniging van vloerkleden en tapijten",
      icon: "🏠"
    },
    {
      title: "Auto-interieur",
      description: "Complete reiniging van autostoelen en interieur",
      icon: "🚗"
    },
    {
      title: "Matrasreiniging",
      description: "Hygiënische reiniging van matrassen",
      icon: "🛏️"
    },
    {
      title: "Commerciële Reiniging",
      description: "Professionele reiniging voor hotels, kantoren en bedrijven",
      icon: "🏢"
    }
  ];

  return (
    <section id="diensten" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gespecialiseerd in professionele meubelreiniging met jarenlange ervaring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-scale transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
