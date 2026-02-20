import { Search, Zap, MessageCircle, Users } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Enter your subject of research',
    description: 'Tell buzzabout what topic or product you want to research.',
    preview: (
      <div className="bg-[#1a1a1a] rounded-xl p-4 mt-4">
        <div className="bg-[#252525] rounded-lg px-3 py-2 text-gray-400 text-sm">
          Electric scooter safety...
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Instantly see what they buzz about',
    description: "We'll scan thousands of Reddit posts and extract what matters most.",
    preview: (
      <div className="bg-[#1a1a1a] rounded-xl p-4 mt-4 space-y-2">
        {['Safety concerns', 'Battery life', 'Speed limits'].map((tag, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-gray-300 text-xs">{tag}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: 'Ask questions and get answers',
    description: 'Chat directly with the insights to dive deeper into your research.',
    preview: (
      <div className="bg-[#1a1a1a] rounded-xl p-4 mt-4">
        <div className="bg-blue-600/20 border border-blue-500/20 rounded-lg px-3 py-2 text-blue-300 text-xs">
          What do users think about price?
        </div>
        <div className="bg-[#252525] rounded-lg px-3 py-2 text-gray-400 text-xs mt-2">
          Users find pricing too high for entry-level...
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: 'Share with a team',
    description: 'Collaborate with your team directly in Slack to act on insights fast.',
    preview: (
      <div className="bg-[#1a1a1a] rounded-xl p-4 mt-4 flex items-center gap-2">
        {[
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
          'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
          'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
        ].map((src, i) => (
          <img key={i} src={src} alt="Team" className="w-7 h-7 rounded-full object-cover border-2 border-[#0d0d0d] -ml-2 first:ml-0" />
        ))}
        <span className="text-gray-400 text-xs ml-2">3 team members</span>
      </div>
    ),
  },
];

export default function Setup() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            Support your decision-making{' '}
            <span className="text-gray-600">with a simple setup</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg font-light">
            Four steps to research that transforms how you understand your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-[#111] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="text-blue-400" size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                  Step {i + 1}
                </p>
                <h3 className="text-white text-lg font-bold mb-3 leading-snug">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{step.description}</p>
                {step.preview}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
