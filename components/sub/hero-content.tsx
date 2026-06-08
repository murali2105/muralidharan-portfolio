"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { HERO_STATS, PROFILE } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SkillOrbitVisual } from "@/components/sub/skill-orbit-visual";
import { publicAsset } from "@/utils/public-asset";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] flex w-full flex-col items-center justify-center gap-10 px-6 pb-12 pt-24 sm:px-10 lg:mt-6 lg:flex-row lg:px-20 lg:pt-24"
    >
      <div className="flex h-full w-full max-w-3xl flex-col justify-center gap-4 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#00f0ff7a] px-[7px] py-[8px] opacity-[0.95]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#8fffd2]" />
          <h1 className="Welcome-text text-[13px]">
            {PROFILE.role} - UAV and Robotics
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-2 flex h-auto w-auto max-w-[720px] flex-col gap-4 text-white"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="max-w-[680px] bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 bg-clip-text text-xl font-semibold leading-snug text-transparent sm:text-3xl lg:text-4xl">
            Building UAVs, robotics systems and immersive VR training tools.
          </p>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="max-w-[700px] text-sm leading-7 text-gray-300 sm:text-base lg:text-[17px]"
        >
          {PROFILE.objective}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="button-primary rounded-lg px-6 py-3 text-center text-sm font-semibold text-white"
          >
            View Projects
          </a>
          <a
            href={publicAsset(PROFILE.resume)}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg border border-cyan-300/40 px-6 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-amber-200/70 hover:text-amber-100"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.1)}
          className="grid max-w-[680px] grid-cols-2 gap-3 pt-3 md:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-xs leading-5 text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full max-w-2xl items-center justify-center"
      >
        <SkillOrbitVisual />
      </motion.div>
    </motion.div>
  );
};
