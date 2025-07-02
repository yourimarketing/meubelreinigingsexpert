
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Shield, Users, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "100% Tevredenheidsgarantie",
      description: "Niet tevreden? Dan komen we terug zonder extra kosten"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Geen Voorrijkosten",
      description: "Gratis inspectie en offerte door heel Nederland"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Binnen 24 Uur",
      description: "Snelle afspraak planning, vaak nog dezelfde week"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Gecertificeerde Specialisten",
      description: "Ervaren professionals met jarenlange expertise"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Milieuvriendelijk",
      description: "Veilige, biologische reinigingsmiddelen"
    }
  ];

  const stats = [
    { number: "2000+", label: "Banken Gereinigd" },
    { number: "10+", label: "Jaar Ervaring" },
    { number: "98%", label: "Tevreden Klanten" },
    { number: "24/7", label: "Service" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor Ons?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek waarom duizenden klanten voor ons kiezen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover-scale transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
