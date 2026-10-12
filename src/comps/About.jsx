import { useEffect, useRef, useState } from "react";
import { about } from "../constants";
import { CountUp } from "../assets/components";

// Scroll-triggered fade-up
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Divider line that draws itself on scroll
const Line = () => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 1 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-px w-full origin-left bg-neutral-200 transition-transform duration-[1400ms] ease-out ${
        shown ? "scale-x-100" : "scale-x-0"
      }`}
    />
  );
};

const About = () => {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  // Glow drifts with scroll
  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = sectionRef.current.getBoundingClientRect();
        const y = Math.max(-200, Math.min(400, -r.top * 0.35));
        glowRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-neutral-900"
    >
      {/* Neon green glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#39FF14]/40 blur-[90px] will-change-transform sm:left-10 sm:h-96 sm:w-96 lg:left-24"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Title */}
        <Reveal className="pb-8 pt-20 sm:pb-12 sm:pt-28 lg:pt-36">
          <h2 className="text-[clamp(3.5rem,13vw,8rem)] font-medium leading-none tracking-tighter">
            {about.title}
          </h2>
        </Reveal>
        <Line />
      </div>

      {/* Tagline band (full-bleed lines) */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid md:grid-cols-2 md:gap-16">
          <Reveal delay={150} className="md:col-start-2">
            <p className="max-w-xl text-2xl font-normal leading-tight tracking-tight sm:text-3xl">
              {about.tagline}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:pb-36">
        {/* Two columns */}
        
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:px-0">
          {/* left hand side */}
          <Reveal>
            <p className="max-w-xs text-md leading-relaxed text-neutral-600">
              {about.left}
            </p>
          </Reveal>

          {/* right hand side */}
          <Reveal delay={150} className="">
            <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-tight">
              {about.rightTitle}
            </h3>
            <p className="mt-5 max-w-xl text-md leading-relaxed text-neutral-600 sm:mt-16">
              {about.rightText}
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 text-center sm:mt-24 md:grid-cols-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <p className="text-5xl font-medium tracking-tighter sm:text-6xl">
                <CountUp value={s.value} />
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <p className="text-sm text-neutral-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
