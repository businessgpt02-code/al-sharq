import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, ArrowUpRight, Layout, Brush, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { disabledActionClassName, disabledActionProps } from '../utils/disabledAction';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      title: "Signage & Display Solutions",
      desc: "Custom indoor and outdoor signs, illuminated boards, and cutting-edge digital displays that capture attention instantly.",
      icon: <Monitor className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform text-brand-electric" />,
      items: ["Outdoor Shop Signage", "Mall Signage", "Roof Top Signage", "Indoor Signage", "Reception Signage", "LED Neon Signage", "Flexface Signage", "Light Box Signage", "Acrylic Signage", "Aluminium Signage", "Stainless Steel (SS) Signage"],
      glowClass: "bg-brand-electric/10 group-hover:bg-brand-electric/30",
      borderColor: "group-hover:border-brand-electric/30"
    },
    {
      title: "Vehicle Wrapping",
      desc: "Turn your fleet into moving billboards with our high-quality wraps and vehicle branding.",
      icon: <Car className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform text-pink-400" />,
      items: ["Full Vehicle Wrap", "Partial Vehicle Wrap", "Reflective Graphics", "Fleet Branding", "Magnetic Signs"],
      glowClass: "bg-pink-500/10 group-hover:bg-pink-500/30",
      borderColor: "group-hover:border-pink-400/30"
    },
    {
      title: "Exhibition Stands & Kiosks",
      desc: "Custom shop & office interiors, retail mall kiosks, premium exhibition stands, event setups, and integrated LED screen walls engineered to perfection.",
      icon: <Layout className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform text-brand-accent" />,
      items: ["Shop/Office Interior", "Mall Kiosks", "Exhibition Stand", "Event Setup", "LED Screen Walls"],
      glowClass: "bg-brand-accent/10 group-hover:bg-brand-accent/30",
      borderColor: "group-hover:border-brand-accent/30"
    }
  ];

  useEffect(() => {
    document.title = "Advertising, Signage & Branding Services in Sharjah, Dubai UAE | Saqr Al Sharq";

    const description = "Saqr Al Sharq Advertising LLC provides Signage Work and Branding Work services in Sharjah, Dubai, and across the UAE.";
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
    canonical.setAttribute('href', `${window.location.origin}/services`);
  }, []);

  const serviceNames = services.map((service) => service.title).join(", ");

  return (
    <div ref={containerRef} className="w-full bg-brand-dark min-h-screen">
      {/* HERO SECTION - KEPT EXACTLY AS ORIGINAL */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20 px-6 md:px-12">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://saqralsharq.ae/services#webpage",
                "url": "https://saqralsharq.ae/services",
                "name": "Advertising, Signage & Branding Services in Sharjah, Dubai UAE",
                "description": "Professional Signage Work and Branding Work services in Sharjah, Dubai, and across the UAE.",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "Saqr Al Sharq Advertising LLC",
                  "url": "https://saqralsharq.ae/"
                },
                "about": {
                  "@id": "https://saqralsharq.ae/#localbusiness"
                },
                "breadcrumb": {
                  "@id": "https://saqralsharq.ae/services#breadcrumb"
                },
                "mainEntity": {
                  "@id": "https://saqralsharq.ae/services#service-catalog"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://saqralsharq.ae/services#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://saqralsharq.ae/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://saqralsharq.ae/services"
                  }
                ]
              },
              {
                "@type": ["LocalBusiness", "ProfessionalService"],
                "@id": "https://saqralsharq.ae/#localbusiness",
                "name": "Saqr Al Sharq Advertising LLC",
                "url": "https://saqralsharq.ae/",
                "image": "https://saqralsharq.ae/logo.png",
                "telephone": "+971507771306",
                "email": "info@saqradvertising.com",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shed # C-09, 29th Street, Industrial Area 5",
                  "addressLocality": "Sharjah",
                  "addressCountry": "AE"
                },
                "areaServed": [
                  { "@type": "City", "name": "Sharjah" },
                  { "@type": "City", "name": "Dubai" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "knowsAbout": services.map((service) => service.title)
              },
              {
                "@type": "OfferCatalog",
                "@id": "https://saqralsharq.ae/services#service-catalog",
                "name": "Advertising, Signage, Branding, Printing, and Fabrication Services",
                "itemListElement": services.map((service, index) => ({
                  "@type": "Offer",
                  "position": index + 1,
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.desc,
                    "provider": {
                      "@id": "https://saqralsharq.ae/#localbusiness"
                    },
                    "areaServed": ["Sharjah", "Dubai", "UAE"]
                  }
                }))
              }
            ]
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
              Signage & Branding Work in UAE
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter">
              <span className="sr-only">Signage and Branding Services in Sharjah, Dubai, and across the UAE by Saqr Al Sharq Advertising LLC</span>
              CORE ADVERTISING <br />
              <span className="text-white">SERVICES.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-brand-grey font-light max-w-2xl mx-auto leading-relaxed"
          >
            Saqr Al Sharq Advertising LLC specializes in premium Signage and comprehensive Branding services in Sharjah, Dubai, and across the UAE.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="sr-only"
          >
            Our core advertising services include {serviceNames}. We serve businesses, retail stores, offices, events, and exhibition projects throughout Sharjah, Dubai, Ajman, Abu Dhabi, and the United Arab Emirates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 flex gap-6"
          >
            <Link to="/contact" className={`px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 ${disabledActionClassName}`} {...disabledActionProps}>
              Start a Project <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px] z-10"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] z-10"
        />
        <div className="absolute inset-0 z-0">
          <img
            src="/service_page/hero.png"
            alt="Saqr Al Sharq signage and advertising services"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#020617]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-[#020617]/20" />
        </div>
      </section>

      {/* OUR CORE SERVICES SECTION */}
      <section
        className="relative overflow-hidden bg-[#020617] py-14 md:py-20"
        aria-labelledby="core-expertise-heading"
        aria-describedby="core-expertise-description"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://saqralsharq.ae/services#core-expertise",
            "name": "Core Advertising Expertise in Sharjah, Dubai, and UAE",
            "description": "Core expertise from Saqr Al Sharq Advertising LLC covering signage and branding work for businesses across Sharjah, Dubai, and the UAE.",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "@id": `https://saqralsharq.ae/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
                "name": `${service.title} Services in Sharjah, Dubai, and UAE`,
                "description": service.desc,
                "provider": {
                  "@id": "https://saqralsharq.ae/#localbusiness"
                },
                "areaServed": [
                  { "@type": "City", "name": "Sharjah" },
                  { "@type": "City", "name": "Dubai" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "serviceType": service.items,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "url": `https://saqralsharq.ae/contact?service=${encodeURIComponent(service.title)}`
                }
              }
            }))
          })}
        </script>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-electric/40 to-transparent" />
        <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="text-sm font-bold tracking-[0.28em] text-brand-accent uppercase mb-4 block">
                Core Expertise
              </span>
              <h2 id="core-expertise-heading" className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter">
                SIGNAGE & BRANDING. <br />
                <span className="text-white">ONE PRODUCTION HOUSE.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              id="core-expertise-description"
              className="lg:col-span-5 text-lg md:text-xl text-brand-grey leading-relaxed font-light lg:pt-8"
            >
              Saqr Al Sharq Advertising LLC delivers signage work and branding work in Sharjah, Dubai, and across the UAE, from first concept to final installation.
            </motion.p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => {
              const images = ["/service_page/1.png", "/service_page/3.png", "/service_page/4.png"];
              const isReversed = index % 2 === 1;

              return (
                <motion.article
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  aria-labelledby={`expertise-${index}-heading`}
                  aria-describedby={`expertise-${index}-description`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75, delay: index * 0.12 }}
                  className="group relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-white/10 bg-white/[0.025]"
                >
                  <div className={`grid lg:grid-cols-12 min-h-[430px] ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden">
                      <img
                        src={images[index]}
                        alt={`${service.title} by Saqr Al Sharq Advertising LLC`}
                        className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-transparent" />
                      <div className="absolute left-6 top-6 md:left-8 md:top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md text-white">
                        {service.icon}
                      </div>
                      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                        <span className="font-display text-6xl md:text-8xl font-black text-white/15">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-7 md:p-10 lg:p-14 flex flex-col justify-center relative">
                      <div className={`absolute right-0 top-0 h-56 w-56 rounded-full blur-[85px] opacity-60 ${service.glowClass}`} />
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="h-px w-14 bg-brand-accent/70" />
                          <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
                            Premium {service.title}
                          </span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-5">
                          <span id={`expertise-${index}-heading`} className="sr-only">
                            {service.title} Services in Sharjah, Dubai, and UAE
                          </span>
                          {service.title}
                        </h3>
                        <p id={`expertise-${index}-description`} className="text-brand-silver text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                          {service.desc}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.items.map((item) => (
                            <Link
                              key={item}
                              to={`/contact?service=${encodeURIComponent(item)}`}
                              className={`group/item flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-brand-silver backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white ${service.borderColor} ${disabledActionClassName}`}
                              {...disabledActionProps}
                            >
                              <span>{item}</span>
                              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-40 transition group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="absolute top-[15%] left-[-12%] w-[520px] h-[520px] bg-brand-electric/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[8%] right-[-14%] w-[640px] h-[640px] bg-brand-accent/5 rounded-full blur-[160px] pointer-events-none" />
      </section>

      {/* PROJECT WORKFLOW (Curved Timeline) */}
      <section className="py-16 md:py-20 bg-[#020617] relative overflow-hidden border-y border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-electric/70 to-transparent" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[65%] max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[65%] max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-electric/70 to-transparent" />
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-12 md:mb-14 text-center">HOW WE WORK</h2>
          
          <div className="hidden md:block relative w-full h-[230px]">
             {/* Curved SVG Line */}
             <svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2" preserveAspectRatio="none" viewBox="0 0 1000 200">
               <motion.path 
                 d="M0,100 C200,200 300,0 500,100 C700,200 800,0 1000,100" 
                 fill="none" 
                 stroke="rgba(255,255,255,0.1)" 
                 strokeWidth="4"
               />
               <motion.path 
                 d="M0,100 C200,200 300,0 500,100 C700,200 800,0 1000,100" 
                 fill="none" 
                 stroke="#00D1FF" 
                 strokeWidth="4"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
             </svg>
             
             {/* Nodes */}
             {[
               { title: "Client Brief", left: "10%", top: "50%" },
               { title: "Creative Design", left: "30%", top: "20%" },
               { title: "Technical Engineering", left: "50%", top: "80%" },
               { title: "Manufacturing", left: "70%", top: "20%" },
               { title: "Installation & Support", left: "90%", top: "50%" },
             ].map((node, idx) => (
               <motion.div 
                 key={idx}
                 className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                 style={{ left: node.left, top: node.top }}
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.4 + 0.5 }}
               >
                 <div className="w-6 h-6 bg-brand-electric rounded-full shadow-[0_0_20px_rgba(0,209,255,0.8)]"></div>
                 <span className="mt-4 text-white font-bold whitespace-nowrap text-lg bg-brand-navy/80 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">{node.title}</span>
               </motion.div>
             ))}
          </div>

          <div className="md:hidden space-y-12 relative border-l-2 border-brand-electric ml-4 pl-8">
             {[
               "Client Brief", "Creative Design", "Technical Engineering", "Manufacturing", "Installation & Support"
             ].map((node, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-electric rounded-full"></div>
                  <h4 className="text-xl font-bold text-white">{node}</h4>
                </motion.div>
             ))}
          </div>
        </div>
      </section>



      {/* FINAL CTA */}
      <section
        className="relative py-40 px-6 overflow-hidden bg-brand-dark flex items-center justify-center text-center"
        aria-labelledby="services-cta-heading"
        aria-describedby="services-cta-description"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "name": "Request a Quote for Advertising, Signage, and Branding Services",
            "contactType": "sales",
            "telephone": "+971507771306",
            "email": "info@saqradvertising.com",
            "areaServed": ["Sharjah", "Dubai", "Ajman", "Abu Dhabi", "United Arab Emirates"],
            "availableLanguage": ["English", "Arabic"],
            "url": "https://saqralsharq.ae/contact"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where can I request signage and branding services in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Saqr Al Sharq Advertising LLC provides signage, branding, fabrication, exhibition stands, vehicle branding, and event setup services in Sharjah, Dubai, Ajman, Abu Dhabi, and across the UAE."
                }
              },
              {
                "@type": "Question",
                "name": "Can Saqr Al Sharq handle design, production, and installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Saqr Al Sharq Advertising LLC handles design, technical planning, production, fabrication, and installation for signage, branding, exhibition, and advertising projects."
                }
              }
            ]
          })}
        </script>
        <div className="absolute inset-0 z-0">
          <img
            src="/service_page/CTA.png"
            alt="Saqr Al Sharq advertising production and signage CTA background"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#020617]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-[#020617]/35" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            id="services-cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-[6vw] font-display font-black text-white leading-none mb-8"
          >
            UAE Signage & Branding <br/>
            <span className="text-white">Something That</span> <br/>
            <span className="text-white">Gets Noticed.</span>
          </motion.h2>
          
          <motion.p 
            id="services-cta-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-silver font-light mb-12"
          >
            Partner with SAQR AL SHARQ Advertising LLC for premium signage, branding, fabrication, exhibition stands, vehicle graphics, LED signage, mall kiosks, and advertising services trusted by businesses in Sharjah, Dubai, and across the UAE.
          </motion.p>

          <p className="sr-only">
            Request a quote from Saqr Al Sharq Advertising LLC for outdoor shop signage, mall signage, rooftop signage, reception signage, LED neon signage, acrylic signage, aluminium signage, stainless steel signage, shop and office interiors, mall kiosks, exhibition stands, event setup, LED screen walls, sticker branding, glass frosting stickers, banner branding, one way vision stickers, and vehicle branding in the United Arab Emirates.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact?service=Advertising%20Signage%20Branding%20Quote" className={`px-10 py-5 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg ${disabledActionClassName}`} {...disabledActionProps}>
              Request a Quote <ArrowUpRight />
            </Link>
            <Link to="/portfolio" className={`px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-lg backdrop-blur-md border border-white/20 ${disabledActionClassName}`} {...disabledActionProps}>
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
