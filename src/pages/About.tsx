import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  MapPin, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We're committed to delivering exceptional quality in every project, ensuring your business stands out online."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships with our clients, not just websites."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of digital trends and technologies to provide cutting-edge solutions for your business."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with you throughout the entire process, ensuring your vision comes to life."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Thompson",
      role: "Founder & Creative Director",
      description: "With over 8 years in digital design, Sarah leads our creative vision and ensures every project exceeds expectations.",
      skills: ["Web Design", "Brand Strategy", "UI/UX"]
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      description: "Michael brings technical expertise and innovative solutions to create fast, secure, and scalable websites.",
      skills: ["Full-Stack Development", "E-commerce", "Performance Optimization"]
    },
    {
      name: "Nomsa Mthembu",
      role: "Digital Marketing Specialist",
      description: "Nomsa helps businesses grow their online presence through strategic marketing and local market expertise.",
      skills: ["SEO", "Social Media", "Content Strategy"]
    }
  ];

  const achievements = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Started with a mission to help South African small businesses succeed online"
    },
    {
      year: "2022",
      title: "100+ Projects",
      description: "Reached our first major milestone of serving over 100 local businesses"
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Recognized as 'Best Small Business Digital Agency' by SA Business Awards"
    },
    {
      year: "2024",
      title: "500+ Clients",
      description: "Expanded to serve over 500 businesses across South Africa"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-accent text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Webwise Africa
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                We're a passionate team of digital professionals dedicated to helping 
                South African small and medium businesses thrive in the digital world. 
                Based remotely across the country, we understand the unique challenges 
                and opportunities that local businesses face.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 soft-shadow">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">500+</div>
                    <div className="text-white/80">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">3+</div>
                    <div className="text-white/80">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">99%</div>
                    <div className="text-white/80">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-white/80">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Webwise Africa was born from a simple observation: many talented South African 
                  small business owners had amazing products and services but struggled to establish 
                  a professional online presence that could compete with larger companies.
                </p>
                <p>
                  Founded in 2021, we set out to level the playing field by providing affordable, 
                  professional digital solutions specifically tailored for small and medium 
                  businesses. Our remote team setup allows us to keep costs low while maintaining 
                  high-quality service standards.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses across South Africa 
                  establish their digital presence, from local restaurants and retail stores 
                  to professional services and e-commerce ventures.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  "Remote team across South Africa",
                  "Focus on small & medium businesses", 
                  "Affordable, professional solutions",
                  "Local market understanding"
                ].map((point) => (
                  <div key={point} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="soft-shadow hover:card-shadow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Remote Team</h3>
                      <p className="text-sm text-muted-foreground">Based across South Africa</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our distributed team allows us to serve clients nationwide while keeping 
                    overhead costs low, passing savings directly to our clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="soft-shadow hover:card-shadow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Quick Turnaround</h3>
                      <p className="text-sm text-muted-foreground">2-4 week delivery</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We understand that time is money. Our streamlined process ensures 
                    your website is live and generating results quickly.
                  </p>
                </CardContent>
              </Card>

              <Card className="soft-shadow hover:card-shadow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Award Winning</h3>
                      <p className="text-sm text-muted-foreground">Recognized excellence</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our commitment to quality has been recognized by industry peers 
                    and business organizations across South Africa.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-smooth group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-smooth">
                      <value.icon className="w-8 h-8 text-primary group-hover:text-accent transition-smooth" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented professionals behind Webwise Africa's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-smooth card-shadow">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to help South African businesses succeed online
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 rounded-full"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="soft-shadow hover:card-shadow transition-smooth">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-accent mb-2">
                            {achievement.year}
                          </div>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how we can help your business establish a strong digital presence 
              and achieve your online goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get In Touch
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

export default About;