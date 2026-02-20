const tweets = [
  {
    handle: '@startup_maria',
    name: 'Maria Chen',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    text: 'buzzabout is a game changer. We cut our research time by 80% and the insights are way more actionable than traditional surveys.',
    time: '2h ago',
  },
  {
    handle: '@productthinking',
    name: 'Alex Torres',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    text: 'Finally a tool that gets Reddit research right. Just asked it what our users hate about competitor products and got gold in seconds.',
    time: '5h ago',
  },
  {
    handle: '@growthhacker_k',
    name: 'Kate Wilson',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    text: 'Used buzzabout to understand customer pain points before a big product launch. The Reddit sentiment analysis is incredibly accurate.',
    time: '1d ago',
  },
  {
    handle: '@jamesholt_dev',
    name: 'James Holt',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    text: "This replaced 3 different tools for us. Audience research, topic extraction, and Q&A all in one Slack bot. Absolutely love it.",
    time: '2d ago',
  },
  {
    handle: '@sarahmkting',
    name: 'Sarah Mitchell',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
    text: "The 'Chat With Your Audience' feature is wild. I can literally ask Reddit what they think about our brand and get real answers.",
    time: '3d ago',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
          What <span className="text-gray-500">people say?</span>
        </h2>
        <p className="text-gray-400 text-base font-light">The most important question for any business.</p>
      </div>

      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {tweets.map((tweet, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={tweet.avatar} alt={tweet.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-white text-sm font-medium leading-tight">{tweet.name}</p>
                  <p className="text-gray-500 text-xs">{tweet.handle}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{tweet.text}</p>
              <p className="text-gray-600 text-xs mt-4">{tweet.time}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-4 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
