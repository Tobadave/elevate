import kenwood from "./logo/kenwood-logo.svg";
import playstation from "./logo/playstation-4.svg";
import linkedin from "./logo/linkedin-icon-2.svg";
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
  ],
  cta: { label: "BUILD HERE", href: "#" },
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

export const projects = {
  title: "Our biggest projects",
  subtitle: "A look at the games we've shipped to players worldwide.",
  items: [
    {
      title: "Starbound Siege",
      description:
        "A co-op sci-fi shooter set aboard a failing space station. Squads of four fight to restore power before the hull gives way.",
      tags: ["Action", "Co-op"],
      rating: 4.8,
      badge: "Top Rated",
      studio: "Orion Studios",
      cta: "Play now",
      href: "#",
      images: ["/game1-a.jpg", "/game1-b.jpg", "/game1-c.jpg", "/game1-d.jpg"],
    },
    {
      title: "Echo Realms",
      description:
        "An immersive XR puzzle adventure where sound shapes the world. Explore shifting environments built for VR headsets.",
      tags: ["XR", "Puzzle"],
      rating: 4.6,
      badge: "Editor's Pick",
      studio: "Orion Studios",
      cta: "Play now",
      href: "#",
      images: ["/game2-a.jpg", "/game2-b.jpg", "/game2-c.jpg", "/game2-d.jpg"],
    },
    {
      title: "Neon Drift",
      description:
        "A fast arcade racer through rain-soaked cyber cities. Chain drifts, unlock rides, and climb the global leaderboard. Challenge your friends",
      tags: ["Racing", "Arcade"],
      rating: 4.7,
      badge: "New",
      studio: "Orion Studios",
      cta: "Play now",
      href: "#",
      images: ["/game3-a.jpg", "/game3-b.jpg", "/game3-c.jpg", "/game3-d.jpg"],
    },
  ],
};

export const footer = {
  logo: "LOGO",
  slogan: "SOLOGAN COMPANY",
  columns: [
    ["Services", "Theme Tweak"],
    ["Showcase", "Widgetkit", "Support"],
    ["About Us", "Contact Us", "Affiliates", "Resources"],
  ],
  copyright: "©Copyright. All rights reserved.",
};

export const about = {
  title: "Welcome",
  tagline:
    "We build the games and XR experiences ourselves, and give you a seat alongside us.",
  left: "Orion Studios is proud to present worlds that have been rigorously playtested and refined by our team through every stage of production. We give our partners the peace of mind of knowing that experienced developers are building alongside them.",
  rightTitle: "We co-develop with studios worldwide",
  rightText:
    "Our team has a proven pipeline for shipping immersive titles, with a 5-year track record across games and XR platforms.",
  stats: [
    { value: "34", label: "Games shipped" },
    { value: "130+", label: "Projects" },
    { value: "32", label: "Awards" },
    { value: "4", label: "Platforms" },
  ],
};

export const cta = {
  image: "/cta-bg.jpg", // put in public/
  title: "Let’s Build The Future, Together.",
  text: "Ready to bring your idea to life? Contact our team of game and XR experts today to see how we can help you build smarter.",
  placeholder: "Enter Email Address",
  button: "Subscribe",
};
