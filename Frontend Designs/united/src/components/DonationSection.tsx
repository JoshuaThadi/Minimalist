import { BookOpen, Home, Utensils } from 'lucide-react';

interface DonationCardProps {
  title: string;
  raised: number;
  goal: number;
  status: string;
  icon: React.ReactNode;
  color: string;
}

const DonationCard = ({ title, raised, goal, status, icon, color }: DonationCardProps) => {
  const percentage = (raised / goal) * 100;

  return (
    <div className="bg-primary-100 dark:bg-primary-900/20 rounded-3xl p-8 space-y-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">{status}</span>
        </div>

        <div className="relative h-2 bg-white dark:bg-dark-bg rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary-600 dark:bg-primary-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${raised.toLocaleString()}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            ${goal.toLocaleString()}
          </span>
        </div>
      </div>

      <button className="w-full bg-white dark:bg-dark-surface text-gray-900 dark:text-white py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-dark-bg transition-all duration-300 border border-gray-200 dark:border-dark-border">
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
            Another Smile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <DonationCard
            title="Empower Vulnerable Youth Through Education"
            raised={75000}
            goal={100000}
            status="Fund Raised"
            icon={<BookOpen className="w-6 h-6 text-white" />}
            color="bg-green-500"
          />
          <DonationCard
            title="Support Local Families in Crisis Today"
            raised={45000}
            goal={100000}
            status="Fund Raised"
            icon={<Home className="w-6 h-6 text-white" />}
            color="bg-teal-500"
          />
          <DonationCard
            title="Provide Nutritious Meals to Hungry Children"
            raised={63000}
            goal={100000}
            status="Fund Raised"
            icon={<Utensils className="w-6 h-6 text-white" />}
            color="bg-lime-500"
          />
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all">
            <span>Join the Movement, and Change the Life</span>
            <span className="w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
