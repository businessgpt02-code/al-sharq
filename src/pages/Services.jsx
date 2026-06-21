import { motion } from 'framer-motion';
import { Monitor, PenTool, Printer, Truck, Box, ImageIcon, Image, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Signage & Display", desc: "Custom indoor and outdoor signs, illuminated boards, and digital displays.", icon: <Monitor size={40} /> },
    { title: "Visual Identity", desc: "Logo design, corporate guidelines, and complete brand asset creation.", icon: <PenTool size={40} /> },
    { title: "Printing Services", desc: "High-volume offset printing, digital printing, and business cards.", icon: <Printer size={40} /> },
    { title: "Vehicle Branding", desc: "Full or partial vehicle wraps, fleet graphics, and magnetic signs.", icon: <Truck size={40} /> },
    { title: "3D Signage", desc: "Premium 3D letters, acrylic cutouts, and architectural signage.", icon: <Box size={40} /> },
    { title: "Event Branding", desc: "Booth design, pop-up stands, and complete event visual setups.", icon: <ImageIcon size={40} /> },
    { title: "Digital Assets", desc: "Social media assets, digital banners, and multimedia campaign visuals.", icon: <Image size={40} /> },
    { title: "Promotional", desc: "Corporate gifts, branded apparel, mugs, pens, and custom giveaways.", icon: <Megaphone size={40} /> }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8"
        >
          OUR <span className="text-gradient-accent">SERVICES.</span>
        </motion.h1>
        <p className="text-xl text-brand-grey font-light max-w-2xl mx-auto">
          Comprehensive production capabilities housed under one roof. We design, we build, we install.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-brand-accent/30 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-brand-accent/10 group-hover:scale-150 transition-all duration-500">
                {service.icon}
              </div>
              <div className="text-white mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-brand-grey relative z-10 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <h2 className="text-4xl md:text-6xl font-display font-black mb-16 text-center">THE PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "DISCOVER", desc: "Understanding your brand DNA and objectives." },
            { num: "02", title: "DESIGN", desc: "Engineering the visual concepts and blueprints." },
            { num: "03", title: "PRODUCE", desc: "Bringing designs to life with premium materials." },
            { num: "04", title: "DEPLOY", desc: "Installation and final delivery of the project." }
          ].map((step, idx) => (
            <div key={idx} className="relative pt-12">
              <div className="absolute top-0 left-0 text-7xl font-display font-black text-white/5 -z-10">{step.num}</div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-brand-grey">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
