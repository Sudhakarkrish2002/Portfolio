export const skills = [
  {
    id: 1,
    title: "React",
    description: "Frontend Development",
    category: "Frontend",
    level: "Advanced"
  },
  {
    id: 2,
    title: "Node.js",
    description: "Backend Development",
    category: "Backend",
    level: "Advanced"
  },
  {
    id: 3,
    title: "MongoDB",
    description: "Database Management",
    category: "Database",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Express.js",
    description: "API Development",
    category: "Backend",
    level: "Advanced"
  },
  {
    id: 5,
    title: "JavaScript",
    description: "Programming Language",
    category: "Language",
    level: "Advanced"
  },
  {
    id: 6,
    title: "HTML/CSS",
    description: "Web Development",
    category: "Frontend",
    level: "Advanced"
  },
  {
    id: 7,
    title: "Git",
    description: "Version Control",
    category: "Tools",
    level: "Intermediate"
  },
  {
    id: 8,
    title: "REST APIs",
    description: "API Design",
    category: "Backend",
    level: "Advanced"
  },
  {
    id: 9,
    title: "Tailwind CSS",
    description: "CSS Framework",
    category: "Frontend",
    level: "Intermediate"
  },
  {
    id: 10,
    title: "PostgreSQL",
    description: "Relational Database",
    category: "Database",
    level: "Intermediate"
  },
  {
    id: 11,
    title: "TypeScript",
    description: "Programming Language",
    category: "Language",
    level: "Intermediate"
  },
  {
    id: 12,
    title: "Docker",
    description: "Containerization",
    category: "DevOps",
    level: "Beginner"
  }
];

export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};

export const getAllSkills = () => {
  return skills;
};

export const getSkillCategories = () => {
  return [...new Set(skills.map(skill => skill.category))];
};
