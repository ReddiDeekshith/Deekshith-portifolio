
import { useEffect, useRef } from 'react';
import { ArrowDown, Code, GitBranch, Sparkles } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 500 },
      { ref: ctaRef, delay: 1000 },
      { ref: decorRef, delay: 1500 },
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
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent opacity-30 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative elements */}
      <div 
        ref={decorRef}
        className="absolute -bottom-2 left-0 right-0 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-indigo-300 animate-text-shimmer bg-[length:200%_auto]">
            Deekshith Reddi
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
        >
          <span className="text-blue-400 font-semibold">Flutter</span> Developer & Full Stack Developer specialized in creating cross-platform mobile applications and responsive web solutions. Experienced with <span className="text-cyan-300">ReactJS</span>, NodeJS, and various database technologies.
        </p>
        
        <div 
          ref={ctaRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-white/10 backdrop-blur-sm"
          >
            <span>Explore My Work</span>
            <ArrowDown size={16} />
          </a>
        </div>
        
        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300" ref={decorRef}>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Code size={14} className="text-blue-400" />
            <span className="text-sm text-white/70">Flutter</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Code size={14} className="text-cyan-400" />
            <span className="text-sm text-white/70">React</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <GitBranch size={14} className="text-purple-400" />
            <span className="text-sm text-white/70">NodeJS</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-sm text-white/70">UI/UX</span>
          </div>
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
