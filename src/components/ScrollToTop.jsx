import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if page is scrolled beyond 300px
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrolled / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG parameters for progress circle
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#090d16]/80 backdrop-blur-md border border-white/10 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 cursor-pointer"
          aria-label="Scroll to Top"
        >
          {/* Scroll progress circular indicator */}
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 50 50">
            <circle
              className="text-white/5"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
            <circle
              className="text-brand-accent transition-all duration-100"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
          </svg>
          
          <ArrowUp className="w-5 h-5 relative z-10 text-brand-accent hover:text-white transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
