import { Sparkles, Zap, Building2, Users } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section className="bg-white dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Positive Impact
              <br />
              Across the Globe
            </h2>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">Core Values Guiding</p>
            <p className="text-gray-600 dark:text-gray-400">Our Global Mission</p>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            Over 80,000 lives have been touched by our charity's work. We focus on empowering individuals,
            improving communities, and fostering sustainable development across more than 50 countries.
            Through targeted initiatives, we have enabled access to education, healthcare, and economic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-cream-100 dark:bg-dark-bg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Spreading Hope</h3>
          </div>
          <div className="bg-cream-100 dark:bg-dark-bg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Inspiring Action</h3>
          </div>
          <div className="bg-cream-100 dark:bg-dark-bg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Building Futures</h3>
          </div>
          <div className="bg-cream-100 dark:bg-dark-bg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Fostering Unity</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-1 aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800"></div>
          </div>
          <div className="lg:col-span-1 aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800"></div>
          </div>
          <div className="lg:col-span-1 aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800"></div>
          </div>
          <div className="lg:col-span-1 aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800"></div>
          </div>
          <div className="lg:col-span-1 bg-primary-300 dark:bg-primary-800/50 rounded-2xl p-6 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">385M+</div>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">
              Children on this planet are in Extreme Poverty
            </p>
            <button className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2 hover:gap-3 transition-all">
              Learn More
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
