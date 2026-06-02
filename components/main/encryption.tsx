import Image from "next/image";

import { EXPERIENCE_ITEMS, PROFILE } from "@/constants";
import { publicAsset } from "@/utils/public-asset";

export const Encryption = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="absolute inset-0 -z-20 flex items-center justify-center opacity-25">
        <video loop muted autoPlay playsInline preload="false" className="w-full">
          <source
            src={publicAsset("/videos/encryption-bg.webm")}
            type="video/webm"
          />
        </video>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="Welcome-box border border-[#00f0ff7a] px-[12px] py-[7px] text-[13px] opacity-[0.95]">
            <span className="Welcome-text">Experience</span>
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Product development for industrial training and UAV missions.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
            {PROFILE.name} combines mechanical design, embedded systems, AI
            vision and XR workflows to move ideas from CAD and PCB design into
            working prototypes.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {EXPERIENCE_ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-100">
                      {item.company}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-amber-200/30 px-3 py-1 text-xs font-semibold text-amber-100">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-cyan-300/20 bg-[#040217] shadow-2xl shadow-cyan-950/40">
            <Image
              src={publicAsset("/projects/disaster-drone-field-photo.jpg")}
              alt="Disaster management drone in flight"
              width={1200}
              height={720}
              className="aspect-video w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">
                Featured UAV Project
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Disaster Management Drone
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                A multi-role UAV with Edge AI target recognition and disaster
                payload drop capability, ranked AIR 3 in Aerothon 2025 Phase-1
                among 89 national teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
