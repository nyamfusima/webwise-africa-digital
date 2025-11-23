import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Palette, 
  TrendingUp, 
  CheckCircle, 
  Globe, 
  Server,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const cardsGradient =
    "bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white shadow-xl border-0";

  const packages = [
    {
      name: "Starter",
      price: "From R3,500",
      description: "Perfect for small businesses getting started online",
      features: [
        "3-5 Page Website",
        "Mobile Responsive Design", 
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "1 Month Support"
      ],
      popular: false,
    },
    {
      name: "Standard", 
      price: "From R5000",
      description: "Ideal for established businesses wanting more features",
      features: [
        "5-10 Page Website",
        "Professional Design",
        "Advanced SEO",
        "Blog Setup",
        "Analytics Integration",
        "3 Months Support",
        "Content Management System"
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "From R10,000",
      description: "Complete e-commerce solution for growing businesses",
      features: [
        "Up to 15 Pages",
        "E-commerce Functionality",
        "Payment Gateway Integration",
        "Inventory Management",
        "Customer Accounts",
        "6 Months Support",
        "Marketing Tools",
        "Advanced Analytics"
      ],
      popular: false,
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Domain Registration",
      price: "R90/year",
      description: "Secure your perfect domain name with our registration service."
    },
    {
      icon: Server,
      title: "Web Hosting",
      price: "R200/month",
      description: "Reliable, fast hosting with 99.9% uptime guarantee."
    }
  ];

  const detailedServices = [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Custom websites built to convert visitors into customers",
      features: [
        "Custom Design & Development",
        "Mobile-First Responsive Design",
        "Search Engine Optimization",
        "Fast Loading & Performance",
        "Content Management System",
        "E-commerce Integration",
        "Analytics & Tracking Setup",
        "Ongoing Maintenance & Support"
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional visuals that make your brand stand out",
      features: [
        "Logo Design & Brand Identity",
        "Business Card Design",
        "Brochures & Flyers",
        "Social Media Graphics",
        "Website Graphics & Icons",
        "Marketing Materials",
        "Print Design Services",
        "Brand Guidelines"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing to grow your online presence",
      features: [
        "Social Media Management",
        "Content Creation & Strategy",
        "Search Engine Marketing",
        "Google Ads Management",
        "Email Marketing Campaigns",
        "Online Reputation Management",
        "Analytics & Reporting",
        "Marketing Consultation"
      ]
    }
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="section-padding bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
              Our Services & Packages
            </h1>

            <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
              Professional digital solutions designed specifically for South African small businesses.
              Choose the package that fits your needs and budget.
            </p>

            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Website Packages
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. All packages include professional design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-blue-500 px-4 py-1 text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`${cardsGradient} transition-smooth rounded-xl`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-white">
                      {pkg.name}
                    </CardTitle>

                    <div className="text-3xl font-bold text-blue-300 mb-2">
                      {pkg.price}
                    </div>

                    <p className="text-blue-200">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="pt-4">
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0" />
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">
                        Choose {pkg.name}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* ADDITIONAL SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Additional Services</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalServices.map((service) => (
                <Card
                  key={service.title}
                  className={`${cardsGradient} p-6 text-center rounded-xl`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-blue-300" />
                    </div>

                    <h4 className="font-semibold text-white mb-2">
                      {service.title}
                    </h4>

                    <p className="text-2xl font-bold text-blue-300 mb-2">
                      {service.price}
                    </p>

                    <p className="text-sm text-blue-200">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detailed Service Breakdown
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything we offer to help your business succeed in the digital world
            </p>
          </motion.div>

          <div className="space-y-12">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className={`${cardsGradient} overflow-hidden rounded-xl`}>
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>

                      <div className={`p-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                          <service.icon className="w-8 h-8 text-blue-300" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                          {service.title}
                        </h3>

                        <p className="text-white/90 mb-6 text-lg">
                          {service.description}
                        </p>

                        <Button variant="hero" asChild>
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="ml-2" />
                          </Link>
                        </Button>
                      </div>

                      <div className={`bg-black/40 p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-blue-300" />
                          What's Included:
                        </h4>

                        <div className="space-y-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-blue-300 flex-shrink-0" />
                              <span className="text-white text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;


