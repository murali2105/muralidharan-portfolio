"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, PROFILE, SOCIALS } from "@/constants";
import { publicAsset } from "@/utils/public-asset";

const getExternalProps = (href: string) =>
  href.startsWith("http") || href.startsWith("/resume")
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-[65px] w-full bg-[#03001482] px-4 shadow-lg shadow-[#002b4d]/40 backdrop-blur-md sm:px-10">
      <div className="m-auto flex h-full w-full items-center justify-between px-[10px]">
        <Link href="#about-me" className="flex items-center">
          <Image
            src={publicAsset("/logo.png")}
            alt={`${PROFILE.name} logo`}
            width={58}
            height={58}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="ml-[10px] hidden font-bold text-gray-200 md:flex">
            {PROFILE.name}
          </div>
        </Link>

        <nav className="hidden h-full w-[680px] flex-row items-center justify-between md:flex">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-cyan-300/20 bg-[rgba(3,0,20,0.45)] px-[20px] py-[10px] text-sm text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer transition hover:text-cyan-200"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.resume}
              {...getExternalProps(LINKS.resume)}
              className="cursor-pointer font-semibold text-amber-100 transition hover:text-amber-200"
            >
              Resume
            </Link>
          </div>
        </nav>

        <div className="hidden flex-row gap-5 md:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              {...getExternalProps(link)}
              key={name}
              aria-label={name}
            >
              <Icon className="h-5 w-5 text-white transition hover:text-cyan-200" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="text-2xl text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-[65px] flex w-full flex-col items-center bg-[#030014] p-5 text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer text-center transition hover:text-cyan-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.resume}
              {...getExternalProps(LINKS.resume)}
              className="cursor-pointer text-center font-semibold text-amber-100 transition hover:text-amber-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </div>

          <div className="mt-6 flex justify-center gap-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                {...getExternalProps(link)}
                key={name}
                aria-label={name}
              >
                <Icon className="h-7 w-7 text-white transition hover:text-cyan-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
