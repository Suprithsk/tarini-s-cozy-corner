import { cn } from "@/lib/utils";

type DoodleProps = { className?: string };

export const Flower = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 64 64" className={cn("h-12 w-12", className)} fill="none" aria-hidden>
    <g>
      <circle cx="32" cy="14" r="8" fill="hsl(var(--blush))" />
      <circle cx="32" cy="50" r="8" fill="hsl(var(--blush))" />
      <circle cx="14" cy="32" r="8" fill="hsl(var(--blush))" />
      <circle cx="50" cy="32" r="8" fill="hsl(var(--blush))" />
      <circle cx="32" cy="32" r="7" fill="hsl(var(--butter))" />
    </g>
  </svg>
);

export const Sparkle = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="none" aria-hidden>
    <path
      d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
      fill="hsl(var(--primary))"
    />
  </svg>
);

export const Heart = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="hsl(var(--primary))" aria-hidden>
    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
  </svg>
);

export const Star = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="hsl(var(--secondary))" aria-hidden>
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
  </svg>
);

export const Squiggle = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 120 16" className={cn("h-3 w-28", className)} fill="none" aria-hidden>
    <path
      d="M2 8 Q 12 0, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 118 8"
      stroke="hsl(var(--primary))"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Arrow = ({ className }: DoodleProps) => (
  <svg viewBox="0 0 100 60" className={cn("h-16 w-24", className)} fill="none" aria-hidden>
    <path
      d="M5 10 C 30 5, 60 50, 90 35"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M82 28 L 92 36 L 84 46"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const TapeStrip = ({ className }: DoodleProps) => (
  <div
    className={cn(
      "h-5 w-20 rounded-sm bg-butter/70 shadow-sm",
      className
    )}
    style={{ backdropFilter: "blur(2px)" }}
    aria-hidden
  />
);
