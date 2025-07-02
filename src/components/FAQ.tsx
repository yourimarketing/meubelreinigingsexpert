
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Hoe lang duurt een bankstelreiniging?",
      answer: "Een gemiddelde bankstelreiniging duurt 2-4 uur, afhankelijk van de grootte en vervuiling. We zorgen ervoor dat u zo min mogelijk last heeft van onze werkzaamheden."
    },
    {
      question: "Hoe snel kan ik een afspraak krijgen?",
      answer: "We streven ernaar om binnen 24 uur een afspraak in te plannen. In de meeste gevallen kunnen we binnen 2-3 werkdagen bij u langs komen voor de reiniging."
    },
    {
      question: "Is de reiniging veilig voor kinderen en huisdieren?",
      answer: "Ja, wij gebruiken uitsluitend milieuvriendelijke en veilige reinigingsmiddelen die geen schadelijke stoffen bevatten. Uw gezin en huisdieren kunnen veilig in huis blijven tijdens de reiniging."
    },
    {
      question: "Wat als ik niet tevreden ben met het resultaat?",
      answer: "Wij bieden 100% tevredenheidsgarantie. Bent u niet tevreden? Dan komen we gratis terug om het probleem op te lossen of krijgt u uw geld terug."
    },
    {
      question: "Hoeveel kost een meubelreiniging?",
      answer: "De kosten zijn afhankelijk van het type meubel, de grootte en de vervuiling. We geven altijd een gratis offerte vooraf. Bankstellen vanaf €75, stoelen vanaf €25 per stuk."
    },
    {
      question: "Hoe lang moet ik wachten voordat ik het meubel weer kan gebruiken?",
      answer: "De droogtijd is gemiddeld 4-6 uur. We gebruiken professionele apparatuur die de droogtijd verkort. U krijgt altijd duidelijke instructies mee."
    },
    {
      question: "Komen jullie ook bij commerciële klanten?",
      answer: "Ja, wij verzorgen ook de reiniging voor hotels, restaurants, kantoren en andere bedrijven. We hebben speciale tarieven voor zakelijke klanten."
    },
    {
      question: "Welke betalingsmogelijkheden zijn er?",
      answer: "U kunt contant betalen, via pin of achteraf betalen via factuur. Voor zakelijke klanten is betaling op rekening mogelijk."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Heeft u vragen? Hier vindt u antwoorden op de meest gestelde vragen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Heeft u een andere vraag? Neem gerust contact met ons op!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:+31612345678', '_self')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Bel Ons Direct
            </button>
            <button 
              onClick={() => window.open('https://wa.me/31612345678?text=Hallo, ik heb een vraag over meubelreiniging', '_blank')}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              WhatsApp Ons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
