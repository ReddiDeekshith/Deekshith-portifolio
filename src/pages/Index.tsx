
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Profiles from '@/components/Profiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { BookOpen, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  // Education items data
  const educationItems = [
    {
      title: "Master's in Computer Science",
      subtitle: "Stanford University",
      date: "2018 - 2020",
      description: "Focused on artificial intelligence and machine learning with a thesis on predictive algorithms for healthcare applications.",
      icon: <BookOpen size={16} />,
    },
    {
      title: "Bachelor's in Software Engineering",
      subtitle: "MIT",
      date: "2014 - 2018",
      description: "Graduated with honors. Specialized in web technologies and distributed systems.",
      icon: <BookOpen size={16} />,
    },
    {
      title: "Web Development Bootcamp",
      subtitle: "Coding Academy",
      date: "2013 - 2014",
      description: "Intensive training in modern web development technologies and practices.",
      icon: <BookOpen size={16} />,
    },
  ];
  
  // Experience items data
  const experienceItems = [
    {
      title: "Senior Frontend Developer",
      subtitle: "Tech Innovations Inc.",
      date: "2020 - Present",
      description: "Lead frontend development for enterprise applications. Implemented new design system that increased user engagement by 40%.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Web Developer",
      subtitle: "Digital Solutions Agency",
      date: "2018 - 2020",
      description: "Developed and maintained client websites and applications. Worked with React, Node.js, and various APIs.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Junior Developer",
      subtitle: "StartUp Ventures",
      date: "2016 - 2018",
      description: "Assisted in building MVPs for early-stage startups. Focused on rapid development and iteration.",
      icon: <Briefcase size={16} />,
    },
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Timeline 
        id="education"
        title="Educational Journey"
        subtitle="Education"
        items={educationItems}
      />
      <Timeline 
        id="experience"
        title="Professional Experience"
        subtitle="Experience"
        items={experienceItems}
      />
      <Projects />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
