import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import CleaningSteps from '@/components/CleaningSteps';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Diensten = () => {
  useEffect(() => {
    document.title = "Onze Diensten | Meubelreiniging Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ontdek onze professionele meubelreiniging diensten. Van bankstel tot matras reinigen - wij maken uw meubels weer als nieuw!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Services />
        <HowWeWork />
        <CleaningSteps />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Diensten;