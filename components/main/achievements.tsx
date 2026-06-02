import { ACHIEVEMENTS, LEADERSHIP } from "@/constants";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 sm:px-10"
    >
      <div className="max-w-3xl">
        <span className="Welcome-box border border-[#00f0ff7a] px-[12px] py-[7px] text-[13px] opacity-[0.95]">
          <span className="Welcome-text">Achievements</span>
        </span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Competitive results backed by leadership and execution.
        </h2>
        <p className="mt-5 text-base leading-8 text-gray-300">
          National UAV competition results, SIH finalist work and club
          leadership show a pattern of building, leading and delivering in
          high-pressure technical environments.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          {ACHIEVEMENTS.map((achievement) => (
            <article
              key={achievement.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-xl font-semibold text-white">
                  {achievement.title}
                </h3>
                <span className="w-fit whitespace-nowrap rounded-full border border-amber-200/30 px-3 py-1 text-xs font-semibold text-amber-100">
                  {achievement.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                {achievement.detail}
              </p>
            </article>
          ))}
        </div>

        <aside className="rounded-lg border border-cyan-300/20 bg-[#05031a]/85 p-6">
          <h3 className="text-2xl font-semibold text-white">Leadership</h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm leading-7 text-gray-300">
            {LEADERSHIP.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
