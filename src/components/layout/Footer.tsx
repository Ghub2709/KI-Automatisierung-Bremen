import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                KI
              </div>
              <span className="font-heading font-bold text-xl text-white">
                KI-Automatisierung
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-xs">
              Für Solopreneure und kleine Unternehmen in Bremen: KI-Automatisierung ohne Lernkurve. Wir implementieren, Sie profitieren – und konzentrieren sich auf das, was keine KI jemals übernehmen kann: Ihre persönliche Beziehung zu Ihren Kunden.
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white">Unternehmen</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-neutral-400 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-neutral-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-neutral-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-neutral-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white">Kontakt</h4>
            <address className="not-italic text-neutral-400 space-y-3">
              <p>
                <span className="block text-neutral-200 mb-1">E-Mail:</span>
                <a href="mailto:kontakt@ki-automatisierung-bremen.de" className="hover:text-white transition-colors">
                  kontakt@ki-automatisierung-bremen.de
                </a>
              </p>
              <p>
                <span className="block text-neutral-200 mb-1">Telefon:</span>
                <a href="tel:+491632099861" className="hover:text-white transition-colors">
                  +49 163 209 98 61
                </a>
              </p>
              <p>
                <span className="block text-neutral-200 mb-1">Standort:</span>
                Bremen, Deutschland
              </p>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            © {currentYear} KI-Automatisierung Bremen. Alle Rechte vorbehalten.
          </p>
          
          {/* Social Icons - You can add these if needed */}
          <div className="flex space-x-4">
            {/* 
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition-colors">
              Icon
            </a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 