import { motion } from 'framer-motion';

import chickenCurryImg from '../assets/chicken_curry.png';
import chickenBiryaniImg from '../assets/chicken_biryani.jpg';
import muttonCurryImg from '../assets/mutton_curry.png';
import muttonBiryaniImg from '../assets/mutton_biryani.png';
import paneerCurryImg from '../assets/paneer_curry.png';
import pappuDalImg from '../assets/pappu_dal.png';
import sambarRiceImg from '../assets/sambar_rice.png';
import kajuPaneerImg from '../assets/kaju_paneer.jpg';
import malaiKoftaImg from '../assets/malai_kofta.png';

const images = [
  chickenCurryImg,
  chickenBiryaniImg,
  muttonCurryImg,
  muttonBiryaniImg,
  paneerCurryImg,
  pappuDalImg,
  sambarRiceImg,
  kajuPaneerImg,
  malaiKoftaImg
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-800"
          >
            Food <span className="text-brand-500">Gallery</span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See our clean kitchen and the tasty food we make every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-white/5"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Signature Dish</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
