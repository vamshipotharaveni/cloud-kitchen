import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Menu', 
      href: '#menu',
      dropdown: [
        { name: 'Veg', href: '#veg' },
        { name: 'Non Veg', href: '#non-veg' }
      ]
    },
    { name: "Today's Special", href: '#todays-special' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="Mrs. Kitchen Logo" 
              className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-full"
            />
            <motion.div 
              className="absolute inset-0 bg-brand-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full z-[-1]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">MRS<span className="text-brand-500">Kitchen</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors py-2 flex items-center"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-500 transition-all group-hover:w-full" />
              </a>
              {link.dropdown && (
                <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border border-slate-100 py-2">
                  {link.dropdown.map(dropItem => (
                    <a 
                      key={dropItem.name} 
                      href={dropItem.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors"
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="relative p-2 text-slate-600 hover:text-brand-600 transition-colors">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 w-full glass-panel border-t-0 py-4 px-6 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <a 
                href={link.href}
                className="text-lg font-medium text-slate-600 hover:text-brand-600 transition-colors block"
                onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
              {link.dropdown && (
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100 ml-2">
                  {link.dropdown.map(dropItem => (
                    <a 
                      key={dropItem.name} 
                      href={dropItem.href}
                      className="text-base text-slate-500 hover:text-brand-600 transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
