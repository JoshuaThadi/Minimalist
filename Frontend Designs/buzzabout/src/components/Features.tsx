import { Search, MessageSquare, TrendingUp, Clock } from 'lucide-react';

function SearchUI() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
          <span className="text-white text-xs font-bold">B</span>
        </div>
        <span className="text-gray-800 font-semibold text-sm">buzzabout</span>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        Let's uncover insights from thousands of discussions! Provide your market research topic, and we'll analyze relevant discussions and engagement metrics.
      </p>
      <p className="text-gray-700 text-sm font-medium mb-3">How to use it?</p>
      <div className="space-y-2 text-xs text-gray-500 mb-4">
        <p>1. <strong>Start a Search:</strong> Press Start a search button and provide your market research topic.</p>
        <p>2. <strong>Explore Insights:</strong> We will show trending topics and engagement metrics.</p>
        <p>3. <strong>Ask Questions:</strong> Inquire about specific details.</p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Searching..."
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none"
          readOnly
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}

function OpinionsUI() {
  const topics = [
    { name: 'Safety', mentions: 34, upvotes: 571, comments: 25 },
    { name: 'Regulations', mentions: 18, upvotes: 362, comments: 12 },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
          <span className="text-white text-xs font-bold">B</span>
        </div>
        <span className="text-gray-800 font-semibold text-sm">buzzabout</span>
        <span className="text-gray-400 text-xs ml-auto">Scanned 125 posts and 560 comments</span>
      </div>
      <p className="text-gray-700 text-sm font-semibold mb-3">Main topics</p>
      {topics.map((topic, i) => (
        <div key={i} className="mb-3 pb-3 border-b border-gray-100 last:border-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-800 text-sm font-medium">{i + 1}. {topic.name}</span>
          </div>
          <p className="text-gray-500 text-xs mb-1">
            Mentions: {topic.mentions} | Upvotes: {topic.upvotes} | Comments: {topic.comments}
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            {topic.name} is the top priority for users, with substantial discussion and engagement focused on protective measures.
          </p>
        </div>
      ))}
    </div>
  );
}

function ChatUI() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-start gap-3">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
          alt="User"
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="text-gray-800 text-sm font-semibold">John Olson</p>
          <p className="text-gray-400 text-xs">Electric bikes</p>
        </div>
        <div className="ml-auto flex items-center gap-1 text-gray-300">
          {['👍', '👎', '📎', '🔗'].map((icon, i) => (
            <span key={i} className="text-xs">{icon}</span>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <span className="text-gray-800 font-semibold text-sm">buzzabout</span>
          <span className="text-gray-400 text-xs ml-auto">Scanned 125 posts and 560 comments</span>
        </div>
        <p className="text-gray-700 text-sm font-semibold mb-3">Main topics</p>
        <div className="space-y-2">
          {[
            { name: 'Safety', mentions: 34, upvotes: 571, comments: 25 },
          ].map((topic, i) => (
            <div key={i}>
              <p className="text-gray-800 text-sm font-medium mb-1">{i + 1}. {topic.name}</p>
              <p className="text-gray-500 text-xs mb-1">
                Mentions: {topic.mentions} | Upvotes: {topic.upvotes} | Comments: {topic.comments}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Safety is the top priority for users, with substantial discussion and engagement focused on protective measures.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimeUI() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {[
        {
          avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2',
          name: 'John Olson',
          sub: 'Electric bikes',
          desc: 'Scanned 86 posts and 4560 comments',
          type: 'user',
        },
        {
          type: 'bot',
          desc: 'Scanning 86 posts and 4560 comments',
        },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-3">
          {item.type === 'user' ? (
            <>
              <img src={item.avatar} alt="User" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-gray-800 text-sm font-semibold">{item.name}</p>
                <p className="text-gray-400 text-xs">{item.sub}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-semibold">buzzabout</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    label: 'Do Audience Research',
    highlight: 'Where You Work',
    description:
      'Audience research from Redditors into your workflow. Summarize your audience within your team in Slack.',
    UI: SearchUI,
    reverse: false,
  },
  {
    label: 'Extract',
    highlight: 'Key Opinions',
    description:
      'Readings, complaints and conclusions of real data. Discover what they think and feel about your brand.',
    UI: OpinionsUI,
    reverse: true,
  },
  {
    label: 'Chat With',
    highlight: 'Your Audience',
    description:
      'Interview hundreds of customers at the same time and receive instant replies to all questions.',
    UI: ChatUI,
    reverse: false,
  },
  {
    label: 'Save Time & Money on',
    highlight: 'Every Research',
    description:
      'Scan thousands of posts and comments at the same time. Save up to 3 hours on a single research.',
    UI: TimeUI,
    reverse: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-8">
      {features.map((feat, i) => {
        const UIComponent = feat.UI;
        return (
          <div
            key={i}
            className={`flex flex-col ${feat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 max-w-6xl mx-auto px-6 py-20 border-b border-gray-100 last:border-0`}
          >
            <div className="flex-1 max-w-md">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
                {feat.label}{' '}
                <span className="text-gray-600">{feat.highlight}</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-light">{feat.description}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <UIComponent />
            </div>
          </div>
        );
      })}
    </section>
  );
}
