import React, { useEffect } from 'react';
import Header from '@/components/Header';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Breadcrumbs from '@/components/Breadcrumbs';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact & Boeken | Meubelreiniging Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Neem contact op voor een offerte of boek direct een afspraak voor professionele meubelreiniging in heel Nederland.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      <main className="pt-4">
        <BookingSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;