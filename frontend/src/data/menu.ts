import malaiKoftaImg from '../assets/malai_kofta.png';
import chickenCurryImg from '../assets/chicken_curry.png';
import chickenBiryaniImg from '../assets/chicken_biryani.jpg';
import muttonCurryImg from '../assets/mutton_curry.png';
import muttonBiryaniImg from '../assets/mutton_biryani.png';
import paneerCurryImg from '../assets/paneer_curry.png';
import pappuDalImg from '../assets/pappu_dal.png';
import sambarRiceImg from '../assets/sambar_rice.png';
import kajuPaneerImg from '../assets/kaju_paneer.jpg';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  rating: number;
  desc: string;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  // Vegetarian Items
  { id: 1, name: "Sambar Rice", price: "$12", rating: 4.8, desc: "Classic South Indian comfort food: aromatic rice mixed with tangy lentil stew and vegetables.", image: sambarRiceImg, category: "veg" },
  { id: 5, name: "Pappu (Dal)", price: "$10", rating: 4.7, desc: "Traditional cooked lentils tempered with ghee, mustard seeds, and curry leaves.", image: pappuDalImg, category: "veg" },
  { id: 6, name: "Mushroom Curry", price: "$15", rating: 4.6, desc: "Fresh mushrooms cooked in a rich, spiced onion and tomato gravy.", image: "https://loremflickr.com/500/500/mushroom,curry,plate?lock=63", category: "veg" },
  { id: 7, name: "Paneer Curry", price: "$16", rating: 4.9, desc: "Soft cottage cheese cubes in a creamy, buttery tomato-based gravy.", image: paneerCurryImg, category: "veg" },
  { id: 8, name: "Parota", price: "$4", rating: 4.8, desc: "Flaky, multi-layered flatbread served hot and crispy.", image: "https://loremflickr.com/500/500/paratha,indian,bread?lock=65", category: "veg" },
  { id: 9, name: "Kaju Paneer", price: "$18", rating: 4.9, desc: "Premium cashew nuts and paneer in a rich, nutty, and mildly spiced gravy.", image: kajuPaneerImg, category: "veg" },
  { id: 10, name: "Malai Kofta Curry", price: "$17", rating: 5.0, desc: "Deep-fried veggie balls in a smooth, creamy, and mildly sweet gravy.", image: malaiKoftaImg, category: "veg" },
  
  // Non-Vegetarian Items
  { id: 3, name: "Chicken Curry", price: "$16", rating: 4.9, desc: "Tender chicken pieces simmered in a rich, aromatic spicy gravy with Indian herbs.", image: chickenCurryImg, category: "non-veg" },
  { id: 2, name: "Chicken Biryani", price: "$18", rating: 5.0, desc: "Fragrant basmati rice cooked with succulent chicken, saffron, and exotic spices.", image: chickenBiryaniImg, category: "non-veg" },
  { id: 4, name: "Mutton Curry", price: "$20", rating: 4.8, desc: "Slow-cooked mutton in a thick, flavorful gravy made with caramelized onions and hand-ground spices.", image: muttonCurryImg, category: "non-veg" },
  { id: 11, name: "Mutton Biryani", price: "$22", rating: 4.9, desc: "Traditional slow-cooked dum biryani with tender mutton pieces and long-grain basmati rice.", image: muttonBiryaniImg, category: "non-veg" }
];

export const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'veg', name: 'Vegetarian' },
  { id: 'non-veg', name: 'Non-Vegetarian' }
];
