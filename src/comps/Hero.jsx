import { hero, clients, theme } from "../constants";
import About from "./About";
import Cards from "./Cards";
import Cta from "./Cta";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 90, delay = 400 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id;
    const start = setTimeout(() => {
      id = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(id);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [text, speed, delay]);

  return (
    <>
      <span aria-label={text}>{text.slice(0, count)}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.8em] w-[0.06em] translate-y-[0.05em] animate-pulse bg-current align-baseline"
      />
    </>
  );
};
// Footer

const Hero = () => {
  const loop = [...clients, ...clients];

  return (
    <>
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
          <h1 className="text-center font-display text-[clamp(3.9rem,8vw,6rem)] leading-none uppercase">
            <Typewriter text={hero.headline} />
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
      <About />
      <Cards />
      <Cta />
      <Footer />
    </>
  );
};

export default Hero;
