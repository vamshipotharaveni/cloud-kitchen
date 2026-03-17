import { motion } from 'framer-motion';
import { ChefHat, ShoppingBag } from 'lucide-react';

const FallingFoodAnimation = () => {
  return (
    <div className="absolute left-[-10%] md:left-0 top-1/4 md:top-1/3 w-[300px] md:w-[400px] h-[500px] pointer-events-none opacity-40 z-0 hidden sm:block">
      {/* Plate */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 md:w-64 h-12 md:h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[100%] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-b-4 border-slate-300"
      >
        <div className="absolute top-1 left-2 right-2 bottom-2 bg-white rounded-[100%] shadow-inner" />
      </motion.div>

      {/* Falling Food items (Rice/Veggies/Meat) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
           key={`food-${i}`}
           className={`absolute top-0 left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-md shadow-sm ${i % 2 === 0 ? 'bg-orange-400' : 'bg-green-500'}`}
           style={{ marginLeft: -30 + i * 15 }}
           initial={{ y: -100, opacity: 0, rotate: 0 }}
           animate={{ 
             y: [-100, 420], 
             opacity: [0, 1, 1, 0],
             rotate: 360
           }}
           transition={{
             duration: 2.5,
             repeat: Infinity,
             delay: i * 0.5,
             ease: "easeIn"
           }}
        />
      ))}

      {/* Falling Curry (Liquid stream) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-6 md:w-10 h-16 md:h-24 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full blur-[2px]"
        initial={{ y: -150, opacity: 0, scaleY: 1 }}
        animate={{
          y: [-150, 400],
          opacity: [0, 1, 0.8, 0],
          scaleY: [1, 2, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeIn"
        }}
      />
      
      {/* Splash effect on plate */}
      <motion.div
        className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 w-20 md:w-32 h-6 md:h-8 bg-orange-500/60 rounded-[100%] blur-[4px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0, 0.8, 0],
          scale: [0, 0, 1.5, 2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeOut"
        }}
      />
    </div>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-60">
      {/* Bowl */}
      <div className="absolute bottom-[-10%] md:bottom-[-20%] w-[600px] h-[300px] bg-gradient-to-t from-brand-100 to-transparent rounded-full blur-3xl opacity-80" />
      
      {/* Hot Waves emanating from the bowl */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bottom-1/4 w-[200px] h-[300px] border-l-[8px] border-r-[8px] border-t-[8px] border-brand-300 rounded-[100%] blur-[4px] opacity-0"
          initial={{ y: 50, scaleX: 0.5, scaleY: 0.5, opacity: 0 }}
          animate={{
            y: [-50, -300],
            scaleX: [0.5, 1.5, 2],
            scaleY: [0.5, 1.5, 2],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-0 overflow-hidden bg-surface-lighter">
      <BackgroundAnimation />
      <FallingFoodAnimation />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-brand-500/20 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-semibold text-brand-600">Premium Quality Assured</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-slate-800">
            Delicious Food, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Fast Delivery.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-lg leading-relaxed">
            Enjoy premium, restaurant-quality meals cooked by our top chefs. Delivered right to your door, hot and fresh.
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold shadow-[0_8px_20px_rgba(225,29,72,0.3)] transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <ShoppingBag size={18} className="md:w-5 md:h-5" />
              Order on WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-white/60 hover:bg-white text-slate-800 rounded-full font-semibold border border-slate-200 shadow-sm transition-all flex items-center gap-2 backdrop-blur-md text-sm md:text-base"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Right Chef Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Animated Glow behind Chef */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-white/40 blur-[50px] rounded-full"
          />
          
          {/* Floating Chef Container */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 glass-panel p-16 rounded-3xl border-white bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-4"
          >
            <motion.div 
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 bg-brand-50 rounded-full flex items-center justify-center shadow-inner"
            >
              <ChefHat size={80} className="text-brand-500" />
            </motion.div>
            <span className="font-bold text-slate-700 text-xl tracking-wide">Master Chef</span>
          </motion.div>
          
          {/* Small Floating Elements */}
          <motion.div
            animate={{ y: [-10, 20, -10], rotate: [0, 45, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-brand-200 shadow-lg"
          />
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -45, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-sm bg-orange-200 shadow-lg"
          />
           <motion.div
            animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full border-4 border-brand-100 opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
};
