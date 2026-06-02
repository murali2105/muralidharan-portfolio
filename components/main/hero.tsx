import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="about-me"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-[-220px] -z-20 h-full w-full rotate-180 object-cover opacity-80"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </section>
  );
};
