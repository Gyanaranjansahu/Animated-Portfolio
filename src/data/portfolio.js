export const roles = ['Frontend Developer', 'MERN Stack Developer', 'Full Stack Developer']

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const loadingMessages = [
  'Initializing Portfolio...',
  'Crafting Experiences...',
  'Loading Creative Assets...',
]

export const aboutHighlights = [
  'Problem solving with practical product thinking.',
  'Building scalable applications with clean JavaScript architecture.',
  'Attention to detail across layout, motion, accessibility, and performance.',
  'Continuous learning through hands-on frontend and MERN stack projects.',
  'Creating memorable user experiences that feel fast, clear, and polished.',
]

export const skillGroups = [
  {
    title: 'Frontend Skills',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Skills',
    skills: ['Node.js', 'Express.js','TypeScript'],
  },
  {
    title: 'Database',
    skills: ['MongoDB',"SQL"],
  },
  {
    title: 'Additional Skills',
    skills: ['REST APIs', 'Git', 'GitHub', 'Responsive Design', 'API Integration', 'React Hooks'],
  },
]

export const projects = [
  {
    title: "AI Resume Analyzer",
    mark: "AI",
    category: "AI-Powered Career Platform",
    accent: "#b8ff3d",

    description:
      "An AI-powered platform that analyzes resumes against job descriptions and generates personalized insights to improve interview preparation and career readiness.",

    features: [
      "AI-powered resume analysis",
      "Job description matching",
      "Technical and behavioral interview questions",
      "Skill gap identification",
      "Personalized 7-day preparation plan",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
    ],

    liveDemo: "https://ai-resume-analyzer-app-five.vercel.app/",
    status: "Live",
  },

  {
    title: "E-Commerce Website",
    mark: "EC",
    category: "Full-Stack Shopping Platform",
    accent: "#50dcb7",

    description:
      "A modern e-commerce platform focused on smooth shopping experiences, product discovery, cart management, and a responsive user interface.",

    features: [
      "Responsive product browsing",
      "Product search and filtering",
      "Shopping cart management",
      "User authentication",
      "Order management",
      "Admin product management",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    // Add your deployed project URL here later.
    liveDemo: "",
    status: "Coming Soon",
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Gyanaranjansahu', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:gyana9619@gmail.com', icon: 'mail' },
]
