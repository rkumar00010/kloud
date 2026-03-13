import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Shield, Zap, Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Enterprise Customers' },
    { value: '10PB+', label: 'Data Under Management' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We believe security and compliance should be built-in, not bolted on. Every feature is designed with zero-trust principles and enterprise-grade encryption.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We continuously invest in R&D to stay ahead of evolving data challenges. Our platform leverages the latest in AI, cloud infrastructure, and automation.',
    },
    {
      icon: Users,
      title: 'Customer Obsessed',
      description: 'Your success is our success. We provide white-glove onboarding, 24/7 support, and dedicated account management to ensure you get maximum value.',
    },
  ];

  const team = [
    {
      name: 'Leadership Team',
      description: 'Decades of combined experience in cloud infrastructure, data management, and enterprise software from companies like AWS, Google Cloud, and Microsoft.',
    },
    {
      name: 'Engineering',
      description: 'World-class engineers building scalable, secure systems that handle petabytes of data across global regions with sub-second latency.',
    },
    {
      name: 'Customer Success',
      description: 'Dedicated specialists who partner with you from day one, ensuring seamless migration, adoption, and ongoing optimization.',
    },
  ];

  const certifications = [
    { icon: Shield, title: 'SOC 2 Type II', desc: 'Annual audits' },
    { icon: Award, title: 'ISO 27001', desc: 'Certified' },
    { icon: Globe, title: 'GDPR Ready', desc: 'EU compliance' },
    { icon: TrendingUp, title: 'HIPAA', desc: 'Healthcare ready' },
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">Data Management</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Kloudvault by Kloudrac represents over a decade of cloud infrastructure expertise, built to solve the complex data lifecycle challenges faced by modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2 bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To eliminate the complexity and vendor sprawl of enterprise data lifecycle management with a unified, cloud-native platform.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We've seen firsthand how organizations struggle with disconnected archival systems, backup solutions, reporting tools, and document workflows. Each vendor adds cost, complexity, and compliance risk. Kloudvault unifies these capabilities into one secure, scalable platform—so you can focus on your business, not your infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-2xl border border-[#8B5CF6]/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#8B5CF6] to-[#D4AF37] rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we build</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-[#8B5CF6]/20">
                    <Icon className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-400">Experts dedicated to your data success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13152A]/50 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="mb-4">{group.name}</h3>
                <p className="text-gray-400 leading-relaxed">{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Security & Compliance</h2>
            <p className="text-xl text-gray-400">Built to meet the highest industry standards</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#13152A]/50 border border-white/10 rounded-xl p-6 text-center"
                >
                  <Icon className="w-10 h-10 text-[#8B5CF6] mx-auto mb-4" />
                  <h3 className="mb-1 text-lg">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#D4AF37]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Join Us on This Journey</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We're hiring talented individuals who share our passion for solving complex data challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90 px-8">
                  View Open Positions
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
