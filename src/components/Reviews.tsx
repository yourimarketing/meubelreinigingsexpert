
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Maria van der Berg",
      location: "Amsterdam",
      rating: 5,
      text: "Fantastische service! Onze witte bank zag er hopeloos uit na jaren gebruik, maar nu lijkt hij weer nieuw. Zeer professioneel en vriendelijk team.",
      date: "2 weken geleden"
    },
    {
      name: "Jan Hendriks",
      location: "Rotterdam",
      rating: 5,
      text: "Snelle service en perfecte communicatie. De vlekken in onze eetkamerstoelen zijn volledig verdwenen. Absolute aanrader!",
      date: "1 maand geleden"
    },
    {
      name: "Lisa Jansen",
      location: "Utrecht",
      rating: 5,
      text: "Ons matras stonk na een ongelukje van onze kat. Dachten dat we een nieuwe moesten kopen, maar na de reiniging ruikt het weer fris!",
      date: "3 weken geleden"
    },
    {
      name: "Peter de Wit",
      location: "Den Haag",
      rating: 5,
      text: "Auto-interieur perfect gereinigd na jaren gebruik. Ziet er weer uit als nieuw. Zeer tevreden over de service en prijs-kwaliteit verhouding.",
      date: "1 week geleden"
    },
    {
      name: "Sandra Bakker",
      location: "Eindhoven",
      rating: 5,
      text: "Vriendelijke monteurs, op tijd, en het resultaat was boven verwachting. Onze vintage bank is weer prachtig!",
      date: "2 maanden geleden"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wat Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek waarom onze klanten zo enthousiast zijn over onze service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-100 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-4">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-green-700">4.9/5</span>
            </div>
            <p className="text-green-800 text-lg">
              Gebaseerd op 150+ Google Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
