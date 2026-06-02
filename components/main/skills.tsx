import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { SKILL_GROUPS } from "@/constants";
import { publicAsset } from "@/utils/public-asset";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden px-6 py-20 sm:px-10"
    >
      <SkillText />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <div key={group.title}>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
              {group.title}
            </h3>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              {group.skills.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  name={skill.skill_name}
                  index={groupIndex * 5 + i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src={publicAsset("/videos/skills-bg.webm")} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
