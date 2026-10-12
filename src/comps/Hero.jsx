import { hero, clients, theme } from "../constants";
import Navbar from "./Navbar";

const Hero = () => {
  const loop = [...clients, ...clients];

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0b0e10] font-body text-[#F5F5F7]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={hero.poster}
        className="absolute inset-0 h-full w-full object-cover grayscale"
      >
        <source src={hero.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />

      <Navbar />

      {/* Headline */}
      <div className="relative flex flex-1 items-center justify-center px-6">
        <h1 className="animate-fade-up text-center font-display text-[clamp(2.7rem,8vw,6rem)] leading-none tracking-tight uppercase">
          {/* text-clamp[(2.25rem, 8vw, 7rem)] // text-clamp([2.25])1 */}
          {hero.headline}
        </h1>
      </div>

      {/* Client logos */}
      <div className="relative overflow-hidden pb-10 pt-6 sm:pb-14">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 sm:gap-24 sm:pr-24 lg:gap-32 lg:pr-32">
          {loop.map((c, i) => (
            <img
              key={i}
              src={c.src}
              alt={c.name}
              className={`${c.h} w-auto shrink-0 brightness-0 invert opacity-90`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
