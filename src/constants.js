import kenwood from "./logo/kenwood-logo.svg";
import playstation from "./logo/playstation-4.svg";
import linkedin from "./logo/linkedin-icon-2.svg";
import honda from "./logo/honda-11.svg";
import metallica from "./logo/metallica.svg";
import metaQuest from "./logo/meta-quest-1.svg";
import meta from "./logo/meta-3.svg";

export const hero = {
  video: "/hero.mp4", // put in public/, black & white loop
  poster: "/hero-poster.jpg",
  headline: "Welcome to the 1%",
};

export const nav = {
  logo: { src: "/logo.svg", alt: "Pressure Cooker Studios" },
  links: [
    { label: "About Us", href: "#" },
    { label: "Our Games", href: "#", dropdown: true },
    { label: "Latest News", href: "#" },
    { label: "Join us", href: "#" },
    // { label: "word", href: "#" },
    // { label: "music catalogue", href: "#" },
  ],
  cta: { label: "LET'S BUILD", href: "#" },
};


export const clients = [
  { name: "Kenwood", src: kenwood, h: "h-5" },
  { name: "PlayStation", src: playstation, h: "h-5" },
  { name: "Meta Quest", src: metaQuest, h: "h-5" },
  { name: "Meta", src: meta, h: "h-5" },
];

export const theme = {
  accent: "#FFEB00", // CTA yellow
  text: "#F5F5F7",
};
