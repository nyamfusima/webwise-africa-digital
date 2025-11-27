import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaTiktok, 
  FaXTwitter 
} from "react-icons/fa6";
import favicon from "@/assets/icon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hidden, setHidden] = useState(false);

  // Hide navbar on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-lg"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
<Link to="/" className="flex items-center">
  <img 
    src={favicon} 
    alt="Webwise Africa Logo" 
    className="h-20 w-auto object-contain" // <-- enlarged from h-10 to h-20
  />
</Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium relative transition-all ${
                isActive(item.path) ? "text-white" : "text-white hover:text-gray-300"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://api.whatsapp.com/send/?phone=27681566790" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaWhatsapp size={18} /></a>
          <a href="https://www.instagram.com/webwiseafrica/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaInstagram size={18} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaTiktok size={18} /></a>
          <a href="https://x.com/webwiseafrica?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaXTwitter size={18} /></a>
        </div>

        {/* Mobile Menu Button — UPDATED SIZE */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Nav */}
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
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      isActive(item.path) ? "text-white" : "text-white hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 text-white">
                <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
                <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
                <a href="https://x.com" target="_blank"><FaXTwitter /></a>
                <a href="https://api.whatsapp.com/send/?phone=27681566790" target="_blank"><FaWhatsapp /></a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;








