// Portfolio Data Configuration
// Edit this file to update your portfolio content

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  bio: string;
  profileImage?: string;
}

export interface Project {
  name: string;
  description: string;
  img: string;
  link?: string;
  repo?: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  img: string;
  link?: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  location?: string;
  achievements?: string[];
  projects?: Project[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  year: string;
  achievements?: string[];
  location?: string;
}

export interface TechStackCategory {
  name: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'language' | 'certification' | 'Project Management';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Prateek Kumawat",
  title: "Fullstack Developer",
  shortBio: "Passionate fullstack developer specializing in modern web technologies. I build responsive, dynamic applications with React, Node.js, and cutting-edge tools. Always learning, always building.",
  bio: "I am a passionate and driven fullstack developer with a strong foundation in building responsive and dynamic user interfaces. I specialize in using modern web technologies such as React, Tailwind CSS, JavaScript, HTML, and CSS to create visually appealing and efficient web applications. \n\nOn the backend, I am expanding my knowledge and skills with Express and Node.js, eager to become a full-stack developer. Additionally, I am familiar with version control using Git and GitHub, which aids in collaborative and organized code management. \n\nI thrive in fast-paced and collaborative environments and am committed to continuous learning and professional growth. Whether it's experimenting with new frameworks or refining my existing skills, I'm always up for a challenge and ready to contribute to exciting projects. \n\nLet's connect and explore opportunities where we can build innovative solutions together!",
};

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A sleek personal portfolio built with React, Tailwind, and Three.js featuring an interactive 3D model.",
    img: "/sample.jpg",
    link: "https://your-portfolio-link.com",
    repo: "https://github.com/yourusername/portfolio",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    name: "Youtube Clone",
    description: "A full-stack youtube clone built with Next.js, Tailwind CSS, Node.js, Express, and MongoDB.",
    img: "/sample.jpg",
    link: "https://youtube-clone-mauve-omega.vercel.app/",
    repo: "https://github.com/This-is-Prateek/youtubeCloneInNextJs",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "Gym Management System",
    description: "A gym management system built with PHP, MySQL, HTML, CSS, JavaScript.",
    img: "/sample.jpg",
    repo: "https://github.com/This-is-Prateek/gymManagementSystem",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Blog Website",
    description: "A blog website built with Next.js, Tailwind CSS, Node.js, and Appwrite.",
    img: "/sample.jpg",
    repo: "https://github.com/This-is-Prateek/reactBlogProject",
    technologies: ["React", "Tailwind CSS", "Node.js", "Appwrite"],
  },
];

