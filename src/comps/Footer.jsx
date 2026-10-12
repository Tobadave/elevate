import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaGooglePlusG,
  FaFlickr,
} from "react-icons/fa";
import { footer as f } from "../constants";

const socials = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaRss, label: "RSS" },
  { Icon: FaGooglePlusG, label: "Google Plus" },
  { Icon: FaFlickr, label: "Flickr" },
];

const Footer = () => (
  <footer className="bg-[#111] font-body text-white">
    <div className="mx-auto max-w-6xl px-6 pb-10 pt-14 sm:px-10 lg:px-[88px] lg:pt-[120px]">
      {/* Top */}
      <div className="grid gap-10 md:grid-cols-[1.4fr_2.6fr] md:items-start lg:gap-16">
        {/* Brand */}
        <div>
          <p className="text-[32px] font-bold leading-none tracking-[0.08em]">
            {f.logo}
          </p>
          <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.08em]">
            {f.slogan}
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {f.columns.map((col, i) => (
            <ul key={i} className="space-y-2.5">
              {col.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-white/90 transition-colors duration-300 hover:text-green-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-14 h-px w-full bg-white/40 lg:mt-16" />

      {/* Socials */}
      <div className="mt-14 flex items-center justify-center gap-3 lg:mt-[120px]">
        {socials.map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/70 text-white transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-400 hover:text-black"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-5 text-center text-[13px] text-white/90">
        {f.copyright}
      </p>
    </div>
  </footer>
);

export default Footer;
