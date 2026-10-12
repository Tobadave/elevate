import { useEffect, useRef, useState } from "react";

export const WindowDots = () => (
  <div className="mb-3 flex items-center gap-1.5">
    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
  </div>
);

export const PrimaryBtn = ({ children, ...props }) => (
  <button
    className="rounded-full bg-neutral-900 px-7 py-3 font-semibold text-white transition hover:bg-neutral-700"
    {...props}
  >
    {children}
  </button>
);

export const SecondaryBtn = ({ children, ...props }) => (
  <button
    className="hover:cursor-pointer rounded-full bg-neutral-100 px-7 py-3 font-semibold transition hover:bg-neutral-200"
    {...props}
  >
    {children}
  </button>
);

export const CountUp = ({ value, duration = 2000 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  // Split "100%" → prefix "", number 100, suffix "%"
  const match = String(value).match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const end = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    let raf;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        setDisplay(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect(); // remove this line to replay on every scroll-in
        }
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};
