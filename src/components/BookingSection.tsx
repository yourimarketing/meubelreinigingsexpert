import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    naam: '',
    postcode: '',
    woonplaats: '',
    meubeltype: '',
    aantal: '',
    datum: '',
    telefoon: '',
    email: '',
    opmerkingen: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "We nemen binnen 24 uur contact met u op."
    });
    // Here you would typically send the form data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="boek-nu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vraag een Offerte Aan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vul onderstaand formulier in en ontvang binnen 24 uur een gratis offerte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Online Offerte Aanvragen</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="naam">Naam *</Label>
                    <Input
                      id="naam"
                      name="naam"
                      value={formData.naam}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefoon">Telefoon *</Label>
                    <Input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      value={formData.telefoon}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="woonplaats">Woonplaats *</Label>
                    <Input
                      id="woonplaats"
                      name="woonplaats"
                      value={formData.woonplaats}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="meubeltype">Meubeltype *</Label>
                    <select
                      id="meubeltype"
                      name="meubeltype"
                      value={formData.meubeltype}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Selecteer meubeltype</option>
                      <option value="bankstel">Bankstel</option>
                      <option value="stoel">Stoel</option>
                      <option value="eetkamerstoel">Eetkamerstoel</option>
                      <option value="matras">Matras</option>
                      <option value="vloerkleed">Vloerkleed</option>
                      <option value="auto-interieur">Auto-interieur</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="aantal">Aantal stuks</Label>
                    <Input
                      id="aantal"
                      name="aantal"
                      type="number"
                      value={formData.aantal}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="datum">Gewenste datum</Label>
                  <Input
                    id="datum"
                    name="datum"
                    type="date"
                    value={formData.datum}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="opmerkingen">Opmerkingen</Label>
                  <Textarea
                    id="opmerkingen"
                    name="opmerkingen"
                    value={formData.opmerkingen}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Beschrijf hier eventuele vlekken, geuren of andere bijzonderheden..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Verstuur Offerte Aanvraag
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                <p className="mb-6">Liever direct contact? Bel ons voor een snelle afspraak!</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('tel:+31613003226', '_self')}
                >
                  Bel Nu: 06 - 13 00 32 26
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                <p className="mb-6">Stuur ons een berichtje via WhatsApp voor een snelle reactie!</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/31613003226?text=Hallo, ik wil graag een offerte voor meubelreiniging', '_blank')}
                >
                  WhatsApp Ons
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Waarom Online Boeken?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Snelle reactie binnen 24 uur
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Gratis en vrijblijvende offerte
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Geen voorrijkosten
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Flexibele afspraak planning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
