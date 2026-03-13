import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Archive, Database, BarChart3, ScanLine, FileSearch, Phone, CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const solutionData: Record<string, any> = {
  archive: {
    icon: Archive,
    title: 'Archival Data',
    tagline: 'Policy-driven cold storage with warm retrieval and legal holds.',
    description: 'Reduce storage costs by up to 80% while maintaining instant access to historical data. Automated lifecycle policies, legal hold workflows, and compliance-ready audit trails.',
    problem: 'Organizations spend millions on primary storage for data that\'s rarely accessed. Manual archival processes are slow, error-prone, and fail to meet compliance requirements.',
    solution: 'Kloudvault automates archival with intelligent policies that move data to cost-effective cold storage while maintaining instant retrieval. Legal holds are managed automatically with complete audit trails.',
    features: [
      'Automated tiering based on access patterns',
      'Legal hold management with audit trails',
      'Instant warm retrieval in under 60 seconds',
      'Policy-based retention and deletion',
      'Compliance reporting for SOC 2, ISO 27001',
      'Cross-region replication for disaster recovery',
    ],
    pricing: {
      starter: { price: 299, storage: '1TB', features: ['Basic archival policies', '30-day retention', 'Email support'] },
      growth: { price: 999, storage: '10TB', features: ['Advanced policies', 'Legal hold', 'Priority support', 'API access'] },
      enterprise: { price: 'Custom', storage: 'Unlimited', features: ['Everything in Growth', 'Custom SLAs', 'Dedicated support', 'White-glove migration'] },
    },
    faqs: [
      {
        question: 'How fast can I retrieve archived data?',
        answer: 'Standard retrieval is under 60 seconds. For bulk retrievals, we offer scheduled batch processing overnight.',
      },
      {
        question: 'Is archived data encrypted?',
        answer: 'Yes. All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Keys are managed through AWS KMS or your own key management system.',
      },
      {
        question: 'Can I customize retention policies?',
        answer: 'Absolutely. You can set policies by file type, age, size, or custom metadata fields. Policies can trigger archival, deletion, or legal holds.',
      },
    ],
  },
  backup: {
    icon: Database,
    title: 'Data Backup',
    tagline: 'Incremental, immutable backups with instant restore.',
    description: 'Enterprise-grade backup with incremental snapshots, immutable storage, and point-in-time recovery. Protect against ransomware with air-gapped backups.',
    problem: 'Traditional backups are slow, expensive, and vulnerable to ransomware. Recovery times measured in hours or days put businesses at risk.',
    solution: 'Our incremental backup engine captures only changes, reducing storage and time by 95%. Immutable storage prevents tampering, and instant recovery gets you back online in minutes.',
    features: [
      'Incremental forever backups',
      'Point-in-time recovery to any snapshot',
      'Immutable storage prevents ransomware',
      'Cross-region and cross-cloud replication',
      'Automated backup verification',
      'Granular file and folder recovery',
    ],
    pricing: {
      starter: { price: 199, storage: '500GB', features: ['Daily backups', '7-day retention', 'Email support'] },
      growth: { price: 799, storage: '5TB', features: ['Hourly backups', '30-day retention', 'Instant recovery', 'Priority support'] },
      enterprise: { price: 'Custom', storage: 'Unlimited', features: ['Everything in Growth', 'Immutable storage', 'Cross-cloud replication', 'Dedicated support'] },
    },
    faqs: [
      {
        question: 'What is the recovery time objective (RTO)?',
        answer: 'For instant recovery, RTO is typically under 5 minutes. Full system restores depend on data size but average 15-30 minutes for most workloads.',
      },
      {
        question: 'How does immutable storage work?',
        answer: 'Backups are written in append-only mode with WORM (write once, read many) guarantees. Even if an attacker gains access, they cannot delete or modify backups.',
      },
      {
        question: 'Can I backup databases and VMs?',
        answer: 'Yes. We support application-aware backups for databases (SQL Server, Oracle, PostgreSQL, MongoDB) and hypervisors (VMware, Hyper-V, KVM).',
      },
    ],
  },
  reports: {
    icon: BarChart3,
    title: 'Reports & Analytics',
    tagline: 'Unified insights across your entire data estate.',
    description: 'Turn data into decisions with comprehensive reporting and analytics. Pre-built dashboards, custom reports, and real-time insights across all Kloudvault modules.',
    problem: 'Data is scattered across multiple systems, making it impossible to get a complete picture. Manual reporting is time-consuming and error-prone.',
    solution: 'Our unified analytics platform aggregates data across archival, backup, scanning, OCR, and CTI systems. Build custom dashboards, automate reporting, and export insights in any format.',
    features: [
      'Pre-built dashboards for compliance, storage, and usage',
      'Custom report builder with drag-and-drop interface',
      'Scheduled reports with automated distribution',
      'Real-time analytics and alerting',
      'Export to PDF, Excel, CSV, and APIs',
      'Role-based access controls for sensitive data',
    ],
    pricing: {
      starter: { price: 199, storage: 'N/A', features: ['Basic dashboards', '10 custom reports', 'Email support'] },
      growth: { price: 699, storage: 'N/A', features: ['Unlimited custom reports', 'Scheduled reporting', 'API access', 'Priority support'] },
      enterprise: { price: 'Custom', storage: 'N/A', features: ['Everything in Growth', 'White-label reports', 'Dedicated support', 'Custom integrations'] },
    },
    faqs: [
      {
        question: 'Can I create custom reports?',
        answer: 'Yes. Our report builder lets you create custom reports using any data field, with filtering, grouping, and visualization options.',
      },
      {
        question: 'How do I share reports?',
        answer: 'Schedule automated distribution via email, export to common formats, or share via secure links with expiration dates.',
      },
      {
        question: 'What compliance reports are available?',
        answer: 'Pre-built reports for SOC 2, ISO 27001, GDPR, HIPAA, and more. Customize to meet your specific audit requirements.',
      },
    ],
  },
  scanning: {
    icon: ScanLine,
    title: 'Scanning',
    tagline: 'High-volume document capture at enterprise scale.',
    description: 'Digitize physical documents with intelligent scanning workflows. Queue management, batch processing, and automatic quality control ensure efficient, accurate document capture.',
    problem: 'Manual document processing is slow, error-prone, and expensive. Physical documents create compliance risks and storage challenges.',
    solution: 'Our scanning platform handles millions of pages per day with automated quality checks, intelligent routing, and seamless integration with OCR and archival systems.',
    features: [
      'Batch processing for high-volume scanning',
      'Automated quality control and validation',
      'Queue management with priority routing',
      'Multi-format output (PDF, TIFF, JPEG)',
      'Barcode and QR code detection',
      'Integration with OCR for immediate indexing',
    ],
    pricing: {
      starter: { price: 149, storage: 'N/A', features: ['1,000 pages/month', 'Basic quality control', 'Email support'] },
      growth: { price: 599, storage: 'N/A', features: ['50,000 pages/month', 'Advanced quality control', 'OCR integration', 'Priority support'] },
      enterprise: { price: 'Custom', storage: 'N/A', features: ['Unlimited pages', 'Custom workflows', 'Dedicated support', 'On-premise deployment'] },
    },
    faqs: [
      {
        question: 'What scanner hardware do you support?',
        answer: 'We support all major scanner brands including Fujitsu, Kodak, Canon, and Epson. Our TWAIN driver works with any TWAIN-compliant scanner.',
      },
      {
        question: 'How does quality control work?',
        answer: 'Automated checks for blank pages, skew, resolution, and contrast. Failed scans are flagged for manual review with suggested corrections.',
      },
      {
        question: 'Can I scan directly to archive?',
        answer: 'Yes. Scanned documents can be routed directly to archival storage with OCR indexing and metadata tagging.',
      },
    ],
  },
  ocr: {
    icon: FileSearch,
    title: 'OCR',
    tagline: 'Accurate text extraction with AI-powered recognition.',
    description: 'Extract text from scanned documents with industry-leading accuracy. Multi-language support, entity detection, and intelligent auto-tagging make your documents searchable and actionable.',
    problem: 'Scanned documents are digital but not searchable or usable. Manual data entry is expensive and error-prone.',
    solution: 'Our AI-powered OCR engine achieves 99%+ accuracy across 50+ languages. Automatically detect entities (names, dates, amounts), extract tables, and tag documents for easy retrieval.',
    features: [
      'Multi-language OCR (50+ languages)',
      'Entity detection and extraction',
      'Table and form recognition',
      'Automated document classification',
      'Confidence scoring and validation',
      'Full-text search across all documents',
    ],
    pricing: {
      starter: { price: 99, storage: 'N/A', features: ['1,000 pages/month', 'English only', 'Email support'] },
      growth: { price: 499, storage: 'N/A', features: ['25,000 pages/month', 'Multi-language', 'Entity detection', 'Priority support'] },
      enterprise: { price: 'Custom', storage: 'N/A', features: ['Unlimited pages', 'Custom training', 'Dedicated support', 'API access'] },
    },
    faqs: [
      {
        question: 'What is your OCR accuracy rate?',
        answer: 'We achieve 99%+ accuracy on clean documents and 95%+ on degraded or handwritten text. Confidence scores help identify low-quality extractions.',
      },
      {
        question: 'Can you extract handwritten text?',
        answer: 'Yes. Our AI model is trained on handwritten text, though accuracy varies by handwriting clarity. Block letters typically achieve 90%+ accuracy.',
      },
      {
        question: 'How does entity detection work?',
        answer: 'Our NLP engine identifies common entities like names, dates, amounts, addresses, and account numbers. You can also train custom entity types.',
      },
    ],
  },
  cti: {
    icon: Phone,
    title: 'Calling (CTI)',
    tagline: 'Complete telephony integration for your CRM.',
    description: 'Integrate calling directly into your workflows with click-to-call, automatic call logging, recordings, and comprehensive analytics. Transform your customer communications.',
    problem: 'Manual dialing wastes agent time. Call data is disconnected from CRM systems. Compliance requires call recording but storage is expensive.',
    solution: 'Our CTI platform integrates with your CRM to enable one-click calling, automatic logging, cloud recording, and analytics—all within your existing workflow.',
    features: [
      'Click-to-call from any CRM or application',
      'Automatic call logging and CRM updates',
      'Cloud-based call recording and storage',
      'Real-time and historical call analytics',
      'IVR and call routing workflows',
      'Compliance-ready recording retention',
    ],
    pricing: {
      starter: { price: 25, storage: 'Per user/month', features: ['Click-to-call', 'Basic analytics', 'Email support'] },
      growth: { price: 45, storage: 'Per user/month', features: ['Call recording', 'CRM integration', 'Advanced analytics', 'Priority support'] },
      enterprise: { price: 'Custom', storage: 'Custom', features: ['Everything in Growth', 'Custom IVR', 'Dedicated support', 'SIP trunking'] },
    },
    faqs: [
      {
        question: 'Which CRM systems do you integrate with?',
        answer: 'We have native integrations for Salesforce, HubSpot, Zoho, and Microsoft Dynamics. Custom integrations are available via our API.',
      },
      {
        question: 'How long are call recordings stored?',
        answer: 'Recording retention is configurable from 30 days to unlimited. Enterprise plans include archival integration for long-term compliance storage.',
      },
      {
        question: 'Can I use my existing phone system?',
        answer: 'Yes. We support SIP trunking and can integrate with most PBX systems including Asterisk, FreePBX, and Cisco.',
      },
    ],
  },
};

