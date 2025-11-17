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
  const cardsGradient = "bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white shadow-xl";

  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We deliver exceptional quality in every project, ensuring your business stands out online."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships with our clients."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with you to bring your vision to life."
    }
  ];

  const teamMembers = [
    {
      name: "Sima Nyamfu",
      role: "Lead Developer",
      description: "Bringing technical expertise and innovative solutions to create fast, secure, and scalable websites.",
      skills: ["Full-Stack Development", "E-commerce", "Performance Optimization"]
    }
  ];

  const achievements = [
    { year: "2021", title: "Company Founded", description: "Helping South African small businesses succeed online." },
    { year: "2022", title: "100+ Projects", description: "Served over 100 local businesses successfully." },
    { year: "2023", title: "Award Recognition", description: "Recognized as 'Best Small Business Digital Agency' by SA Business Awards." },
    { year: "2024", title: "60+ Clients", description: "Serving businesses across South Africa." }
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="section-padding bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                About Webwise Africa
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                We are a passionate team of digital professionals dedicated to helping 
                South African small and medium businesses thrive online. We combine creativity, 
                technical expertise, and local market understanding to deliver high-quality solutions.
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
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center text-white">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">60+</div>
                    <div>Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                    <div>Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                    <div>Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div>Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-black">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Webwise Africa was born from a simple observation: many South African small business owners had amazing products 
                and services but struggled to establish a professional online presence.
              </p>
              <p>
                Founded in 2021, we provide affordable, professional digital solutions tailored for small and medium businesses.
              </p>
              <p>
                Today, we proudly serve businesses across South Africa, from restaurants and retail stores to professional services.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Remote team across South Africa",
                "Focus on small & medium businesses",
                "Affordable, professional solutions",
                "Local market understanding"
              ].map(point => (
                <div key={point} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white">{point}</span>
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
            {[{
              icon: MapPin,
              title: "Remote Team",
              subtitle: "Based across South Africa",
              description: "Our distributed team allows us to serve clients nationwide while keeping overhead costs low."
            },{
              icon: Clock,
              title: "Quick Turnaround",
              subtitle: "2-4 week delivery",
              description: "Our streamlined process ensures your website is live and generating results quickly."
            },{
              icon: Award,
              title: "Award Winning",
              subtitle: "Recognized excellence",
              description: "Our commitment to quality has been recognized by industry peers and business organizations across South Africa."
            }].map(item => (
              <Card key={item.title} className={`${cardsGradient} transition-smooth rounded-xl`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-blue-200">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
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
                <Card className={`${cardsGradient} text-center hover:scale-105 transition-smooth rounded-xl`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
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
                <Card className={`${cardsGradient} text-center rounded-xl`}>
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-blue-100 mb-6 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-100 rounded-full text-xs font-medium">
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
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Key milestones in our mission to help South African businesses succeed online
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400/20 rounded-full"></div>

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
                    <Card className={`${cardsGradient} rounded-xl`}>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{achievement.year}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-sm text-blue-100">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-blue-400 rounded-full border-4 border-black shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-black via-[#0A1A3A] to-blue-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
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
