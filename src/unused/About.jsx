import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { about } from "../constants";
import { CountUp } from "../assets/components";

const About = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="bg-linear-to-b from-[#0b0e10] to-[#111] px-4 pb-16 pt-16 font-body text-white sm:px-6 sm:pt-24 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <h2 className="font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-none tracking-tight">
            {about.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base">
            {about.subtitle}
          </p>
        </div>

        {/* Video */}
        <div className="group relative mt-10 aspect-video animate-fade-up overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 [animation-delay:200ms] sm:mt-14 sm:rounded-3xl">
          <video
            ref={videoRef}
            src={about.video}
            poster={about.poster}
            loop
            playsInline
            onEnded={() => setPlaying(false)}
            onClick={toggle}
            className="h-full w-full cursor-pointer object-cover"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-500 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          />
          <button
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl bg-white text-[#FF4D00] shadow-xl transition duration-300 hover:scale-110 sm:h-16 sm:w-16 ${
              playing ? "pointer-events-none scale-75 opacity-0" : "opacity-100"
            }`}
          >
            <Play size={22} fill="currentColor" />
          </button>
        </div>

        {/* Stats */}
        <div className="relative z-10 mx-4 -mt-8 animate-fade-up rounded-2xl bg-[#1a1d1f] px-6 py-8 shadow-2xl ring-1 ring-white/10 [animation-delay:400ms] sm:mx-8 sm:-mt-12 sm:px-10 sm:py-10 lg:mx-10 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
            {about.stats.map((s) => (
              <div key={s.value}>
                <p className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-3 max-w-[14rem] text-[11px] leading-snug text-white/50 sm:text-xs">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
