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
                className="px-4 py-2 text-sm rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black"
              >
                Contact Us
              </Button>

              {/* White outline button */}
              <Button
                size="lg"
                className="px-4 py-2 text-sm rounded-lg bg-white text-black hover:bg-white"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
<section className="section-padding relative overflow-hidden px-4 bg-black text-white">
  <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left: Video */}
    <div className="w-full md:w-1/2">
      <video
        src={heroBg} // Replace with your About Us video if different
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Who We Are
        </h2>
        <p className="text-white/80 mb-6 leading-relaxed">
          We are a remote web design agency focused on building modern, functional websites. Our team values simplicity, creativity, and results. We’re here to bring your digital ideas to life through clean design and smart solutions.
        </p>
        <Button
          size="md"
          className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black"
        >
          About Us
        </Button>
      </motion.div>
    </div>
  </div>
</section>



      {/* SERVICES SECTION */}
<section
  className="section-padding text-white relative overflow-hidden px-4"
  style={{
    background: `
      radial-gradient(circle at 20.666667620340984% 42.000020345052086%, #000000 0%, 17.5%, rgba(0,0,0,0) 35%),
      radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #000000 0%, 20%, rgba(0,0,0,0) 40%),
      radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(111,126,255,0.99) 0%, 25%, rgba(111,126,255,0) 50%),
      radial-gradient(circle at 6.129557291666667% 14.518229166666666%, #000000 0%, 42%, rgba(0,0,0,0) 70%),
      radial-gradient(circle at 94.14388020833333% 12.750651041666666%, #000000 0%, 42%, rgba(0,0,0,0) 70%),
      radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)
    `
  }}
>
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
        We’re a creative web design agency that builds modern, user-friendly websites for businesses of all kinds. Our team combines design, development, and digital tools to help brands grow online. We value clarity, functionality, and great design — and this site showcases the services and solutions we deliver to bring your ideas to life.
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
          <Card className="h-full bg-white/5 backdrop-blur-md border border-white hover:border-white/80 hover:bg-white/10 transition-all duration-300 group hover:scale-105 rounded-2xl">
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
