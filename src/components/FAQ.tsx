import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Hoe werkt het bestelproces?",
      answer: "Het is heel eenvoudig! Stuur ons foto's van uw meubels via WhatsApp of vul ons online formulier in. Binnen 24 uur ontvangt u een gratis en vrijblijvende offerte. Na akkoord plannen we een afspraak op een moment dat u uitkomt."
    },
    {
      question: "Welke meubels kunnen jullie reinigen?",
      answer: "Wij reinigen alle soorten gestoffeerde meubels: banken, stoelen, eetkamerstoelen, matrassen, vloerkleden, auto-interieurs en meer. Ons team heeft ervaring met verschillende materialen zoals leer, stof, microfibra en velours."
    },
    {
      question: "Hoeveel kost een meubelreiniging?",
      answer: "De kosten zijn afhankelijk van het type meubel, de grootte en de vervuiling. Een eenpersoons stoel start vanaf €35, een 3-zits bank vanaf €85. U ontvangt altijd eerst een gratis offerte zonder verplichtingen."
    },
    {
      question: "Hoe lang duurt de reiniging?",
      answer: "De reinigingstijd varieert per meubel. Een stoel duurt gemiddeld 30-45 minuten, een bank 1-2 uur. Uw meubels zijn na de reiniging meestal binnen 2-4 uur weer droog en bruikbaar."
    },
    {
      question: "Zijn de reinigingsmiddelen veilig?",
      answer: "Absoluut! Wij gebruiken alleen professionele, milieuvriendelijke en huisdierveilige reinigingsmiddelen. Alle producten zijn dermatologisch getest en veilig voor kinderen en huisdieren."
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer: "Wij bieden 100% tevredenheidsgarantie! Bent u niet volledig tevreden met het resultaat? Dan komen wij gratis terug om het opnieuw te doen. Uw tevredenheid staat bij ons voorop."
    },
    {
      question: "Moet ik thuis zijn tijdens de reiniging?",
      answer: "Voor de meeste reinigingen is het handig als u thuis bent, maar dit is niet altijd noodzakelijk. Wij kunnen ook afspraken maken waarbij u de sleutel achterlaat. Dit bespreken we vooraf met u."
    },
    {
      question: "Werken jullie door heel Nederland?",
      answer: "Ja, wij werken door heel Nederland! Van Amsterdam tot Maastricht, van Groningen tot Vlissingen. Voor sommige locaties hanteren wij wel een minimum bedrag. Dit vertellen we u eerlijk bij de offerte."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u nog vragen? Hier vindt u antwoorden op de meest gestelde vragen over onze meubelreiniging service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Heeft u nog andere vragen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:+31232341949', '_self')}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors"
            >
              Bel ons direct: +31 23 234 1949
            </button>
            <button 
              onClick={() => window.open('https://wa.me/31232341949?text=Hallo, ik heb een vraag over meubelreiniging', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              WhatsApp ons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;