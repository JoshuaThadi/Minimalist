import { Mail, Check } from 'lucide-react';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-cream-100 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-white dark:bg-dark-800 rounded-3xl p-12 md:p-16 border border-gray-200 dark:border-dark-700 shadow-xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Stay Updated on Our Impact
              </h2>
              <p className="text-gray-600 dark:text-dark-300 text-lg">
                Subscribe to our newsletter for monthly impact reports, success stories, and ways you can help
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-dark-400 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {subscribed && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                <Check className="w-5 h-5" />
                <span>Successfully subscribed! Check your email for confirmation.</span>
              </div>
            )}

            <p className="text-sm text-gray-600 dark:text-dark-400">
              We respect your privacy. Unsubscribe at any time. See our privacy policy for details.
            </p>
          </form>

          <div className="mt-10 pt-10 border-t border-gray-200 dark:border-dark-700">
            <p className="text-sm text-gray-600 dark:text-dark-400 mb-4 font-medium">What you'll receive:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '📊', title: 'Monthly Reports', desc: 'Detailed impact metrics and outcomes' },
                { icon: '📖', title: 'Success Stories', desc: 'Real stories of lives transformed' },
                { icon: '🎯', title: 'Insider Updates', desc: 'Behind-the-scenes program insights' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-dark-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
