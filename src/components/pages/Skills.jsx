import React, { useState } from 'react';
import Section from '../common/Section';
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiGraphql, SiDocker, SiGit, SiGithub, SiNpm, SiYarn, SiVite, SiWebpack, SiJest, SiFirebase, SiPostman, SiHeroku, SiNetlify, SiVercel, SiLinux, SiFigma, SiChakraui, SiSocketdotio, SiPassport, SiJsonwebtokens, SiMongoose
} from 'react-icons/si';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillFilter, setSkillFilter] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  const [showSkillModal, setShowSkillModal] = useState(false);

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

  return (
    <Section id="skills" title="Skills & Technologies">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.name} 
            className="card flex flex-col items-center p-4 sm:p-6 fade-in-up cursor-pointer skill-card"
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

      {/* Skill Details Modal */}
      {showSkillModal && selectedSkill && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="card max-w-md w-full p-4 sm:p-6 relative skill-modal">
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
    </Section>
  );
};

export default Skills;
