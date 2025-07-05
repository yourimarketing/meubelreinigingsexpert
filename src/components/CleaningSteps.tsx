import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Wind, Sparkles, ShieldCheck, Eye, Zap } from 'lucide-react';

const CleaningSteps = () => {
  const steps = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Inspectie & Analyse",
      description: "We inspecteren het meubelstuk en bepalen het beste reinigingsproces",
      details: ["Materiaal herkenning", "Vlekken analyse", "Conditie beoordeling"]
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-600" />,
      title: "Stofzuigen & Voorbehandeling", 
      description: "Grondige stofzuiging en voorbehandeling van vlekken",
      details: ["Diepe stofzuiging", "Vlek voorbehandeling", "Geur neutralisatie"]
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Professionele Reiniging",
      description: "Gebruik van professionele reinigingsapparatuur en -middelen",
      details: ["Hete water extractie", "Eco-vriendelijke middelen", "Diepe reiniging"]
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Sneldroging",
      description: "Krachtige ventilatie voor snelle droging",
      details: ["Professionele ventilatoren", "Snelle droogtijd", "Geen waterschade"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Bescherming & Afwerking",
      description: "Optionele beschermlaag voor langdurige bescherming",
      details: ["Vlekbescherming", "Geur eliminatie", "Kwaliteitscontrole"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Eindresultaat",
      description: "Schone, frisse meubels zoals nieuw",
      details: ["100% schoon", "Geen residuen", "Langdurig resultaat"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Onze Reinigingsstappen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Een bewezen 6-stappen proces voor perfecte resultaten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-500 hover-scale group animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Stap {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-4">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Waarom Ons Proces Werkt</h3>
            <p className="text-gray-600 mb-4">
              Met meer dan 10 jaar ervaring hebben we dit proces geperfectioneerd voor optimale resultaten bij elke reiniging.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Vlekken verwijderd</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Tevreden klanten</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningSteps;