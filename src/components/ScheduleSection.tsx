const schedule = [
  {
    time: "5:30 PM",
    title: "Doors Open",
    description: "Guests arrive, cocktail hour begins with welcome drinks and light canapes.",
    icon: "🥂",
  },
  {
    time: "6:00 PM",
    title: "Welcome Ceremony",
    description: "Opening remarks, family prayer, and a heartfelt welcome from the elders.",
    icon: "🙏",
  },
  {
    time: "6:30 PM",
    title: "Family Photo Session",
    description: "Group portraits and candid shots to capture memories that will last a lifetime.",
    icon: "📸",
  },
  {
    time: "7:00 PM",
    title: "Grand Dinner",
    description: "A festive multi-course dinner featuring traditional family recipes and favorites.",
    icon: "🍽️",
  },
  {
    time: "8:00 PM",
    title: "Tributes & Stories",
    description: "Share memories, funny stories, and celebrate the milestones of the past years.",
    icon: "🎤",
  },
  {
    time: "9:00 PM",
    title: "Music & Dancing",
    description: "Live band entertainment — dance the night away with your loved ones!",
    icon: "🎶",
  },
  {
    time: "10:30 PM",
    title: "Closing & Farewell",
    description: "A special toast to the family, fireworks, and until we meet again.",
    icon: "🎆",
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a1a] via-[#120820] to-[#0d0a1a]" />

      {/* Side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/50 mb-4">
            What to expect
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-amber-50 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Evening <span className="italic text-gold">Schedule</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                {/* Time */}
                <div className="hidden md:flex flex-col items-end w-20 shrink-0 pt-3">
                  <span className="text-xs text-gold/70 tracking-widest font-mono whitespace-nowrap">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start pt-4 relative z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-gold/50 bg-[#0d0a1a] group-hover:bg-gold group-hover:border-gold transition-all duration-300 shrink-0" />
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-6 group-hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="text-lg font-semibold text-amber-50"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.title}
                        </h3>
                        <span className="md:hidden text-xs text-gold/60 font-mono">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-amber-200/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
