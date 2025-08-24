import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden fade-in-up">
            <div className="flex flex-col h-full p-4">
              {/* Image Thumbnail */}
              <div className="w-full aspect-video mb-4 rounded overflow-hidden border-2 border-blue-900/40 bg-black/30 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-400 text-center mt-2 mb-2">{project.title}</h3>
              <div className="flex-1 flex flex-col">
                <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                <div className="mb-4">
                  <span className="font-semibold text-blue-300 text-xs">Skills Used:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-900/40 text-blue-200 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.githubLink && project.githubLink !== '#' && (
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      GitHub Frontend
                    </Button>
                  )}
                  {project.backendRepo && project.backendRepo !== '#' && (
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.backendRepo, '_blank')}
                    >
                      GitHub Backend
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <Button 
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {(!project.liveLink || project.liveLink === '#') && (!project.githubLink || project.githubLink === '#') && (
                    <Button variant="ghost" size="sm">
                      View Project
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
