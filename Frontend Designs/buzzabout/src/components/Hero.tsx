import { Slack } from 'lucide-react';

const avatars = [
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-blue-600 flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 opacity-40" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
          Get on top<br />
          <span className="text-white/95">of Reddit</span>
        </h1>

        <p className="text-white/85 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Get insights from thousands of discussions on Reddit in seconds with AI-powered analysis.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-2xl shadow-black/20"
        >
          <Slack size={18} />
          Add to Slack
        </a>
      </div>

      <div className="relative z-10 mt-20 flex items-center justify-center">
        <div className="flex items-center">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-blue-600 overflow-hidden ring-1 ring-white/20"
                style={{ zIndex: avatars.length - i }}
              >
                <img src={src} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex -space-x-3 ml-2">
            {['😎', '🚀', '🎯', '💡', '🔥', '⚡', '🌟', '✨'].map((emoji, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-blue-600 bg-white/10 backdrop-blur-sm flex items-center justify-center text-lg"
                style={{ zIndex: 20 - i }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
