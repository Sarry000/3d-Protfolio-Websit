import { Github, ExternalLink } from "lucide-react";

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: 'Rocket Booster',
    description: 'A multi-level game developed in the Unity Engine. I implemented C# scripts for rocket movement, boosting mechanics, and level progression. This project showcases skills in game physics, level design, and integrating various assets to enhance the user experience.',
    techStack: ['Unity', 'C#', 'Game Physics', 'Level Design'],
    imageUrl: 'https://placehold.co/800x600.png',
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
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'futuristic dashboard',
    imageUrl: '/Maze.gif',
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
    imageUrl: 'https://placehold.co/800x600.png',
    links: [
      {
        name: 'View on GitHub',
        href: 'https://github.com/Sarry000/n8n-telegram-digest-bot',
        icon: Github
      }
    ]
  }
];

export const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 1', hint: 'abstract art' },
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 2', hint: 'futuristic city' },
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 3', hint: 'digital render' },
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 4', hint: 'glowing shapes' },
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 5', hint: 'neon lines' },
  { src: 'https://placehold.co/600x400.png', alt: 'Design Tile 6', hint: 'cybernetic patterns' },
];
