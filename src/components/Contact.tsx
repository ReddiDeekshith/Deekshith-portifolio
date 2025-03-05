
import { useRef, useState, useEffect, FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView) {
      const elements = [
        { ref: titleRef, delay: 0 },
        { ref: formRef, delay: 200 },
        { ref: infoRef, delay: 400 },
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully!', {
      description: 'I will get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  // Contact info items
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      details: "deekshithreddi71@gmail.com",
      link: "mailto:deekshithreddi71@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      details: "+91 9912514884",
      link: "tel:+919912514884",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      details: "Tuni, East Godavari,Andhra pradesh",
      link: "#",
    },
  ];
  
  return (
    <section id="contact" ref={ref} className="py-20 bg-black/30">
      <div className="container px-6 mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mb-3">
            Get in Touch
          </span>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            Contact Me
          </h2>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="col-span-1 lg:col-span-2 glass-panel rounded-2xl p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Deekshith Reddi"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Deekshith@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-white/80 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
            >
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
          
          {/* Contact Info */}
          <div 
            ref={infoRef}
            className="col-span-1 space-y-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block glass-panel rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/70">{item.details}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
