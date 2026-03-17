import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Search, Filter, ShoppingBag } from 'lucide-react';
import { menuItems, CATEGORIES } from '../data/menu';
import { openWhatsApp } from '../utils/whatsapp';

export const PremiumMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-12 md:py-24 bg-surface-light relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-800"
          >
            Our Delicious <span className="text-brand-500">Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Enjoy our tasty meals cooked fresh with the best ingredients for you.
          </motion.p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-3 no-scrollbar w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'bg-brand-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-brand-500 shadow-sm transition-all"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-4 rounded-2xl flex gap-4 md:gap-6 hover:-translate-y-2 transition-transform duration-300 group shadow-sm hover:shadow-xl relative overflow-hidden"
                >
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex justify-between items-start mb-1 text-wrap">
                      <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-1">{item.name}</h4>
                      <span className="text-base md:text-lg font-bold text-brand-600 ml-2">{item.price}</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 mb-3 line-clamp-2 md:line-clamp-3">{item.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-medium text-slate-500">{item.rating}</span>
                      </div>
                      
                      <button 
                        onClick={() => openWhatsApp(`Hello Mrs. Kitchen, I want to order ${item.name}.`)}
                        className="bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold"
                      >
                        <ShoppingBag size={14} />
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="text-slate-400 mb-4 flex justify-center">
                  <Filter size={48} />
                </div>
                <h3 className="text-xl font-bold text-slate-700">No dishes found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
