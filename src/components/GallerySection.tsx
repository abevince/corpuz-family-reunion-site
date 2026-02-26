const placeholderColors = [
  "from-purple-900/60 to-pink-900/40",
  "from-indigo-900/60 to-purple-900/40",
  "from-pink-900/60 to-amber-900/40",
  "from-amber-900/60 to-orange-900/40",
  "from-blue-900/60 to-indigo-900/40",
  "from-rose-900/60 to-purple-900/40",
];

const labels = [
  "Reunion 2020",
  "Family Gathering",
  "Summer 2019",
  "Christmas 2022",
  "Beach Trip",
  "Holiday 2023",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a1a] to-[#1a0d2e]" />

      {/* Right glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #b060d0, transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/50 mb-4">
            A walk down memory lane
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-amber-50 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Family <span className="italic text-gold">Memories</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="mt-6 text-amber-200/50 italic max-w-md mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
            Photos from our cherished gatherings through the years
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderColors.map((gradient, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br ${gradient} group cursor-pointer`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl mb-2 opacity-30">📷</div>
                <p className="text-xs text-white/30 tracking-widest uppercase">
                  {labels[i]}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gold text-sm tracking-widest uppercase font-semibold">
                    {labels[i]}
                  </p>
                  <p className="text-white/60 text-xs mt-1">View photo</p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/60 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Upload hint */}
        <div className="text-center mt-12">
          <p className="text-amber-300/40 text-sm italic">
            Photos from past reunions — more to be added soon
          </p>
        </div>
      </div>
    </section>
  );
}
