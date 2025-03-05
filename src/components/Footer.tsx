
import { ArrowUp, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gradient text-lg font-medium mb-2">Deekshith Reddi</p>
            <p className="text-white/60 text-sm">
              Flutter Developer & Full Stack Engineer
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white/60" />
              <a href="mailto:deekshithreddi71@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                deekshithreddi71@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white/60" />
              <a href="tel:+919912514884" className="text-white/60 hover:text-white text-sm transition-colors">
                +91 99125 14884
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com/ReddiDeekshith" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/deekshith-reddi" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors mt-6 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
