import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 499,
      yearlyPrice: 399,
      storage: '5TB',
      features: [
        'All 6 core modules included',
        'Basic archival policies',
        'Daily backups with 7-day retention',
        'Basic dashboards and reports',
        '5,000 pages/month scanning & OCR',
        '10 user licenses',
        'Email support (24hr response)',
        'SOC 2 compliance',
      ],
    },
    {
      name: 'Growth',
      description: 'For growing teams with advanced needs',
      monthlyPrice: 1499,
      yearlyPrice: 1199,
      storage: '25TB',
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Advanced archival with legal holds',
        'Hourly backups with 30-day retention',
        'Unlimited custom reports & dashboards',
        'Unlimited scanning & OCR',
        '50 user licenses',
        'Priority support (4hr response)',
        'API access & webhooks',
        'Multi-region replication',
        'ISO 27001 compliance',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: null,
      yearlyPrice: null,
      storage: 'Unlimited',
      features: [
        'Everything in Growth, plus:',
        'Custom SLAs and guarantees',
        'Dedicated account manager',
        'White-glove migration assistance',
        'Custom integrations & workflows',
        'Unlimited user licenses',
        '24/7 phone & Slack support',
        'On-premise deployment options',
        'Custom compliance requirements',
        'Volume discounts',
      ],
    },
  ];

  const faqs = [  
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade at any time. Upgrades are instant, and downgrades take effect at the end of your current billing period.',
    },
    {
      question: 'What happens if I exceed my storage limit?',
      answer: 'We\'ll notify you at 80% and 90% capacity. Additional storage is available at $0.10/GB/month with no data egress fees.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers for annual plans. Enterprise customers can also pay via invoice.',
    },
    {
      question: 'Do you offer discounts for nonprofits or education?',
      answer: 'Yes, we offer 25% discounts for registered nonprofits and educational institutions. Contact sales for details.',
    },
    {
      question: 'What\'s included in support?',
      answer: 'All plans include email support. Growth plans add priority support with 4-hour response times. Enterprise plans include 24/7 phone and Slack support with dedicated account management.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, monthly plans can be cancelled anytime with no penalties. Annual plans are non-refundable but can be cancelled for the next term.',
    },
    {
      question: 'How do user licenses work?',
      answer: 'Each plan includes a set number of user licenses. Additional users can be added at $25/user/month for Starter and $35/user/month for Growth.',
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
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              All plans include access to our complete data lifecycle platform. Start free, scale as you grow.
            </p>
            
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
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative bg-[#13152A]/50 border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-[#8B5CF6] shadow-lg shadow-purple-500/20 md:-mt-4 md:mb-0'
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-transparent bg-clip-text">
                          ${billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-400">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] text-transparent bg-clip-text">
                        Custom
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{plan.storage} storage included</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-32 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">What's Included</h2>
            <p className="text-xl text-gray-400">All plans include our complete suite of modules</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Archival Data', desc: 'Policy-driven cold storage with legal holds' },
              { title: 'Data Backup', desc: 'Incremental backups with instant recovery' },
              { title: 'Reports & Analytics', desc: 'Unified reporting and dashboards' },
              { title: 'Scanning', desc: 'High-volume document capture' },
              { title: 'OCR', desc: 'AI-powered text extraction' },
              { title: 'Calling (CTI)', desc: 'Telephony integration with CRM' },
            ].map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13152A]/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="mb-2">{module.title}</h3>
                <p className="text-sm text-gray-400">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about pricing</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-[#13152A]/50 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#8B5CF6]/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#8B5CF6]" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Talk to our sales team to find the perfect plan for your organization.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90 px-8">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
