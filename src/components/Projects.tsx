
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
  isHighlighted?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
  isHighlighted = false,
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
        className={`glass-panel rounded-2xl overflow-hidden opacity-0 translate-y-10 transition-all duration-500 ease-out ${isHighlighted ? 'border border-blue-500/30 bg-blue-900/10' : ''}`} 
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className={`aspect-video w-full overflow-hidden ${isHighlighted ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'}`}>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-white/10">{index + 1}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            {isHighlighted && <span className="text-blue-400">● </span>}{title}
          </h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-3">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={`px-2 py-1 text-xs rounded-full ${tag === 'Flutter' ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-white/70'}`}
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
      title: "Hoot",
      description: "A group project designed to improve communication and verbal skills through a Flutter app with modules like reading passages, dictation, and retelling sentences. I developed the Dictation module, where users write words they hear with accuracy feedback, and the Sentence Construction module.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      isHighlighted: true
    },
    {
      title: "Bus & Car Tracking App",
      description: "Developed for Aditya Engineering College to track buses and cars in real-time using GPS. The app provides live location updates, estimated arrival times, and route details. It utilizes OpenStreetMap (OSM) for mapping and navigation.",
      image: "/placeholder.svg",
      tags: ["Flutter", "OpenStreetMap", "GPS"],
      githubUrl: "#",
      liveUrl: "#",
      isHighlighted: true
    },
    {
      title: "Swift Pay",
      description: "Created a global and local payment solution to facilitate transactions across multiple regions. Implemented secure payment gateways, currency conversion, and support for various payment methods. Focused on delivering a seamless user experience.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      isHighlighted: true
    },
    {
      title: "Weather Application",
      description: "Developed a responsive web-based weather application using HTML, CSS, and JavaScript. Integrated a weather API to fetch and display real-time weather conditions and forecasts based on the user's location. Designed a clean, user-friendly interface.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Face & Thumb Recognition Attendance System",
      description: "Developed for college management to automate attendance using biometric recognition. Enables secure and accurate attendance tracking through face and thumb recognition, reducing manual effort and errors. The system ensures real-time authentication.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Eco-Friendly E-Commerce Website",
      description: "An e-commerce platform designed to sell eco-friendly jute products like bags and handbags. Provides a user-friendly interface for browsing, purchasing, and managing sustainable products while promoting environmental awareness.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
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
          <p className="text-white/60 max-w-2xl mx-auto">
            Highlighted projects showcase my <span className="text-blue-400">Flutter</span> development expertise
          </p>
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
