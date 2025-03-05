
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Code, Globe, Mail, Phone } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  url: string;
  username: string;
  description: string;
  index: number;
}

const ProfileCard = ({ 
  title, 
  icon, 
  url, 
  username, 
  description, 
  index 
}: ProfileCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView && cardRef.current) {
      cardRef.current.classList.add('opacity-100', 'translate-y-0');
      cardRef.current.classList.remove('opacity-0', 'translate-y-10');
    }
  }, [inView]);
  
  return (
    <a 
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div 
        ref={cardRef}
        className="glass-panel rounded-2xl p-6 h-full hover-lift opacity-0 translate-y-10 transition-all duration-500 ease-out" 
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-white transition-colors">{title}</h3>
        </div>
        <p className="text-white/80 text-sm mb-2">{username}</p>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </a>
  );
};

const Profiles = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (inView && titleRef.current) {
      titleRef.current.classList.add('opacity-100', 'translate-y-0');
      titleRef.current.classList.remove('opacity-0', 'translate-y-10');
    }
  }, [inView]);
  
  // Profiles data from resume
  const profiles = [
    {
      title: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/deckshiftr",
      username: "@deckshiftr",
      description: "View my project repositories and contributions to open-source.",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/deckshiftr",
      username: "Deckshift Reddit",
      description: "Connect with me professionally and view my work experience.",
    },
    {
      title: "CodePen",
      icon: <Code size={20} />,
      url: "https://codepen.io/deckshiftr",
      username: "@deckshiftr",
      description: "Check out my CodePen featuring demonstration of HTML, CSS, JavaScript skills.",
    },
    {
      title: "Portfolio",
      icon: <Globe size={20} />,
      url: "https://deckshiftr.github.io/portfolio",
      username: "deckshiftr.github.io/portfolio",
      description: "Visit my eco-friendly e-commerce website showcasing sustainable products.",
    },
  ];
  
  return (
    <section id="profiles" ref={ref} className="py-20">
      <div className="container px-6 mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            Connect
          </span>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Coding Profiles
          </h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard 
              key={index} 
              {...profile} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
