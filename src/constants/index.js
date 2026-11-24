import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "AI & Data Solutions",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "HTML / CSS" },
  { name: "SQL" },
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Flask" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Socket.io" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "Prisma" },
  { name: "NumPy" },
  { name: "pandas" },
  { name: "TensorFlow" },
  { name: "Machine Learning" },
  { name: "REST APIs" },
  { name: "Git / GitHub" },
  { name: "Docker" },
  { name: "GitHub Actions" },
  { name: "Figma" },
  { name: "Postman" },
];

const experiences = [
  {
    title: "B.Sc. Software Engineering",
    company_name: "University of Faisalabad",
    icon: web,
    iconBg: "#915EFF",
    date: "2023 - 2027 · 7th Semester",
    points: [
      "CGPA: 3.00/4.0",
      "Relevant coursework: Data Structures & Algorithms, OOP (C++), DBMS, and Introduction to AI.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "NeuroFive Solutions",
    icon: creator,
    iconBg: "#383E56",
    date: "Jul 2026 - Present",
    points: [
      "Completed a six-week virtual internship focused on machine learning fundamentals.",
      "Practiced data preprocessing and feature engineering.",
      "Built and evaluated Python-based machine learning models.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Crixoft Solution",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jul 2026 - Present",
    points: [
      "Performed hands-on data analysis and exploration using Python.",
      "Applied machine learning workflows to real-world data science projects.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "Nexora Labs",
    icon: docker,
    iconBg: "#383E56",
    date: "Aug 2026 - Sep 2026",
    points: [
      "Containerized an application with Docker and infrastructure-as-code practices.",
      "Built a complete CI/CD pipeline using GitHub Actions with auto-deployment.",
      "Implemented monitoring and logging for the application.",
      "Delivered a zero-downtime rollback deployment capstone with distinction.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "MCB Bank Limited, Dasuha",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Sep 2025",
    points: [
      "Handled customer queries and complaint resolution in a fast-paced branch environment.",
      "Completed accurate data entry and banking administration tasks.",
    ],
  },
];

const testimonials = [];

const certificates = [
  {
    title: "Python",
    issuer: "Google Career Certificate · Coursera",
    description: "Verified coursework covering Python fundamentals and practical programming concepts.",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Coursera",
    description: "Coursework focused on AI concepts, applications, and practical problem solving.",
  },
  {
    title: "Machine Learning",
    issuer: "Google / Coursera",
    description: "Verified learning in machine learning workflows, models, and practical implementation.",
  },
  {
    title: "Applied AI",
    issuer: "Coursera",
    description: "Applied coursework covering intelligent systems and real-world AI use cases.",
  },
  {
    title: "Professional Development",
    issuer: "Google Career Certificates",
    description: "Additional professional coursework completed through Google Career Certificates.",
  },
];

const projects = [
  {
    name: "BiteFlow",
    description:
      "Featured final-year project: a modern QR-based restaurant and hotel ordering platform. Customers scan a QR code, browse menus and place orders while staff manage everything in real time.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "socket.io", color: "blue-text-gradient" },
      { name: "gemini", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/ali04432?tab=repositories",
  },
  {
    name: "Smart Crop Doctor",
    description:
      "AI-powered crop disease detector using a MobileNetV2 model trained on the PlantVillage dataset. The Flask + React.js + MySQL app includes an admin dashboard and planned SMS access for farmers.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "97% accuracy", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/ali04432?tab=repositories",
  },
  {
    name: "Tech Diner",
    description:
      "Console-based restaurant POS built with Python OOP, Menu / Order / Bill classes and file handling, plus a matching HTML, CSS and JavaScript web prototype.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "oop", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ali04432?tab=repositories",
  },
  {
    name: "Digital Recognition System",
    description:
      "Student records manager with persistent file-based storage and add, update, delete and search operations. An early project that strengthened my Python and CRUD fundamentals.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "file io", color: "green-text-gradient" },
      { name: "crud", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/ali04432?tab=repositories",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  certificates,
  projects,
};
