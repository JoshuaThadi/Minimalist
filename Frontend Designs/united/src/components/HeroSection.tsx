import { ArrowRight, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-cream-100 dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Empowering communities by{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  transforming lives and fostering sustainable change
                </span>{' '}
                through compassionate giving.
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Empathy
                <br />
                Transforms Lives
              </h1>
            </div>

            <div className="bg-primary-200 dark:bg-primary-900/30 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                <span className="text-sm font-medium text-primary-800 dark:text-primary-300">
                  Our Next Goal
                </span>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                  80,000+
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  People Reached, and We're Just Getting Started
                </p>
              </div>

              <div className="flex items-center gap-2 text-primary-700 dark:text-primary-400 font-medium cursor-pointer hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Raised</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">$880,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Distribute</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Award</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">300 scholarships</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Than</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">300 teachers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-0">
            <div className="bg-primary-200 dark:bg-primary-900/30 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                <ArrowRight className="w-5 h-5" />
                <span>Join the Movement</span>
              </div>

              <div className="aspect-square bg-gray-800 dark:bg-gray-900 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <div className="text-sm">Impact Story</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Supporting this charity has been life-changing. I've seen firsthand the impact of compassionate people helping communities in need. Truly inspiring.
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">- Robin Davis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Our Partners and Supporters</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">Health</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm"></div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                <div>American</div>
                <div>Red Cross</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-400">unicef</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
