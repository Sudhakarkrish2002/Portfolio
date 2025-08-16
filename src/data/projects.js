export const projects = [
  {
    id: 1,
    title: "Yash Fitness & Gym",
    description: "A modern, responsive website for a fitness center, featuring class schedules, trainer profiles, and online membership management.",
    image: "/images/yash-gym-thumnail.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://yash-fitness-frontend.vercel.app/",
    githubLink: "https://github.com/Sudhakarkrish2002/Yash-Fitness-frontend",
    featured: true
  },
  {
    id: 2,
    title: "Bulk mailer",
    description: "A web application for sending personalized bulk emails efficiently, featuring contact management, CSV uploads, and delivery analytics.",
    image: "/images/bulk-mailer-thumbnail.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://bulk-mailer-frontend-beta.vercel.app/",
    githubLink: "https://github.com/Sudhakarkrish2002/BulkMailer-frontend",
    backendRepo: "https://github.com/Sudhakarkrish2002/BulkMailer-backend",
    featured: true
  },
  {
    id: 3,
    title: "Netflix Login Page",
    description: "A modern OTT Netflix-style login UI with authentication and responsive design. Features secure login and animated transitions for a polished user experience.",
    image: "/images/netflix-thumbnail 9.30.52 AM 9.33.17 AM.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Sudhakarkrish2002/OTT-APP-UI",
    backendRepo: "https://github.com/Sudhakarkrish2002/OTT-APP-Back-End",
    liveLink: "https://ott-app-ui.vercel.app/", 
    featured: true
  },
  {
    id: 4,
    title: "Weather Report App",
    description: "A responsive weather application that displays current weather conditions and forecasts using external APIs and interactive charts.",
    image: "/images/weather-app-thumbnail 9.32.44 AM.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveLink: "https://weather-app-inky-phi-39.vercel.app/", 
    githubLink: "https://github.com/Sudhakarkrish2002/Weather-App",
    featured: false
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/task-management-thumbnail.png", 
    technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
    liveLink: "https://task-management-alpha-rose.vercel.app/", 
    githubLink: "https://github.com/Sudhakarkrish2002/Task-management", 
    featured: true
  },
  {
    id: 6,
    title: "Apple Clone", 
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image: "/images/apple-website-thumbnail.png", 
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://apple-clone-ashy.vercel.app/", 
    githubLink: "https://github.com/Sudhakarkrish2002/Apple-clone", 
    featured: true
  },
  {
    id: 7,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/task-management-thumbnail.png", 
    technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
    liveLink: "https://task-management-alpha-rose.vercel.app/", 
    githubLink: "https://github.com/Sudhakarkrish2002/Task-management", 
    featured: true
  },
  {
    id: 8,
    title: "Nostra E-Commerce Website", 
    description: "A personal portfolio website built with modern web technologies, featuring responsive design and smooth animations.",
    image: "/images/nostra-e-commerce-thumbnail.png", 
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://sudhakarkrish2002.github.io/Nostra-Project/", 
    githubLink: "https://github.com/Sudhakarkrish2002/Nostra-Project", 
    featured: false
  },
  {
    id: 9,
    title: "Trip Advisor Website",
    description: "A responsive TripAdvisor clone website featuring hotel, restaurant, and attraction listings with interactive maps and reviews.",
    image: "/images/trip-advisor-thumbnail.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://sudhakarkrish2002.github.io/Tripadvisor-Clone-Website/",
    githubLink: "https://github.com/Sudhakarkrish2002/Tripadvisor-Clone-Website",
    featured: false
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = () => {
  return projects;
};
