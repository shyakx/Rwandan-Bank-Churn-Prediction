import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendDirection, 
  color = 'blue',
  subtitle 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-white',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      trendUp: 'text-blue-600',
      trendDown: 'text-gray-600'
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-blue-100`}>
          <Icon className={`${colors.icon}`} size={24} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${
            trendDirection === 'up' ? colors.trendUp : colors.trendDown
          }`}>
            {trendDirection === 'up' ? (
              <ArrowUpRight size={16} />
            ) : (
              <ArrowDownRight size={16} />
            )}
            <span className="text-sm font-medium">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <p className="text-black text-2xl font-bold mb-1">{value}</p>
        {subtitle && (
          <p className="text-gray-600 text-xs">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};

export default MetricCard;