export default function SolutionDetail() {
  const { module } = useParams();
  const solution = solutionData[module || 'archive'];
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  if (!solution) {
    return <div className="pt-32 text-center">Solution not found</div>;
  }

  const Icon = solution.icon;

  return (
    <div className="pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4AF37]/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 border border-[#8B5CF6]/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-4">{solution.title}</h1>
            <p className="text-xl text-[#D4AF37]">{solution.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 sticky top-20 bg-[#0A0F1E]/95 backdrop-blur-xl z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-[#13152A]/50 border border-white/10 h-12 p-1">
              <TabsTrigger 
                value="overview"
                className="text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#D4AF37] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 hover:text-white transition-all"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="pricing"
                className="text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#D4AF37] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 hover:text-white transition-all"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger 
                value="about"
                className="text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#D4AF37] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 hover:text-white transition-all"
              >
                About Us
              </TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-8">
              {/* Description */}
              <div className="py-8">
                <div className="max-w-3xl">
                  <p className="text-xl text-gray-300 leading-relaxed">{solution.description}</p>
                </div>
              </div>

              {/* Problem → Solution */}
              <div className="py-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-red-500/5 to-red-500/[0.02] border border-red-500/20 rounded-2xl p-8"
                  >
                    <h3 className="mb-4 text-red-400">The Problem</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.problem}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#8B5CF6]/5 to-[#D4AF37]/5 border border-[#8B5CF6]/20 rounded-2xl p-8"
                  >
                    <h3 className="mb-4 text-[#D4AF37]">Our Solution</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.solution}</p>
                  </motion.div>
                </div>
              </div>

              {/* Features */}
              <div className="py-8">
                <h2 className="mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {solution.features.map((feature: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="py-8">
                <h2 className="mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {solution.faqs.map((faq: any, i: number) => (
                    <AccordionItem 
                      key={i} 
                      value={`item-${i}`}
                      className="bg-[#13152A]/50 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#8B5CF6]/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="text-white">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="mt-8">
              <div className="py-8">
                <div className="text-center mb-12">
                  <h2 className="mb-4">Simple, Transparent Pricing</h2>
                  <p className="text-xl text-gray-400 mb-8">Choose the plan that fits your needs</p>
                  
                  <div className="inline-flex items-center gap-4 bg-[#13152A]/50 border border-white/10 rounded-full p-1">
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-6 py-2 rounded-full transition-all ${
                        billingCycle === 'monthly'
                          ? 'bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle('yearly')}
                      className={`px-6 py-2 rounded-full transition-all ${
                        billingCycle === 'yearly'
                          ? 'bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Yearly <span className="text-[#D4AF37] text-sm ml-1">(Save 20%)</span>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(solution.pricing).map(([tier, details]: [string, any]) => (
                    <motion.div
                      key={tier}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`relative bg-[#13152A]/50 border rounded-2xl p-8 ${
                        tier === 'growth'
                          ? 'border-[#8B5CF6] shadow-lg shadow-purple-500/20'
                          : 'border-white/10'
                      }`}
                    >
                      {tier === 'growth' && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] rounded-full text-sm">
                          Most Popular
                        </div>
                      )}
                      
                      <div className="mb-8">
                        <h3 className="mb-2 capitalize">{tier}</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                          {typeof details.price === 'number' ? (
                            <>
                              <span className="text-4xl bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-transparent bg-clip-text">
                                ${billingCycle === 'yearly' ? Math.round(details.price * 0.8) : details.price}
                              </span>
                              <span className="text-gray-400">/month</span>
                            </>
                          ) : (
                            <span className="text-4xl bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-transparent bg-clip-text">
                              {details.price}
                            </span>
                          )}
                        </div>
                        {details.storage !== 'N/A' && (
                          <p className="text-sm text-gray-400">{details.storage} included</p>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {details.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/contact">
                        <Button
                          className={`w-full ${
                            tier === 'growth'
                              ? 'bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90'
                              : 'bg-white/5 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {tier === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="mt-8">
              <div className="py-8 max-w-4xl">
                <h2 className="mb-8">About Kloudvault</h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      Kloudvault is built by Kloudrac, a team with over a decade of cloud infrastructure and data management experience.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      We've worked with enterprises across BFSI, healthcare, and public sector organizations to solve their most complex data challenges. Kloudvault represents the culmination of that experience—a unified platform that eliminates the complexity and vendor sprawl of traditional data lifecycle management.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 py-8">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
                      <h3 className="mb-2">Security First</h3>
                      <p className="text-sm text-gray-400">
                        SOC 2, ISO 27001 certified with zero-trust architecture
                      </p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
                      <h3 className="mb-2">Built for Scale</h3>
                      <p className="text-sm text-gray-400">
                        Managing 10PB+ across 500+ enterprise customers
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
                      <h3 className="mb-2">Expert Support</h3>
                      <p className="text-sm text-gray-400">
                        Dedicated success team with 24/7 enterprise support
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4AF37]/10 border border-[#8B5CF6]/20 rounded-2xl p-8">
                    <h3 className="mb-4">Ready to learn more?</h3>
                    <p className="text-gray-400 mb-6">
                      Schedule a personalized demo with our team to see how {solution.title} can transform your data operations.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">
                        Book a Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
