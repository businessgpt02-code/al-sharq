import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { disabledActionClassName, disabledActionProps } from '../utils/disabledAction';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio', disabled: true },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-500 pt-1 px-6 md:px-12 flex justify-center pointer-events-none">
      <div 
        className={clsx(
          "w-full max-w-7xl flex justify-between items-center transition-all duration-500 pointer-events-auto rounded-2xl",
          scrolled ? "bg-glass px-6 py-4" : "bg-transparent px-2 py-2"
        )}
      >
        <Link to="/" className="flex items-center z-50 group">
          <img 
            src="/logo.png" 
            alt="SAQR AL SHARQ" 
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "relative text-sm font-medium text-brand-silver hover:text-white transition-colors group",
                link.disabled && disabledActionClassName
              )}
              {...(link.disabled ? disabledActionProps : {})}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 bg-white text-brand-navy font-semibold rounded-full hover:bg-brand-silver transition-colors ${disabledActionClassName}`}
            {...disabledActionProps}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#020617]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "font-display text-4xl font-bold text-white hover:text-brand-accent transition-colors",
                  link.disabled && disabledActionClassName
                )}
                onClick={(event) => {
                  if (link.disabled) {
                    event.preventDefault();
                    return;
                  }
                  setIsOpen(false);
                }}
                {...(link.disabled ? { 'aria-disabled': 'true', tabIndex: -1 } : {})}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-10 py-4 mt-8 bg-white text-brand-navy font-bold text-xl rounded-full hover:bg-brand-silver transition-colors ${disabledActionClassName}`}
              onClick={(event) => event.preventDefault()}
              aria-disabled="true"
              tabIndex={-1}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
