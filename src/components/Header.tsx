
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#profiles" },
    { name: "Contact", href: "#contact" },
  ];
  
  // Handle scroll events to add/remove header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        isScrolled ? "backdrop-blur-xl bg-black/40 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-gradient">Portfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/90 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background backdrop-blur-xl pt-24 px-6 md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
