import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export default function SolutionCard({ icon: Icon, title, description, slug }: SolutionCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -6;
    const rotateYValue = ((x - centerX) / centerX) * 6;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Link to={`/solutions/${slug}`}>
      <motion.div
        className="relative group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          className="relative bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-[#6366F1]/50 hover:shadow-xl hover:shadow-purple-500/10"
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{
            boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-xl flex items-center justify-center mb-6 border border-[#6366F1]/20">
              <Icon className="w-7 h-7 text-[#6366F1]" />
            </div>
            
            <h3 className="mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            
            <div className="inline-flex items-center gap-2 text-[#6366F1] group-hover:gap-3 transition-all font-medium">
              <span>Learn More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
