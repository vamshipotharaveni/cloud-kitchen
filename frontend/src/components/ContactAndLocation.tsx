import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

export const ContactAndLocation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-surface-lighter relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-2 text-slate-800">Contact <span className="text-brand-500">Us</span></h2>
            <p className="text-slate-600 mb-8">Do you have a special order or party? Tell us.</p>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-50 border border-brand-200 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-500 transition-colors shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-500 transition-colors shadow-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-500 transition-colors resize-none shadow-sm"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-800">Find Us <span className="text-brand-500">Here</span></h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center flex-shrink-0 text-brand-500 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-800">Visit Us</h4>
                    <p className="text-slate-600">123 Food Street,<br />City Center, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center flex-shrink-0 text-brand-500 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-800">Call Us</h4>
                    <p className="text-slate-600">+1 (555) 123-4567<br />Mon-Sun, 11am - 11pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-800 rounded-3xl overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3022.21550974797!2d-73.98782088459375!3d40.75727997932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus" 
                className="w-full h-full border-0 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
