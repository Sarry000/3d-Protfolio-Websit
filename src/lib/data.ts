
import { Github, ExternalLink } from "lucide-react";

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: 'Rocket Booster',
    description: 'A multi-level game developed in the Unity Engine. I implemented C# scripts for rocket movement, boosting mechanics, and level progression. This project showcases skills in game physics, level design, and integrating various assets to enhance the user experience.',
    techStack: ['Unity', 'C#', 'Game Physics', 'Level Design'],
    imageUrl: '/Rocket-Booster.gif',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Sarry000/rocket-booster',
        icon: Github
      },
      {
        name: 'Play on Itch.io',
        href: 'https://sarry007.itch.io/rocket-boster',
        icon: ExternalLink
      }
    ],
  },
  {
    title: 'Maze-Ball',
    description: 'A 3D physics-based rolling ball game developed in Unity. The objective is to navigate a ball through a series of complex mazes filled with static and dynamic obstacles. This project showcases core game development concepts like player control, physics interactions, and level design.',
    techStack: ['Unity', 'C#', 'Physics', 'Level Design'],
    imageUrl: '/Maze.gif',
    aiHint: 'futuristic dashboard',
    links: [
      {
        name: 'View Project',
        href: 'https://github.com/Sarry000/Maze-Ball',
        icon: Github
      }
    ],
  },
    {
    title: 'AI Voice Interviewer with n8n',
    description: 'A self-hostable AI agent using an n8n workflow, Google Gemini, and browser-based Speech-to-Text for realistic interview practice.',
    techStack: ['n8n', 'Google Gemini', 'AI', 'Voice Recognition'],
    imageUrl: '/Voice.png',
    links: [
        {
            name: 'GitHub',
            href: 'https://github.com/Sarry000/ai-voice-interviewer',
            icon: Github
        },
        {
            name: 'Workflow',
            href: 'https://n8n.io/workflows/6614-practice-job-interviews-with-voice-based-google-gemini-ai-interviewer/',
            icon: ExternalLink
        }
    ],
  },
  {
    title: 'AI Telegram Group-Chat Summarizer (n8n)',
    description: 'This workflow automates the process of summarizing Telegram group chat messages using AI. It fetches messages, generates concise summaries with Google Gemini, and sends them to a designated chat, keeping you updated without information overload.',
    techStack: ['n8n', 'Google Gemini', 'Telegram API', 'Automation'],
    imageUrl: '/Tel.png',
    links: [
      {
        name: 'View on GitHub',
        href: 'https://github.com/Sarry000/n8n-telegram-digest-bot',
        icon: Github
      }
    ]
  },
  {
    title: 'My Portfolio',
    description: 'This very portfolio website, built with Next.js, React, and Tailwind CSS to showcase my skills and projects in a modern and interactive way. This project demonstrates my ability to create responsive, visually appealing, and performant web applications.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'ShadCN UI'],
    imageUrl: '/Portfoliooo.gif',
    aiHint: 'portfolio website',
    links: [
      {
        name: 'GitHub',
        href: '#',
        icon: Github
      },
      {
        name :'vercel',
        href:'https://studio-pi-liard.vercel.app/',
        icon: ExternalLink
      }
    ]
  }
];

export const certificates = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    imageUrl: "https://i.ibb.co/gPSr3gR/Oci.png",
    aiHint: "generative ai certificate",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=572DD41D7A1BAB6923E1EC448F0103256AE426CF41E9DF3E15C919AA1B4155A5",
  },
  {
    title: "EA Gaming Certificate",
    issuer: "Forge",
    date: "July 2025",
    imageUrl: "https://i.ibb.co/bF4Vv3N/Game.png",
    aiHint: "gaming certificate",
    verifyUrl: "https://i.ibb.co/bF4Vv3N/Game.png",
  },
  {
    title: "Cyber Security",
    issuer: "Infosys SpringBoard",
    date: "April 2024",
    imageUrl: "https://i.ibb.co/HL21jzQN/Screenshot-2025-08-30-134749.png",
    aiHint: "Cyber Security certificate",
    verifyUrl: "https://i.ibb.co/HL21jzQN/Screenshot-2025-08-30-134749.png",
  },
  {
    title: "Oci Generative Foundation Associate",
    issuer: "Oracal",
    date: "Sept 2025",
    imageUrl: "https://i.ibb.co/tBS5T1H/Oci2.png",
    aiHint: "Generative ai",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6CA743D8659B3BEF6CF93DDD0BD0C033E913796F6F74D70CF7F40C331745335D",
  }
];

export const skillsData = {
  programmingLanguages: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'C#', level: 80 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'SQL', level: 75 },
  ],
  technologiesFrameworks: [
    { name: 'Unity Engine', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'React (Basics)', level: 60 },
    { name: 'Game Development', level: 85 },
    { name: 'Web Technologies', level: 80 },
    { name: 'AI/ML Basics', level: 70 },
  ],
  toolsOthers: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 90 },
    { name: 'N8N', level: 80 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Time Management', level: 85 },
  ],
  additionalTechnologies: [
    'Game Physics',
    'n8n Workflows',
    'Google Gemini LLM',
    'Speech-to-Text APIs',
    'Data Structures',
    'Algorithms',
    'Critical Thinking',
    'Adaptability',
    'Team Collaboration',
    'Project Management',
    'Version Control',
    'Automation',
  ],
};
