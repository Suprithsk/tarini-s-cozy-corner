import { Flower, Heart, Sparkle, Star } from "./Doodles";

const Footer = () => {
  return (
    <footer className="container pb-12 pt-8 text-center">
      <div className="flex items-center justify-center gap-3 opacity-80">
        <Flower className="h-7 w-7" />
        <Sparkle className="h-5 w-5" />
        <Star className="h-6 w-6" />
        <Sparkle className="h-5 w-5" />
        <Flower className="h-7 w-7" />
      </div>
      <p className="mt-4 font-hand text-2xl text-foreground/80">
        made with <Heart className="inline-block h-5 w-5 align-baseline" /> by Tarini
      </p>
      <p className="mt-1 text-sm text-muted-foreground">© {new Date().getFullYear()} — all the cozy vibes</p>
    </footer>
  );
};

export default Footer;
