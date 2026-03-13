import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'sales@kloudvault.com',
      link: 'mailto:sales@kloudvault.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri 9am-6pm PST',
      link: null,
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
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your data lifecycle management? Our team is here to help you get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#13152A]/50 border border-white/10 rounded-2xl p-8"
              >
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#8B5CF6]/20">
                      <CheckCircle2 className="w-8 h-8 text-[#8B5CF6]" />
                    </div>
                    <h3 className="mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">First Name *</label>
                        <Input
                          required
                          placeholder="John"
                          className="bg-white/5 border-white/10 focus:border-[#8B5CF6]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Last Name *</label>
                        <Input
                          required
                          placeholder="Doe"
                          className="bg-white/5 border-white/10 focus:border-[#8B5CF6]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Work Email *</label>
                      <Input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="bg-white/5 border-white/10 focus:border-[#8B5CF6]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Company *</label>
                      <Input
                        required
                        placeholder="Acme Corp"
                        className="bg-white/5 border-white/10 focus:border-[#8B5CF6]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Phone</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-white/5 border-white/10 focus:border-[#8B5CF6]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">I'm interested in *</label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-[#8B5CF6]">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Scheduling a Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="archival">Archival Data Solution</SelectItem>
                          <SelectItem value="backup">Data Backup Solution</SelectItem>
                          <SelectItem value="reports">Reports & Analytics</SelectItem>
                          <SelectItem value="scanning">Scanning Solution</SelectItem>
                          <SelectItem value="ocr">OCR Solution</SelectItem>
                          <SelectItem value="cti">Calling (CTI) Solution</SelectItem>
                          <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Message *</label>
                      <Textarea
                        required
                        placeholder="Tell us about your data lifecycle challenges..."
                        className="bg-white/5 border-white/10 focus:border-[#8B5CF6] min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37] hover:opacity-90"
                    >
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#13152A]/50 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-lg flex items-center justify-center border border-[#8B5CF6]/20 flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#8B5CF6]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white hover:text-[#D4AF37] transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-white">{info.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4AF37]/10 border border-[#8B5CF6]/20 rounded-2xl p-8"
              >
                <h3 className="mb-4">Enterprise Support</h3>
                <p className="text-gray-400 mb-6">
                  Need immediate assistance? Enterprise customers get 24/7 priority support with dedicated account management.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]"
                >
                  Learn About Enterprise
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-32 bg-[#0D1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Looking for Answers?</h2>
            <p className="text-xl text-gray-400">Check out our most popular resources</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Documentation',
                desc: 'Comprehensive guides and API references',
                link: '#',
              },
              {
                title: 'FAQs',
                desc: 'Quick answers to common questions',
                link: '/pricing',
              },
              {
                title: 'Status Page',
                desc: 'Real-time system status and uptime',
                link: '#',
              },
            ].map((resource, i) => (
              <motion.a
                key={i}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#13152A]/50 border border-white/10 rounded-xl p-6 hover:border-[#8B5CF6]/50 transition-all"
              >
                <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">{resource.title}</h3>
                <p className="text-sm text-gray-400">{resource.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
