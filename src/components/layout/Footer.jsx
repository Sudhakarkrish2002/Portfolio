import React from 'react';
import { SiGmail } from 'react-icons/si';
import SocialLinks from '../common/SocialLinks';
import { contactInfo, technologies } from '../../data/contactInfo';

const Footer = () => {
  return (
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
            <SocialLinks variant="footer" />
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
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">📍</span>
                <span className="text-sm">{contactInfo.location}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">💼</span>
                <span className="text-sm">{contactInfo.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sudhakar N. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
