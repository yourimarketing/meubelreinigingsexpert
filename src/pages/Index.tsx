
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import WhatsAppPhotos from '@/components/WhatsAppPhotos';
import CleaningSteps from '@/components/CleaningSteps';
import WhyChooseUs from '@/components/WhyChooseUs';
import BookingSection from '@/components/BookingSection';
import Portfolio from '@/components/Portfolio';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';

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
      <Services />
      <HowWeWork />
      <WhatsAppPhotos />
      <CleaningSteps />
      <WhyChooseUs />
      <BookingSection />
      <Portfolio />
      <Reviews />
      <FAQ />
      <ServiceAreas />
      <Footer />
    </div>
  );
};

export default Index;
