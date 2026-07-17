import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Exhibition Work', 'Sign Boards', 'Interior Decor'];

const projects = [
  {
    id: 1,
    title: 'Abbvie Exhibition Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Abbvie complete stand.jpeg',
    aspectRatio: '1032 / 774',
  },
  {
    id: 2,
    title: 'Arab Health Exhibition Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Exhibition Stand Arab Health 2022.jpg',
    aspectRatio: '1599 / 1200',
  },
  {
    id: 3,
    title: 'Hisense Display Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Hisense Display Stand (1).jpg',
    aspectRatio: '1280 / 720',
  },
  {
    id: 4,
    title: 'SAP Gitex Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/SAP Gitex 2015.jpg',
    aspectRatio: '747 / 1328',
  },
  {
    id: 5,
    title: 'Lundbeck Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Lundbeck stand.jpeg',
    aspectRatio: '1032 / 774',
  },
  {
    id: 6,
    title: 'Nikoo IPS DWTC Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Nikoo - IPS - dwtc.jpg',
    aspectRatio: '3264 / 2448',
  },
  {
    id: 7,
    title: 'Union Coop Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/union Coop stand.jpeg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 8,
    title: 'Zadina Exhibition Stand',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Zadina Stand (4).jpg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 9,
    title: 'Mall Kiosk Al Ghurair',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/Mall Kiosk Al Ghurair.jpg',
    aspectRatio: '1280 / 960',
  },
  {
    id: 10,
    title: 'Dubai Mall Shelves',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/dubai mall shelves.jpeg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 11,
    title: 'Creative Shelf Display',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/creative shelf.jpeg',
    aspectRatio: '768 / 1024',
  },
  {
    id: 12,
    title: 'Mercedes Ramadan Majlis',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/mercedes majlis for Ramadan.jpeg',
    aspectRatio: '774 / 1032',
  },
  {
    id: 13,
    title: 'Kids Play Area',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/Kids Playe Area  (3).jpeg',
    aspectRatio: '1040 / 585',
  },
  {
    id: 14,
    title: 'Pocket Shop Milan Vision',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/Pocket Shop Milan Vision AL Ghurair (1).jpg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 15,
    title: 'ST Lounge Interior',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/ST Lounge (4).jpg',
    aspectRatio: '5120 / 3840',
  },
  {
    id: 16,
    title: 'Wooden Cabinet Display',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/WoodenCabinet (2).jpg',
    aspectRatio: '5312 / 2988',
  },
  {
    id: 17,
    title: '3D Signage and Logos',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/3Dsignage and Logos.jpeg',
    aspectRatio: '1152 / 864',
  },
  {
    id: 18,
    title: 'Channel Letter Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/channellume signage in motorcity.jpeg',
    aspectRatio: '1040 / 585',
  },
  {
    id: 19,
    title: 'Dubai Police Sign Board',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Dubai Police.jpeg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 20,
    title: 'Lubrex FZC Hamriyah Sign',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Lubrex FZC Hamriyah main sign.jpg',
    aspectRatio: '5312 / 2988',
  },
  {
    id: 21,
    title: 'Subway Business Bay Sign',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/subway eppco business bay.jpeg',
    aspectRatio: '1280 / 720',
  },
  {
    id: 22,
    title: 'Toshiba Safari Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Toshiba Safari (1).jpeg',
    aspectRatio: '960 / 1280',
  },
  {
    id: 23,
    title: 'Damas Satwa Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Damas Satwa (1).jpg',
    aspectRatio: '1040 / 780',
  },
  {
    id: 24,
    title: 'Broccoli MotorCity Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Brocolli MotorCity (5).jpg',
    aspectRatio: '1280 / 720',
  },
  {
    id: 25,
    title: 'Kizad Sign Board',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Kizad.JPG',
    aspectRatio: '778 / 588',
  },
  {
    id: 26,
    title: 'Dale Arch Branding',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Arch branding Dale (2).jpg',
    aspectRatio: '4 / 3',
  },
  {
    id: 27,
    title: 'Hisense TV Display',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Hisense TV Display (4).jpg',
    aspectRatio: '16 / 9',
  },
  {
    id: 28,
    title: 'Exhibition Kiosk Setup',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Kiosk Set up.jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 29,
    title: 'IPS DWTC Stand Radial',
    category: 'Exhibition Work',
    img: '/company portfolio (2)/Exhibition Work/Radious - IPS - dwtc .jpg',
    aspectRatio: '4 / 3',
  },
  {
    id: 30,
    title: 'Emaar Display Stand',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/Emaar Stand  (1).jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 31,
    title: 'Don Bambaloni Interior',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/don bambaloni 1.jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 32,
    title: 'MDF Spray Painted Stands',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/MDF spray painted stands (1).jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 33,
    title: 'Victoza Event Backdrop',
    category: 'Interior Decor',
    img: '/company portfolio (2)/Interior Decor Selected/Victoza event 14mtr x 450cmback drop.jpeg',
    aspectRatio: '16 / 9',
  },
  {
    id: 34,
    title: 'Amer & Tasheel Sign Board',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/Amer and Tasheel jobs.jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 35,
    title: 'Lafah Restaurant Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/lafah 2.jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 36,
    title: 'Subway Ajman Signage',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/subway ajman.jpeg',
    aspectRatio: '4 / 3',
  },
  {
    id: 37,
    title: 'Channellume Outdoor Letters',
    category: 'Sign Boards',
    img: '/company portfolio (2)/sign boards/channellumeletters for out door in al quoz.jpeg',
    aspectRatio: '4 / 3',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div ref={containerRef} className="w-full bg-brand-dark min-h-screen">
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
              Exhibition Work, Sign Boards & Interior Decor
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter">
              <span className="sr-only">Saqr Al Sharq Advertising LLC portfolio of exhibition work, sign boards, and interior decor projects in the UAE</span>
              OUR <br />
              <span className="text-white">PORTFOLIO.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl text-brand-grey font-light max-w-2xl mx-auto leading-relaxed"
          >
            Explore SAQR AL SHARQ Advertising LLC projects across exhibition stands, premium sign boards, mall kiosks, and interior decor work throughout Sharjah, Dubai, and the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 flex gap-6"
          >
            <a href="#portfolio-grid" className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              View Portfolio <ArrowUpRight size={20} />
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
            src="/porttfolio/portfolio.png"
            alt="Saqr Al Sharq portfolio of advertising and signage work"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#020617]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-[#020617]/20" />
        </div>
      </section>

      <section id="portfolio-grid" className="container mx-auto px-6 md:px-12 pt-16 pb-20">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black tracking-tighter"
            >
              OUR <br />
              <span className="text-gradient">PORTFOLIO.</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-white text-brand-navy'
                    : 'bg-glass-card text-brand-grey hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ aspectRatio: project.aspectRatio }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-lg bg-[#0A192F]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
