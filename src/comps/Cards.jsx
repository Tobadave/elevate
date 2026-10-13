import { useEffect, useRef, useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { projects, course } from "../constants";

// Fallback gradients while placeholder images don't exist
const fallbacks = [
  "linear-gradient(160deg,#1a0ee6,#111)",
  "linear-gradient(160deg,#FF4D00,#1a1a1a)",
  "linear-gradient(160deg,#0f766e,#111)",
];

// Scroll reveal
const Reveal = ({ children, delay = 0, x = 0, className = "" }) => {
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "none" : `translate3d(${x}px, 40px, 0)`,
      }}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        shown ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ProjectCard = ({ item, index }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle images
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % item.images.length),
      3500,
    );
    return () => clearInterval(id);
  }, [paused, item.images.length]);

  return (
    <Reveal delay={index * 150}>
      <article
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="group h-full bg-white p-3 rounded-sm shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-400/30"
      >
        {/* Image area */}
        <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-neutral-900">
          {item.images.map((src, i) => (
            <div
              key={src}
              style={{
                backgroundImage: `url(${src}), ${fallbacks[index % 3]}`,
              }}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/30" />

          {/* Tags + rating */}
          <div className="absolute inset-x-4 top-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-white">
              <Star size={13} fill="currentColor" />
              {item.rating}
            </span>
          </div>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
            {item.images.map((_, i) => (
              <button
                key={i}
                aria-label={`Image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-2 pb-1 pt-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-tight text-neutral-900">
              {item.title}
            </h3>
            <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700">
              {item.badge}
            </span>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
            {item.description}
          </p>

          <p className="mt-4 text-sm font-semibold text-neutral-900">
            {item.studio}
          </p>

          <a
            href={item.href}
            className="mt-5 block rounded-sm bg-black py-3.5 text-center text-sm font-medium text-white transition duration-300 hover:bg-green-600"
          >
            {item.cta}
          </a>
        </div>
      </article>
    </Reveal>
  );
};

const Cards = () => (
  <>
    <section className="bg-[#d9d9d9] px-4 py-16 sm:px-6 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {projects.title}
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            {projects.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.items.map((item, i) => (
            <ProjectCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <Reveal delay={200} className="flex justify-center">
        <a
          href="#"
          className="group mt-8 flex w-fit items-center gap-2 text-xl font-medium transition-colors hover:text-blue-600 sm:text-base md:mt-12 md:text-sm"
        >
          See more of our projects
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </Reveal>
    </section>

    {/* Learn XR Course */}
    <div className="bg-white px-4 py-16 sm:px-10 sm:py-20 lg:py-24 lg:mb-0">
      <div className="mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <Reveal x={-40}>
          <div
            style={{
              backgroundImage: `url(${course.image}), linear-gradient(160deg,#c9c9c9,#8d8d8d)`,
            }}
            className="aspect-4/3 w-full rounded-lg bg-cover bg-center"
          />
        </Reveal>

        {/* Content */}
        <Reveal x={40} delay={150}>
          <h2 className="text-2xl leading-tight tracking-tight text-[#12302d] sm:text-[28px]">
            <span className="font-bold">{course.boldTitle}</span>
            <span className="font-medium">{course.title}</span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-[#12302d]/80">
            {course.text}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="cursor-pointer rounded-lg border border-[#12302d]/40 px-6 py-2.5 md:py-3 text-sm font-medium text-[#12302d] transition duration-300 hover:-translate-y-0.5 hover:border-[#12302d]">
              {course.secondary}
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  </>
);

export default Cards;
