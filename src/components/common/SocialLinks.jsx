import React from 'react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { contactInfo } from '../../data/contactInfo';

const SocialLinks = ({ 
  variant = 'default', // 'default', 'footer', 'contact'
  className = "",
  iconSize = "text-2xl"
}) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: SiGithub,
      href: contactInfo.socialLinks.github,
      color: 'text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      href: contactInfo.socialLinks.linkedin,
      color: 'text-blue-400'
    },
    {
      name: 'Email',
      icon: SiGmail,
      href: `mailto:${contactInfo.socialLinks.email}`,
      color: 'text-blue-400'
    }
  ];

  if (variant === 'footer') {
    return (
      <div className={`flex space-x-4 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <social.icon className={iconSize} />
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={`flex space-x-4 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 rounded-lg hover:bg-blue-900/40 transition-colors"
          >
            <social.icon className={`${iconSize} ${social.color}`} />
          </a>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          <social.icon className={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
