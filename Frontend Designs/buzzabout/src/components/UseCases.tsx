import { ChevronRight } from 'lucide-react';

const useCases = [
  'Improve your product',
  'Craft your marketing strategy',
  'Identify new market opportunities',
  'Predict future trends and demand',
  'Personalize customer experience',
];

export default function UseCases() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
          Align Your Needs{' '}
          <span className="text-gray-600">with Our Strengths</span>
        </h2>
        <p className="text-gray-500 text-base mb-20 max-w-xs font-light">
          Discover what your audience truly thinks.
        </p>

        <div className="space-y-px">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-6 px-4 border-b border-white/10 hover:border-white/25 transition-colors cursor-pointer hover:bg-white/3 rounded"
            >
              <div className="flex items-center gap-6">
                <span className="text-gray-600 text-sm font-semibold w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-white text-xl md:text-2xl font-bold group-hover:text-gray-200 transition-colors">
                  {item}
                </span>
              </div>
              <ChevronRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