export const experience: Experience[] = [
  {
    company: "RaftLabs",
    role: "Software Engineer",
    duration: "Jan 2025 - Present",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Next.js", "GatsbyJS", "Tailwind CSS", "Shadcn UI", "Ant Design", "GraphQL", "Hasura", "PostgreSQL", "Convex", "Vercel", "Node.js", "TypeScript", "AWS"],
    location: "Remote",
    projects: [
      {
        name: "Draftly (In-house product)",
        description: "An AI powered content and comment generator for linkedin, twitter and other social media platforms. Worked on the frontend and backend of the marketing website, the main webapp, admin panel and a chrome extension.",
        img: "/sample.jpg",
        link: "https://www.draftly.so/",
        technologies: ["React", "Tailwind CSS", "Next.js", "Typescript", "Shadcn UI", "Ant Design", "Sanity CMS", "Node.js", "AWS", "Serverless", "Hasura", "PostgreSQL", "Vercel", "WXT dev", "Playwright"],
      },
      {
        name: "AIRaft (In-house product)",
        description: "A widget that can be plugged into any website and answer user queries using AI.",
        img: "/sample.jpg",
        technologies: ["React", "Tailwind CSS", "Typescript", "Shadcn UI", "Ant Design", "Node.js", "AWS", "Hasura", "PostgreSQL", "Vercel", "AWS Amplify"],
      },
      {
        name: "1Raft (In-house product)",
        description: "A marketing website built for promoting headless CMS and JAMstack architecture services provided by RaftLabs. Worked on building the website from scratch using Next.js, Tailwind CSS, and Sanity CMS.",
        img: "/sample.jpg",
        link: "https://www.1raft.com/",
        technologies: ["React", "Tailwind CSS", "Next.js", "Typescript", "Shadcn UI", "Ant Design", "Sanity CMS", "Node.js", "Vercel"],
      },
      {
        name: "RaftLabs Website (In-house product)",
        description: "The official website of RaftLabs, to promote the company and its services. Worked on optimizing the website for SEO and performance and maintaining the website including adding new features and fixing bugs.",
        img: "/sample.jpg",
        link: "https://www.raftlabs.com/",
        technologies: ["React", "Tailwind CSS", "GatsbyJS", "Typescript", "Sanity CMS", "Node.js", "Vercel"],
      },
      {
        name: "PSI",
        description: "A web app used to conduct group discussions on various topics and get insights from the discussions. Worked on maintaining the main webapp and fixing bugs.",
        img: "/sample.jpg",
        link: "https://psi.tech/",
        technologies: ["React", "Tailwind CSS", "Next.js", "Typescript", "Shadcn UI", "Ant Design", "Node.js", "Vercel", "AWS", "Serverless", "Hasura", "PostgreSQL", "Vercel"],
      },
      {
        name: "SuperValu-Centra",
        description: "A platform used for earning rewards by scanning product receipts bought from various stores. Worked on frontend and API integration of the main website and the admin panel from scratch.",
        img: "/sample.jpg",
        technologies: ["React", "Tailwind CSS", "Next.js", "Typescript", "Shadcn UI", "Ant Design", "Node.js", "Vercel", "AWS", "Serverless", "Hasura", "PostgreSQL", "Vercel"],
      },
      {
        name: "RaftScan (In-house product)",
        description: "A webapp to earn reward points by scanning QR codes of products bought from various stores. Worked on frontend and API integration of the user webapp and the admin.",
        img: "/sample.jpg",
        technologies: ["React", "Tailwind CSS", "Next.js", "Typescript", "Shadcn UI", "Ant Design", "Node.js", "Vercel", "Convex", "PostgreSQL", "Vercel"],
      }
    ],
    achievements: [
      "Worked on various projects at RaftLabs, from building and maintaing the frontend and backend of websites, webapps and chrome extensions",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Consistently delivered high-quality software solutions within deadlines",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Swami Keshvanand Institute of Technoloogy, Management and Gramothan, Jaipur",
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    year: "2019 - 2023",
    achievements: [
      "Secured 9.36 CGPA by the end of the course",
      "Worked on various multi-disciplinary projects during the course",
    ],
    location: "Jaipur, Rajasthan",
  },
  {
    institution: "Sharda Vidya Mandir Public School, Jaipur",
    degree: "Senior Secondary (12th)",
    field: "Science (PCM)",
    year: "2017 - 2018",
    achievements: [
      "Secured 76% in the board exams",
    ],
    location: "Jaipur, Rajasthan",
  }
];

export const techStack: TechStackCategory[] = [
  {
    name: "Languages",
    technologies: ["JavaScript", "TypeScript", "PHP", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Shadcn UI", "Ant Design", "Sanity CMS", "WXT dev",],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Serverless"],
  },
  {
    name: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Hasura"],
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Amplify", "Lambda", "Convex", "Vercel"],
  },
  {
    name: "Tools & Others",
    technologies: ["VS Code", "Cursor", "Wireshark", "Postman", "Figma", "Three.js", "Lambda Test"],
  },
  {
    name: "OS",
    technologies: ["Pop!_OS", "Arch Linux", "Windows"],
  }
];

export const skills: Skill[] = [
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Team Collaboration", level: 85, category: "soft" },
  { name: "Communication", level: 88, category: "soft" },
  { name: "Hindi", level: 95, category: "language" },
  { name: "English", level: 90, category: "language" },
  {name: "Agile", level: 85, category: "Project Management"},
  {name: "Scrum", level: 85, category: "Project Management"},
  {name: "Asana", level: 85, category: "Project Management"},
];

export const contactInfo: ContactInfo = {
  email: "kumawatprateek01@gmail.com",
  phone: "+91 6378272744",
  linkedin: "https://linkedin.com/in/prateek-kumawat",
  github: "https://github.com/This-is-Prateek"
};

