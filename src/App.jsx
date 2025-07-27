import React, { useState, useEffect } from 'react';
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiGraphql, SiDocker, SiGit, SiGithub, SiNpm, SiYarn, SiVite, SiWebpack, SiJest, SiFirebase, SiPostman, SiHeroku, SiNetlify, SiVercel, SiLinux, SiFigma, SiChakraui, SiSocketdotio, SiPassport, SiJsonwebtokens, SiMongoose
} from 'react-icons/si';
import { SiLinkedin, SiGmail } from 'react-icons/si';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillFilter, setSkillFilter] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  const [showSkillModal, setShowSkillModal] = useState(false);
  
  useEffect(() => { setIsLoaded(true); }, []);

  const skills = [
    { 
      name: 'React', 
      icon: SiReact, 
      color: '#61DAFB',
      category: 'Frontend',
      proficiency: 90,
      experience: '2+ years',
      description: 'Building interactive user interfaces with React hooks, context, and modern patterns.',
      projects: ['E-Commerce Platform', 'Portfolio Website', 'Task Management App']
    },
    { 
      name: 'Redux', 
      icon: SiRedux, 
      color: '#764ABC',
      category: 'Frontend',
      proficiency: 85,
      experience: '1.5+ years',
      description: 'State management with Redux Toolkit, implementing complex data flows.',
      projects: ['E-Commerce Platform', 'Real-time Dashboard']
    },
    { 
      name: 'Node.js', 
      icon: SiNodedotjs, 
      color: '#339933',
      category: 'Backend',
      proficiency: 88,
      experience: '2+ years',
      description: 'Server-side development with Express.js, REST APIs, and middleware.',
      projects: ['E-Commerce Backend', 'API Gateway', 'Authentication Service']
    },
    { 
      name: 'Express', 
      icon: SiExpress, 
      color: '#fff',
      category: 'Backend',
      proficiency: 85,
      experience: '2+ years',
      description: 'Building RESTful APIs, middleware, and server-side logic.',
      projects: ['E-Commerce API', 'User Management System']
    },
    { 
      name: 'MongoDB', 
      icon: SiMongodb, 
      color: '#47A248',
      category: 'Database',
      proficiency: 85,
      experience: '2+ years',
      description: 'NoSQL database design, aggregation pipelines, and optimization.',
      projects: ['E-Commerce Database', 'Analytics Platform']
    },
    { 
      name: 'Mongoose', 
      icon: SiMongoose, 
      color: '#880000',
      category: 'Database',
      proficiency: 80,
      experience: '1.5+ years',
      description: 'MongoDB ODM with schema validation and middleware.',
      projects: ['User Management', 'Content Management System']
    },
    { 
      name: 'JavaScript', 
      icon: SiJavascript, 
      color: '#F7DF1E',
      category: 'Language',
      proficiency: 92,
      experience: '3+ years',
      description: 'ES6+, async/await, functional programming, and modern JS patterns.',
      projects: ['All Projects', 'Custom Libraries', 'Automation Scripts']
    },
    { 
      name: 'HTML5', 
      icon: SiHtml5, 
      color: '#E34F26',
      category: 'Frontend',
      proficiency: 95,
      experience: '3+ years',
      description: 'Semantic HTML, accessibility, and modern web standards.',
      projects: ['All Web Projects', 'Landing Pages']
    },
    { 
      name: 'CSS3', 
      icon: SiCss3, 
      color: '#1572B6',
      category: 'Frontend',
      proficiency: 90,
      experience: '3+ years',
      description: 'Responsive design, animations, and modern CSS techniques.',
      projects: ['All Web Projects', 'Design Systems']
    },
    { 
      name: 'TailwindCSS', 
      icon: SiTailwindcss, 
      color: '#06B6D4',
      category: 'Frontend',
      proficiency: 85,
      experience: '1.5+ years',
      description: 'Utility-first CSS framework for rapid UI development.',
      projects: ['Portfolio Website', 'Admin Dashboard']
    },
    { 
      name: 'Next.js', 
      icon: SiNextdotjs, 
      color: '#fff',
      category: 'Frontend',
      proficiency: 75,
      experience: '1+ year',
      description: 'React framework with SSR, SSG, and file-based routing.',
      projects: ['Blog Platform', 'E-Commerce Frontend']
    },
    { 
      name: 'Docker', 
      icon: SiDocker, 
      color: '#2496ED',
      category: 'DevOps',
      proficiency: 70,
      experience: '1+ year',
      description: 'Containerization and deployment with Docker Compose.',
      projects: ['Microservices Deployment', 'Development Environment']
    },
    { 
      name: 'Git', 
      icon: SiGit, 
      color: '#F05032',
      category: 'Tools',
      proficiency: 85,
      experience: '2+ years',
      description: 'Version control, branching strategies, and collaboration.',
      projects: ['All Projects', 'Team Collaboration']
    },
    { 
      name: 'GitHub', 
      icon: SiGithub, 
      color: '#fff',
      category: 'Tools',
      proficiency: 85,
      experience: '2+ years',
      description: 'Code hosting, CI/CD, and project management.',
      projects: ['All Projects', 'Open Source Contributions']
    },
    { 
      name: 'NPM', 
      icon: SiNpm, 
      color: '#CB3837',
      category: 'Tools',
      proficiency: 90,
      experience: '2+ years',
      description: 'Package management and dependency handling.',
      projects: ['All Projects', 'Custom Packages']
    },
    { 
      name: 'Vite', 
      icon: SiVite, 
      color: '#646CFF',
      category: 'Build Tools',
      proficiency: 80,
      experience: '1+ year',
      description: 'Fast build tool and development server.',
      projects: ['Portfolio Website', 'React Applications']
    },
    { 
      name: 'Postman', 
      icon: SiPostman, 
      color: '#FF6C37',
      category: 'Tools',
      proficiency: 80,
      experience: '1.5+ years',
      description: 'API testing, documentation, and collaboration.',
      projects: ['API Development', 'Testing Automation']
    },
    { 
      name: 'Netlify', 
      icon: SiNetlify, 
      color: '#00C7B7',
      category: 'Deployment',
      proficiency: 75,
      experience: '1+ year',
      description: 'Static site hosting and continuous deployment.',
      projects: ['Portfolio Website', 'Landing Pages']
    },
    { 
      name: 'Vercel', 
      icon: SiVercel, 
      color: '#fff',
      category: 'Deployment',
      proficiency: 75,
      experience: '1+ year',
      description: 'Serverless deployment platform for React applications.',
      projects: ['Next.js Applications', 'Static Sites']
    },
    { 
      name: 'Linux', 
      icon: SiLinux, 
      color: '#FCC624',
      category: 'DevOps',
      proficiency: 70,
      experience: '1+ year',
      description: 'Server administration and command line operations.',
      projects: ['Server Setup', 'Deployment Automation']
    },
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Database', 'Language', 'DevOps', 'Tools', 'Build Tools', 'Deployment'];

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = skillFilter === 'all' || skill.category === skillFilter;
    const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setShowSkillModal(true);
  };

  const closeModal = () => {
    setShowSkillModal(false);
    setSelectedSkill(null);
  };

  const projects = [
    {
      title: 'Greenden Plant Store',
      description: 'Modern plant e-commerce website with responsive design, product listings, customer reviews, and newsletter signup built with HTML5 and Tailwind CSS.',
      tech: ['HTML5', 'Tailwind CSS', 'E-Commerce', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=250&fit=crop',
      link: 'https://github.com/Sudhakarkrish2002/Greenden-Project',
      liveLink: 'https://sudhakarkrish2002.github.io/Greenden-Project/'
    },
    {
      title: 'Nostra E-Commerce App',
      description: 'Complete e-commerce platform with product collections, shopping cart functionality, and responsive design built with vanilla JavaScript.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
      link: 'https://github.com/Sudhakarkrish2002/Nostra-Project',
      liveLink: 'https://sudhakarkrish2002.github.io/Nostra-Project/'
    },
    {
      title: 'Netflix Clone App',
      description: 'Complete Netflix clone with modern UI, movie browsing, search functionality, and responsive design built with React and Tailwind CSS.',
      tech: ['React', 'TailwindCSS', 'Vite', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=250&fit=crop',
      link: 'https://github.com/Sudhakarkrish2002/OTT-APP-UI',
      liveLink: 'https://ott-app-ui.vercel.app'
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SUDHAKAR_N_RESUME.pdf';
    link.download = 'SUDHAKAR_N_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
      console.log('Sending contact form data:', data);
      const response = await fetch('http://localhost:5002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log('Contact form response:', result);
      
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus({ type: 'error', message: `Failed to send message: ${result.error || 'Unknown error'}` });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({ type: 'error', message: `Failed to send message: ${error.message}` });
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Sudhakar N</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Floating Elements */}
        <div className="floating-element">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="2" fill="#38bdf8" opacity="0.3"/>
          </svg>
        </div>
        <div className="floating-element">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="10" height="10" fill="#38bdf8" opacity="0.2"/>
          </svg>
        </div>
        <div className="floating-element">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="25,5 30,20 45,25 30,30 25,45 20,30 5,25 20,20" fill="#38bdf8" opacity="0.25"/>
          </svg>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Sudhakar N</h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern technologies and innovative solutions. 
            Specializing in the MERN stack to build scalable, performant applications that drive business growth.
          </p>
          <div className="hero-buttons">
            <button className="hero-button" onClick={downloadResume}>Download Resume</button>
            <button className="hero-button hero-button-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">About Me</h2>
          <div className="section-divider"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Professional Experience</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a passionate Full-Stack Developer with expertise in the MERN stack. 
                I specialize in building scalable, maintainable applications that deliver 
                exceptional user experiences and drive business growth.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Technical Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                My technical foundation includes modern JavaScript frameworks, 
                server-side development, database design, and cloud technologies. 
                I stay current with industry trends and best practices.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>Frontend Development</div>
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>Backend Architecture</div>
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>Database Design</div>
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>API Development</div>
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>Performance Optimization</div>
                <div className="flex items-center"><span className="icon-skill mr-3">⚡</span>DevOps & Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">Skills & Technologies</h2>
          <div className="section-divider"></div>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center search-filter-container">
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="px-4 py-2 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 w-full md:w-64 search-input"
            />
            <select
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className="px-4 py-2 bg-black/40 border border-blue-400 rounded-lg text-white focus:outline-none focus:border-blue-300 filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="card flex flex-col items-center p-6 fade-in-up cursor-pointer skill-card"
                onClick={() => handleSkillClick(skill)}
              >
                {React.createElement(skill.icon, { 
                  className: "icon-skill skill-icon", 
                  color: skill.color 
                })}
                <span className="skill-name">{skill.name}</span>
                <span className="text-xs text-blue-300 mt-1 skill-category">{skill.category}</span>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No skills found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Skill Details Modal */}
      {showSkillModal && selectedSkill && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="card max-w-md w-full p-6 relative skill-modal">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              {React.createElement(selectedSkill.icon, { 
                className: "icon-skill mx-auto mb-4 skill-icon", 
                color: selectedSkill.color,
                style: { fontSize: '3rem' }
              })}
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{selectedSkill.name}</h3>
              <span className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm">
                {selectedSkill.category}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-blue-300 font-semibold mb-2">Description</h4>
                <p className="text-gray-300 text-sm">{selectedSkill.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Proficiency</h4>
                  <div className="w-full h-2 bg-gray-700 rounded-full progress-bar">
                    <div 
                      className="h-full bg-blue-400 rounded-full progress-fill"
                      style={{ width: `${selectedSkill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{selectedSkill.proficiency}%</p>
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Experience</h4>
                  <p className="text-gray-300 text-sm">{selectedSkill.experience}</p>
                </div>
              </div>

              <div>
                <h4 className="text-blue-300 font-semibold mb-2">Projects Using {selectedSkill.name}</h4>
                <div className="space-y-1">
                  {selectedSkill.projects.map((project, index) => (
                    <div key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className="fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">Featured Projects</h2>
          <div className="section-divider"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card overflow-hidden fade-in-up">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-900/40 text-blue-200 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black text-sm px-3 py-2"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black text-sm px-3 py-2"
                      >
                        GitHub
                      </a>
                    )}
                    {(!project.liveLink || project.liveLink === '#') && (!project.link || project.link === '#') && (
                      <button className="button bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                        View Project
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">Get In Touch</h2>
          <div className="section-divider"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Send Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
                
                {submitStatus && (
                  <div className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-900/20 border-green-400 text-green-300' 
                      : 'bg-red-900/20 border-red-400 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`button w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SiGmail className="text-2xl text-blue-400 mr-4" />
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <a href="mailto:sudhakarnatarajan501@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        sudhakarnatarajan501@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl text-blue-400 mr-4">📍</span>
                    <div>
                      <p className="text-blue-200 text-sm">Location</p>
                      <p className="text-white">Trichy, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Sudhakarkrish2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black/40 rounded-lg hover:bg-blue-900/40 transition-colors"
                  >
                    <SiGithub className="text-2xl text-blue-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sudhakarstackdeveloper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black/40 rounded-lg hover:bg-blue-900/40 transition-colors"
                  >
                    <SiLinkedin className="text-2xl text-blue-400" />
                  </a>
                  <a
                    href="mailto:sudhakarnatarajan501@gmail.com"
                    className="p-4 bg-black/40 rounded-lg hover:bg-blue-900/40 transition-colors"
                  >
                    <SiGmail className="text-2xl text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-blue-400 bg-black/95">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Sudhakar N</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Passionate Full-Stack Developer specializing in the MERN stack. 
                Creating exceptional digital experiences with modern technologies 
                and innovative solutions that drive business growth.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sudhakarkrish2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <SiGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sudhakarstackdeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <SiLinkedin className="text-2xl" />
                </a>
                <a
                  href="mailto:sudhakarnatarajan501@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <SiGmail className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <SiGmail className="text-blue-400 mr-2" />
                  <span className="text-sm">sudhakarnatarajan501@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">📍</span>
                  <span className="text-sm">Trichy, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">💼</span>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg font-semibold text-blue-300 mb-4 text-center">Technologies & Tools</h4>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Express</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Vite</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sudhakar N. All rights reserved. | Built with ❤️ using React, Tailwind CSS & Vite
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
