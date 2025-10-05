import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter,
  Download,
  Mail,
  MessageSquare,
  Phone,
  ChevronDown,
  ChevronUp,
  User,
  AlertTriangle,
  DollarSign,
  Calendar,
  Eye
} from 'lucide-react';
import { RISK_THRESHOLDS, ACCOUNT_TYPES, AGE_GROUPS, TENURE_GROUPS, RISK_PROBABILITY_GROUPS } from '../constants';

// Mock data for retention list
const customers = [
    {
      id: '1000001',
      name: 'Mukamana Grace',
      accountType: 'Premium',
      balance: 2500000, // RWF
      churnProbability: 89.5,
      tenure: 2.3,
      age: 34,
      riskScore: 94.2,
      products: ['Checking', 'Savings', 'Credit Card', 'Mobile Money'],
      lastActivity: '2 days ago'
    },
    {
      id: '1000002',
      name: 'Nkurunziza Jean',
      accountType: 'Standard',
      balance: 650000, // RWF
      churnProbability: 87.2,
      tenure: 1.8,
      age: 28,
      riskScore: 91.8,
      products: ['Checking', 'Savings', 'Mobile Money'],
      lastActivity: '5 days ago'
    },
    {
      id: '1000003',
      name: 'Uwimana Marie',
      accountType: 'Premium',
      balance: 4200000, // RWF
      churnProbability: 84.1,
      tenure: 4.2,
      age: 42,
      riskScore: 89.5,
      products: ['Checking', 'Savings', 'SACCO', 'Mobile Money'],
      lastActivity: '1 day ago'
    },
    {
      id: '1000004',
      name: 'Mugisha Paul',
      accountType: 'Basic',
      balance: 300000, // RWF
      churnProbability: 82.7,
      tenure: 1.2,
      age: 25,
      riskScore: 88.3,
      products: ['Checking', 'Mobile Money'],
      lastActivity: '3 days ago'
    },
    {
      id: '1000005',
      name: 'Nyiraneza Claire',
      accountType: 'Premium',
      balance: 1200000, // RWF
      churnProbability: 79.8,
      tenure: 3.7,
      age: 38,
      riskScore: 86.9,
      products: ['Checking', 'Savings', 'Credit Card', 'Mobile Money'],
      lastActivity: '4 days ago'
    },
    {
      id: '1000006',
      name: 'Habyarimana Joseph',
      accountType: 'Standard',
      balance: 800000, // RWF
      churnProbability: 76.3,
      tenure: 2.1,
      age: 45,
      riskScore: 83.2,
      products: ['Checking', 'Savings', 'Mobile Money'],
      lastActivity: '6 days ago'
    },
    {
      id: '1000007',
      name: 'Mukamana Jennifer',
      accountType: 'Premium',
      balance: 1700000, // RWF
      churnProbability: 74.8,
      tenure: 5.3,
      age: 52,
      riskScore: 81.5,
      products: ['Checking', 'Savings', 'Investment', 'Credit Card'],
      lastActivity: '2 days ago'
    },
    {
      id: '1000008',
      name: 'James Wilson',
      accountType: 'Basic',
      balance: 8900,
      churnProbability: 72.1,
      tenure: 0.8,
      age: 22,
      riskScore: 79.8,
      products: ['Checking'],
      lastActivity: '7 days ago'
    }
];

