import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  MapPin, 
  Clock, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const cardsGradient = "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-xl border-0";

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
      role: "Founder & CEO",
      description: "Bringing technical expertise and innovative solutions to create fast, secure, and scalable websites.",
      skills: ["Full-Stack Development", "E-commerce", "Performance Optimization"]
    },
    {
      name: "Thabo Mokoena",
      role: "Lead Designer",
      description: "Crafting visually stunning and user-friendly designs that captivate audiences and drive engagement.",
      skills: ["UI/UX Design", "Brand Identity", "Graphic Design"]
    },
    {
      name: "Aisha Patel",
      role: "Digital Marketing Strategist",
      description: "Developing effective marketing strategies to boost online presence and grow business reach.",
      skills: ["SEO", "Content Marketing", "Social Media Management"]
    },
    {
      name: "Lindiwe Dlamini",
      role: "Project Manager",
      description: "Ensuring smooth project execution and timely delivery while maintaining clear communication with clients.",
      skills: ["Agile Methodologies", "Client Communication", "Team Coordination"]
    }
  ];

  const achievements = [
    { year: "2021", title: "Company Founded", description: "Webwise Africa officially launched, focusing on helping SMEs build an online presence." },
    { year: "2022", title: "80+ Projects", description: "Completed over 80 websites for local businesses across South Africa." },
    { year: "2023", title: "International Expansion", description: "Worked with clients from North America, Australia, and Europe — including London." },
    { year: "2024", title: "Growing Client Base", description: "Expanded our portfolio and continued delivering high-performance digital solutions." }
  ];

  return (
    <Layout>

      {/* HERO SECTION */}
      <section className="section-padding bg-black text-white">
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
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                We are a passionate team of digital professionals dedicated to helping 
                businesses grow online. With a blend of creativity, technology, and strategy,
                we deliver modern digital solutions that produce real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white hover:brightness-110 transition-all" size="lg" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white hover:brightness-110 transition-all" size="lg" asChild>
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
                    <div className="text-3xl font-bold text-gray-100 mb-2">80+</div>
                    <div>Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-100 mb-2">4+</div>
                    <div>Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-100 mb-2">99%</div>
                    <div>Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-100 mb-2">24/7</div>
                    <div>Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding bg-black">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Webwise Africa began with a simple mission — to give South African small 
                businesses the professional online presence they deserve.
              </p>
              <p>
                Founded in 2021, we focused on affordable and high-quality websites tailored 
                for growing SMEs.
              </p>
              <p>
                Over time, we expanded beyond local clients and now work with businesses 
                around the world, including North America, Australia, and Europe.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Remote team across South Africa",
                "Worked with global businesses",
                "Affordable and professional services",
                "Trusted by SMEs and professionals"
              ].map(point => (
                <div key={point} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
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
              description: "Our distributed structure allows us to work efficiently and serve clients nationwide."
            },{
              icon: Clock,
              title: "Fast Delivery",
              subtitle: "2–4 week turnaround",
              description: "A smooth and streamlined process to get your website live quickly."
            },{
              icon: Globe,
              title: "Global Clients",
              subtitle: "Serving worldwide markets",
              description: "We’ve proudly worked with companies in North America, Australia, and Europe including London."
            }].map(item => (
              <Card key={item.title} className={`${cardsGradient} transition-smooth rounded-xl`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The principles that guide every decision and project we take on
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
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Milestones from our beginning to today
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20 rounded-full"></div>

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
                        <div className="text-2xl font-bold text-white mb-2">{achievement.year}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-sm text-white/80">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 w-6 h-6 bg-white/70 rounded-full shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Let’s discuss how we can help your business thrive online with a clean, modern, and 
              high-performance digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white hover:brightness-110 transition-all" size="xl" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white hover:brightness-110 transition-all" size="xl" asChild>
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




