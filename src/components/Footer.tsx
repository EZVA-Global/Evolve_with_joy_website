import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-12 relative overflow-hidden">
      {/* Playful accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-logo-bg rounded-xl px-3 py-1.5">
                <span className="font-heading text-base text-cream">EWJ</span>
              </div>
              <h3 className="font-heading text-xl group-hover:text-gold transition-colors">
                Evolve With Joy
              </h3>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Transforming inner conflict into coherence and peace.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-90 hover:opacity-100 hover:text-gold transition-all">Home</Link></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:text-gold transition-all">About</Link></li>
              <li><Link to="/services" className="opacity-90 hover:opacity-100 hover:text-gold transition-all">Services</Link></li>
              <li><Link to="/blog" className="opacity-90 hover:opacity-100 hover:text-gold transition-all">Blog</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-gold transition-all">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Connect</h4>
            <a 
              href="mailto:connect@evolvewithjoy.com" 
              className="text-sm hover:text-gold transition-all inline-flex items-center gap-2 mb-4"
            >
              <Mail className="w-4 h-4" />
              connect@evolvewithjoy.com
            </a>
            <p className="text-sm opacity-90">
              Ready to begin your journey?
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Follow</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-2 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-2 transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-2 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-2 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cream/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Evolve With Joy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
