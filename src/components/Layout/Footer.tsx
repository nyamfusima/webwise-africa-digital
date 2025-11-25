import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    // handle newsletter submission logic here
    console.log("Newsletter submitted:", email);
    setEmail("");
    setConsent(false);
  };

  return (
    <footer className="bg-black text-white px-4 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold font-sans">Webwise Africa</h2>
          <p className="text-gray-300 max-w-xs">
            Remote agency | Based in Cape Town | Serving clients Nationwide
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://api.whatsapp.com/send/?phone=27681566790" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.tiktok.com/@webwiseafrica" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTiktok size={20} />
            </a>
            <a href="https://x.com/webwiseafrica?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/webwiseafrica/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/webwiseafrica" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/services" className="hover:text-gray-400 transition">Services</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col gap-4 max-w-xs w-full">
          <h3 className="font-semibold text-lg">Stay Updated with the Latest</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg text-black focus:outline-none"
            />
            <label className="flex items-center gap-2 text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="w-4 h-4"
              />
              Yes, subscribe me to your newsletter.
            </label>
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Bottom Note */}
      <div className="mt-8 text-center text-gray-500 text-sm md:hidden">
        Remote agency | Based in Cape Town | Serving clients Worldwide
      </div>
    </footer>
  );
};

export default Footer;

