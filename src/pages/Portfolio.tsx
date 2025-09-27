import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Monitor, Smartphone, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "African Spice Restaurant",
      category: "Restaurant Website",
      description: "A modern, responsive website for a local South African restaurant featuring online menu, reservations, and location details.",
      image: portfolio1,
      tags: ["Web Design", "Restaurant", "Mobile-First"],
      type: "website",
      features: ["Online Menu", "Reservation System", "Location Integration", "Mobile Optimized"]
    },
    {
      id: 2,
      title: "TechStart Mobile App",
      category: "Mobile App Design",
      description: "Complete UI/UX design for a South African tech startup's mobile application, focusing on user experience and modern design principles.",
      image: portfolio2,
      tags: ["UI/UX", "Mobile App", "Startup"],
      type: "mobile",
      features: ["User Interface Design", "Prototyping", "User Testing", "Brand Integration"]
    },
    {
      id: 3,
      title: "Crafters Corner E-commerce",
      category: "E-commerce Store",
      description: "Full e-commerce solution for a local crafts business, including inventory management, payment processing, and customer accounts.",
      image: portfolio3,
      tags: ["E-commerce", "Online Store", "Payment Gateway"],
      type: "ecommerce",
      features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Management"]
    },
    {
      id: 4,
      title: "Legal Eagles Law Firm",
      category: "Professional Services",
      description: "Professional website for a Johannesburg law firm, showcasing services, team members, and client testimonials with a trustworthy design.",
      image: portfolio1,
      tags: ["Professional", "Legal", "Corporate"],
      type: "website",
      features: ["Service Pages", "Team Profiles", "Contact Forms", "SEO Optimized"]
    },
    {
      id: 5,
      title: "Fitness Pro Gym",
      category: "Fitness & Health",
      description: "Dynamic website for a local gym featuring class schedules, membership plans, and trainer profiles with online booking functionality.",
      image: portfolio2,
      tags: ["Fitness", "Booking System", "Membership"],
      type: "website",
      features: ["Class Schedules", "Online Booking", "Membership Plans", "Trainer Profiles"]
    },
    {
      id: 6,
      title: "Garden Paradise Nursery",
      category: "Garden Center",
      description: "Beautiful e-commerce site for a plant nursery with plant care guides, online ordering, and delivery scheduling.",
      image: portfolio3,
      tags: ["E-commerce", "Plants", "Delivery"],
      type: "ecommerce",
      features: ["Plant Catalog", "Care Guides", "Delivery Scheduling", "Customer Reviews"]
    }
  ];

  const categories = ["All", "Website", "E-commerce", "Mobile App", "Branding"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => {
        if (selectedCategory === "Website") return project.type === "website";
        if (selectedCategory === "E-commerce") return project.type === "ecommerce";
        if (selectedCategory === "Mobile App") return project.type === "mobile";
        return true;
      });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "website": return Monitor;
      case "mobile": return Smartphone;
      case "ecommerce": return ShoppingCart;
      default: return Monitor;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-accent text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped South African businesses 
              establish their digital presence and grow online.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const TypeIcon = getTypeIcon(project.type);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-smooth hover:scale-105 card-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                        <Button variant="hero" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <TypeIcon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium mb-1">Key Features:</p>
                          <ul className="space-y-1">
                            {project.features.slice(0, 2).map((feature) => (
                              <li key={feature} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button variant="primary-outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase our commitment to helping South African businesses succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "3+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's create something amazing together. Your business deserves a digital presence that stands out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;