import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#020617] pt-8 md:pt-10 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 mb-12">
          
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="SAQR AL SHARQ" 
                className="h-16 md:h-24 w-auto object-contain transition-transform duration-300" 
              />
            </div>
            <p className="text-xl text-brand-grey font-light max-w-md leading-relaxed">
              We engineer visual identities and premium advertising solutions that command attention.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-white font-display font-semibold tracking-wide">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Portfolio'].map(item => (
                  <li key={item}>
                    <div className="text-brand-grey hover:text-white transition-colors flex items-center gap-1 group cursor-default">
                      {item} <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-display font-semibold tracking-wide">Socials</h4>
              <ul className="space-y-4">
                <li>
                  <div className="text-brand-grey hover:text-white transition-colors flex items-center gap-1 group cursor-default">
                    Facebook <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </div>
                </li>
                <li>
                  <div className="text-brand-grey hover:text-white transition-colors flex items-center gap-1 group cursor-default">
                    Instagram <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-white font-display font-semibold tracking-wide">Contact</h4>
              <ul className="space-y-4 text-brand-grey text-sm">
                <li>
                  <div className="hover:text-white transition-colors block cursor-default">
                    info@saqradvertising.com
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="hover:text-white transition-colors block cursor-default">+971 50 7771306</div>
                  <div className="hover:text-white transition-colors block cursor-default">+971 50 7771304</div>
                  <div className="hover:text-white transition-colors block cursor-default">+971 50 7097709</div>
                </li>
                <li className="pt-2 leading-relaxed">
                  Shed # C-09, 29th Street,<br/>Industrial Area 5,<br/>Sharjah, U.A.E.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-sm text-brand-grey/50">
          <p>&copy; {new Date().getFullYear()} SAQR AL SHARQ. All rights reserved.</p>
          <div className="flex gap-8">
            <div className="hover:text-white transition-colors cursor-default">Privacy Policy</div>
            <div className="hover:text-white transition-colors cursor-default">Terms of Service</div>
          </div>
        </div>
      </div>
      
      {/* Massive subtle background text */}
      <div className="absolute bottom-[-10%] left-0 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h1 className="text-[20vw] font-display font-black leading-none whitespace-nowrap">SAQR AL SHARQ</h1>
      </div>
    </footer>
  );
};

export default Footer;
