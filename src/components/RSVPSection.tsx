export default function RSVPSection() {
  return (
    <section id="rsvp" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0d2e] to-[#0d0a1a]" />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.5), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/50 mb-4">
            Let us know you&apos;re coming
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-amber-50 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            RSVP <span className="italic text-gold">Today</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p
            className="mt-6 text-amber-200/60 text-lg italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Please confirm your attendance by{" "}
            <span className="text-gold">March 14, 2026</span>
          </p>
        </div>

        {/* Form */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <form className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Maria"
                  className="w-full bg-white/5 border border-gold/20 rounded-xl px-4 py-3 text-amber-100 placeholder-amber-300/20 focus:outline-none focus:border-gold/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Corpuz"
                  className="w-full bg-white/5 border border-gold/20 rounded-xl px-4 py-3 text-amber-100 placeholder-amber-300/20 focus:outline-none focus:border-gold/60 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-gold/20 rounded-xl px-4 py-3 text-amber-100 placeholder-amber-300/20 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-3">
                Will you attend?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Yes, I&apos;ll be there!", "Sadly, I can&apos;t make it"].map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 glass rounded-xl p-4 cursor-pointer hover:border-gold/40 transition-all group"
                  >
                    <input
                      type="radio"
                      name="attendance"
                      className="accent-yellow-400"
                    />
                    <span
                      className="text-sm text-amber-100/80 group-hover:text-gold transition-colors"
                      dangerouslySetInnerHTML={{ __html: opt }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Guest count */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-2">
                Number of Guests (including yourself)
              </label>
              <select
                className="w-full bg-[#0d0a1a] border border-gold/20 rounded-xl px-4 py-3 text-amber-100 focus:outline-none focus:border-gold/60 transition-colors appearance-none"
              >
                {[1, 2, 3, 4, 5, "6+"].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-amber-300/60 mb-2">
                A Message for the Family{" "}
                <span className="normal-case text-amber-300/30">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Share a memory, a wish, or anything you'd like the family to know..."
                className="w-full bg-white/5 border border-gold/20 rounded-xl px-4 py-3 text-amber-100 placeholder-amber-300/20 focus:outline-none focus:border-gold/60 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full gold-gradient text-[#0d0a1a] font-bold tracking-widest uppercase py-4 rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-amber-900/40 text-sm"
            >
              Confirm RSVP ✦
            </button>

            <p className="text-center text-xs text-amber-300/30">
              Your details are kept private and shared only with the family organizers.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
