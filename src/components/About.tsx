
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { User, Code, Briefcase } from 'lucide-react';

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const elements = [
        { ref: titleRef, delay: 0 },
        { ref: contentRef, delay: 200 },
        { ref: statsRef, delay: 400 },
      ];
      
      elements.forEach(({ ref, delay }) => {
        if (ref.current) {
          setTimeout(() => {
            ref.current?.classList.add('opacity-100', 'translate-y-0');
            ref.current?.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      });
    }
  }, [inView]);

  const stats = [
    { 
      icon: <User size={20} />, 
      title: "Experience", 
      value: "2+ Years" 
    },
    { 
      icon: <Code size={20} />, 
      title: "Projects", 
      value: "6+" 
    },
    { 
      icon: <Briefcase size={20} />, 
      title: "Internships", 
      value: "2+" 
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            About Me
          </span>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Deekshith Reddi
          </h2>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
        >
          <div className="col-span-1 md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/30 glass-panel flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/10">D</span>
                </div>
                {/* Profile image would go here */}
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Flutter Developer & Full Stack Engineer</h3>
            <p className="text-white/70 mb-6">
              I am a passionate developer with expertise in Flutter, React, JavaScript, HTML, CSS, Python, and SQL. With a focus on creating elegant mobile and web solutions, I blend technical excellence with creative design thinking.
            </p>
            <p className="text-white/70 mb-6">
              As a Technical Hub intern, I contributed to Hoot, a Flutter-based communication skills app. I also developed a Flutter-based bus and car tracking app for my college, utilizing GPS and OpenStreetMap for real-time tracking.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "C/C++", "Java", "Python", "JavaScript", "Dart",
                "Flutter", "ReactJS", "HTML", "CSS", 
                "NodeJS", "MongoDB", "SQL", "Firebase", "RedHat Linux"
              ].map((skill) => (
                <span 
                  key={skill}
                  className={`px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white/80 hover-lift ${skill === "Flutter" ? "bg-blue-600/20 border-blue-500/30" : ""}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-white/60 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
