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
  logo: { src: "/logo.svg", alt: "ELEVATE-XR" },
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
      studio: "ELEVATE-XR",
      cta: "Play now",
      href: "#",
      images: ["/pace-1.webp"],
      // "/game1-b.jpg", "/game1-c.jpg", "/game1-d.jpg"],
    },
    {
      title: "Echo Realms",
      description:
        "An immersive XR puzzle adventure where sound shapes the world. Explore shifting environments built for VR headsets.",
      tags: ["XR", "Puzzle"],
      rating: 4.6,
      badge: "Editor's Pick",
      studio: "ELEVATE-XR",
      cta: "Play now",
      href: "#",
      images: ["pace-2.webp"],
      //  "/game2-b.jpg", "/game2-c.jpg", "/game2-d.jpg"],
    },
    {
      title: "Neon Drift",
      description:
        "A fast arcade racer through rain-soaked cyber cities. Chain drifts, unlock rides, and climb the global leaderboard. Challenge your friends",
      tags: ["Racing", "Arcade"],
      rating: 4.7,
      badge: "New",
      studio: "ELEVATE-XR",
      cta: "Play now",
      href: "#",
      images: ["/pace-3.webp"],
      //  "/game3-b.jpg", "/game3-c.jpg", "/game3-d.jpg"],
    },
  ],
};

export const footer = {
  logo: "ELEVATE-XR",
  slogan: "Build XR Beyond",
  columns: [
    ["Services", "Custom Build"],
    ["Showcase", "Support", "Join Us"],
    ["About Us", "Contact Us", "Learn XR", "Resources"],
  ],
  copyright: "©Copyright 2026. All rights reserved.",
};

export const about = {
  title: "Welcome",
  tagline:
    "We build the games and XR experiences ourselves, and give you a seat alongside us.",
  left: "ELEVATE-XR is proud to present worlds that have been rigorously playtested and refined by our team through every stage of production. We give our partners the peace of mind of knowing that experienced developers are building alongside them.",
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

export const course = {
  image: "/course.jpg", // put in public/
  boldTitle: "XR Development Course:",
  title: " Learn to Build Immersive Worlds",
  price: "$30.00",
  primary: "Enroll Now",
  secondary: "Start Building Now",
  text: "Extended reality is reshaping how people play, learn, and work. This hands-on course takes you from the fundamentals of VR and AR design to shipping your first interactive experience. Learn spatial interaction, 3D environments, and performance optimization, with guided projects you can add to your portfolio. Along the way, you'll work with industry-standard engines and tools, build prototypes for headsets and mobile devices, and learn how to test with real users.",
};
