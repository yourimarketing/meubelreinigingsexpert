import React, { useEffect } from 'react';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const OverOns = () => {
  useEffect(() => {
    document.title = "Over Ons | Meubelreiniging Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leer meer over Meubelreiniging Expert. Waarom kiezen voor ons? Bekijk onze service gebieden en veelgestelde vragen.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <WhyChooseUs />
        <FAQ />
        <ServiceAreas />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default OverOns;