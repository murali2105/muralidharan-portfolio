import Link from "next/link";

import { FOOTER_DATA, PROFILE } from "@/constants";

const getExternalProps = (href: string) =>
  href.startsWith("http") || href.startsWith("/resume")
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

export const Footer = () => {
  return (
    <footer className="h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="flex h-full w-full flex-row flex-wrap items-start justify-around gap-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex h-auto min-w-[220px] flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  {...getExternalProps(link)}
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="ml-[6px] text-center text-[15px]">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {PROFILE.name} {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
