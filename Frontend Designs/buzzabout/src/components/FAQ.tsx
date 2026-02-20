import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Can I use this tool for other social media platforms?',
    a: 'Currently buzzabout is focused exclusively on Reddit, which offers the richest discussion data. Support for additional platforms is on our roadmap.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! You can try buzzabout for free with limited searches. No credit card required to get started.',
  },
  {
    q: 'How to update or cancel my subscription?',
    a: 'You can manage your subscription directly from the billing settings in your Slack workspace. Cancellations take effect at the end of the billing period.',
  },
  {
    q: 'How to start conversation with AI persona?',
    a: "After running a search, you'll see a 'Chat' button appear in the results. Click it to start an interactive conversation with the AI that has analyzed your research topic.",
  },
  {
    q: 'How AI persona works?',
    a: 'Our AI reads and synthesizes thousands of Reddit posts and comments related to your topic, then creates a comprehensive understanding of user sentiment, pain points, and opinions that you can query conversationally.',
  },
  {
    q: 'Is support available if I need assistance?',
    a: 'Absolutely. Our team is available via in-app chat and email support. Enterprise customers get priority support with dedicated account managers.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-80 flex-shrink-0">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Frequently<br />Asked<br />Questions
          </h2>
          <p className="text-gray-600 text-base mb-8 leading-relaxed font-light">
            Get answers to commonly asked questions.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="flex-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-2 border-gray-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              >
                <span className="text-gray-800 font-bold text-lg group-hover:text-gray-600 transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  {open === i ? (
                    <Minus size={14} className="text-gray-700" />
                  ) : (
                    <Plus size={14} className="text-gray-700" />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="pb-6">
                  <p className="text-gray-600 text-base leading-relaxed font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
