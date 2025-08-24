import React from 'react';
import Section from '../common/Section';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Personal Biography and Experience */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300">Personal Biography</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a MERN Full Stack Developer and AI Integrator specializing in building intelligent, scalable, and high-performance digital solutions. My expertise lies in leveraging modern web technologies and AI integration to deliver applications that are robust, user-centric, and future-ready. A self-learner with a passion for staying ahead in the ever-evolving tech landscape, I thrive in team coordination environments and excel at driving collaborative success. Beyond development, I have experience in event organizing, showcasing my leadership, planning, and execution skills. Driven by curiosity, continuous improvement, and innovation, I strive to create impactful solutions that solve real-world challenges and enhance user experiences.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300">Educational Background</h3>
          <ul className="mb-6 text-gray-300 list-disc list-inside">
            <li><strong>Bachelor’s Degree in Electronics and Communication Engineering (ECE)</strong> – K. Ramakrishnan College of Engineering, 2025</li>
            <li><strong>Certifications:</strong> MERN Full Stack, Prompt Engineering, Generative AI, Cloud Computing</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300">Professional Experience</h3>
          <ul className="mb-6 text-gray-300 list-disc list-inside">
            <li>Freelance & Open Source Contributor</li>
          </ul>
        </div>
        {/* Skills and Expertise */}
        <div className="card p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-300 text-center">Skills & Expertise</h3>
          {/* Skill Timeline */}
          <div className="relative skill-timeline space-y-8">
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">⚡</span>
              <div>
                <div className="font-bold text-blue-300">MERN Stack</div>
                <div className="text-gray-300 text-sm">Built robust, scalable apps with React, Node.js, Express, and MongoDB. Enjoy architecting full-stack solutions that power real products.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">🤖</span>
              <div>
                <div className="font-bold text-blue-300">AI Integration</div>
                <div className="text-gray-300 text-sm">Integrated AI/ML APIs and frameworks to deliver intelligent features, from chatbots to smart recommendations.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">🌐</span>
              <div>
                <div className="font-bold text-blue-300">Frontend</div>
                <div className="text-gray-300 text-sm">Crafted responsive, accessible UIs using modern JavaScript, CSS, and Tailwind. Passionate about user-centric design.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">🛠️</span>
              <div>
                <div className="font-bold text-blue-300">Backend</div>
                <div className="text-gray-300 text-sm">Developed RESTful APIs, authentication systems, and scalable backend architectures that keep data secure and fast.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">🗄️</span>
              <div>
                <div className="font-bold text-blue-300">Database</div>
                <div className="text-gray-300 text-sm">Skilled in MongoDB, SQL basics, and data modeling for efficient, reliable storage solutions.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">☁️</span>
              <div>
                <div className="font-bold text-blue-300">Cloud & DevOps</div>
                <div className="text-gray-300 text-sm">Deployed apps, set up CI/CD pipelines, and managed version control with Git for seamless delivery.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="icon-skill text-2xl mt-1">🚀</span>
              <div>
                <div className="font-bold text-blue-300">Performance Optimization</div>
                <div className="text-gray-300 text-sm">Obsessed with speed and scalability—always tuning for the best user experience and reliability.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
