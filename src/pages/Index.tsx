
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
  // Education items data from resume
  const educationItems = [
    {
      title: "Aditya Engineering College",
      subtitle: "BTech in Computer Science and Engineering",
      date: "August 2022 - Present",
      description: "CGPA: 8.97/10. Relevant Coursework: Object Oriented Programming, Databases, Data Structures and Algorithms, Android and iOS App Development.",
      icon: <BookOpen size={16} />,
    },
  ];
  
  // Internship items data from resume
  const internshipItems = [
    {
      title: "Intern - Technical Hub",
      subtitle: "Flutter Developer",
      date: "June 2024 - July 2024",
      description: "As an intern at Technical Hub, I contributed to Hoot, a group project enhancing communication skills. I designed and implemented the Dictation and Sentence Construction modules with real-time feedback, gaining experience in Flutter, Node.js, MongoDB, and teamwork.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Freelance Project - Bus and Car Tracking App",
      subtitle: "Flutter Developer",
      date: "December 2024 - January 2025",
      description: "Developed a bus and car tracking application for Aditya Engineering College using Flutter. The project, completed in 1.5 months, utilized Flutter, Node.js, MongoDB, and OpenStreetMap (OSM) for real-time tracking, route optimization, and navigation services.",
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
        id="internships"
        title="Internship Experience"
        subtitle="Internships"
        items={internshipItems}
      />
      <Projects />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
