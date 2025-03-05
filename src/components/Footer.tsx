
import { ArrowUp } from 'lucide-react';

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
            <p className="text-gradient text-lg font-medium mb-2">Portfolio</p>
            <p className="text-white/60 text-sm">
              Crafted with precision and care
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
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
