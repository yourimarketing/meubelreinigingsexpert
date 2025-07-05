import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, MessageSquare, CheckCircle } from 'lucide-react';

const WhatsAppPhotos = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stuur Foto's via WhatsApp
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Voor een snellere en accuratere offerte, stuur ons foto's van uw meubels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Card className="bg-green-600 text-white hover:shadow-2xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-3xl font-bold mb-6">WhatsApp Ons Direct</h3>
                <p className="text-lg mb-8 opacity-90">
                  Stuur foto's van vlekken, geuren of schade en ontvang direct advies!
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="w-full text-lg py-4"
                  onClick={() => window.open('https://wa.me/31613003226?text=Hallo, ik wil graag foto\'s sturen voor een offerte', '_blank')}
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  WhatsApp: 06 - 13 00 32 26
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Waarom Foto's Sturen?</h3>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Nauwkeurige Offerte</h4>
                <p className="text-gray-600">We kunnen precies zien wat er gereinigd moet worden</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Snellere Service</h4>
                <p className="text-gray-600">Minder tijd nodig voor inspectie ter plaatse</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Direct Advies</h4>
                <p className="text-gray-600">Onmiddellijke tips en reinigingsadvies</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-gray-900 mb-2">💡 Tip:</h4>
              <p className="text-gray-700">
                Maak foto's bij daglicht voor de beste kwaliteit. Toon zowel overzicht als detail shots van vlekken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppPhotos;