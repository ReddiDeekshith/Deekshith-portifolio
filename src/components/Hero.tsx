
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 500 },
      { ref: ctaRef, delay: 1000 },
    ];
    
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0');
          ref.current?.classList.remove('opacity-0', 'translate-y-8');
        }, delay);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-40 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <span className="text-gradient">Deckshift Reddit</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
        >
          Full Stack Developer specializing in C++, Java, Python, JavaScript, Dart, React.js, Express.js, HTML, CSS, and Bootstrap. Creating responsive web applications and services.
        </p>
        
        <div 
          ref={ctaRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-all duration-300 hover:shadow-lg hover:shadow-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span>Explore My Work</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-slide-in-bottom" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
