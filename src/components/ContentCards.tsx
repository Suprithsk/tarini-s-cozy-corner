import { Music, Camera, Mail } from "lucide-react";
import { Flower, Heart, Squiggle, Star } from "./Doodles";

type Card = {
  title: string;
  desc: string;
  cta: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
  tape: string;
  tilt: string;
};

const cards: Card[] = [
  {
    title: "Bollywood running playlist",
    desc: "the exact songs that make me sprint a lil' faster on my morning runs ♡",
    cta: "Listen on Spotify",
    href: "#",
    icon: Music,
    bg: "bg-blush/70",
    tape: "bg-sage/80",
    tilt: "tilt-left",
  },
  {
    title: "Links to all my filming gear",
    desc: "every camera, mic & ring light I actually use to film my videos.",
    cta: "See the list",
    href: "#",
    icon: Camera,
    bg: "bg-peach/70",
    tape: "bg-blush/80",
    tilt: "tilt-right",
  },
  {
    title: "Business enquiries",
    desc: "for collabs, brand love & sweet little projects — drop me a line.",
    cta: "say hello@tarini",
    href: "mailto:hi@tarini.com",
    icon: Mail,
    bg: "bg-lilac/70",
    tape: "bg-butter/80",
    tilt: "tilt-left",
  },
];

const ContentCards = () => {
  return (
    <section id="corner" className="container relative py-16 md:py-24">
      <div className="text-center">
        <h2 className="font-hand text-5xl text-foreground md:text-6xl">
          Lil' things I love
          <Heart className="ml-2 inline-block h-8 w-8 align-baseline" />
        </h2>
        <Squiggle className="mx-auto mt-2 w-32" />
      </div>

      <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Star className="absolute -top-6 left-4 h-8 w-8 animate-float" />
        <Flower className="absolute -bottom-10 right-4 h-12 w-12 animate-float" />

        {cards.map(({ title, desc, cta, href, icon: Icon, bg, tape, tilt }) => (
          <article
            key={title}
            className={`relative rounded-3xl ${bg} ${tilt} p-7 pt-10 shadow-card backdrop-blur hover-lift`}
          >
            {/* Tape strip */}
            <div
              className={`absolute -top-3 left-1/2 h-5 w-24 -translate-x-1/2 rotate-[-4deg] rounded-sm ${tape} shadow-sm`}
              aria-hidden
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card/80 shadow-soft">
              <Icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mt-5 font-hand text-3xl text-foreground">{title}</h3>
            <p className="mt-2 text-foreground/75">{desc}</p>
            <a
              href={href}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 font-semibold text-foreground shadow-soft transition hover:scale-105"
            >
              {cta}
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContentCards;
