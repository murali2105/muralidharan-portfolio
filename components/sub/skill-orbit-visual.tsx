"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { GiDeliveryDrone, GiProcessor } from "react-icons/gi";
import { MdMemory } from "react-icons/md";
import {
  SiArduino,
  SiAutodesk,
  SiBlender,
  SiUnity,
  SiYolo,
} from "react-icons/si";

type OrbitSkill = {
  name: string;
  label: string;
  Icon: IconType;
  className: string;
  tone: string;
};

const ORBIT_SKILLS: OrbitSkill[] = [
  {
    name: "UAV",
    label: "Systems",
    Icon: GiDeliveryDrone,
    className: "left-[18%] top-[18%]",
    tone: "border-cyan-300/45 text-cyan-100",
  },
  {
    name: "Robotics",
    label: "Automation",
    Icon: FaRobot,
    className: "left-[50%] top-[10%]",
    tone: "border-emerald-300/45 text-emerald-100",
  },
  {
    name: "PCB",
    label: "Design",
    Icon: FaMicrochip,
    className: "left-[82%] top-[22%]",
    tone: "border-amber-200/45 text-amber-100",
  },
  {
    name: "Arduino C",
    label: "Embedded",
    Icon: SiArduino,
    className: "left-[18%] top-[48%]",
    tone: "border-cyan-300/45 text-cyan-100",
  },
  {
    name: "Fusion 360",
    label: "CAD",
    Icon: SiAutodesk,
    className: "left-[36%] top-[37%]",
    tone: "border-amber-200/45 text-amber-100",
  },
  {
    name: "Blender",
    label: "3D / PBR",
    Icon: SiBlender,
    className: "left-[59%] top-[45%]",
    tone: "border-orange-300/45 text-orange-100",
  },
  {
    name: "Unity XR",
    label: "OpenXR",
    Icon: SiUnity,
    className: "left-[79%] top-[59%]",
    tone: "border-sky-300/45 text-sky-100",
  },
  {
    name: "Python",
    label: "Tools",
    Icon: FaPython,
    className: "left-[24%] top-[72%]",
    tone: "border-sky-300/45 text-sky-100",
  },
  {
    name: "Edge AI",
    label: "Vision",
    Icon: GiProcessor,
    className: "left-[52%] top-[77%]",
    tone: "border-emerald-300/45 text-emerald-100",
  },
  {
    name: "YOLO",
    label: "Detection",
    Icon: SiYolo,
    className: "left-[73%] top-[83%]",
    tone: "border-cyan-300/45 text-cyan-100",
  },
];

export const SkillOrbitVisual = () => {
  return (
    <div className="relative aspect-square w-full max-w-[620px] overflow-hidden rounded-lg border border-cyan-300/20 bg-[#030014]/60 shadow-2xl shadow-cyan-950/40">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,240,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,240,255,0.06)_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
      <div className="absolute left-1/2 top-1/2 h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[132%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[132%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/50 bg-[#030014] text-center shadow-lg shadow-cyan-950/50"
      >
        <MdMemory className="h-9 w-9 text-cyan-200" aria-hidden="true" />
        <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          Prototype
        </span>
      </motion.div>

      {ORBIT_SKILLS.map(({ name, label, Icon, className, tone }, index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * index, duration: 0.35 }}
          className={`absolute ${className} flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border bg-white/[0.06] text-center shadow-lg shadow-black/25 backdrop-blur-md ${tone}`}
        >
          <Icon className="h-8 w-8" aria-hidden="true" />
          <span className="mt-2 text-sm font-semibold leading-4 text-white">
            {name}
          </span>
          <span className="mt-1 text-[10px] uppercase leading-3 tracking-[0.18em] text-gray-300">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
