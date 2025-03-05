
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, Star } from 'lucide-react';

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
      icon: <Code size={20} className="text-blue-400" />, 
      title: "Projects", 
      value: "6+" 
    },
    { 
      icon: <Briefcase size={20} className="text-purple-400" />, 
      title: "Internships", 
      value: "2+" 
    },
    { 
      icon: <Star size={20} className="text-amber-400" />, 
      title: "Certifications", 
      value: "RHCSA" 
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 mb-3">
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
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/30 glass-panel flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/10">D</span>
                </div>
                {/* Profile image would go here */}
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-blue-400">Flutter</span> Developer & Full Stack Developer
            </h3>
            <p className="text-white/70 mb-6">
              I am a passionate developer with expertise in <span className="text-blue-400 font-medium">Flutter</span>, React, JavaScript, HTML, CSS, Python, and SQL. With a focus on creating elegant mobile and web solutions, I blend technical excellence with creative design thinking.
            </p>
            <p className="text-white/70 mb-6">
              As a Technical Hub intern, I contributed to Hoot, a <span className="text-blue-400 font-medium">Flutter</span>-based communication skills app. I also developed a <span className="text-blue-400 font-medium">Flutter</span>-based bus and car tracking app for my college, utilizing GPS and OpenStreetMap for real-time tracking.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Flutter", highlighted: true },
                { name: "ReactJS", highlighted: false },
                { name: "React Query", highlighted: false },
                { name: "Redux", highlighted: false },
                { name: "NextJS", highlighted: false },
                { name: "Dart", highlighted: true },
                { name: "JavaScript", highlighted: false },
                { name: "TypeScript", highlighted: false },
                { name: "C/C++", highlighted: false },
                { name: "Java", highlighted: false },
                { name: "Python", highlighted: false },
                { name: "HTML", highlighted: false },
                { name: "CSS", highlighted: false },
                { name: "NodeJS", highlighted: false },
                { name: "MongoDB", highlighted: false },
                { name: "SQL", highlighted: false },
                { name: "Firebase", highlighted: false },
                { name: "RedHat Linux", highlighted: false }
              ].map((skill) => (
                <span 
                  key={skill.name}
                  className={`px-3 py-1 text-sm font-medium rounded-full border text-white/80 hover-lift transition-all duration-300 ${
                    skill.highlighted 
                      ? "bg-blue-600/20 border-blue-500/30 text-blue-300" 
                      : skill.name.includes("React") 
                        ? "bg-cyan-600/20 border-cyan-500/30 text-cyan-300"
                        : "bg-white/5 border-white/10"
                  }`}
                >
                  {skill.name}
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
              className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center hover-lift transition-all duration-300 bg-white/5 hover:bg-white/8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
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
