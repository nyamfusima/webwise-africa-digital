import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, TrendingUp, CheckCircle, Star } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

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
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.9) 0%, rgba(29, 53, 87, 0.7) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-width text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Webwise Africa
              <span className="block text-accent text-3xl md:text-4xl mt-2">
                Building Digital Solutions for Small Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional web design, graphic design, and digital marketing services 
              to help your South African business succeed online.
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

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-16 h-16 bg-accent/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-12 h-12 bg-white/10 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="h-full hover:elevated-shadow transition-smooth group hover:scale-105 subtle-gradient border-0">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 service-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-lg">
                      <service.icon className="w-8 h-8 text-white transition-smooth" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span>{feature}</span>
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
            <Button variant="primary" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients across South Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full soft-shadow hover:elevated-shadow transition-smooth subtle-gradient border-0">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join over 500+ satisfied clients who have transformed their digital presence with Webwise Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;