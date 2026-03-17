import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12 border-t border-slate-100 relative overflow-hidden">
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Mrs. Kitchen Logo" className="h-10 w-10 object-contain rounded-full" />
            <span className="text-xl font-bold tracking-tight text-slate-800">MRS<span className="text-brand-500">Kitchen</span></span>
          </a>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MRS Kitchen. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
