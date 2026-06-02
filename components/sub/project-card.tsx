import Image from "next/image";

import { publicAsset } from "@/utils/public-asset";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  role: string;
  impact: readonly string[];
  tags: readonly string[];
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  role,
  impact,
  tags,
  link,
}: ProjectCardProps) => {
  const content = (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-cyan-300/20 bg-[#05031a]/85 shadow-lg shadow-cyan-950/30">
      <Image
        src={publicAsset(src)}
        alt={title}
        width={1000}
        height={600}
        className="aspect-video w-full object-cover"
      />

      <div className="relative flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm font-medium text-amber-100">{role}</p>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            {description}
          </p>
        </div>

        <ul className="flex flex-col gap-2 text-sm leading-6 text-gray-300">
          {impact.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  if (!link) {
    return content;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  );
};
