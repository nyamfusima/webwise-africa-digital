import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // ✅ Add your own icons here

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left: Navigation Links */}
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

        {/* Center: Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-xl font-bold">Webwise Africa</span>
        </Link>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://facebook.com/webwiseafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://instagram.com/webwiseafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://linkedin.com/company/webwiseafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin size={18} />
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

              {/* Social icons in mobile menu */}
              <div className="flex justify-center space-x-6 pt-4">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

