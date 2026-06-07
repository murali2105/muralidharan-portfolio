import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export const PROFILE = {
  name: "Muralidharan D",
  role: "Mechatronics Engineering Student",
  tagline: "UAV, robotics, embedded systems and VR industrial training",
  location: "Erode, Tamil Nadu",
  email: "muralidhana2005@gmail.com",
  phone: "9443214437",
  github: "https://github.com/murali2105",
  linkedIn: "https://linkedin.com/in/muralidharan-dhanasekar",
  resume: "/resume/Muralidharan_Resume.pdf",
  objective:
    "Motivated Mechatronics Engineering student at Kumaraguru College of Technology with hands-on experience in UAV systems, embedded electronics, robotics, AI vision, and extended reality (XR) application development. Successfully completed the ProtoSem program at FORGE Innovation & Ventures, where I developed a VR-based industrial training application using Blender, Unity XR, and OpenXR. Passionate about integrating mechanical systems, electronics, and intelligent technologies to create innovative solutions for real-world industrial challenges.",
} as const;

export const HERO_STATS = [
  {
    value: "AIR 3",
    label: "Aerothon 2025 Phase-1 report",
  },
  {
    value: "407+",
    label: "Objects modeled for FORGE",
  },
  {
    value: "Top 6",
    label: "SIH 2025 national finalist",
  },
  {
    value: "7.5",
    label: "B.E. Mechatronics CGPA",
  },
] as const;

export const SKILL_DATA = [
  {
    skill_name: "UAV Systems",
    image: "uav.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Robotics",
    image: "robotics.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PCB Design",
    image: "pcb.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Arduino C",
    image: "arduino-c.png",
    width: 80,
    height: 80,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Fusion 360",
    image: "fusion360.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Blender",
    image: "blender.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "3D Print",
    image: "printing.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Unity XR",
    image: "unity-xr.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python-skill.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Edge AI",
    image: "edge-ai.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "YOLO Vision",
    image: "yolo.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "RVC",
    image: "rvc.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Welding",
    image: "welding.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Fabrication",
    image: "fabrication.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Soldering",
    image: "soldering.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "EV Assembly",
    image: "ev.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Drone Piloting",
    image: "piloting.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PC Servicing",
    image: "pc-service.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Leadership",
    image: "leadership.png",
    width: 80,
    height: 80,
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Core Systems",
    skills: SKILL_DATA,
  },
  {
    title: "Design and Simulation",
    skills: FRONTEND_SKILL,
  },
  {
    title: "AI and Programming",
    skills: BACKEND_SKILL,
  },
  {
    title: "Manufacturing",
    skills: FULLSTACK_SKILL,
  },
  {
    title: "Operations",
    skills: OTHER_SKILL,
  },
] as const;

export const PROJECTS = [
  {
    title: "FORGE - VR-Based Industrial Training System",
    description:
      "Developed a VR-based industrial maintenance training system for hydraulic cylinder servicing on Meta Quest 3, featuring a photorealistic environment created in Blender and immersive interactions built with Unity XR.",
    role: "Blender environment, Unity XR interactions and scripting",
    impact: [
      "Modeled a hydraulic cylinder workshop with over 407 objects using high-quality PBR materials",
      "Implemented immersive XR interaction workflows using Unity XR Toolkit, OpenXR, and Meta XR SDK",
      "Developed and completed the project during the ProtoSem program at FORGE Innovation & Ventures",
      "Designed to provide realistic, hands-on industrial maintenance training in a virtual environment",
    ],
    tags: ["Completed", "Blender", "Unity XR", "Meta Quest 3", "OpenXR"],
    image: "/projects/forge-current-build-2026.jpg",
    link: "",
  },
  {
    title: "Disaster Management Drone",
    description:
      "A multi-role UAV concept with Edge AI target recognition and disaster payload drop capability for emergency response missions.",
    role: "Embedded systems, AI integration and mechanical design",
    impact: [
      "Achieved AIR 3 in Aerothon 2025 Phase-1 technical report among 89 teams",
      "Designed OICC and disaster payload drop concepts for national finals",
      "Combined AI vision, UAV architecture and mechanical payload mechanisms",
    ],
    tags: ["UAV", "Edge AI", "Payload Drop", "Embedded"],
    image: "/projects/disaster-drone-field-photo.jpg",
    link: "",
  },
  {
    title: "Delivery Drone",
    description:
      "An autonomous delivery UAV focused on frame design, flight controller tuning and reliable payload handling.",
    role: "Team captain overseeing the complete project lifecycle",
    impact: [
      "Led end-to-end build planning from frame design to payload mechanism",
      "Coordinated flight controller tuning and system validation",
      "Balanced mechanical design, embedded setup and mission requirements",
    ],
    tags: ["Autonomous UAV", "Flight Tuning", "Payload", "Team Lead"],
    image: "/projects/delivery-drone-field-photo.jpg",
    link: "",
  },
  {
    title: "Agriculture Drone",
    description:
      "A precision agriculture UAV concept for variable-rate spraying and GPS-based field mapping.",
    role: "UAV system design and agricultural mission planning",
    impact: [
      "Designed around variable-rate spraying for efficient field coverage",
      "Mapped GPS-driven mission requirements for agricultural use cases",
      "Focused on practical field operation, maintainability and payload control",
    ],
    tags: ["Agritech", "GPS Mapping", "Spraying", "UAV"],
    image: "/projects/agriculture-drone-field-photo.jpg",
    link: "",
  },
] as const;

