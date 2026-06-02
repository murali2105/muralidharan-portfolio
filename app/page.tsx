import { Achievements } from "@/components/main/achievements";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Encryption />
        <Skills />
        <Projects />
        <Achievements />
      </div>
    </main>
  );
}
