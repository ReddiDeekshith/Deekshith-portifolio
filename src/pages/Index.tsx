
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
      title: "B.S. in Computer Science",
      subtitle: "Florida State University",
      date: "2021 - 2025",
      description: "Relevant Coursework: Object Oriented Programming, Databases, Data Structures and Algorithms. GPA: 3.8/4.0",
      icon: <BookOpen size={16} />,
    },
  ];
  
  // Experience items data from resume
  const experienceItems = [
    {
      title: "Intern at Deckcard Hub",
      subtitle: "Remote",
      date: "September 2023 - Present",
      description: "Contributed to Front + group project enhancing communication skills. Designed UI/UX features and collaborated with team members.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Foodies Project - Restaurant Website",
      subtitle: "Student Project",
      date: "December 2022 - January 2023",
      description: "Developed APIs and interfaces for restaurant database. The project completed in 15 minutes, utilized Python, Node.js, MongoDB, and TypeScript (HTML) for backend functionality.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Car Catalog Net",
      subtitle: "Student Project",
      date: "May 2022 - July 2022",
      description: "Created a sleek web catalog with search functionality. Developed interactive web-based vendor applications using HTML, CSS, and JavaScript. Designed a clean, user-friendly interface for seamless interaction.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Frontend + Hub App",
      subtitle: "Group Project",
      date: "January 2022 - April 2022",
      description: "Created a paired real-time presence solution to facilitate transactions across multiple regions. Developed a chat application with typing indicators that enables real-time messaging with unique sender methods.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "Hockey VR",
      subtitle: "Group Project",
      date: "August 2021 - December 2021",
      description: "Built a group project designed to improve communication and visitor skills through a 3-layer app with responsive UI. Developed the Frontend module, where users wrote word-by-word with accuracy feedback and re-function learning algorithm.",
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
