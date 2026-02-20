import { BookOpen, Home, Utensils, Zap, Heart } from 'lucide-react';

interface DonationCardProps {
  title: string;
  description: string;
  raised: number;
  goal: number;
  status: string;
  icon: React.ReactNode;
  color: string;
  impact: string;
}

const DonationCard = ({ title, description, raised, goal, status, icon, color, impact }: DonationCardProps) => {
  const percentage = (raised / goal) * 100;

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
          {status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-dark-400 mb-6">
        {description}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Progress</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">{Math.round(percentage)}%</span>
          </div>
          <div className="relative h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-dark-700">
          <div>
            <p className="text-xs text-gray-600 dark:text-dark-400 mb-1">Raised</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">${(raised / 1000).toFixed(0)}K</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 dark:text-dark-400 mb-1">Goal</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">${(goal / 1000).toFixed(0)}K</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-800 dark:text-dark-200">
          <span className="font-semibold text-primary-700 dark:text-primary-400">Impact:</span> {impact}
        </p>
      </div>

      <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium">
        Donate Now
      </button>
    </div>
  );
};

const DonationSection = () => {
  return (
    <section className="bg-cream-100 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Donation Means
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Another Smile
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
            Every contribution directly impacts real lives. Here are our active campaigns with immediate need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DonationCard
            title="Empower Vulnerable Youth Through Education"
            description="Providing scholarships and educational resources to underprivileged children in remote areas."
            raised={75000}
            goal={100000}
            status="75% Funded"
            icon={<BookOpen className="w-7 h-7 text-white" />}
            color="bg-blue-500"
            impact="300+ students get quality education annually"
          />
          <DonationCard
            title="Support Local Families in Crisis Today"
            description="Emergency relief and sustainable support programs for families facing unexpected hardship."
            raised={45000}
            goal={100000}
            status="45% Funded"
            icon={<Home className="w-7 h-7 text-white" />}
            color="bg-orange-500"
            impact="500+ families receive housing and aid monthly"
          />
          <DonationCard
            title="Provide Nutritious Meals to Hungry Children"
            description="Daily nutrition programs ensuring food security in vulnerable communities worldwide."
            raised={63000}
            goal={100000}
            status="63% Funded"
            icon={<Utensils className="w-7 h-7 text-white" />}
            color="bg-green-500"
            impact="1,200+ children fed daily with nutritious meals"
          />
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl p-12 border border-gray-200 dark:border-dark-700 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, label: '100% Transparent', desc: 'See exactly where your donation goes' },
              { icon: Zap, label: 'Immediate Impact', desc: 'Funds deployed within 72 hours' },
              { icon: BookOpen, label: 'Regular Updates', desc: 'Monthly reports on program results' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-dark-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Can't choose? Support all programs with a general donation
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-lg hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all font-medium text-lg">
            Make a General Donation
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
