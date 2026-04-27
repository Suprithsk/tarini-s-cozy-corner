import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { SnapchatIcon, SpotifyIcon, PinterestIcon } from "./SocialIcons";
import { Squiggle } from "./Doodles";

type Social = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string; // tailwind bg class (pastel)
  fg: string; // tailwind text color class
};

const socials: Social[] = [
  { name: "Instagram", href: "#", icon: Instagram, bg: "bg-blush", fg: "text-primary-foreground" },
  { name: "YouTube", href: "#", icon: Youtube, bg: "bg-peach", fg: "text-accent-foreground" },
  { name: "Snapchat", href: "#", icon: SnapchatIcon, bg: "bg-butter", fg: "text-foreground" },
  { name: "Spotify", href: "#", icon: SpotifyIcon, bg: "bg-sage", fg: "text-secondary-foreground" },
  { name: "Pinterest", href: "#", icon: PinterestIcon, bg: "bg-blush", fg: "text-primary-foreground" },
  { name: "Twitter", href: "#", icon: Twitter, bg: "bg-sky", fg: "text-foreground" },
  { name: "LinkedIn", href: "#", icon: Linkedin, bg: "bg-lilac", fg: "text-foreground" },
];

const Socials = () => {
  return (
    <section id="hangout" className="container py-16 md:py-24">
      <div className="text-center">
        <h2 className="font-hand text-5xl text-foreground md:text-6xl">
          Hang w/ me on
        </h2>
        <Squiggle className="mx-auto mt-2 w-32" />
        <p className="mt-3 text-muted-foreground">pick your fav, I'm everywhere ✿</p>
      </div>

      <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4 md:gap-5">
        {socials.map(({ name, href, icon: Icon, bg, fg }) => (
          <li key={name}>
            <a
              href={href}
              aria-label={name}
              className={`group flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-3xl ${bg} ${fg} shadow-card hover-lift md:h-24 md:w-24`}
            >
              <Icon className="h-7 w-7 transition-transform group-hover:scale-110 md:h-8 md:w-8" />
              <span className="font-hand text-base leading-none opacity-80">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Socials;
