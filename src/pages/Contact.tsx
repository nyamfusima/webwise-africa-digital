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
    { icon: Phone, title: "Phone", value: "+27 68 156 6790", description: "Mon-Fri 8:00 AM - 6:00 PM" },
    { icon: Mail, title: "Email", value: "info@webwiseafrica.co.za", description: "We'll respond within 24 hours" },
    { icon: MapPin, title: "Location", value: "South Africa", description: "Remote team serving nationwide" },
    { icon: Clock, title: "Response Time", value: "Within 24 hours", description: "Quick turnaround guaranteed" }
  ];

  const services = [
    "Web Design", "E-commerce Website", "Graphic Design", 
    "Digital Marketing", "Domain & Hosting", "Website Maintenance", "Other"
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-black text-white">
        <div className="container-width text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
              Ready to start your digital journey? We'd love to hear about your project and discuss how we can help your business grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white text-black">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <Card className="rounded-xl border shadow-md bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="w-6 h-6 mr-3 text-black" /> Send Us a Message
                  </CardTitle>
                  <p className="text-black/70">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Full Name *" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" />
                      <InputGroup label="Email Address *" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" type="email" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Phone Number" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+27 XX XXX XXXX" />
                      <div>
                        <label className="block text-sm font-medium mb-2">{`Service Interested In`}</label>
                        <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg text-black">
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe your project..." rows={6} className="w-full border rounded-lg p-2 text-black" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" variant="primary" size="lg" className="flex-1">{isSubmitting ? "Sending..." : "Send Message"}</Button>
                      <Button type="button" variant="secondary" size="lg" onClick={handleWhatsApp} className="flex-1">WhatsApp Us</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
              {contactInfo.map(info => (
                <Card key={info.title} className="rounded-xl border shadow-md bg-white text-black">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center"><info.icon className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p>{info.value}</p>
                      <p className="text-sm text-black/70">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white text-black">
        <div className="container-width text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">Quick answers to common questions about our services and process</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { q: "How long does it take to build a website?", a: "Most websites are completed within 2-4 weeks." },
            { q: "Do you provide ongoing support?", a: "Yes, we offer support ranging from 1-6 months." },
            { q: "Can you help with domain and hosting?", a: "Yes, we provide domain registration and hosting services." },
            { q: "Do you work with businesses outside South Africa?", a: "Yes, we work with international clients." },
            { q: "What's included in your e-commerce packages?", a: "Payment gateway, inventory management, customer accounts, marketing tools." },
            { q: "Can I update my website myself?", a: "Yes, we build user-friendly CMS to easily update content." }
          ].map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Card className="rounded-xl border shadow-md bg-white text-black">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-sm text-black/70">{faq.a}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

// Helper for input groups
const InputGroup = ({ label, id, name, value, onChange, placeholder, type = "text" }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
    <Input id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full border rounded-lg p-2 text-black" />
  </div>
);



