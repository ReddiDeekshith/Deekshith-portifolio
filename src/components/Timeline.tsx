
import { Fragment, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
  index: number;
}

export const TimelineItem = ({ 
  title, 
  subtitle, 
  date, 
  description, 
  icon, 
  index 
}: TimelineItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView && itemRef.current) {
      itemRef.current.classList.add('opacity-100', 'translate-y-0');
      itemRef.current.classList.remove('opacity-0', 'translate-y-10');
    }
  }, [inView]);
  
  return (
    <div 
      ref={ref} 
      className="mb-12 last:mb-0 relative"
    >
      {/* Line */}
      {index !== 0 && (
        <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 -translate-x-1/2 z-0" />
      )}
      
      <div 
        ref={itemRef}
        className={cn(
          "relative z-10 flex gap-6 opacity-0 translate-y-10 transition-all duration-500 ease-out",
          `delay-[${index * 100}ms]`
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          {icon}
        </div>
        
        {/* Content */}
        <div className="flex-1 glass-panel rounded-2xl p-6 hover-lift">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-sm font-medium text-white/50 md:text-white/70">{date}</span>
          </div>
          <p className="text-white/70 text-sm mb-3">{subtitle}</p>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  id: string;
  title: string;
  subtitle: string;
  items: Omit<TimelineItemProps, 'index'>[];
}

const Timeline = ({ id, title, subtitle, items }: TimelineProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const titleRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (inView && titleRef.current) {
      titleRef.current.classList.add('opacity-100', 'translate-y-0');
      titleRef.current.classList.remove('opacity-0', 'translate-y-10');
    }
  }, [inView]);
  
  return (
    <section id={id} ref={ref} className="py-20">
      <div className="container px-6 mx-auto max-w-6xl">
        <header
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        </header>
        
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
