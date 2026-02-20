import { Slack } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] pt-20 pb-0 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-16 pb-20 border-b border-white/8">
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
              Ready to Transform Your Marketing Insights?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Slack size={16} />
              Add to Slack
            </a>
          </div>

          <div className="grid grid-cols-3 gap-16">
            <div>
              <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-5">About Us</p>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Blog', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-5">Contact Us</p>
              <ul className="space-y-4">
                {['Support', 'Twitter', 'LinkedIn', 'Discord'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-5">Legal</p>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-0 overflow-hidden">
        <h1
          className="text-[clamp(80px,18vw,220px)] font-black text-white/5 tracking-tighter leading-none select-none text-center pb-0 -mb-6"
          style={{ fontStretch: 'condensed' }}
        >
          buzzabout
        </h1>
      </div>
    </footer>
  );
}
