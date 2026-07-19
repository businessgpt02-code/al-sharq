import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    detail: 'Shed # C-09, 29th Street, Industrial Area 5, Sharjah, UAE',
  },
  {
    icon: Phone,
    title: 'Contact Number',
    detail: '+971 50 777 1306',
  },
  {
    icon: Mail,
    title: 'Email Address',
    detail: 'info@saqradvertising.com',
  },
];

const services = [
  'Signage',
  'Branding Work',
  'Exhibition Stand',
  'Mall Kiosk',
  'Vehicle Branding',
  'Other',
];

const inputClassName = 'w-full rounded-xl border border-white/10 bg-[#07111f]/80 px-4 py-4 text-white placeholder:text-brand-steel focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-colors';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    document.title = 'Contact SAQR AL SHARQ Advertising LLC | Signage Company Sharjah';

    const description = 'Contact SAQR AL SHARQ Advertising LLC, a signage company in Sharjah and advertising company UAE, for branding services and exhibition stand contractor UAE solutions.';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/contact`);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20 px-6 md:px-12">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 mt-10 block">
              Contact SAQR AL SHARQ Advertising LLC
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter">
              <span className="sr-only">Let&apos;s Build Your Brand Visibility with SAQR AL SHARQ Advertising LLC</span>
              LET&apos;S BUILD <br />
              <span className="text-white">YOUR BRAND.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-brand-grey font-light max-w-2xl mx-auto leading-relaxed"
          >
            Contact SAQR AL SHARQ Advertising LLC for premium signage, branding, exhibition, and advertising solutions across Sharjah, Dubai, and the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a
              href="#contact-form"
              className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowUpRight size={20} />
            </a>
            <a
              href="tel:+971507771306"
              className="px-8 py-4 border border-white/20 bg-white/5 text-white font-bold rounded-full hover:scale-105 hover:border-brand-accent transition-all flex items-center justify-center gap-2"
            >
              Call Now <Phone size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px] z-10"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] z-10"
        />
        <div className="absolute inset-0 z-0">
          <img
            src="/contact/contact.png"
            alt="Saqr Al Sharq contact and advertising project consultation"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#020617]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-[#020617]/20" />
        </div>
      </section>

      {/* 2. Address / Contact Number / Email Section */}
      <section className="px-6 md:px-12 pt-20 pb-8 md:pb-10 bg-[#020617]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[0.25em] text-brand-accent uppercase">
              Signage Company Sharjah | Advertising Company UAE
            </p>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black tracking-tighter">
              Contact Details
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-6">
            {contactCards.map(({ icon: Icon, title, detail }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 shadow-2xl shadow-black/20 hover:border-brand-accent/50 hover:shadow-brand-accent/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors">
                  <Icon size={26} />
                </div>
                <h3 className="mt-8 text-2xl font-display font-black tracking-tighter">
                  {title}
                </h3>
                <p className="mt-3 text-brand-grey leading-relaxed">
                  {detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="h-1" aria-hidden="true" />
        </div>
      </section>

      <div className="h-1 bg-[#020617]" aria-hidden="true" />

      {/* 3. Contact Form */}
      <section id="contact-form" className="px-6 md:px-12 pt-4 md:pt-6 pb-20 bg-gradient-to-b from-[#020617] to-[#07111f]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-brand-accent uppercase">
              Branding Services UAE | Exhibition Stands UAE
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-black tracking-tighter leading-tight">
              Start Your Project
            </h2>
            <p className="mt-6 text-lg text-brand-grey leading-relaxed">
              Tell us what you need and our team will guide you through signage, branding, mall kiosk, vehicle branding, and exhibition stand contractor UAE requirements.
            </p>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/25"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input className={inputClassName} type="text" name="fullName" placeholder="Full Name" />
              <input className={inputClassName} type="text" name="companyName" placeholder="Company Name" />
              <input className={inputClassName} type="tel" name="phone" placeholder="Phone Number" />
              <input className={inputClassName} type="email" name="email" placeholder="Email Address" />
            </div>

            <select className={`${inputClassName} mt-5`} name="service" defaultValue="">
              <option value="" disabled>
                Service Required
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <textarea
              className={`${inputClassName} mt-5 min-h-[150px] resize-none`}
              name="message"
              placeholder="Message"
            />

            <button
              type="submit"
              className="mt-6 w-full px-8 py-4 bg-brand-accent text-brand-navy font-black rounded-full hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
            >
              Send Enquiry <Send size={19} />
            </button>
          </form>
        </motion.div>
      </section>

      {/* 4. Google Map Section */}
      <section className="px-6 md:px-12 pt-28 pb-20 bg-[#020617]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <p className="text-sm font-bold tracking-[0.25em] text-brand-accent uppercase">
              Visit SAQR AL SHARQ Advertising LLC
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-black tracking-tighter">
              Find Our Workshop
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 bg-white/[0.04] h-[620px] md:h-[820px]">
            <iframe
              title="SAQR AL SHARQ Advertising LLC map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.821585406007!2d55.41218967475549!3d25.324165377629324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59549a03c199%3A0x6edbadf3971920c1!2sSaqr%20Al%20Sharq%20Adv%20LLC!5e1!3m2!1sen!2ssa!4v1783083915662!5m2!1sen!2ssa"
              className="w-full h-full min-h-[620px] md:min-h-[820px] border-0"
              style={{ height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <p className="mt-6 text-center text-lg text-brand-grey">
            Visit us or contact our team to discuss your next advertising project.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
