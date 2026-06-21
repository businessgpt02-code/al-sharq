import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: "01",
    title: "Signage & Display Solutions",
    desc: "Custom indoor and outdoor signs, illuminated boards, and cutting-edge digital displays that capture attention instantly.",
    image: "/service/1.png"
  },
  {
    id: "02",
    title: "Branding Identity",
    desc: "Logo design and complete corporate visual guidelines.",
    image: "/service/2.png"
  },
  {
    id: "03",
    title: "Vehicle Wrapping",
    desc: "Turn your fleet into moving billboards with our wraps.",
    image: "/service/3.png"
  },
  {
    id: "04",
    title: "Bespoke Joinery & Fit-Outs",
    desc: "Custom shop & office interiors, retail mall kiosks, premium exhibition stands, event setups, and integrated LED screen walls engineered to perfection.",
    image: "/service/4.png"
  }
];

const testimonialsRow1 = [
  {
    quote: "Saqr Al Sharq completely transformed our retail space in Dubai Mall. Their bespoke kiosk joinery is absolutely flawless.",
    author: "Sarah Jenkins"
  },
  {
    quote: "The 3D illuminated outdoor signage they fabricated for our HQ is stunning. Excellent attention to detail and clean installation.",
    author: "Tariq Al Mansoor"
  },
  {
    quote: "Wrapped our entire commercial fleet of 25 vans in record time. The print quality and installation finish are perfect.",
    author: "Mark Henderson"
  },
  {
    quote: "Their exhibition stand design and build was the highlight of our Gitex show. The team went above and beyond.",
    author: "Elena Rostova"
  },
  {
    quote: "Professional, punctual, and highly skilled. The custom office fit-out they delivered exceeded all expectations.",
    author: "David Chen"
  },
  {
    quote: "The LED screen walls they integrated into our event setup worked flawlessly. Will definitely collaborate again.",
    author: "Fatima Al Suwaidi"
  }
];

