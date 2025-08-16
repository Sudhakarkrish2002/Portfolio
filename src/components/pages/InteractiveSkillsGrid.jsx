import React, { useState } from 'react';
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiGraphql, SiDocker, SiGit, SiGithub, SiNpm, SiYarn, SiVite, SiWebpack, SiJest, SiFirebase, SiPostman, SiHeroku, SiNetlify, SiVercel, SiLinux, SiFigma, SiChakraui, SiSocketdotio, SiPassport, SiJsonwebtokens, SiMongoose
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Building interactive user interfaces with React hooks, context, and modern patterns.' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', description: 'State management with Redux Toolkit, implementing complex data flows.' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Server-side development with Express.js, REST APIs, and middleware.' },
  { name: 'Express', icon: SiExpress, color: '#fff', description: 'Building RESTful APIs, middleware, and server-side logic.' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL database design, aggregation pipelines, and optimization.' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'ES6+, async/await, functional programming, and modern JS patterns.' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', description: 'Semantic HTML, accessibility, and modern web standards.' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', description: 'Responsive design, animations, and modern CSS techniques.' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', description: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#fff', description: 'React framework with SSR, SSG, and file-based routing.' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Containerization and deployment with Docker Compose.' },
  { name: 'Git', icon: SiGit, color: '#F05032', description: 'Version control, branching strategies, and collaboration.' },
  { name: 'GitHub', icon: SiGithub, color: '#fff', description: 'Code hosting, CI/CD, and project management.' },
  { name: 'NPM', icon: SiNpm, color: '#CB3837', description: 'Package management and dependency handling.' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', description: 'Fast build tool and development server.' },
];

const InteractiveSkillsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
      {skills.map((skill, idx) => (
        <div key={skill.name} className="flex flex-col items-center relative">
          <button
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            className="focus:outline-none"
            aria-label={skill.name}
          >
            {React.createElement(skill.icon, {
              className: 'icon-skill text-4xl mb-2',
              color: skill.color
            })}
          </button>
          <span className="text-sm font-semibold text-blue-200 mb-1">{skill.name}</span>
          {activeIndex === idx && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-10 bg-black/90 text-white p-4 rounded-lg shadow-lg w-64 text-center animate-fade-in border border-blue-400">
              <div className="text-blue-400 font-bold mb-2">{skill.name}</div>
              <div className="text-gray-200 text-sm">{skill.description}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractiveSkillsGrid;
