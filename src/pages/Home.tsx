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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* Video Background */}
        <video
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-10 w-[450px] h-[450px] bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-10 -right-10 w-[420px] h-[420px] bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}
        <div className="container-width text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                Digital Solutions That Grow Your Business
              </span>
            </h1>

            <p className="text-xl md:text-lg mb-8 text-white/80 max-w-xl mx-auto leading-relaxed">
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

      {/* SERVICES SECTION */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-10 top-20 w-[350px] h-[350px] bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="absolute -left-10 bottom-10 w-[300px] h-[300px] bg-cyan-600/20 blur-3xl rounded-full"></div>
        </div>

        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* UPDATED TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white">
              Our Services
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to grow your business online
            </p>
          </motion.div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group hover:scale-105 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* UPDATED CARD TITLE */}
                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white group-hover:from-blue-300 group-hover:to-cyan-300 transition-all">
                      {service.title}
                    </h3>

                    <p className="text-white/70 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;

/* Animations */
<style>
{`
  @keyframes pulse {
    0%, 100% { opacity: .4; }
    50% { opacity: .7; }
  }

  .animate-pulse {
    animation: pulse 4s ease-in-out infinite;
  }

  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
`}
</style>


