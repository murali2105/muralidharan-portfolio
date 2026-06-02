"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#00f0ff7a] px-[7px] py-[8px] opacity-[0.95]"
      >
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#8fffd2]" />
        <span className="Welcome-text text-[13px]">
          Engineering Stack
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] font-medium text-white"
      >
        Hardware, AI, design and XR skills for real prototypes.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="mb-10 mt-[10px] max-w-3xl text-center text-[18px] leading-8 text-gray-300"
      >
        Hands-on across drone assembly and piloting, PCB design, embedded
        programming, Blender/Fusion 360 modeling, Unity XR and fabrication.
      </motion.div>
    </div>
  );
};
