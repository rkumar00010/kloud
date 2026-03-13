import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote: "Kloudvault transformed how we manage compliance. The archival system is bulletproof.",
    author: "Sarah Chen",
    role: "CIO, Global Financial Services",
  },
  {
    quote: "We consolidated six vendors into Kloudvault. The ROI was immediate and the compliance gains are measurable.",
    author: "Michael Rodriguez",
    role: "VP of IT, Healthcare Systems",
  },
  {
    quote: "The backup and recovery speed is incredible. We've reduced our RTO by 80%.",
    author: "Jennifer Park",
    role: "Director of Infrastructure, Tech Enterprise",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center px-12"
          >
            <p className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="text-gray-900 font-medium">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="hover:bg-gray-100 text-gray-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-[#6366F1]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="hover:bg-gray-100 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
