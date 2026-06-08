"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import {
  GiArtificialIntelligence,
  GiDeliveryDrone,
} from "react-icons/gi";
import { MdHub } from "react-icons/md";
import {
  SiArduino,
  SiAutodesk,
  SiBlender,
  SiPython,
  SiUnity,
  SiYolo,
} from "react-icons/si";

type Accent = "cyan" | "mint" | "amber" | "blue";

type SkillNode = {
  label: string;
  caption: string;
  icon: IconType;
  position: string;
  accent: Accent;
};

const accentStyles: Record<Accent, { card: string; icon: string; glow: string }> =
  {
    cyan: {
      card: "border-cyan-300/55 shadow-cyan-500/20",
      icon: "text-cyan-100",
      glow: "bg-cyan-300/20",
    },
    mint: {
      card: "border-emerald-300/55 shadow-emerald-500/20",
      icon: "text-emerald-100",
      glow: "bg-emerald-300/20",
    },
    amber: {
      card: "border-amber-200/55 shadow-amber-500/20",
      icon: "text-amber-100",
      glow: "bg-amber-200/20",
    },
    blue: {
      card: "border-sky-300/55 shadow-sky-500/20",
      icon: "text-sky-100",
      glow: "bg-sky-300/20",
    },
  };

const skillNodes: SkillNode[] = [
  {
    label: "UAV",
    caption: "Systems",
    icon: GiDeliveryDrone,
    position: "left-[18%] top-[20%]",
    accent: "cyan",
  },
  {
    label: "Robotics",
    caption: "Automation",
    icon: FaRobot,
    position: "left-1/2 top-[14%]",
    accent: "mint",
  },
  {
    label: "PCB",
    caption: "Design",
    icon: FaMicrochip,
    position: "left-[76%] top-[25%] sm:left-[82%] sm:top-[23%]",
    accent: "amber",
  },
  {
    label: "Fusion 360",
    caption: "CAD",
    icon: SiAutodesk,
    position: "left-[32%] top-[38%]",
    accent: "amber",
  },
  {
    label: "Blender",
    caption: "3D / PBR",
    icon: SiBlender,
    position: "left-[64%] top-[39%]",
    accent: "amber",
  },
  {
    label: "Arduino C",
    caption: "Embedded",
    icon: SiArduino,
    position: "left-[76%] top-[57%] sm:left-[82%] sm:top-[55%]",
    accent: "cyan",
  },
  {
    label: "Edge AI",
    caption: "Vision",
    icon: GiArtificialIntelligence,
    position: "left-[23%] top-[61%]",
    accent: "mint",
  },
  {
    label: "YOLO",
    caption: "Detection",
    icon: SiYolo,
    position: "left-[55%] top-[74%]",
    accent: "cyan",
  },
  {
    label: "Python",
    caption: "Tools",
    icon: SiPython,
    position: "left-[74%] top-[80%] sm:left-[79%] sm:top-[80%]",
    accent: "blue",
  },
  {
    label: "Unity XR",
    caption: "OpenXR",
    icon: SiUnity,
    position: "left-[21%] top-[83%]",
    accent: "blue",
  },
];

const connectorPaths = [
  "M18 20 C28 30 38 36 50 50",
  "M50 14 C49 26 49 37 50 50",
  "M82 23 C72 31 61 39 50 50",
  "M32 38 C39 42 45 46 50 50",
  "M64 39 C60 43 55 47 50 50",
  "M82 55 C72 53 61 52 50 50",
  "M23 61 C34 57 43 53 50 50",
  "M55 74 C53 66 51 57 50 50",
  "M79 80 C69 70 58 59 50 50",
  "M21 83 C31 70 41 59 50 50",
];

export const SkillOrbitVisual = () => {
  return (
    <div className="relative aspect-square w-full max-w-[560px] overflow-visible">
      <div className="absolute inset-8 rounded-full bg-cyan-300/5 blur-3xl" />
      <div className="absolute inset-8 rounded-full border border-white/30" />
      <div className="absolute inset-[22%] rounded-full border border-cyan-200/30" />
      <div className="absolute inset-[34%] rounded-full border border-white/15" />

      <motion.svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <defs>
          <linearGradient id="skill-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.25" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        {connectorPaths.map((path) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke="url(#skill-line)"
            strokeLinecap="round"
            strokeWidth="0.45"
          />
        ))}
        <path
          d="M17 62 C27 36 68 28 84 55 C90 72 72 88 51 75 C31 87 10 79 17 62Z"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.34"
        />
      </motion.svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-cyan-300/70 bg-[#020817]/70 text-center shadow-[0_0_45px_rgba(34,211,238,0.28)] backdrop-blur-md sm:h-28 sm:w-28"
        initial={{ opacity: 0, scale: 0.75, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.55, delay: 0.35 }}
      >
        <MdHub className="h-7 w-7 text-cyan-100 sm:h-9 sm:w-9" />
        <span className="mt-1.5 text-[10px] font-bold uppercase text-cyan-100 sm:mt-2 sm:text-xs">
          Prototype
        </span>
      </motion.div>

      {skillNodes.map((node, index) => {
        const Icon = node.icon;
        const accent = accentStyles[node.accent];

        return (
          <motion.div
            key={node.label}
            className={`${node.position} ${accent.card} absolute z-20 flex h-16 w-16 flex-col items-center justify-center rounded-lg border bg-[#020817]/55 p-1.5 text-center shadow-lg backdrop-blur-md sm:h-[88px] sm:w-[88px] sm:p-2`}
            initial={{
              opacity: 0,
              scale: 0.7,
              x: "-50%",
              y: "calc(-50% + 12px)",
            }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.45, delay: 0.48 + index * 0.045 }}
          >
            <span
              className={`${accent.glow} absolute inset-3 rounded-full blur-xl`}
            />
            <Icon
              className={`${accent.icon} relative mb-1 h-5 w-5 sm:h-7 sm:w-7`}
            />
            <span className="relative text-[9px] font-bold leading-tight text-white sm:text-[12px]">
              {node.label}
            </span>
            <span className="relative mt-0.5 hidden text-[9px] uppercase leading-none text-gray-300 sm:block">
              {node.caption}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
