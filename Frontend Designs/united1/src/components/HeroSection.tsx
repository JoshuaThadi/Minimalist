import { ArrowRight, Target, Users, Globe, TrendingUp, MapPin } from 'lucide-react';
import { StatsCard } from './StatsCard';

const HeroSection = () => {
  return (
    <section className="relative bg-cream-100 dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  Making Real Impact Since 2010
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight text-balance">
                Your Empathy
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  Transforms Lives
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-dark-300 max-w-lg">
                Empowering communities by transforming lives and fostering sustainable change through compassionate giving across 50+ countries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all font-medium">
                Start Donating
              </button>
              <button className="border border-gray-300 dark:border-dark-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800 transition-all font-medium">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-cream-100 dark:border-dark-bg"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 border-2 border-cream-100 dark:border-dark-bg"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 border-2 border-cream-100 dark:border-dark-bg"></div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">125,000+ Supporters</p>
                <p className="text-gray-600 dark:text-dark-400">Making a difference together</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-xl">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">2024 Year-to-Date Impact</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">$2.4M Raised</p>
                  <p className="text-sm text-green-600 font-medium mt-2">↑ 32% from last year</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-dark-400">Annual Goal Progress</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">72%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 w-[72%] rounded-full transition-all duration-500"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-dark-400 mb-2">Active Programs</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">48</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-dark-400 mb-2">Countries Served</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">52</p>
                  </div>
                </div>

                <button className="w-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 py-3 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all font-medium text-sm">
                  View Full 2024 Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <StatsCard
            label="Lives Impacted"
            value="80,000+"
            change="18,500"
            trend="up"
          />
          <StatsCard
            label="Total Distributed"
            value="$15.2M"
            change="$2.4M"
            trend="up"
          />
          <StatsCard
            label="Team Members"
            value="320"
            change="45"
            trend="up"
          />
          <StatsCard
            label="Satisfaction Rate"
            value="98.5%"
            change="2.3%"
            trend="up"
          />
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Global Reach</h3>
            <p className="text-gray-600 dark:text-dark-400">Operating in multiple regions with strategic partnerships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'Sub-Saharan Africa', countries: 18, beneficiaries: '28,000+', icon: MapPin },
              { region: 'South Asia', countries: 12, beneficiaries: '32,000+', icon: Users },
              { region: 'Southeast Asia', countries: 10, beneficiaries: '15,000+', icon: Globe },
              { region: 'Latin America', countries: 12, beneficiaries: '5,000+', icon: TrendingUp },
            ].map((region, i) => (
              <div key={i} className="bg-cream-100 dark:bg-dark-900/50 rounded-xl p-6 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                <region.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{region.region}</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-dark-400">
                    <span className="font-semibold text-gray-900 dark:text-white">{region.countries}</span> Countries
                  </p>
                  <p className="text-gray-600 dark:text-dark-400">
                    <span className="font-semibold text-gray-900 dark:text-white">{region.beneficiaries}</span> Beneficiaries
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