export const EXPERIENCE_ITEMS = [
  {
    title: "Product Developer",
    company: "PROTOSEM Innovation Engineers",
    period: "Jan 2026 - Jun 2026",
    detail:
      "Completed FORGE, a VR-based industrial maintenance training system for Meta Quest 3 through the PROTOSEM product innovation program at Kumaraguru College of Technology, Coimbatore.",
  },
  {
    title: "Education",
    company: "Kumaraguru College of Technology",
    period: "2023 - 2027",
    detail:
      "B.E. Mechatronics Engineering with 7.5 CGPA, focused on UAV systems, embedded electronics, design, manufacturing and VR development.",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Aerothon 2025 - AIR 3 and Special Recognition",
    detail:
      "All-India Rank 3 in Phase-1 technical report among 89 teams, with special recognition for OICC and Disaster Payload Drop.",
    year: "Nov 2025",
  },
  {
    title: "Smart India Hackathon 2025 - National Finalist",
    detail:
      "Top 6 finalist team for Namami Gange Smart River Water Quality UAV Surveillance System. Role: Vice Captain.",
    year: "Dec 2025",
  },
  {
    title: "Leadership and Volunteerism Award - KCT RIDE Awards",
    detail:
      "Recognized for contribution to Robotics and Automation Club during the 2024-25 academic year.",
    year: "May 2025",
  },
  {
    title: "1st Place - Ideathon, Aeromodelling Club KCT",
    detail:
      "Best UAV Design award for VTOL Long Endurance concept as design and concept lead.",
    year: "Dec 2024",
  },
  {
    title: "Runner-Up - ROBO MANIA",
    detail:
      "Runner-up in Speed Trial and Tug of War events at KCT as Team Captain.",
    year: "Feb 2025",
  },
] as const;

export const LEADERSHIP = [
  "President, Robotics and Automation Club - 2025-26",
  "Embedded Lead, Robotics and Automation Club - 2024-25",
  "Tech Support Executive, Mechatronics Department - 2024-25",
  "Visual Design Lead, Aeromodelling Club - 2024-25",
  "Technical Member, Aeromodelling Club - 2023-24",
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: PROFILE.github,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: PROFILE.linkedIn,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `mailto:${PROFILE.email}`,
  },
  {
    name: "Resume",
    icon: FaFilePdf,
    link: PROFILE.resume,
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: PROFILE.email,
        icon: FaEnvelope,
        link: `mailto:${PROFILE.email}`,
      },
      {
        name: PROFILE.phone,
        icon: FaPhoneAlt,
        link: `tel:${PROFILE.phone}`,
      },
      {
        name: PROFILE.location,
        icon: FaMapMarkerAlt,
        link: "#about-me",
      },
    ],
  },
  {
    title: "Portfolio",
    data: [
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Achievements",
        icon: null,
        link: "#achievements",
      },
      {
        name: "Resume PDF",
        icon: FaFilePdf,
        link: PROFILE.resume,
      },
    ],
  },
  {
    title: "Profiles",
    data: [
      {
        name: "GitHub",
        icon: FaGithub,
        link: PROFILE.github,
      },
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: PROFILE.linkedIn,
      },
      {
        name: "Email Me",
        icon: FaEnvelope,
        link: `mailto:${PROFILE.email}`,
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
] as const;

export const LINKS = {
  resume: PROFILE.resume,
};
