import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { disabledActionClassName, disabledActionProps } from '../utils/disabledAction';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('service') || 'Select a Service';

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter"
          >
            LET'S <br/><span className="text-gradient-accent">TALK.</span>
          </motion.h1>
        </div>
        <p className="text-xl text-brand-grey font-light max-w-sm mb-4">
          Ready to elevate your brand? Drop us a message and our team will get back to you shortly.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 text-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <h4 className="text-white font-display font-bold text-xl mb-2">Phone</h4>
                <p className="text-brand-grey mb-4">+971 50 7771306</p>
                <a href="tel:+971507771306" className={`text-sm font-bold text-brand-accent uppercase tracking-wider hover:text-white transition-colors ${disabledActionClassName}`} {...disabledActionProps}>Call Now</a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 text-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} />
                </div>
                <h4 className="text-white font-display font-bold text-xl mb-2">WhatsApp</h4>
                <p className="text-brand-grey mb-4">Instant Support</p>
                <a href="https://wa.me/971507771306" target="_blank" rel="noreferrer" className={`text-sm font-bold text-[#25D366] uppercase tracking-wider hover:text-white transition-colors ${disabledActionClassName}`} {...disabledActionProps}>Chat Now</a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group md:col-span-2"
              >
                <div className="w-12 h-12 bg-white/5 text-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <h4 className="text-white font-display font-bold text-xl mb-2">Email</h4>
                <p className="text-brand-grey mb-4">info@saqradvertising.com</p>
                <a href="mailto:info@saqradvertising.com" className={`text-sm font-bold text-brand-accent uppercase tracking-wider hover:text-white transition-colors ${disabledActionClassName}`} {...disabledActionProps}>Send Email</a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 rounded-3xl overflow-hidden shadow-lg h-64 bg-glass-card relative"
            >
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5">
                <MapPin size={48} className="text-brand-accent mb-4 opacity-50" />
                <p className="text-brand-grey font-medium text-lg">Shed # C-09, 29th Street</p>
                <p className="text-brand-grey/50 text-sm">Industrial Area 5, Sharjah, U.A.E.</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 bg-glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            <h3 className="text-3xl font-display font-bold mb-8 text-white relative z-10">Send a Request</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Full Name</label>
                  <input name="name" type="text" required className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Email Address</label>
                  <input name="email" type="email" required className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Service Required</label>
                <select name="service" defaultValue={selectedService} className="w-full px-4 py-4 rounded-xl bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none cursor-pointer">
                  <option>Select a Service</option>
                  <option>Signage & Display</option>
                  <option>Bespoke Joinery</option>
                  <option>Mall Kiosk</option>
                  <option>Exhibition Stand</option>
                  <option>Branding & Identity</option>
                  <option>Vehicle Branding</option>
                  <option>Vehicle Wrapping</option>
                  <option>Event Setups</option>
                  <option>Printing Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Project Details</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" disabled className={`px-8 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-silver transition-all w-full flex items-center justify-center gap-2 group ${disabledActionClassName}`}>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
