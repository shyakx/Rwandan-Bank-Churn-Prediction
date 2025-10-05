import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  User, 
  Calendar,
  MapPin,
  Plus,
  Mail,
  Phone,
  FileText
} from 'lucide-react';
// import { MOCK_API_DELAY } from '../constants';

const CustomerLookup = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Mock customer data
  const mockCustomer = {
    id: 'CUST001',
    name: 'Mukamana Grace',
    email: 'grace.mukamana@email.com',
    phone: '+250 788 123 456',
    age: 34,
    accountType: 'Premium',
    balance: 2500000, // RWF
    tenure: 2.3,
    creditScore: 745,
    address: 'KG 123 St, Kigali, Rwanda',
    lastLogin: '2 days ago',
    churnProbability: 89.5,
    riskScore: 94.2,
    products: ['Checking', 'Savings', 'Credit Card', 'Mobile Money'],
    transactionStats: {
      frequency: 12.5,
      avgValue: 45000, // RWF
      mobileUsage: 95, // Higher mobile usage in Rwanda
      branchVisits: 1
    },
    complaintHistory: [
      { date: '2024-01-15', type: 'Service', status: 'Resolved' },
      { date: '2023-12-03', type: 'Fee', status: 'Resolved' }
    ]
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSelectedCustomer(mockCustomer);
      setIsSearching(false);
    }, 1000);
  };

  const getRiskLevel = (score) => {
    if (score >= 90) return { level: 'Critical', color: 'red' };
    if (score >= 70) return { level: 'High', color: 'orange' };
    if (score >= 50) return { level: 'Medium', color: 'yellow' };
    return { level: 'Low', color: 'green' };
  };

  const riskLevel = selectedCustomer ? getRiskLevel(selectedCustomer.churnProbability) : null;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-black mb-2">Rwanda Customer Lookup</h1>
        <p className="text-gray-600">Search and analyze individual customer churn risk across Rwanda</p>
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-blue-200 rounded-xl p-6"
      >
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
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
          <button
            type="submit"
            disabled={isSearching}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isSearching ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search size={20} />
                <span>Search</span>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Results */}
      {selectedCustomer && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer Profile Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black">{selectedCustomer.name}</h3>
                <p className="text-gray-600">{selectedCustomer.id}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-500" />
                  <span className="text-black text-sm">{selectedCustomer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gray-500" />
                  <span className="text-black text-sm">{selectedCustomer.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="text-black text-sm">{selectedCustomer.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-black text-sm">Age: {selectedCustomer.age}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-black font-medium mb-3">Account Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Type:</span>
                    <span className="text-black font-medium">{selectedCustomer.accountType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Balance:</span>
                    <span className="text-black font-medium">{selectedCustomer.balance.toLocaleString()} RWF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure:</span>
                    <span className="text-black font-medium">{selectedCustomer.tenure} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Credit Score:</span>
                    <span className="text-black font-medium">{selectedCustomer.creditScore}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-black font-medium mb-3">Products</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCustomer.products.map((product, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full border border-blue-200">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prediction Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Risk Assessment */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-black">Churn Prediction</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  riskLevel.color === 'red' ? 'text-black bg-blue-100 border-blue-300' :
                  riskLevel.color === 'orange' ? 'text-black bg-blue-50 border-blue-200' :
                  riskLevel.color === 'yellow' ? 'text-black bg-gray-100 border-gray-200' :
                  'text-black bg-gray-50 border-gray-200'
                }`}>
                  {riskLevel.level} Risk
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Churn Probability</span>
                    <span className="text-black font-semibold">{selectedCustomer.churnProbability}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-blue-600"
                      style={{ width: `${selectedCustomer.churnProbability}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Risk Score</span>
                    <span className="text-black font-semibold">{selectedCustomer.riskScore}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full"
                      style={{ width: `${selectedCustomer.riskScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 rounded-lg transition-colors">
                  <Plus size={16} />
                  <span>Add to Retention List</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 rounded-lg transition-colors">
                  <Mail size={16} />
                  <span>Send Email</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 rounded-lg transition-colors">
                  <Phone size={16} />
                  <span>Call Customer</span>
                </button>
              </div>
            </div>

            {/* Transaction Analysis */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-6">Transaction Analysis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{selectedCustomer.transactionStats.frequency}</div>
                  <div className="text-gray-600 text-sm">Monthly Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{selectedCustomer.transactionStats.avgValue.toLocaleString()} RWF</div>
                  <div className="text-gray-600 text-sm">Avg Transaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">{selectedCustomer.transactionStats.mobileUsage}%</div>
                  <div className="text-gray-600 text-sm">Mobile Usage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">{selectedCustomer.transactionStats.branchVisits}</div>
                  <div className="text-gray-600 text-sm">Branch Visits</div>
                </div>
              </div>
            </div>

            {/* Complaint History */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-6">Complaint History</h3>
              {selectedCustomer.complaintHistory.length > 0 ? (
                <div className="space-y-3">
                  {selectedCustomer.complaintHistory.map((complaint, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText size={16} className="text-gray-600" />
                        <div>
                          <div className="text-black font-medium">{complaint.type} Issue</div>
                          <div className="text-gray-600 text-sm">{complaint.date}</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        {complaint.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText size={48} className="text-slate-600 mx-auto mb-4" />
                  <p className="text-gray-600">No complaints on record</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* No Results State */}
      {!selectedCustomer && !isSearching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-12"
        >
          <Search size={64} className="text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Search for a Customer</h3>
          <p className="text-slate-500">Enter a customer ID, name, or email to view their churn prediction</p>
        </motion.div>
      )}
    </div>
  );
};

export default CustomerLookup;

