
import React from 'react';

const ServiceAreas = () => {
  const cities = [
    "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", 
    "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn", "Haarlem", 
    "Arnhem", "Zaanstad", "Amersfoort", "Zwolle", "Enschede", "Maastricht",
    "Dordrecht", "Leiden", "Zoetermeer", "Alphen aan den Rijn", "Emmen", 
    "Westland", "Delft", "Venlo", "Deventer", "Alkmaar", "Leeuwarden", 
    "Hilversum", "Amstelveen", "Heerlen", "Purmerend", "Assen", "Roosendaal",
    "Schiedam", "Spijkenisse", "Helmond", "Gouda", "Nieuwegein", "Vlaardingen"
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actief in Heel Nederland
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Onze professionele meubelreinigingsdiensten zijn beschikbaar in alle Nederlandse steden en gemeenten
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Onder andere actief in:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-center">
              {cities.map((city, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-3 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Staat uw woonplaats er niet bij? Geen probleem!
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Wij komen door heel Nederland - geen voorrijkosten!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gratis Offerte Aanvragen
            </h3>
            <p className="text-gray-600 mb-6">
              Waar u ook woont in Nederland, wij komen gratis bij u langs voor een offerte
            </p>
            <button 
              onClick={() => document.getElementById('boek-nu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Vraag Nu een Offerte Aan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
