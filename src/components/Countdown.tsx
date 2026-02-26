"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-03-28T18:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div className="glass rounded-xl sm:rounded-2xl w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center glow-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <span
          className="text-xl sm:text-3xl md:text-5xl font-bold text-gold tabular-nums"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-300/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 sm:gap-4 md:gap-8 justify-center items-start">
      <Digit value={timeLeft.days} label="Days" />
      <div className="flex items-center pb-7 sm:pb-8 text-gold text-xl sm:text-3xl md:text-5xl font-light">:</div>
      <Digit value={timeLeft.hours} label="Hours" />
      <div className="flex items-center pb-7 sm:pb-8 text-gold text-xl sm:text-3xl md:text-5xl font-light">:</div>
      <Digit value={timeLeft.minutes} label="Mins" />
      <div className="flex items-center pb-7 sm:pb-8 text-gold text-xl sm:text-3xl md:text-5xl font-light">:</div>
      <Digit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