const testimonialsRow2 = [
  {
    quote: "Outstanding service from design to installation. The team is highly responsive and delivers top-tier craftsmanship.",
    author: "Robert Miller"
  },
  {
    quote: "Saqr Al Sharq delivered a stunning showroom display kiosk for us. True professionals in joinery work.",
    author: "Hisham Khalid"
  },
  {
    quote: "Their signage solutions helped increase our store footfall significantly. Highly recommend their design team.",
    author: "Amelie Dubois"
  },
  {
    quote: "The office sign and lobby acrylic lettering look incredible. Very neat installation and premium materials used.",
    author: "Priya Sharma"
  },
  {
    quote: "Reliable production partner for all our exhibition needs in Dubai. They never compromise on quality.",
    author: "John Smalls"
  },
  {
    quote: "From shop fronts to office branding, their execution is unmatched. The best advertising agency in the UAE.",
    author: "Faisal Al Hashimi"
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
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
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
              Leading Advertising & Signage Company in Dubai
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter">
              <span className="sr-only">Saqr Al Sharq Advertising LLC - Premium Signage & Branding Solutions in Dubai, UAE</span>
              BEYOND <br />
              <span className="text-white">ORDINARY.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-brand-grey font-light max-w-2xl mx-auto leading-relaxed"
          >
            We design, fabricate, and install premium outdoor signage, 3D building signs, custom retail displays, and vehicle graphics that command attention across the UAE.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 flex gap-6"
          >
            <div className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 cursor-default">
              View Work <ArrowUpRight size={20} />
            </div>
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
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[#020617]/70" />
          <img 
            src="/home/hero.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Interactive Hover Accordion Services */}
      <section className="pt-12 pb-4 px-6 md:px-12" aria-labelledby="expertise-heading">
        {/* Structured Data: Service Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Advertising & Production Services in Dubai",
            "description": "Premium Signage, Branding, Vehicle Wrapping, and Bespoke Joinery Fit-out services in Dubai, UAE by Saqr Al Sharq.",
            "itemListElement": servicesData.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.desc,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Saqr Al Sharq Advertising LLC",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                  }
                }
              }
            }))
          })}
        </script>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 id="expertise-heading" className="text-5xl md:text-7xl font-display font-black tracking-tighter">
                <span className="sr-only">Our Advertising Services & Production Capabilities in Dubai, UAE - </span>
                OUR<br/>EXPERTISE
              </h2>
            </div>
            <p className="text-brand-grey text-xl max-w-md font-light">
              Comprehensive advertising and production solutions tailored to elevate your brand above the noise in Dubai and across the UAE.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full h-[80vh] min-h-[600px] gap-4">
            {servicesData.map((service, index) => {
              const isActive = activeService === index;
              return (
                <article
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`relative rounded-[32px] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group ${
                    isActive ? 'lg:flex-[4] flex-[4]' : 'lg:flex-[1] flex-[1]'
                  }`}
                >
                  {/* Background Image with SEO-focused Alt Text */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className={`absolute inset-0 z-10 transition-all duration-700 ${isActive ? 'bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent' : 'bg-[#020617]/80'}`} />
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Professional Advertising Production by Saqr Al Sharq in Dubai`} 
                      className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isActive ? 'scale-105' : 'scale-100 opacity-50'}`} 
                    />
                  </div>

                  {/* Active Content */}
                  <div className={`absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-20 flex flex-col justify-end transition-all duration-[600ms] ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display font-bold text-brand-accent text-xl">{service.id}</span>
                      <div className="w-12 h-[1px] bg-brand-accent/50" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-4 leading-tight">{service.title}</h3>
                    <p className="text-brand-silver/90 text-sm md:text-lg max-w-md leading-relaxed mb-6 md:mb-8">{service.desc}</p>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all bg-black/20 backdrop-blur-md" aria-label={`Learn more about our ${service.title} services`}>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Inactive Vertical Text (Desktop) & Compact (Mobile) */}
                  <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center lg:justify-end pb-0 lg:pb-10 transition-all duration-[600ms] ease-out ${!isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="hidden lg:flex flex-1 items-center justify-center w-full relative">
                      <h4 className="text-white font-display font-bold text-3xl tracking-widest uppercase -rotate-90 whitespace-nowrap opacity-50 transition-opacity group-hover:opacity-100">
                        {service.title}
                      </h4>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 lg:hidden px-4">
                      <span className="font-display font-bold text-brand-accent text-sm bg-[#020617]/80 backdrop-blur-md px-3 py-1 rounded-full">
                        {service.id}
                      </span>
                      <h4 className="text-white font-display font-bold text-base text-center line-clamp-1 drop-shadow-lg">
                        {service.title}
                      </h4>
                    </div>
                    <span className="hidden lg:block font-display font-bold text-brand-accent text-xl mt-4">
                      {service.id}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-4 pb-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-[10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/2 right-[10%] w-[350px] h-[350px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
              Our Numbers
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
              <span className="sr-only">Our Advertising & Signage Production Capabilities in Dubai, UAE</span>
              SCALE & <br />
              <span className="text-white">CAPABILITY</span>
            </h2>
            <p className="text-brand-grey mt-6 text-lg font-light leading-relaxed">
              Backed by robust fabrication facilities and years of regional advertising expertise, we deliver precision at any scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "11+", label: "Years of Advertising Excellence", desc: "Delivering high-end signage and corporate branding across Dubai and the UAE." },
              { value: "2.5K+", label: "Custom Signage Projects", desc: "Fabrication of 3D building signs, interactive LED displays, and exhibition stands." },
              { value: "500+", label: "Trusted Corporate Clients", desc: "Partnering with leading brands, shopping malls, and multinational companies." },
              { value: "15K+", label: "Signage & Joinery Facility", desc: "Our fully equipped in-house metal fabrication and woodworking factory floor." }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-glass-card rounded-3xl p-8 border border-white/5 hover:border-brand-accent/20 transition-all duration-500 hover:translate-y-[-8px] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-5xl md:text-6xl font-display font-black tracking-tighter text-gradient-accent block mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                  {stat.value}
                </span>
                <span className="text-white font-display font-bold text-lg block mb-2">
                  {stat.label}
                </span>
                <p className="text-brand-grey text-sm font-light leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-16 pb-8 border-t border-b border-white/5 bg-[#020617]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-2 block">
              Collaborations
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter uppercase text-white">
              Trusted by Premier Brands
            </h3>
          </div>
          <p className="text-brand-grey text-sm md:text-base font-light max-w-sm">
            Partnering with major developers, retail groups, and enterprises across the Gulf region.
          </p>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-16 shrink-0 animate-marquee-left py-4 items-center">
            {[
              "EMAAR", "AL-FUTTAIM", "AL TAYER", "DAMAC", 
              "DUBAI HOLDING", "NAKHEEL", "ALDAR", "SHARAF DG"
            ].concat([
              "EMAAR", "AL-FUTTAIM", "AL TAYER", "DAMAC", 
              "DUBAI HOLDING", "NAKHEEL", "ALDAR", "SHARAF DG"
            ]).map((partner, idx) => (
              <div 
                key={`partner-${idx}`} 
                className="text-2xl md:text-3xl font-display font-black tracking-[0.2em] text-brand-grey/40 hover:text-brand-accent transition-all duration-300 cursor-pointer select-none whitespace-nowrap flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 bg-brand-accent rounded-full opacity-60" />
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-8 pb-12 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 block">
            Client Success
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
            <span className="sr-only">Client Success Reviews and Signage Project Case Studies - Saqr Al Sharq Advertising</span>
            TRUSTED BY <br />
            <span className="text-white">INDUSTRY LEADERS</span>
          </h2>
        </div>

        {/* JSON-LD Review Schema Markup for Google SEO Search Snippets */}
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
            "review": [...testimonialsRow1, ...testimonialsRow2].map(t => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": t.author
              },
              "reviewBody": t.quote,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }))
          })}
        </script>

        <div className="flex flex-col gap-6 w-full pointer-events-auto">
          {/* Row 1: Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-6 shrink-0 animate-marquee-left hover:[animation-play-state:paused] py-2">
              {testimonialsRow1.concat(testimonialsRow1).map((t, idx) => (
                <div 
                  key={`t1-${idx}`} 
                  className="w-[350px] md:w-[450px] bg-glass-card rounded-2xl p-8 flex flex-col justify-between border border-white/5 hover:border-brand-accent/30 transition-colors duration-300"
                >
                  <p className="text-brand-silver/90 text-base md:text-lg font-light italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-display font-bold text-lg">{t.author}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-6 shrink-0 animate-marquee-right hover:[animation-play-state:paused] py-2">
              {testimonialsRow2.concat(testimonialsRow2).map((t, idx) => (
                <div 
                  key={`t2-${idx}`} 
                  className="w-[350px] md:w-[450px] bg-glass-card rounded-2xl p-8 flex flex-col justify-between border border-white/5 hover:border-brand-accent/30 transition-colors duration-300"
                >
                  <p className="text-brand-silver/90 text-base md:text-lg font-light italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-display font-bold text-lg">{t.author}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-16 pb-24 px-6 md:px-12 relative overflow-hidden" aria-label="Call to Action - Get a Custom Quote">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[#020617]/85" />
          <img 
            src="/home/CTA.png" 
            alt="Production Facility Background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Copy & Interactive Pills */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-brand-accent uppercase mb-4 block">
                  COLLABORATE WITH US
                </span>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white leading-tight">
                  <span className="sr-only">Contact Saqr Al Sharq Advertising for Premium Signage Fabrication, Wood Joinery, and Retail Exhibition Stands in Dubai, UAE - </span>
                  LET’S BUILD <br />
                  <span className="text-white">SOMETHING BOLD.</span>
                </h2>
                <p className="text-brand-grey text-lg md:text-xl font-light mt-6 leading-relaxed max-w-xl">
                  Whether you need custom fabrication, premium corporate signage, or high-end retail joinery, Saqr Al Sharq brings perfection to every detail.
                </p>
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block">
                  What are you looking to create?
                </span>
                <nav className="flex flex-wrap gap-3" aria-label="Service Quick Contact Links">
                  {[
                    "Signage & Display",
                    "Bespoke Joinery",
                    "Mall Kiosk",
                    "Exhibition Stand",
                    "Vehicle Wrapping",
                    "Event Setups"
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-accent hover:bg-brand-accent/5 text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-default"
                      title={`Request a quote for ${service} solutions in Dubai`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {service}
                    </div>
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
                className="bg-glass-card rounded-[32px] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-brand-accent/30 transition-all duration-500"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-[40px] group-hover:bg-brand-accent/20 transition-all duration-500" />
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Let’s Talk Production
                </h3>
                <p className="text-brand-grey text-base font-light mb-8 leading-relaxed">
                  Have specific dimensions, drawings, or project details ready? Share your brief and receive a tailored proposal from our engineering team within 24 hours.
                </p>

                <div className="space-y-4">
                  <div 
                    className="w-full py-4 bg-white text-brand-navy font-bold rounded-2xl hover:bg-brand-silver transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-default"
                    aria-label="Request a tailored quote for your production project"
                  >
                    Get a Tailored Quote
                    <ArrowUpRight size={20} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </div>
                  <div 
                    className="w-full py-4 border border-white/10 hover:border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-default"
                    aria-label="Discuss your signage or joinery project with us on WhatsApp"
                  >
                    Discuss on WhatsApp
                  </div>
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

export default Home;
