import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, TrendingUp, CheckCircle } from "lucide-react";
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

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

        {/* Video */}
        <video
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        />

        {/* White Glows */}
        <div className="absolute inset-0 max-md:hidden">
          <div className="absolute top-0 -left-10 w-[450px] h-[450px] bg-white/20 rounded-full mix-blend-soft-light blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-10 -right-10 w-[420px] h-[420px] bg-white/20 rounded-full mix-blend-soft-light blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-white/10 rounded-full mix-blend-soft-light blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-white">
                Digital Solutions That Grow Your Business
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-gray-200 mx-auto leading-relaxed whitespace-nowrap">
              Start your online growth journey today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Black filled button */}
              <Button
                size="lg"
                className="px-4 py-2 text-sm rounded-lg bg-white text-black hover:bg-white"
              >
                Contact Us
              </Button>

              {/* White outline button */}
              <Button
                size="lg"
                className="px-4 py-2 text-sm rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-padding bg-black text-white relative overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none max-md:hidden">
          <div className="absolute -right-10 top-20 w-[350px] h-[350px] bg-white/10 blur-3xl rounded-full"></div>
          <div className="absolute -left-10 bottom-10 w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Our Services
            </h2>

            <p className="text-white/80 max-w-xl mx-auto">
              Comprehensive digital solutions designed to grow your business online
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group hover:scale-105 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-white transition-all">
                      {service.title}
                    </h3>

                    <p className="text-white/70 mb-6">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-white" />
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
            <Button
              variant="hero"
              size="lg"
              asChild
            >
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

/* animations */
<style>
{`
  @keyframes pulse {
    0%, 100% { opacity: .4; }
    50% { opacity: .7; }
  }
  .animate-pulse { animation: pulse 4s ease-in-out infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
`}
</style>
