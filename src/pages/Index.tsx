
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Meubelreiniging door Experts | Heel Nederland | Meubelreiniginsexpert.nl";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionele meubelreiniging in heel Nederland. Bank, stoel of matras laten reinigen? Vraag direct een offerte aan. Binnen 24 uur geholpen!');
    }

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Meubelreiniging Expert",
      "image": "https://meubelreiniginsexpert.nl/logo.png",
      "telephone": "+31-6-13003226",
      "email": "info@meubelreiniginsexpert.nl",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NL",
        "addressRegion": "Nederland"
      },
      "areaServed": "Nederland",
      "description": "Professionele meubelreiniging diensten door heel Nederland",
      "priceRange": "€€",
      "serviceType": "Meubelreiniging",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Meubelreiniging Diensten",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bankstel reinigen"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Stoel reinigen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Matras reinigen"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Quick Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professionele meubelreiniging voor alle soorten meubels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛋️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bankstel Reinigen</h3>
              <p className="text-gray-600">Dieptereiniging van uw bankstel met professionele apparatuur</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛏️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Matras Reinigen</h3>
              <p className="text-gray-600">Hygiënische reiniging voor een gezonde nachtrust</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🪑</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stoelen Reinigen</h3>
              <p className="text-gray-600">Van eetkamerstoelen tot bureaustoelen</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/diensten">
              <Button size="lg" className="text-lg px-8 py-4">
                Bekijk Alle Diensten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Waarom Meubelreiniging Expert?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">100% Garantie</h3>
                <p className="text-sm text-gray-600">Tevredenheidsgarantie op al onze diensten</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">24h</span>
                </div>
                <h3 className="font-semibold mb-2">Snelle Service</h3>
                <p className="text-sm text-gray-600">Binnen 24 uur een afspraak mogelijk</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Ervaren Team</h3>
                <p className="text-sm text-gray-600">Jaren ervaring in meubelreiniging</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">NL</span>
                </div>
                <h3 className="font-semibold mb-2">Heel Nederland</h3>
                <p className="text-sm text-gray-600">Service door het hele land</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Bekijk Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-4">
                  Vraag Offerte Aan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
