import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import malaiKoftaImg from '../assets/malai_kofta.png';
import chickenCurryImg from '../assets/chicken_curry.png';
import chickenBiryaniImg from '../assets/chicken_biryani.jpg';
import muttonCurryImg from '../assets/mutton_curry.png';
import muttonBiryaniImg from '../assets/mutton_biryani.png';
import paneerCurryImg from '../assets/paneer_curry.png';
import pappuDalImg from '../assets/pappu_dal.png';
import sambarRiceImg from '../assets/sambar_rice.png';
import kajuPaneerImg from '../assets/kaju_paneer.jpg';

const menuData = [
  {
    id: "veg",
    category: "Vegetarian Signatures",
    items: [
      { id: 1, name: "Sambar Rice", price: "$12", rating: 4.8, desc: "Classic South Indian comfort food: aromatic rice mixed with tangy lentil stew and vegetables.", image: sambarRiceImg },
      { id: 5, name: "Pappu (Dal)", price: "$10", rating: 4.7, desc: "Traditional cooked lentils tempered with ghee, mustard seeds, and curry leaves.", image: pappuDalImg },
      { id: 6, name: "Mushroom Curry", price: "$15", rating: 4.6, desc: "Fresh mushrooms cooked in a rich, spiced onion and tomato gravy.", image: "https://loremflickr.com/500/500/mushroom,curry,plate?lock=63" },
      { id: 7, name: "Paneer Curry", price: "$16", rating: 4.9, desc: "Soft cottage cheese cubes in a creamy, buttery tomato-based gravy.", image: paneerCurryImg },
      { id: 8, name: "Parota", price: "$4", rating: 4.8, desc: "Flaky, multi-layered flatbread served hot and crispy.", image: "https://loremflickr.com/500/500/paratha,indian,bread?lock=65" },
      { id: 9, name: "Kaju Paneer", price: "$18", rating: 4.9, desc: "Premium cashew nuts and paneer in a rich, nutty, and mildly spiced gravy.", image: kajuPaneerImg },
      { id: 10, name: "Malai Kofta Curry", price: "$17", rating: 5.0, desc: "Deep-fried veggie balls in a smooth, creamy, and mildly sweet gravy.", image: malaiKoftaImg }
    ]
  },
  {
    id: "non-veg",
    category: "Non-Vegetarian Favorites",
    items: [
      { id: 3, name: "Chicken Curry", price: "$16", rating: 4.9, desc: "Tender chicken pieces simmered in a rich, aromatic spicy gravy with Indian herbs.", image: chickenCurryImg },
      { id: 2, name: "Chicken Biryani", price: "$18", rating: 5.0, desc: "Fragrant basmati rice cooked with succulent chicken, saffron, and exotic spices.", image: chickenBiryaniImg },
      { id: 4, name: "Mutton Curry", price: "$20", rating: 4.8, desc: "Slow-cooked mutton in a thick, flavorful gravy made with caramelized onions and hand-ground spices.", image: muttonCurryImg },
      { id: 11, name: "Mutton Biryani", price: "$22", rating: 4.9, desc: "Traditional slow-cooked dum biryani with tender mutton pieces and long-grain basmati rice.", image: muttonBiryaniImg }
    ]
  }
];

export const PremiumMenu = () => {
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

        <div className="space-y-12 md:space-y-16">
          {menuData.map((category) => (
            <div key={category.category} id={category.id} className="scroll-mt-32">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 border-l-4 border-brand-500 pl-4 text-slate-800"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.1, duration: 0.5 }}
                    className="glass-panel p-4 rounded-2xl flex gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex justify-between items-start mb-1 md:mb-2 text-wrap">
                        <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors">{item.name}</h4>
                        <span className="text-base md:text-lg font-bold text-brand-600 ml-2">{item.price}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.desc}</p>
                      <div className="flex items-center gap-2 mt-auto">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium text-slate-500">{item.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
