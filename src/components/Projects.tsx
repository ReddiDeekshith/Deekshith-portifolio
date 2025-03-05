
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
  
  // Projects data from resume
  const projects = [
    {
      title: "Face & Health Recognition",
      description: "Utilized computer vision and deep learning techniques to automate attendance using biometric recognition. Enables secure facility access without friction and includes facial recognition with mask support.",
      image: "/placeholder.svg",
      tags: ["Python", "OpenCV", "AI"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Snap Pay",
      description: "Created a global payment platform solution to facilitate transactions across multiple regions. Provides seamless money transfers with competitive rates and supports the whole payment lifecycle.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "NodeJS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Ubar",
      description: "Implemented a ride-sharing platform optimized for urban travel with accurate feedback and location services. Features live location tracking, dynamic pricing, cashless transactions and driver support.",
      image: "/placeholder.svg",
      tags: ["Flutter", "NodeJS", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Buy & Get Inventory",
      description: "Inventory dashboard for analyzing stock levels and cost in real-time using GPS. Integrates with point-of-sale systems to provide efficient communications management for vendors and staff.",
      image: "/placeholder.svg",
      tags: ["React", "Flask", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Linkdin",
      description: "Created an e-commerce platform designed to sell eco-friendly pet products like toys and beddings. Provides customers with information about sustainable products and manages inventory efficiently.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "I do!",
      description: "The platform creates efficient event management and maintains user experience. Allows event planners to manage venues, guest lists, catering, and support various event types.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "NodeJS"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];
  
  return (
    <section id="projects" ref={ref} className="py-20 bg-black/30">
      <div className="container px-6 mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            Project Work
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
