import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { projects } from "../constants";

// Fallback gradients while placeholder images don't exist
const fallbacks = [
  "linear-gradient(160deg,#1a0ee6,#111)",
  "linear-gradient(160deg,#FF4D00,#1a1a1a)",
  "linear-gradient(160deg,#0f766e,#111)",
];

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
    <article
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group animate-fade-up bg-white p-3 rounded-sm shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-400/30"
    >
      {/* Image area */}
      <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-neutral-900">
        {item.images.map((src, i) => (
          <div
            key={src}
            style={{ backgroundImage: `url(${src}), ${fallbacks[index % 3]}` }}
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
  );
};

const Cards = () => (
  <section className="bg-[#d9d9d9] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl animate-fade-up text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {projects.title}
        </h2>
        <p className="mt-4 text-sm text-neutral-600 sm:text-base">
          {projects.subtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.items.map((item, i) => (
          <ProjectCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Cards;
