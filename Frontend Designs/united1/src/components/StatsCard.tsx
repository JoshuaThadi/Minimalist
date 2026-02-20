import { TrendingUp } from 'lucide-react';

interface StatData {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
}

export const StatsCard = ({ label, value, change, trend }: StatData) => (
  <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-md">
    <p className="text-sm text-gray-600 dark:text-dark-400 mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <div>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        {change && (
          <p className={`text-xs mt-1 font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '+' : ''}{change}
          </p>
        )}
      </div>
      {trend && (
        <TrendingUp className={`w-4 h-4 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
      )}
    </div>
  </div>
);

export default StatsCard;
