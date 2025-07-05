import React from 'react';
import { Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">Meubelreiniging Expert</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professionele meubelreiniging door heel Nederland. Geef uw meubels een tweede leven!
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+316 13 00 32 26</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@meubelreiniginsexpert.nl</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bankstel reinigen</li>
              <li>Stoel reinigen</li>
              <li>Matras reinigen</li>
              <li>Vloerkleed reinigen</li>
              <li>Auto-interieur reinigen</li>
              <li>Commerciële reiniging</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Snel Contact</h3>
            <div className="space-y-4">
              <button onClick={() => window.open('tel:+31612345678', '_self')} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Direct Bellen
              </button>
              <button onClick={() => window.open('https://wa.me/31612345678?text=Hallo, ik wil graag een offerte voor meubelreiniging', '_blank')} className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                WhatsApp
              </button>
              <button onClick={() => document.getElementById('boek-nu')?.scrollIntoView({
              behavior: 'smooth'
            })} className="w-full border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Offerte Aanvragen
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bedrijfsinfo</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>KvK: 12345678</p>
              <p>BTW: NL123456789B01</p>
              <p>Verzekerd & Gecertificeerd</p>
              <p>100% Tevredenheidsgarantie</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Meubelreiniging Expert. Alle rechten voorbehouden.
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacyverklaring</a>
              <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;