import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Monitor, Smartphone, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jadoo from "@/assets/jadoo.png";
import HabourNest from "@/assets/HabourNest.png";
import drivingSchool from "@/assets/driving-school.png";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);

  const projects = [
    {
      id: 1,
      title: "Jadoo Travel Agency",
      category: "Travel Agency",
      description: "A modern, responsive website for a London-based travel agency. Features include flight and hotel bookings, destination guides, and a mobile-first design to provide an excellent user experience for travelers.",
      image: jadoo,
      tags: ["Web Design", "Travel", "London", "Mobile-First"],
      type: "website",
      features: ["Flight & Hotel Booking", "Destination Guides", "Responsive Design", "Contact & Inquiry Forms"]
    },
    {
      id: 2,
      title: "HabourNest Realty",
      category: "Architecture & Construction",
      description: "Complete website design for an Australian architectural and construction company. Showcases their projects, services, and decades of experience in building and shaping Australia's development.",
      image: HabourNest,
      tags: ["Web Design", "Architecture", "Australia", "Construction"],
      type: "website",
      features: ["Project Showcases", "Services Pages", "Responsive Design", "Contact Forms"]
    },
    {
      id: 3,
      title: "Northern Cape Driving School",
      category: "Driving School",
      description: "Dynamic website for a driving school based in Northern Cape, South Africa. Features include online booking, course schedules, and easy contact options for learners.",
      image: drivingSchool,
      tags: ["Web Design", "Driving School", "South Africa", "Booking System"],
      type: "website",
      features: ["Online Booking", "Course Schedules", "Trainer Profiles", "Contact Forms"]
    },
    {
      id: 4,
      title: "Crafters Corner E-commerce",
      category: "E-commerce Store",
      description: "Full e-commerce solution for a local crafts business, including inventory management, payment processing, and customer accounts.",
      image: portfolio3,
      tags: ["E-commerce", "Online Store", "Payment Gateway"],
      type: "ecommerce",
      features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Management"]
    },
    {
      id: 5,
      title: "Legal Eagles Law Firm",
      category: "Professional Services",
      description: "Professional website for a Johannesburg law firm, showcasing services, team members, and client testimonials with a trustworthy design.",
      image: jadoo,
      tags: ["Professional", "Legal", "Corporate"],
      type: "website",
      features: ["Service Pages", "Team Profiles", "Contact Forms", "SEO Optimized"]
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

  const categories = ["All", "Website", "E-commerce", "Mobile App", "Branding", "Driving School", "Architecture & Construction"];

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

  const stats = [
    { number: 60, label: "Projects Completed" },
    { number: 60, label: "Happy Clients" },
    { number: 99, label: "Client Satisfaction" },
    { number: 4, label: "Years Experience" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses establish their digital presence and grow online.
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
      <section className="py-8 bg-neutral-900 border-b border-gray-800">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-transform duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black shadow-lg transform scale-105"
                    : "bg-white text-black hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-neutral-900">
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
                  <Card className="group overflow-hidden hover:shadow-xl transition-smooth hover:scale-105 bg-white border-0 rounded-xl">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-110 transition-smooth duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                        <Button
                          variant="hero"
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                        <TypeIcon className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-700 transition-smooth">{project.title}</h3>
                      <p className="text-black/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs text-black border-black">{tag}</Badge>
                          ))}
                        </div>
                        <div className="text-sm text-black/70">
                          <p className="font-medium mb-1">Key Features:</p>
                          <ul className="space-y-1">
                            {project.features.slice(0, 2).map(feature => (
                              <li key={feature} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button variant="secondary" size="sm" className="w-full bg-blue-700 text-white border-0 hover:bg-blue-800">
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
      <section className="section-padding bg-neutral-900">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Numbers that showcase our commitment to helping businesses succeed</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                <motion.div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}+</motion.div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-width text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
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

      {/* Live Preview Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-start justify-center z-50 overflow-auto py-10 px-4"
          onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-lg w-full object-contain mb-4"
            />
            <p className="text-black mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold text-black mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-black">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="bg-blue-700 text-white hover:bg-blue-800"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Portfolio;




