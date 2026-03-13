import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Archive, Database, BarChart3, ScanLine, FileSearch, Phone, Shield, Zap, Cloud, Lock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

export default function Home() {
  const solutions = [
    {
      icon: Archive,
      title: 'Archival Data',
      slug: 'archive',
      description: 'Policy-driven cold storage with warm retrieval and legal holds.',
    },
    {
      icon: Database,
      title: 'Data Backup',
      slug: 'backup',
      description: 'Incremental, immutable backups with instant restore capabilities.',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      slug: 'reports',
      description: 'Unified reporting layer with dashboards and comprehensive exports.',
    },
    {
      icon: ScanLine,
      title: 'Scanning',
      slug: 'scanning',
      description: 'High-volume document capture with intelligent queue management.',
    },
    {
      icon: FileSearch,
      title: 'OCR',
      slug: 'ocr',
      description: 'Accurate text extraction with entity detection and auto-tagging.',
    },
    {
      icon: Phone,
      title: 'Calling (CTI)',
      slug: 'cti',
      description: 'Click-to-call, call logging, recordings, and analytics.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2, ISO 27001, GDPR-ready compliance built from day one.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant data retrieval and real-time analytics across all modules.',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Scale effortlessly without infrastructure overhead or complexity.',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '500+', label: 'Enterprise Clients' },
    { value: '10PB+', label: 'Data Managed' },
    { value: '<1min', label: 'Average Recovery' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF608_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#8B5CF6]/10 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-full">
              <span className="text-sm text-[#D4AF37]">Enterprise Data Lifecycle Platform</span>
            </div>
            <h1 className="mb-6 max-w-5xl mx-auto">
              Your Data's Final <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">Vault</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Secure, searchable, and always compliant. Kloudvault unifies archival, backup, reporting, scanning, OCR, and CTI into one cloud-native platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C4DFF] shadow-lg shadow-purple-500/25 px-8 group">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#8B5CF6]/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#8B5CF6]/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
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

      {/* Solutions Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Complete Data Lifecycle Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Six integrated modules to secure, manage, and unlock the value of your enterprise data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Link key={i} to={`/solutions/${solution.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-300 h-full cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-6 border border-[#8B5CF6]/20">
                        <Icon className="w-7 h-7 text-[#8B5CF6]" />
                      </div>
                      
                      <h3 className="mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                      
                      <div className="inline-flex items-center gap-2 text-[#D4AF37] group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI-Powered Analytics Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/10 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#D4AF37]">AI-Powered Intelligence</span>
              </div>
              
              <h2 className="mb-6">
                Smarter Analytics, Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">AI</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Unlock deep insights and performance trends with real-time AI-driven analytics across your entire data estate.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Instant Insights', desc: 'Real-time anomaly detection and trend analysis' },
                  { title: 'Predictive Power', desc: 'Forecast storage needs and optimize costs' },
                  { title: 'Smart Visuals', desc: 'Auto-generated dashboards tailored to your role' },
                  { title: 'Ask Anything', desc: 'Natural language queries across all modules' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions/reports">
                  <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90">
                    Explore Analytics
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]">
                    Book A Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Interactive Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-3xl blur-xl" />
              <div className="relative">
                <AnalyticsDashboard />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-[#0D1220] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Why Enterprise Leaders Choose Kloudvault</h2>
            <p className="text-xl text-gray-400">Built for scale, security, and compliance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
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
                  <h3 className="mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-12">
            Trusted by enterprises in BFSI, Healthcare, and Public Sector
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['SOC 2 Certified', 'ISO 27001', 'GDPR Ready', 'HIPAA Compliant'].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-center gap-2 bg-[#8B5CF6]/10 px-4 py-3 rounded-lg border border-[#8B5CF6]/20"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#D4AF37]/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF608_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to Secure Your Data?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join hundreds of enterprises trusting Kloudvault with their most critical data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C4DFF] shadow-lg shadow-purple-500/25 px-8 group">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
