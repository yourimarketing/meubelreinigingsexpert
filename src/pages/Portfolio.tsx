import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import WhatsAppPhotos from '@/components/WhatsAppPhotos';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfolio & Reviews | Meubelreiniging Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bekijk onze portfolio met voor en na foto\'s van meubelreiniging projecten en lees reviews van tevreden klanten.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Portfolio />
        <WhatsAppPhotos />
        <Reviews />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PortfolioPage;