import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  AlertTriangle, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Eye
} from 'lucide-react';

const TopRiskCustomersTable = () => {
  // Mock data for top risk customers
  const customers = [
    {
      id: '1000001',
      name: 'Mukamana Grace',
      accountType: 'Premium',
      balance: 2500000, // RWF
      riskScore: 94.2,
      churnProbability: 89.5,
      tenure: 2.3,
      lastActivity: '2 days ago'
    },
    {
      id: '1000002',
      name: 'Nkurunziza Jean',
      accountType: 'Standard',
      balance: 650000, // RWF
      riskScore: 91.8,
      churnProbability: 87.2,
      tenure: 1.8,
      lastActivity: '5 days ago'
    },
    {
      id: '1000003',
      name: 'Uwimana Marie',
      accountType: 'Premium',
      balance: 4200000, // RWF
      riskScore: 89.5,
      churnProbability: 84.1,
      tenure: 4.2,
      lastActivity: '1 day ago'
    },
    {
      id: '1000004',
      name: 'Mugisha Paul',
      accountType: 'Basic',
      balance: 300000, // RWF
      riskScore: 88.3,
      churnProbability: 82.7,
      tenure: 1.2,
      lastActivity: '3 days ago'
    },
    {
      id: '1000005',
      name: 'Nyiraneza Claire',
      accountType: 'Premium',
      balance: 1200000, // RWF
      riskScore: 86.9,
      churnProbability: 79.8,
      tenure: 3.7,
      lastActivity: '4 days ago'
    }
  ];

  const getRiskColor = (score) => {
    if (score >= 90) return 'text-black bg-blue-100 border-blue-300';
    if (score >= 80) return 'text-black bg-blue-50 border-blue-200';
    return 'text-black bg-gray-100 border-gray-200';
  };

  const getAccountTypeColor = (type) => {
    switch (type) {
      case 'Premium': return 'text-black bg-blue-100 border-blue-300';
      case 'Standard': return 'text-black bg-blue-50 border-blue-200';
      default: return 'text-black bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-2 text-black font-medium">Customer</th>
            <th className="text-left py-4 px-2 text-black font-medium">Account Type</th>
            <th className="text-left py-4 px-2 text-black font-medium">Balance</th>
            <th className="text-left py-4 px-2 text-black font-medium">Risk Score</th>
            <th className="text-left py-4 px-2 text-black font-medium">Churn Probability</th>
            <th className="text-left py-4 px-2 text-black font-medium">Tenure</th>
            <th className="text-left py-4 px-2 text-black font-medium">Last Activity</th>
            <th className="text-left py-4 px-2 text-black font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <motion.tr
              key={customer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="py-4 px-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-black font-medium">{customer.name}</div>
                    <div className="text-gray-600 text-sm">{customer.id}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getAccountTypeColor(customer.accountType)}`}>
                  {customer.accountType}
                </span>
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center space-x-2">
                  <DollarSign size={16} className="text-blue-600" />
                  <span className="text-black">{customer.balance.toLocaleString()} RWF</span>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRiskColor(customer.riskScore)}`}>
                  <AlertTriangle size={12} className="mr-1" />
                  {customer.riskScore}%
                </span>
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${customer.churnProbability}%` }}
                    ></div>
                  </div>
                  <span className="text-black text-sm font-medium">{customer.churnProbability}%</span>
                </div>
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-black">{customer.tenure}y</span>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="text-gray-600 text-sm">{customer.lastActivity}</span>
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                    <Eye size={16} />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors">
                    <TrendingUp size={16} />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopRiskCustomersTable;

