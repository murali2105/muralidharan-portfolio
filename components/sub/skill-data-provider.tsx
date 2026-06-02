"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaMicrochip, FaPlane, FaRobot, FaTools } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { GiDeliveryDrone, GiProcessor, GiSolderingIron } from "react-icons/gi";
import {
  MdAgriculture,
  MdBuild,
  MdComputer,
  MdMemory,
  MdModelTraining,
  MdPrecisionManufacturing,
  MdViewInAr,
} from "react-icons/md";
import {
  SiArduino,
  SiAutodesk,
  SiBlender,
  SiOpencv,
  SiUnity,
  SiYolo,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  name: string;
  index: number;
};

const ICONS: Record<string, IconType> = {
  "UAV Systems": GiDeliveryDrone,
  Robotics: FaRobot,
  "PCB Design": FaMicrochip,
  "Arduino C": SiArduino,
  "Fusion 360": SiAutodesk,
  Blender: SiBlender,
  "3D Print": MdViewInAr,
  "Unity XR": SiUnity,
  Python: FaPython,
  "Edge AI": GiProcessor,
  "YOLO Vision": SiYolo,
  RVC: SiOpencv,
  Welding: MdBuild,
  Fabrication: MdPrecisionManufacturing,
  Soldering: GiSolderingIron,
  "EV Assembly": MdMemory,
  "Drone Piloting": FaPlane,
  "PC Servicing": MdComputer,
  Leadership: MdModelTraining,
};

const ACCENTS = [
  "from-cyan-300 to-emerald-300",
  "from-emerald-300 to-amber-200",
  "from-sky-300 to-cyan-200",
  "from-amber-200 to-orange-300",
];

export const SkillDataProvider = ({ name, index }: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const Icon = ICONS[name] ?? FaTools;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="group flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-[#05031a]/80 p-4 shadow-lg shadow-cyan-950/20 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-[#030014] shadow-lg shadow-cyan-950/30`}
      >
        <Icon className="h-8 w-8" aria-hidden="true" />
      </div>
      <span className="min-h-10 text-center text-sm leading-5 text-gray-200">
        {name}
      </span>
    </motion.div>
  );
};
