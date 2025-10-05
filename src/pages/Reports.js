import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';
import ChurnByDemographicsChart from '../components/ChurnByDemographicsChart';
import ChurnTrendsChart from '../components/ChurnTrendsChart';
import CorrelationHeatmap from '../components/CorrelationHeatmap';
import ChurnByProductChart from '../components/ChurnByProductChart';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportOptions = [
    { id: 'overview', name: 'Overview Report', icon: BarChart3 },
    { id: 'demographics', name: 'Demographics Analysis', icon: Users },
    { id: 'products', name: 'Product Usage Analysis', icon: DollarSign },
    { id: 'trends', name: 'Trend Analysis', icon: TrendingUp }
  ];

  const periodOptions = [
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
    { value: '2years', label: 'Last 2 Years' }
  ];

  const handleDownloadReport = (format) => {
    // Mock download functionality
    // In a real app, this would trigger an API call to generate and download the report
    console.log(`Downloading ${format} report for ${selectedReport} (${selectedPeriod})`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Rwanda Banking Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive insights and downloadable reports for Rwanda market</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
          >
            {periodOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <button
            onClick={() => handleDownloadReport('pdf')}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 rounded-lg transition-colors"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </motion.div>

      {/* Report Type Selector */}
      <motion.div variants={itemVariants} className="bg-white border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Report Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportOptions.map((report) => {
            const Icon = report.icon;
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-200 ${
                  selectedReport === report.id
                    ? 'bg-blue-600/20 border-blue-500/30 text-blue-400'
                    : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500'
                }`}
              >
                <Icon size={24} />
                <span className="font-medium">{report.name}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Overview Report */}
      {selectedReport === 'overview' && (
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5.12%</div>
              <div className="text-gray-600">Overall Churn Rate</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">94.88%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">2.4B RWF</div>
              <div className="text-gray-600">Revenue at Risk</div>
            </div>
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">89.2%</div>
              <div className="text-gray-600">Model Accuracy</div>
            </div>
          </div>

          {/* Churn Trends */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Churn Trends Over Time</h3>
              <button
                onClick={() => handleDownloadReport('image')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                <Download size={16} />
                <span className="text-sm">Export</span>
              </button>
            </div>
            <div className="h-80">
              <ChurnTrendsChart period={selectedPeriod} />
            </div>
          </div>

          {/* Correlation Heatmap */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Feature Correlation Matrix</h3>
              <button
                onClick={() => handleDownloadReport('image')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                <Download size={16} />
                <span className="text-sm">Export</span>
              </button>
            </div>
            <div className="h-80">
              <CorrelationHeatmap />
            </div>
          </div>
        </motion.div>
      )}

      {/* Demographics Report */}
      {selectedReport === 'demographics' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Churn by Demographics</h3>
              <button
                onClick={() => handleDownloadReport('image')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                <Download size={16} />
                <span className="text-sm">Export</span>
              </button>
            </div>
            <div className="h-96">
              <ChurnByDemographicsChart />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Age Group Analysis</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">18-25</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-black font-medium">7.8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">26-35</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-black font-medium">6.5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">36-50</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-black font-medium">4.5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">50+</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    <span className="text-black font-medium">3.2%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Gender Distribution</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Female</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                    <span className="text-black font-medium">5.5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Male</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                    <span className="text-black font-medium">4.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Product Usage Report */}
      {selectedReport === 'products' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Churn by Product Usage</h3>
              <button
                onClick={() => handleDownloadReport('image')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                <Download size={16} />
                <span className="text-sm">Export</span>
              </button>
            </div>
            <div className="h-96">
              <ChurnByProductChart />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Product Usage Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <div className="text-black font-medium">Mobile Money</div>
                    <div className="text-gray-600 text-sm">High usage = Lower churn</div>
                  </div>
                  <div className="text-green-400 font-bold">-3.2%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <div className="text-black font-medium">Credit Card</div>
                    <div className="text-gray-600 text-sm">Multiple cards = Lower churn</div>
                  </div>
                  <div className="text-green-400 font-bold">-1.8%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <div className="text-black font-medium">SACCO Membership</div>
                    <div className="text-gray-600 text-sm">SACCO accounts = Lower churn</div>
                  </div>
                  <div className="text-green-400 font-bold">-2.5%</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Account Type Risk</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Basic</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-black font-medium">8.5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Standard</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                    <span className="text-black font-medium">6.2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Premium</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    <span className="text-black font-medium">2.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Recommendations</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-blue-400 font-medium text-sm">Promote Mobile Money</div>
                  <div className="text-gray-600 text-xs">Increase adoption among at-risk customers</div>
                </div>
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="text-green-400 font-medium text-sm">Upsell Premium</div>
                  <div className="text-gray-600 text-xs">Offer premium features to standard customers</div>
                </div>
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <div className="text-purple-400 font-medium text-sm">SACCO Partnerships</div>
                  <div className="text-gray-600 text-xs">Introduce SACCO products to reduce churn</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Trend Analysis Report */}
      {selectedReport === 'trends' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Churn Prediction Trends</h3>
              <button
                onClick={() => handleDownloadReport('image')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
              >
                <Download size={16} />
                <span className="text-sm">Export</span>
              </button>
            </div>
            <div className="h-96">
              <ChurnTrendsChart period={selectedPeriod} showPredictions={true} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Seasonal Patterns</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">Q1 (Jan-Mar)</span>
                  <span className="text-orange-400 font-medium">5.8%</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">Q2 (Apr-Jun)</span>
                  <span className="text-red-400 font-medium">6.2%</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">Q3 (Jul-Sep)</span>
                  <span className="text-blue-400 font-medium">4.9%</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">Q4 (Oct-Dec)</span>
                  <span className="text-green-400 font-medium">3.8%</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-black mb-4">Model Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="text-green-400 font-medium">89.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Precision</span>
                  <span className="text-blue-400 font-medium">87.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recall</span>
                  <span className="text-purple-400 font-medium">91.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">F1-Score</span>
                  <span className="text-orange-400 font-medium">89.3%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Reports;

