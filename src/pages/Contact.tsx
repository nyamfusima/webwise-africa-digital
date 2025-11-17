import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi Webwise Africa! I'm interested in your services. ${
      formData.name ? `My name is ${formData.name}.` : ''
    } ${
      formData.service ? `I'm looking for ${formData.service}.` : ''
    } Please get in touch with me.`;
    
    const whatsappUrl = `https://wa.me/27681566790?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+27 68 156 6790",
      description: "Mon-Fri 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@webwiseafrica.co.za",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "South Africa",
      description: "Remote team serving nationwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  const services = [
    "Web Design",
    "E-commerce Website",
    "Graphic Design",
    "Digital Marketing",
    "Domain & Hosting",
    "Website Maintenance",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Ready to start your digital journey? We'd love to hear about your project 
              and discuss how we can help your business grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="rounded-xl border-0 bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="w-6 h-6 mr-3 text-blue-300" /> Send Us a Message
                  </CardTitle>
                  <p className="text-white/80">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-black text-white border-0 focus:ring-2 focus:ring-blue-400 transition-smooth"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="bg-black text-white border-0 focus:ring-2 focus:ring-blue-400 transition-smooth"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+27 XX XXX XXXX"
                          className="bg-black text-white border-0 focus:ring-2 focus:ring-blue-400 transition-smooth"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-black text-white border-0 rounded-lg focus:ring-2 focus:ring-blue-400 transition-smooth"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        required
                        className="bg-black text-white border-0 resize-none focus:ring-2 focus:ring-blue-400 transition-smooth"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="hero"
                        size="lg"
                        onClick={handleWhatsApp}
                        className="flex-1"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp Us
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white rounded-xl border-0 shadow-xl">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="font-medium">{info.value}</p>
                      <p className="text-white/70 text-sm">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white rounded-xl border-0 shadow-xl">
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">Why Choose Us?</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {["Free initial consultation", "Transparent pricing, no hidden costs", "24/7 support after launch", "Local South African expertise"].map(item => (
                      <li key={item} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white rounded-xl border-0 shadow-xl text-center">
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Need an immediate response? Send us a WhatsApp message for instant communication.
                  </p>
                  <Button variant="hero" size="sm" onClick={handleWhatsApp} className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { question: "How long does it take to build a website?", answer: "Most websites are completed within 2-4 weeks, depending on complexity and content requirements." },
              { question: "Do you provide ongoing support?", answer: "Yes! All our packages include support ranging from 1-6 months, with ongoing maintenance options available." },
              { question: "Can you help with domain and hosting?", answer: "Absolutely! We offer domain registration (R90/year) and reliable hosting (R200/month) services." },
              { question: "Do you work with businesses outside South Africa?", answer: "While we focus on South African businesses, we're open to working with international clients who appreciate our approach." },
              { question: "What's included in your e-commerce packages?", answer: "Our e-commerce solutions include payment gateway integration, inventory management, customer accounts, and marketing tools." },
              { question: "Can I update my website myself?", answer: "Yes! We build user-friendly content management systems that allow you to easily update content, images, and more." }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-xl border-0 shadow-xl bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

