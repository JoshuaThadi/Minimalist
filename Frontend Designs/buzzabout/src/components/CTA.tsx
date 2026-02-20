import { Slack } from 'lucide-react';

const avatars = [
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
];

export default function CTA() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover border-3 border-[#111]"
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-2xl md:text-3xl leading-tight">Unlock Your</p>
              <p className="text-gray-400 text-2xl md:text-3xl font-bold leading-tight">Analytical Superpower</p>
            </div>
          </div>
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2.5 bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            <Slack size={18} />
            Add to Slack
          </a>
        </div>
      </div>
    </section>
  );
}
