import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Shield, Lock, FileCheck } from 'lucide-react';
import logoImage from '../assets/footer-image.png';

export default function Footer() {
  return (
    <footer className="bg-[#0D1220] border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoImage} alt="Kloudvault" className="h-10" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enterprise-ready data lifecycle solutions—secure, compliant, and natively cloud.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-2 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-lg text-sm border border-[#8B5CF6]/20">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-gray-300">SOC 2</span>
              </div>
              <div className="flex items-center gap-2 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-lg text-sm border border-[#8B5CF6]/20">
                <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-gray-300">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-lg text-sm border border-[#8B5CF6]/20">
                <Lock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-gray-300">GDPR Ready</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10"
                />
                <Button className="bg-[#8B5CF6] hover:bg-[#7C4DFF] shadow-lg shadow-purple-500/25">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/solutions/archive" className="hover:text-white transition-colors">Archival Data</Link></li>
              <li><Link to="/solutions/backup" className="hover:text-white transition-colors">Data Backup</Link></li>
              <li><Link to="/solutions/reports" className="hover:text-white transition-colors">Reports & Analytics</Link></li>
              <li><Link to="/solutions/scanning" className="hover:text-white transition-colors">Scanning</Link></li>
              <li><Link to="/solutions/ocr" className="hover:text-white transition-colors">OCR</Link></li>
              <li><Link to="/solutions/cti" className="hover:text-white transition-colors">Calling (CTI)</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 Kloudrac. All rights reserved.</p>
          <p>Backed by Kloudrac's decade of cloud delivery.</p>
        </div>
      </div>
    </footer>
  );
}
