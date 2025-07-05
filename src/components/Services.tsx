
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
      title: "Huisreiniging",
      description: "Complete huisreiniging inclusief meubels en stoffering",
      icon: "🏡"
    },
    {
      title: "Commerciële Reiniging",
      description: "Professionele reiniging voor hotels, kantoren en bedrijven",
      icon: "🏢"
    },
    {
      title: "Geurbehandeling",
      description: "Specialistische behandeling tegen geuren en bacteriën",
      icon: "🌸"
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
              className="hover-scale transition-all duration-500 hover:shadow-xl group cursor-pointer animate-fade-in bg-gradient-to-br from-white to-blue-50 hover:from-blue-50 hover:to-white border-2 hover:border-blue-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
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
