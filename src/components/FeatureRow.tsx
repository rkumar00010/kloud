import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function FeatureRow({ icon: Icon, title, description, reverse }: FeatureRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
    >
      <div className="flex-1">
        <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#6366F1]/20">
          <Icon className="w-8 h-8 text-[#6366F1]" />
        </div>
        <h3 className="mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex-1 w-full">
        <div className="aspect-video bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden relative shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent" />
          <div className="w-32 h-32 bg-gradient-to-br from-[#6366F1]/30 to-[#8B5CF6]/30 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
