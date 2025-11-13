import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, TrendingUp, CheckCircle, Star } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/bg-video.mp4";

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Professional, responsive websites that convert visitors into customers.",
      features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "User-Friendly"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Eye-catching visuals that represent your brand professionally.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic online marketing to grow your business reach.",
      features: ["Social Media Marketing", "Content Strategy", "SEO Services", "Online Advertising"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Bakery",
      content: "Webwise Africa transformed our online presence. Our website is beautiful and our sales have increased by 40%.",
      rating: 5
    },
    {
      name: "David Miller",
      business: "Miller Construction",
      content: "Professional service and excellent results. They understood our needs and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Lisa van der Merwe",
      business: "Boutique Florist",
      content: "The team at Webwise Africa is fantastic. Our new e-commerce site has revolutionized our business.",
      rating: 5
    }
  ];

  return (
    <Layout>

      {/* ✅ HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="container-width text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white text-3xl md:text-4xl mt-2">
                Digital Solutions That Grow Your Business
              </span>
            </h1>

            <p className="text-xl md:text-1xl mb-8 text-white/90 max-w-1xl mx-auto leading-relaxed">
              Delivering Modern Web Experiences That Help Brands Succeed Online
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        
      </section>
      {/* ✅ END HERO SECTION */}


      {/* ✅ SERVICES SECTION */}
      <section className="section-padding bg-black text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to grow your business online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-transparent border border-white/20 hover:border-accent transition-all duration-300 group hover:scale-105 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-all">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials and CTA stay unchanged */}
      {/* ... (keep your existing testimonials and CTA sections as they are) ... */}
    </Layout>
  );
};

export default Home;
