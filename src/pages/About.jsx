import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { disabledActionClassName, disabledActionProps } from '../utils/disabledAction';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20 px-6 md:px-12">
        {/* JSON-LD AboutPage Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Saqr Al Sharq Advertising LLC",
            "description": "Learn about Saqr Al Sharq Advertising LLC, Dubai's leading corporate signage manufacturer, custom joinery workshop, and advertising production company since 2015.",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Saqr Al Sharq Advertising LLC",
              "image": "https://saqralsharq.ae/logo.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Quoz Industrial Area",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "telephone": "+971507771306"
            }
          })}
        </script>

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
              Established in 2015
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter">
              <span className="sr-only">Saqr Al Sharq Advertising LLC - Premium Corporate Signage Fabrication, Custom Wooden Joinery, and Retail Exhibition Stands Builder in Dubai, UAE</span>
              WE ARE <br />
              <span className="text-white">SAQR AL SHARQ.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-brand-grey font-light max-w-2xl mx-auto leading-relaxed"
          >
            We don't just create ads; we engineer brand legacies. As a premier advertising agency in Dubai, we transform businesses through innovative design, strategic branding, and high-quality production.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 flex gap-6"
          >
            <Link to="/contact" className={`px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 ${disabledActionClassName}`} {...disabledActionProps}>
              Contact Us <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Abstract Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px] -z-10"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"
        />
        <div className="absolute inset-0 -z-20">
          <img 
            src="/about/about.png" 
            alt="About Us Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#020617]/85" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative pt-20 pb-12 px-6 md:px-12 overflow-hidden bg-[#020617]">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display font-black text-white/[0.01] pointer-events-none select-none z-0 whitespace-nowrap">
          LEGACY
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left side: Bold Tagline & Statement */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-brand-accent"></div>
                  <span className="text-sm font-bold tracking-[0.3em] text-brand-accent uppercase">
                    Our Story
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white leading-[0.9]">
                  CRAFTING <br />
                  <span className="text-white">ICONIC</span> <br />
                  BRAND EXPERIENCES.
                </h2>
                
                <div className="mt-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img
                    src="/about/our story.png"
                    alt="Saqr Al Sharq premium production facility"
                    className="w-full h-[260px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-xl md:text-2xl font-light italic text-white leading-relaxed font-display">
                    "We don't just create signage; we build powerful brand identities and advertising experiences that leave a lasting impression across the UAE."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side: Editorial Text Flow */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-invert max-w-none space-y-8 text-brand-grey text-lg md:text-xl font-light leading-relaxed"
              >
                <p className="first-letter:text-6xl first-letter:font-black first-letter:text-brand-accent first-letter:mr-3 first-letter:float-left first-letter:font-display">
                  Established in <span className="text-white font-semibold">2015</span> in Sharjah, <span className="text-white font-semibold">SAQR AL SHARQ Advertising LLC</span> began with a clear vision: to become a leading advertising company in UAE, delivering innovative signage solutions, branding services, and premium fabrication with unmatched quality. From concept to execution, we have built a reputation for reliability, creativity, and excellence across diverse industries.
                </p>

                <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent my-6" />

                <p>
                  As our clients grew, so did we. With over <span className="text-white font-semibold">11 years of experience</span>, we expanded into 3D letter signage, illuminated signboards, light boxes, digital printing, exhibition stands, and mall kiosk fabrication. Supported by advanced machinery and in-house expertise, we deliver high-quality advertising solutions with precision and timely execution throughout the UAE.
                </p>

                <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent my-6" />

                <p className="text-white font-medium">
                  Today, we operate as a full-service advertising and branding powerhouse. Backed by cutting-edge production facilities, a skilled team of professionals, and a strong commitment to innovation, we have successfully delivered projects with a <span className="text-brand-accent font-bold">100% completion record</span>, earning the trust of businesses seeking the best branding company, signage company, and advertising solutions provider in the UAE.
                </p>

                <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent my-6" />

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <div className="text-3xl font-display font-black text-brand-accent">11+</div>
                    <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Years of Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-brand-accent">100%</div>
                    <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Completion Record</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-black text-brand-accent">7/7</div>
                    <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Emirates Covered</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Editorial Mission & Vision Section (Card-less) */}
      <section className="relative pt-12 pb-24 overflow-hidden border-t border-white/5 bg-[#020617]" aria-label="Corporate Mission and Vision Statement">
        {/* JSON-LD Mission & Vision Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Saqr Al Sharq Advertising LLC",
            "image": "https://saqralsharq.ae/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "knowsAbout": [
              "Corporate Signage Fabrication",
              "Bespoke Wood Joinery",
              "Retail Mall Kiosks",
              "Exhibition Stand Design & Build",
              "Vehicle Graphics & Wrapping"
            ],
            "slogan": "We don't just create signage; we build powerful brand identities."
          })}
        </script>
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col gap-32">
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group"
            >
              <div className="md:w-1/3 flex justify-end w-full">
                <div className="relative">
                  <h3 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase tracking-tighter">
                    <span className="sr-only">Our Advertising Mission - </span>
                    Mission
                  </h3>
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="absolute w-4 h-4 bg-brand-accent rounded-full blur-sm"></div>
                    <div className="absolute w-2 h-2 bg-brand-accent rounded-full"></div>
                    <div className="absolute w-6 h-6 border border-brand-accent/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 border-l border-white/10 pl-8 md:pl-16 relative py-8">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-brand-accent to-transparent group-hover:h-full transition-all duration-1000 ease-out"></div>
                <p className="text-2xl md:text-4xl font-light text-brand-silver leading-relaxed relative z-10">
                  To deliver <span className="text-white font-medium">exceptional creative solutions</span> that empower businesses to communicate their unique value effectively, ensuring sustainable growth and brand recognition in a highly competitive landscape.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 group"
            >
              <div className="md:w-1/3 flex justify-start w-full">
                <div className="relative">
                  <h3 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900/20 uppercase tracking-tighter">
                    <span className="sr-only">Our Signage and Branding Vision - </span>
                    Vision
                  </h3>
                  <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full blur-sm"></div>
                    <div className="absolute w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute w-6 h-6 border border-blue-500/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 border-r border-white/10 pr-8 md:pr-16 text-right relative py-8">
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-gradient-to-b from-blue-500 to-transparent group-hover:h-full transition-all duration-1000 ease-out"></div>
                <p className="text-2xl md:text-4xl font-light text-brand-silver leading-relaxed relative z-10">
                  To be the <span className="text-white font-medium">leading advertising and branding agency</span> in the region, recognized for our innovative approach, unmatched production quality, and unwavering commitment to client success.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* Why Choose Us Section (Editorial List) — SEO Optimised */}
      <section
        className="relative py-16 bg-[#020617] border-t border-white/5"
        aria-label="Why Choose Saqr Al Sharq Advertising LLC for Signage and Fabrication in UAE"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* JSON-LD: ItemList Schema for Why Choose Us */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Why Choose Saqr Al Sharq Advertising LLC — Top Signage & Fabrication Company in UAE",
            "description": "Key advantages of partnering with Saqr Al Sharq Advertising LLC, a leading advertising, signage, and brand fabrication company in Dubai and Sharjah, UAE.",
            "url": "https://saqralsharq.ae/about",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "In-House Production — Premium Signage Fabrication Dubai",
                "description": "Equipped with state-of-the-art CNC, laser, and UV printing machinery, our fully integrated facilities in the UAE guarantee absolute quality control, zero outsourcing delays, and unmatched precision from raw materials to final signage build."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Creative Excellence — Award-Winning Branding & Advertising Solutions UAE",
                "description": "We blend visionary design aesthetics with structural engineering to create iconic brand landmarks, bespoke illuminated signboards, and premium advertising displays across Dubai and the wider UAE."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Proven Expertise — 10+ Years Signage & Joinery Experience in Dubai",
                "description": "Backed by over a decade of hands-on industry experience, Saqr Al Sharq has a pristine track record of delivering high-stakes, large-scale signage, joinery, and exhibition stand projects for global brands in the UAE."
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "End-to-End Advertising Service — Concept to Installation in UAE",
                "description": "We are your single point of contact for all advertising needs. We manage every phase: conceptual design, 3D prototyping, municipal approvals, signage fabrication, and flawless installation throughout the UAE."
              }
            ]
          })}
        </script>

        {/* Hidden SEO keyword block — read by crawlers */}
        <div className="sr-only" aria-hidden="false">
          <p>Best signage company in Dubai UAE | Top advertising fabrication company Sharjah | Custom 3D signage letters Dubai | Exhibition stand builders UAE | Mall kiosk fabrication Dubai | Illuminated signboard manufacturers UAE | Vehicle wrapping Dubai | Corporate branding solutions UAE</p>
        </div>

        <div className="px-6 md:px-12 mb-12" itemProp="name">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-brand-accent" />
            <span className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase">
              The Saqr Advantage
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
            <span className="sr-only">Why Choose Saqr Al Sharq — UAE's Leading Signage, Advertising & Fabrication Company — </span>
            WHY CHOOSE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
              US.
            </span>
          </h2>
        </div>

        <ol
          className="border-t border-white/10 flex flex-col list-none"
          aria-label="Saqr Al Sharq Key Advantages for Signage and Brand Fabrication in UAE"
          itemProp="itemListElement"
        >
          {/* Row 1 */}
          <li
            className="group border-b border-white/10 relative overflow-hidden transition-colors duration-500 hover:bg-brand-accent/5 cursor-pointer"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="item"
          >
            <meta itemProp="position" content="1" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/10 to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span
                  className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(56,189,248,0.8)] transition-all duration-500 font-display"
                  aria-hidden="true"
                >
                  01
                </span>
                <h3
                  className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-500 uppercase tracking-tight"
                  itemProp="name"
                >
                  In-House Production
                  <span className="sr-only"> — Premium Signage Fabrication Facility in Dubai, UAE</span>
                </h3>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 md:border-l border-white/10 group-hover:border-brand-accent/30 transition-colors duration-500">
                <p
                  className="text-xl text-brand-grey group-hover:text-white transition-colors duration-500 font-light leading-relaxed"
                  itemProp="description"
                >
                  Equipped with state-of-the-art CNC routers, laser engravers, and UV printers, our fully integrated <strong className="text-white/80 font-normal">signage fabrication facilities in Dubai</strong> guarantee absolute quality control, zero outsourcing delays, and unmatched precision from raw materials to final build.
                </p>
              </div>
            </div>
          </li>

          {/* Row 2 */}
          <li
            className="group border-b border-white/10 relative overflow-hidden transition-colors duration-500 hover:bg-brand-accent/5 cursor-pointer"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="item"
          >
            <meta itemProp="position" content="2" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/10 to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span
                  className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(56,189,248,0.8)] transition-all duration-500 font-display"
                  aria-hidden="true"
                >
                  02
                </span>
                <h3
                  className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-500 uppercase tracking-tight"
                  itemProp="name"
                >
                  Creative Excellence
                  <span className="sr-only"> — Award-Winning Branding & Advertising Solutions in UAE</span>
                </h3>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 md:border-l border-white/10 group-hover:border-brand-accent/30 transition-colors duration-500">
                <p
                  className="text-xl text-brand-grey group-hover:text-white transition-colors duration-500 font-light leading-relaxed"
                  itemProp="description"
                >
                  We don't just execute; we innovate. By blending visionary design with structural engineering, we transform ordinary spaces into iconic <strong className="text-white/80 font-normal">illuminated signboards, 3D letter signage, and brand landmarks</strong> across Dubai and the UAE.
                </p>
              </div>
            </div>
          </li>

          {/* Row 3 */}
          <li
            className="group border-b border-white/10 relative overflow-hidden transition-colors duration-500 hover:bg-brand-accent/5 cursor-pointer"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="item"
          >
            <meta itemProp="position" content="3" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/10 to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span
                  className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(56,189,248,0.8)] transition-all duration-500 font-display"
                  aria-hidden="true"
                >
                  03
                </span>
                <h3
                  className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-500 uppercase tracking-tight"
                  itemProp="name"
                >
                  Proven Expertise
                  <span className="sr-only"> — 10+ Years Signage & Joinery Experience in Dubai, UAE</span>
                </h3>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 md:border-l border-white/10 group-hover:border-brand-accent/30 transition-colors duration-500">
                <p
                  className="text-xl text-brand-grey group-hover:text-white transition-colors duration-500 font-light leading-relaxed"
                  itemProp="description"
                >
                  Backed by <strong className="text-white/80 font-normal">over 10 years of advertising and signage expertise in the UAE</strong>, we have a pristine track record of delivering high-stakes, large-scale projects for the most demanding global brands across all seven Emirates.
                </p>
              </div>
            </div>
          </li>

          {/* Row 4 */}
          <li
            className="group border-b border-white/10 relative overflow-hidden transition-colors duration-500 hover:bg-brand-accent/5 cursor-pointer"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="item"
          >
            <meta itemProp="position" content="4" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/10 to-brand-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span
                  className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(56,189,248,0.8)] transition-all duration-500 font-display"
                  aria-hidden="true"
                >
                  04
                </span>
                <h3
                  className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-brand-accent transition-colors duration-500 uppercase tracking-tight"
                  itemProp="name"
                >
                  End-to-End Service
                  <span className="sr-only"> — Full-Service Advertising & Signage Installation Across UAE</span>
                </h3>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 md:border-l border-white/10 group-hover:border-brand-accent/30 transition-colors duration-500">
                <p
                  className="text-xl text-brand-grey group-hover:text-white transition-colors duration-500 font-light leading-relaxed"
                  itemProp="description"
                >
                  We are your single point of contact for <strong className="text-white/80 font-normal">advertising signage, exhibition stands, mall kiosks, and vehicle wrapping in the UAE</strong>. We manage every phase: conceptual design, 3D prototyping, municipal approvals, fabrication, and flawless installation.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* CTA Section — About Page, SEO Optimised */}
      <section
        className="pt-16 pb-24 px-6 md:px-12 relative overflow-hidden"
        aria-label="Partner With Saqr Al Sharq — Leading Advertising & Signage Company in UAE"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        {/* JSON-LD: LocalBusiness + ContactPoint schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Saqr Al Sharq Advertising LLC",
            "description": "Saqr Al Sharq is one of the UAE's top advertising, signage fabrication, exhibition stand, mall kiosk, and vehicle wrapping companies, operating across Dubai, Sharjah, and all seven Emirates since 2015.",
            "url": "https://saqralsharq.ae",
            "logo": "https://saqralsharq.ae/logo.png",
            "image": "https://saqralsharq.ae/about/CTA.png",
            "foundingDate": "2015",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "50+" },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial Area",
              "addressLocality": "Sharjah",
              "addressCountry": "AE"
            },
            "areaServed": ["Dubai", "Sharjah", "Abu Dhabi", "UAE"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-50-777-1306",
              "contactType": "Sales",
              "areaServed": "AE",
              "availableLanguage": ["English", "Arabic"],
              "contactOption": "TollFree"
            }
          })}
        </script>

        {/* Hidden SEO keyword block */}
        <div className="sr-only" aria-hidden="false">
          <p>Partner with top signage company Dubai | Best advertising fabrication company UAE | Custom signage solutions Sharjah | LED signboard manufacturer Dubai | Exhibition stand contractor UAE | Mall kiosk builder Sharjah | Corporate branding agency Dubai | Vehicle wrap company UAE | 3D letter signage Dubai | Signage installation company UAE</p>
        </div>

        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/about/CTA.png"
            alt="Saqr Al Sharq Advertising fabrication team at work in our Dubai production facility"
            className="w-full h-full object-cover scale-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#020617]/85" />
        </div>
        <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: Copy & Interactive Pills */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-accent uppercase mb-4 block">
                  START YOUR PROJECT
                </span>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white leading-tight">
                  <span className="sr-only">Work With the UAE's Most Trusted Signage & Advertising Fabrication Company — Saqr Al Sharq Advertising LLC, Dubai & Sharjah — </span>
                  YOUR BRAND,<br />
                  <span className="text-white">BUILT TO LAST.</span>
                </h2>
                <p className="text-brand-grey text-lg md:text-xl font-light mt-6 leading-relaxed max-w-xl">
                  With a decade of precision craftsmanship and a 100% on-time delivery record, our team of <strong className="text-white font-normal">UAE-based signage specialists and brand fabricators</strong> is ready to bring your vision to life — from concept to installation, with zero compromises.
                </p>
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block">
                  What can we fabricate for you?
                </span>
                <nav className="flex flex-wrap gap-3" aria-label="About Page Service Quick Contact Links — Signage & Fabrication UAE">
                  {[
                    "3D Letter Signage",
                    "Illuminated Signboards",
                    "Exhibition Stands",
                    "Mall Kiosks",
                    "Vehicle Wrapping",
                    "Bespoke Joinery",
                  ].map((service, i) => (
                    <Link
                      key={i}
                      to={`/contact?service=${encodeURIComponent(service)}`}
                      className={`px-5 py-3 rounded-full bg-white/5 border border-white/5 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 hover:border-brand-accent/30 transition-colors ${disabledActionClassName}`}
                      {...disabledActionProps}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
                      {service}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right side: Premium Interactive Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-glass-card rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group transition-all duration-500"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-[40px] transition-all duration-500" />

                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Let's Talk Production
                </h3>
                <p className="text-brand-grey text-base font-light mb-8 leading-relaxed">
                  Have specific dimensions, drawings, or project details ready? Share your brief and receive a tailored proposal from our engineering team within 24 hours.
                </p>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className={`w-full py-4 bg-white text-brand-navy font-bold rounded-2xl hover:bg-brand-silver transition-colors flex items-center justify-center gap-2 ${disabledActionClassName}`}
                    {...disabledActionProps}
                  >
                    Get a Tailored Quote
                    <ArrowUpRight size={20} />
                  </Link>
                  <a
                    href="https://wa.me/971507771306?text=Hi%20Saqr%20Al%20Sharq%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2 ${disabledActionClassName}`}
                    {...disabledActionProps}
                  >
                    Discuss on WhatsApp
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-brand-grey">
                  <span>Fast Response (UAE Time)</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 relative flex">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Fabrication Team Online
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};


export default About;
