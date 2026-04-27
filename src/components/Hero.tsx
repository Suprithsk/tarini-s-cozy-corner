import portrait from "@/assets/tarini-portrait.jpg";
import { Arrow, Flower, Heart, Sparkle, Star } from "./Doodles";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-blob bg-blush/50 blur-2xl animate-blob-spin"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-blob bg-sage/40 blur-2xl animate-blob-spin"
        aria-hidden
      />

      <div className="container relative grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="relative animate-fade-in text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground/70 shadow-soft backdrop-blur">
            <Sparkle className="h-4 w-4" />
            welcome, friend
          </span>

          <h1 className="mt-5 font-hand text-6xl leading-[0.95] text-foreground md:text-8xl">
            Tarini's corner
            <br />
            <span className="text-primary">of the internet</span>
            <Heart className="ml-3 inline-block h-10 w-10 align-baseline animate-wiggle md:h-14 md:w-14" />
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground md:mx-0">
            a lil' cozy space where I share my favorite playlists, lifestyle bits,
            filming gear & all the soft things that make me happy ✿
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#hangout"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:scale-105"
            >
              say hi 👋
            </a>
            <a
              href="#corner"
              className="rounded-full bg-card px-6 py-3 font-semibold text-foreground shadow-card transition hover:scale-105"
            >
              peek around
            </a>
          </div>

          {/* Floating doodles */}
          <Star className="absolute -top-6 right-4 h-8 w-8 animate-float md:right-10" />
          <Flower className="absolute -bottom-10 -left-2 h-10 w-10 animate-float md:-left-6" />
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-in">
          <div className="absolute -inset-4 rounded-blob bg-peach/60 blur-xl" aria-hidden />
          <div className="relative tilt-right rounded-[2.5rem] bg-card p-3 shadow-card">
            <img
              src={portrait}
              alt="Portrait of Tarini, smiling warmly"
              width={768}
              height={768}
              className="aspect-square w-full rounded-[2rem] object-cover"
            />
            {/* Hi sticker */}
            <div className="absolute -top-6 -left-6 rotate-[-12deg] rounded-full bg-butter px-5 py-2 font-hand text-2xl text-foreground shadow-soft animate-wiggle">
              Hi! ✿
            </div>
            {/* Arrow pointing to portrait */}
            <Arrow className="absolute -left-24 top-1/3 hidden md:block" />
            {/* Tiny tag */}
            <div className="absolute -bottom-4 right-4 rotate-[6deg] rounded-full bg-sage px-4 py-1.5 font-hand text-xl text-secondary-foreground shadow-soft">
              that's me!
            </div>
          </div>
          <Sparkle className="absolute -top-4 right-0 h-8 w-8 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
