import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      step: "1",
      title: "Contact Opnemen",
      description: "Bel ons of vul het formulier in voor een gratis offerte",
      icon: <Phone className="w-8 h-8 text-blue-600" />
    },
    {
      step: "2", 
      title: "Afspraak Plannen",
      description: "We plannen een afspraak op een moment dat u uitkomt",
      icon: <Calendar className="w-8 h-8 text-blue-600" />
    },
    {
      step: "3",
      title: "Professioneel Reinigen",
      description: "Onze experts reinigen uw meubels met professionele apparatuur",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hoe Gaan Wij Te Werk
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Een eenvoudig proces van contact tot schone meubels
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-12 last:mb-0 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className="w-full hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <div className="text-3xl font-bold text-blue-600 text-center">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-8 h-8 text-gray-300 flex-shrink-0" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;