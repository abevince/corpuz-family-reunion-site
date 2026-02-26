import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07041a] via-[#0d0a1a] to-[#1a0d2e] z-0" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(180,80,180,0.3) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full border border-gold/10"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full border border-gold/5"
          style={{ animation: "float 10s ease-in-out infinite reverse" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div className="divider-ornament mb-8 max-w-xs mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-300/60">
            You are invited
          </span>
        </div>

        {/* Main family name */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="animate-shimmer">The Corpuz</span>
          <br />
          <span
            className="italic font-normal text-4xl md:text-6xl lg:text-7xl text-amber-100/90"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Family Reunion
          </span>
        </h1>

        {/* Year badge */}
        <div className="mt-6 mb-10 inline-flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <span
            className="text-lg md:text-2xl tracking-[0.5em] text-gold/90 font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            2026
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-2xl text-amber-100/70 max-w-xl mx-auto mb-14 font-light italic leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          &ldquo;Where every face is familiar, every story is shared, and every
          heart comes home.&rdquo;
        </p>

        {/* Countdown */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-300/50 mb-6">
            Counting down to the big day
          </p>
          <Countdown />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#rsvp"
            className="group relative px-10 py-4 rounded-full gold-gradient text-[#0d0a1a] font-bold text-sm tracking-widest uppercase overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-amber-900/50"
          >
            <span className="relative z-10">RSVP Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#details"
            className="px-10 py-4 rounded-full glass text-amber-100/80 font-medium text-sm tracking-widest uppercase hover:text-gold hover:border-gold/60 transition-all"
          >
            Event Details
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-2 text-amber-300/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
