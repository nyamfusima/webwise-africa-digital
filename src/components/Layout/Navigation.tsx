import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-all relative ${
                isActive(item.path)
                  ? "text-accent"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.name}

              {/* Active underline animation */}
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://api.whatsapp.com/send/?phone=27681566790" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaWhatsapp size={18} />
          </a>
          <a href="https://x.com/webwiseafrica?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.instagram.com/webwiseafrica/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-b border-neutral-800 text-white"
          >
            <div className="container mx-auto py-4 space-y-4">

              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-2 text-base font-medium transition-all ${
                      isActive(item.path)
                        ? "text-accent"
                        : "text-white hover:text-gray-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://x.com/webwiseafrica?s=21" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://api.whatsapp.com/send/?phone=27681566790" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;




