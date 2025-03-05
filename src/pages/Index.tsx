
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
      title: "Masters Engineering Degree",
      subtitle: "Computer Science and Engineering",
      date: "July 2023 - Present",
      description: "Relevant Coursework: Object Oriented Programming, Databases, Data Structures and Algorithms.",
      icon: <BookOpen size={16} />,
    },
    {
      title: "Bachelor's Degree",
      subtitle: "Computer Science",
      date: "July 2019 - May 2023",
      description: "Relevant coursework in Object-Oriented Programming, Databases, Data Structures and Algorithms.",
      icon: <BookOpen size={16} />,
    },
  ];
  
  // Internship items data from resume
  const internshipItems = [
    {
      title: "Front-End Technical Intern",
      subtitle: "Remote",
      date: "June 2023 - July 2024",
      description: "Designed and implemented the Character and Scenery Construction module with real-time feedback. Created engaging user interfaces with React and TypeScript.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Backend Engineer Intern",
      subtitle: "Remote",
      date: "January 2023 - February 2023",
      description: "Developed APIs and networking applications for Active Engineering College using Flask and PostgreSQL. Created database schema design, integration of various APIs, and user authentication.",
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
