import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Webwise Africa</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Building digital solutions for small businesses across South Africa.
              We specialize in web design, graphic design, and digital marketing
              to help your business grow online.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-accent" />
                <span>+27 68 156 6790</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-accent" />
                <span>info@webwiseafrica.co.za</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-accent" />
                <span>South Africa (Remote Team)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-white/80 hover:text-accent transition-smooth">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-white/80 hover:text-accent transition-smooth">
                Services
              </Link>
              <Link to="/portfolio" className="block text-sm text-white/80 hover:text-accent transition-smooth">
                Portfolio
              </Link>
              <Link to="/about" className="block text-sm text-white/80 hover:text-accent transition-smooth">
                About
              </Link>
              <Link to="/contact" className="block text-sm text-white/80 hover:text-accent transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Web Design</p>
              <p>Graphic Design</p>
              <p>Digital Marketing</p>
              <p>Domain Registration</p>
              <p>Web Hosting</p>
              <p>E-commerce Solutions</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {currentYear} Webwise Africa. All rights reserved. Building digital solutions for small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
