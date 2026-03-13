import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Archive, Database, BarChart3, ScanLine, FileSearch, Phone, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Archive,
      title: 'Archival Data',
      slug: 'archive',
      tagline: 'Policy-driven cold storage with warm retrieval.',
      description: 'Archive historical data with intelligent lifecycle policies. Reduce primary storage costs while maintaining instant access for compliance and legal holds.',
      features: ['Automated tiering', 'Legal hold management', 'Instant retrieval', 'Policy-based retention'],
    },
    {
      icon: Database,
      title: 'Data Backup',
      slug: 'backup',
      tagline: 'Incremental, immutable backups with instant restore.',
      description: 'Protect your critical business data with enterprise-grade backup solutions. Automated, encrypted, and ready for instant recovery.',
      features: ['Incremental backups', 'Point-in-time recovery', 'Immutable storage', 'Cross-region replication'],
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      slug: 'reports',
      tagline: 'Unified insights across your entire data estate.',
      description: 'Transform data into actionable insights with comprehensive reporting and analytics across all modules.',
      features: ['Custom dashboards', 'Automated reporting', 'Compliance analytics', 'Real-time insights'],
    },
    {
      icon: ScanLine,
      title: 'Scanning',
      slug: 'scanning',
      tagline: 'High-volume document capture at enterprise scale.',
      description: 'Digitize physical documents efficiently with intelligent scanning workflows and quality control.',
      features: ['Batch processing', 'Queue management', 'Quality control', 'Multi-format support'],
    },
    {
      icon: FileSearch,
      title: 'OCR',
      slug: 'ocr',
      tagline: 'Accurate text extraction with AI-powered recognition.',
      description: 'Extract and index text from scanned documents with industry-leading accuracy and entity detection.',
      features: ['Multi-language support', 'Entity detection', 'Auto-tagging', 'Searchable archives'],
    },
    {
      icon: Phone,
      title: 'Calling (CTI)',
      slug: 'cti',
      tagline: 'Complete telephony integration for your CRM.',
      description: 'Integrate calling directly into your workflows with click-to-call, recordings, and comprehensive analytics.',
      features: ['Click-to-call', 'Call recording', 'Call analytics', 'CRM integration'],
    },
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              Complete Data Lifecycle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Six integrated modules designed to secure, manage, and unlock the value of your enterprise data—all from one unified platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Link key={solution.slug} to={`/solutions/${solution.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative bg-[#13152A]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-300 h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center border border-[#8B5CF6]/20 flex-shrink-0">
                          <Icon className="w-8 h-8 text-[#8B5CF6]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2">{solution.title}</h3>
                          <p className="text-sm text-[#D4AF37]">{solution.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
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

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#D4AF37]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              See how Kloudvault can transform your data lifecycle management.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C4DFF] px-8 py-4 rounded-lg shadow-lg shadow-purple-500/25 transition-all group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
