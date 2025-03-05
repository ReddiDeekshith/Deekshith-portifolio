
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
}: ProjectProps) => {
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
    <div 
      ref={ref}
      className="group relative"
    >
      <div 
        ref={cardRef}
        className="glass-panel rounded-2xl overflow-hidden opacity-0 translate-y-10 transition-all duration-500 ease-out" 
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-white/10">{index + 1}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-3 mt-4">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label={`View ${title} Github repo`}
              >
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label={`View ${title} live site`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
  
  // Sample projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce platform with cart, checkout, and payment processing capabilities.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates high-quality content for various purposes.",
      image: "/placeholder.svg",
      tags: ["OpenAI", "React", "TailwindCSS", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "A comprehensive dashboard for monitoring and analyzing real-time data and metrics.",
      image: "/placeholder.svg",
      tags: ["TypeScript", "D3.js", "Firebase", "React"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first application for tracking fitness goals, workouts, and nutrition.",
      image: "/placeholder.svg",
      tags: ["React Native", "Redux", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media Platform",
      description: "A social networking platform with real-time messaging and content sharing.",
      image: "/placeholder.svg",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool for teams with real-time updates.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];
  
  return (
    <section id="projects" ref={ref} className="py-20 bg-black/30">
      <div className="container px-6 mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            Portfolio
          </span>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Recent Projects
          </h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
