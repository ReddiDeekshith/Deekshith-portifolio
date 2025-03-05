
import { ArrowUp, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-indigo-300 text-lg font-medium mb-2">Deekshith Reddi</p>
            <p className="text-white/60 text-sm">
              <span className="text-blue-400">Flutter</span> Developer & <span className="text-cyan-400">React</span> Engineer
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              <a href="mailto:deekshithreddi71@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                deekshithreddi71@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-indigo-400" />
              <a href="tel:+919912514884" className="text-white/60 hover:text-white text-sm transition-colors">
                +91 99125 14884
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com/ReddiDeekshith" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/deekshith-reddi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30 flex items-center justify-center transition-colors mt-6 md:mt-0 border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="text-center mt-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