const RetentionList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('churnProbability');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filters, setFilters] = useState({
    accountType: '',
    ageGroup: '',
    tenure: '',
    riskProbability: '',
    productUsage: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  // Filter and sort logic
  const filteredAndSortedCustomers = useMemo(() => {
    let filtered = customers.filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           customer.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesAccountType = !filters.accountType || customer.accountType === filters.accountType;
      const matchesAgeGroup = !filters.ageGroup || (
        (filters.ageGroup === '18-25' && customer.age >= 18 && customer.age <= 25) ||
        (filters.ageGroup === '26-35' && customer.age >= 26 && customer.age <= 35) ||
        (filters.ageGroup === '36-50' && customer.age >= 36 && customer.age <= 50) ||
        (filters.ageGroup === '50+' && customer.age > 50)
      );
      const matchesTenure = !filters.tenure || (
        (filters.tenure === '<1' && customer.tenure < 1) ||
        (filters.tenure === '1-2' && customer.tenure >= 1 && customer.tenure < 2) ||
        (filters.tenure === '2-5' && customer.tenure >= 2 && customer.tenure < 5) ||
        (filters.tenure === '5+' && customer.tenure >= 5)
      );
      const matchesRisk = !filters.riskProbability || (
        (filters.riskProbability === '90+' && customer.churnProbability >= 90) ||
        (filters.riskProbability === '80-90' && customer.churnProbability >= 80 && customer.churnProbability < 90) ||
        (filters.riskProbability === '70-80' && customer.churnProbability >= 70 && customer.churnProbability < 80) ||
        (filters.riskProbability === '<70' && customer.churnProbability < 70)
      );

      return matchesSearch && matchesAccountType && matchesAgeGroup && matchesTenure && matchesRisk;
    });

    // Sort
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, filters, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId) 
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const handleSelectAll = () => {
    if (selectedCustomers.length === filteredAndSortedCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(filteredAndSortedCustomers.map(c => c.id));
    }
  };

  const getRiskColor = (score) => {
    if (score >= 90) return 'text-red-400 bg-red-500/20 border-red-500/30';
    if (score >= 80) return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
    if (score >= 70) return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    return 'text-green-400 bg-green-500/20 border-green-500/30';
  };

  const getAccountTypeColor = (type) => {
    switch (type) {
      case 'Premium': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'Standard': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const handleExport = () => {
    const csvData = filteredAndSortedCustomers.map(customer => ({
      'Customer ID': customer.id,
      'Name': customer.name,
      'Account Type': customer.accountType,
      'Balance': customer.balance,
      'Churn Probability': customer.churnProbability,
      'Tenure': customer.tenure,
      'Age': customer.age,
      'Risk Score': customer.riskScore,
      'Last Activity': customer.lastActivity
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'retention-list.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Rwanda Customer Retention List</h1>
          <p className="text-gray-600">Manage at-risk customers and retention campaigns</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 rounded-lg transition-colors"
          >
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 rounded-lg transition-colors">
            <Mail size={18} />
            <span>Bulk Email</span>
          </button>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-blue-200 rounded-xl p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by customer name or ID..."
              className="w-full pl-10 pr-4 py-3 bg-blue-600 border border-blue-600 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 bg-blue-600 border border-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <select
                value={filters.accountType}
                onChange={(e) => setFilters(prev => ({ ...prev, accountType: e.target.value }))}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
              >
                <option value="">All Account Types</option>
                <option value="Premium">Premium</option>
                <option value="Standard">Standard</option>
                <option value="Basic">Basic</option>
              </select>

              <select
                value={filters.ageGroup}
                onChange={(e) => setFilters(prev => ({ ...prev, ageGroup: e.target.value }))}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
              >
                <option value="">All Age Groups</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-50">36-50</option>
                <option value="50+">50+</option>
              </select>

              <select
                value={filters.tenure}
                onChange={(e) => setFilters(prev => ({ ...prev, tenure: e.target.value }))}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
              >
                <option value="">All Tenures</option>
                <option value="<1">&lt; 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>

              <select
                value={filters.riskProbability}
                onChange={(e) => setFilters(prev => ({ ...prev, riskProbability: e.target.value }))}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
              >
                <option value="">All Risk Levels</option>
                <option value="90+">90%+ Risk</option>
                <option value="80-90">80-90% Risk</option>
                <option value="70-80">70-80% Risk</option>
                <option value="<70">&lt; 70% Risk</option>
              </select>

              <button
                onClick={() => setFilters({ accountType: '', ageGroup: '', tenure: '', riskProbability: '', productUsage: '' })}
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Results Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <div className="text-gray-600">
          Showing {filteredAndSortedCustomers.length} of {customers.length} at-risk customers
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 text-sm">
            {selectedCustomers.length} selected
          </span>
          {selectedCustomers.length > 0 && (
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 rounded-lg transition-colors">
                <Mail size={14} />
                <span className="text-sm">Email</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 rounded-lg transition-colors">
                <MessageSquare size={14} />
                <span className="text-sm">SMS</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-400 rounded-lg transition-colors">
                <Phone size={14} />
                <span className="text-sm">Call</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Customer Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white border border-blue-200 rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.length === filteredAndSortedCustomers.length && filteredAndSortedCustomers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th 
                  className="text-left py-4 px-6 text-gray-600 font-medium cursor-pointer hover:text-black transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Customer</span>
                    {sortField === 'name' && (sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </div>
                </th>
                <th 
                  className="text-left py-4 px-6 text-gray-600 font-medium cursor-pointer hover:text-black transition-colors"
                  onClick={() => handleSort('accountType')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Account Type</span>
                    {sortField === 'accountType' && (sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </div>
                </th>
                <th 
                  className="text-left py-4 px-6 text-gray-600 font-medium cursor-pointer hover:text-black transition-colors"
                  onClick={() => handleSort('balance')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Balance</span>
                    {sortField === 'balance' && (sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </div>
                </th>
                <th 
                  className="text-left py-4 px-6 text-gray-600 font-medium cursor-pointer hover:text-black transition-colors"
                  onClick={() => handleSort('churnProbability')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Risk Score</span>
                    {sortField === 'churnProbability' && (sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </div>
                </th>
                <th 
                  className="text-left py-4 px-6 text-gray-600 font-medium cursor-pointer hover:text-black transition-colors"
                  onClick={() => handleSort('tenure')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Tenure</span>
                    {sortField === 'tenure' && (sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </div>
                </th>
                <th className="text-left py-4 px-6 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedCustomers.map((customer, index) => (
                <motion.tr
                  key={customer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedCustomers.includes(customer.id)}
                      onChange={() => handleSelectCustomer(customer.id)}
                      className="rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-black font-medium">{customer.name}</div>
                        <div className="text-gray-600 text-sm">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getAccountTypeColor(customer.accountType)}`}>
                      {customer.accountType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={16} className="text-green-400" />
                      <span className="text-black">{customer.balance.toLocaleString()} RWF</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRiskColor(customer.churnProbability)}`}>
                        <AlertTriangle size={12} className="mr-1" />
                        {customer.churnProbability}%
                      </span>
                      <div className="flex-1 bg-slate-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full"
                          style={{ width: `${customer.churnProbability}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-gray-600" />
                      <span className="text-black">{customer.tenure}y</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 text-gray-600 hover:text-blue-400 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-gray-600 hover:text-green-400 transition-colors">
                        <Mail size={16} />
                      </button>
                      <button className="p-1.5 text-gray-600 hover:text-purple-400 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default RetentionList;

