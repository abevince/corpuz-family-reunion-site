import { MapPin, Calendar, Clock, Users } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Date",
    value: "March 28–29, 2026",
    sub: "Saturday & Sunday",
  },
  {
    icon: Clock,
    label: "Time",
    value: "6:00 PM onwards",
    sub: "Doors open at 5:30 PM",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "The Grand Ballroom",
    sub: "123 Reunion Avenue, Manila",
  },
  {
    icon: Users,
    label: "Dress Code",
    value: "Formal / Semi-Formal",
    sub: "Gold & Black theme",
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0d2e] to-[#0d0a1a]" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-300/50 mb-4">
            Mark your calendars
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-amber-50 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Event <span className="italic text-gold">Details</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mt-6">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 text-center group hover:border-gold/40 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gold-gradient mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-[#0d0a1a]" strokeWidth={2} />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-amber-300/50 mb-2">
                {item.label}
              </p>
              <p
                className="text-xl font-semibold text-amber-50 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.value}
              </p>
              <p className="text-sm text-amber-300/60 italic">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-16 glass rounded-3xl overflow-hidden">
          <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
              <p
                className="text-2xl font-semibold text-amber-50"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Grand Ballroom
              </p>
              <p className="text-amber-300/60 mt-1">123 Reunion Avenue, Manila</p>
              <a
                href="#"
                className="mt-4 inline-block text-xs tracking-widest uppercase text-gold border border-gold/40 px-6 py-2 rounded-full hover:bg-gold/10 transition-colors"
              >
                View on Map
              </a>
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
