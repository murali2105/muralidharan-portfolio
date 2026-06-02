import type { IconType } from "react-icons";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { GiDeliveryDrone, GiProcessor, GiSolderingIron } from "react-icons/gi";
import { MdPrecisionManufacturing, MdViewInAr } from "react-icons/md";
import {
  SiArduino,
  SiAutodesk,
  SiBlender,
  SiUnity,
  SiYolo,
} from "react-icons/si";

type OrbitSkill = {
  label: string;
  subtitle: string;
  icon: IconType;
  x: number;
  y: number;
  accent: string;
};

const ORBIT_SKILLS: OrbitSkill[] = [
  {
    label: "UAV",
    subtitle: "Systems",
    icon: GiDeliveryDrone,
    x: 18,
    y: 16,
    accent: "text-cyan-200 border-cyan-300/60",
  },
  {
    label: "Robotics",
    subtitle: "Automation",
    icon: FaRobot,
    x: 50,
    y: 12,
    accent: "text-emerald-200 border-emerald-300/60",
  },
  {
    label: "PCB",
    subtitle: "Design",
    icon: FaMicrochip,
    x: 80,
    y: 22,
    accent: "text-amber-100 border-amber-200/60",
  },
  {
    label: "Arduino C",
    subtitle: "Embedded",
    icon: SiArduino,
    x: 19,
    y: 40,
    accent: "text-cyan-200 border-cyan-300/60",
  },
  {
    label: "Fusion 360",
    subtitle: "CAD",
    icon: SiAutodesk,
    x: 37,
    y: 33,
    accent: "text-amber-100 border-amber-200/60",
  },
  {
    label: "Blender",
    subtitle: "3D / PBR",
    icon: SiBlender,
    x: 58,
    y: 39,
    accent: "text-orange-200 border-orange-300/60",
  },
  {
    label: "Unity XR",
    subtitle: "OpenXR",
    icon: SiUnity,
    x: 79,
    y: 52,
    accent: "text-sky-200 border-sky-300/60",
  },
  {
    label: "Python",
    subtitle: "Tools",
    icon: FaPython,
    x: 27,
    y: 68,
    accent: "text-sky-200 border-sky-300/60",
  },
  {
    label: "Edge AI",
    subtitle: "Vision",
    icon: GiProcessor,
    x: 50,
    y: 71,
    accent: "text-emerald-200 border-emerald-300/60",
  },
  {
    label: "YOLO",
    subtitle: "Detection",
    icon: SiYolo,
    x: 70,
    y: 75,
    accent: "text-cyan-200 border-cyan-300/60",
  },
  {
    label: "Fabrication",
    subtitle: "Build",
    icon: MdPrecisionManufacturing,
    x: 40,
    y: 88,
    accent: "text-amber-100 border-amber-200/60",
  },
  {
    label: "Soldering",
    subtitle: "Electronics",
    icon: GiSolderingIron,
    x: 62,
    y: 91,
    accent: "text-orange-200 border-orange-300/60",
  },
];

export const SkillOrbit = () => {
  return (
    <div className="relative mx-auto h-[720px] w-full max-w-[920px] overflow-hidden rounded-lg border border-cyan-300/15 bg-[#05031a]/70 shadow-2xl shadow-cyan-950/30 sm:h-[780px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.18),transparent_33%),radial-gradient(circle_at_18%_10%,rgba(253,230,138,0.12),transparent_25%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.18)_1px,transparent_1px)] [background-size:110px_110px]" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/12" />
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/18" />
      <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-px -translate-x-1/2 -translate-y-1/2 bg-cyan-200/10" />
      <div className="absolute left-1/2 top-1/2 h-px w-[920px] -translate-x-1/2 -translate-y-1/2 bg-cyan-200/10" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cyan-200/10" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-cyan-200/10" />

      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/35 bg-[#030014]/80 text-center shadow-lg shadow-cyan-950/30">
        <MdViewInAr className="h-9 w-9 text-cyan-200" aria-hidden="true" />
        <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          Prototype
        </span>
      </div>

      {ORBIT_SKILLS.map(({ label, subtitle, icon: Icon, x, y, accent }) => (
        <div
          key={label}
          className={`absolute flex h-[96px] w-[106px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border bg-white/[0.06] p-3 text-center shadow-lg shadow-black/30 backdrop-blur-md ${accent}`}
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon className="h-8 w-8" aria-hidden="true" />
          <span className="mt-2 text-[13px] font-semibold leading-4 text-white">
            {label}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-300">
            {subtitle}
          </span>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 flex-wrap justify-center gap-2">
        {["Welding", "EV Assembly", "Drone Piloting", "PC Servicing"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-cyan-100"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  );
};
