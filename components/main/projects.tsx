import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-6 py-20 sm:px-10"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200">
          Projects Built Around UAVs, XR and Prototyping
        </h2>
        <p className="mt-4 text-base leading-8 text-gray-300">
          Selected work from robotics clubs, aeromodelling competitions,
          PROTOSEM product development and hands-on mechatronics builds.
        </p>
      </div>
      <div className="mt-14 grid h-full w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            role={project.role}
            impact={project.impact}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
