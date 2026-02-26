export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[#0d0a1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div
          className="text-2xl sm:text-3xl font-bold text-gold mb-2 tracking-widest"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ✦ Corpuz Family ✦
        </div>
        <p
          className="text-amber-300/50 italic text-base sm:text-lg mb-8 sm:mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Together Again — March 28–29, 2026
        </p>

        {/* Quick links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          {["Home", "Details", "Schedule", "Gallery", "RSVP"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs sm:text-sm tracking-widest uppercase text-amber-200/40 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="divider-ornament max-w-xs mx-auto mb-6 sm:mb-8">
          <span className="text-gold/40 text-sm">✦</span>
        </div>

        {/* Contact */}
        <p className="text-amber-300/30 text-xs sm:text-sm mb-2 leading-relaxed">
          Questions? Contact the organizers at{" "}
          <a
            href="mailto:reunion@corpuzfamily.com"
            className="text-gold/60 hover:text-gold transition-colors break-all"
          >
            reunion@corpuzfamily.com
          </a>
        </p>

        <p className="text-amber-300/20 text-xs mt-5 sm:mt-6">
          © {year} Corpuz Family Reunion. Made with love for the family.
        </p>
      </div>
    </footer>
  );
}
