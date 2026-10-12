import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav, theme } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
      <img
        src={nav.logo.src}
        alt={nav.logo.alt}
        className="h-10 w-auto sm:h-12"
      />

      {/* Desktop */}
      <div className="hidden items-center gap-8 xl:gap-12 lg:flex">
        {nav.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-center gap-1.5 text-base md:text-sm font-medium transition hover:opacity-60"
          >
            {l.label}
            {l.dropdown && <ChevronDown size={14} fill="currentColor" />}
          </a>
        ))}
      </div>

      <a
        href={nav.cta.href}
        // style={{ borderColor: theme.accent }}
        // className="hidden rounded-full border-[7px] bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 lg:block"
        className="hidden md:flex border rounded-lg  px-8 py-2.5"
      >
        {nav.cta.label}
      </a>

      {/* Mobile toggle */}
      <button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-5 bg-black/90 px-6 py-6 backdrop-blur lg:hidden">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} className="text-lg font-medium">
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            style={{ borderColor: theme.accent }}
            className="rounded-full border-[6px] bg-black px-5 py-3 text-center text-xs font-semibold"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
