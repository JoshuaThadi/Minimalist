export default function ScrollingBanner() {
  const text = 'Needs with Our Strengths Align Your';
  const repeated = Array(8).fill(text).join(' · ');

  return (
    <section className="bg-[#0a0a0a] py-20 overflow-hidden border-y border-white/8">
      <div className="relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((n) => (
            <span
              key={n}
              className="text-6xl md:text-8xl font-black italic text-white/80 tracking-tighter pr-20 flex-shrink-0"
              style={{ fontStyle: 'italic' }}
            >
              {repeated}&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
