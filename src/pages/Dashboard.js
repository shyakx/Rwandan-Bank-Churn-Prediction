import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  AlertTriangle, 
  DollarSign, 
  Clock,
  TrendingUp,
  ArrowUpRight,
  Search
} from 'lucide-react';
import MetricCard from '../components/MetricCard';
import ChurnDistributionChart from '../components/ChurnDistributionChart';
import TopRiskCustomersTable from '../components/TopRiskCustomersTable';
import FeatureImportanceChart from '../components/FeatureImportanceChart';
import MonthlyChurnTrendsChart from '../components/MonthlyChurnTrendsChart';
import RealVisualizationCard from '../components/RealVisualizationCard';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const metrics = {
    totalCustomers: 45678,
    atRiskCustomers: 13520, // 29.6% of total customers
    avgAccountBalance: 1250000, // RWF (Rwandan Franc)
    avgTenure: 3.2,
    churnRate: 29.6, // Actual churn rate from model
    retentionRate: 70.4 // 100 - 29.6
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
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">
          Rwanda Banking Churn Prediction Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor customer churn risk across Rwanda and take proactive retention actions
        </p>
      </motion.div>

      {/* Key Metrics Cards */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <MetricCard
          title="Total Customers"
          value={metrics.totalCustomers.toLocaleString()}
          icon={Users}
          trend={2.5}
          trendDirection="up"
          color="blue"
        />
        <MetricCard
          title="At-Risk Customers"
          value={metrics.atRiskCustomers.toLocaleString()}
          icon={AlertTriangle}
          trend={-1.2}
          trendDirection="down"
          color="blue"
          subtitle={`${((metrics.atRiskCustomers / metrics.totalCustomers) * 100).toFixed(1)}% of total`}
        />
        <MetricCard
          title="Avg Account Balance"
          value={`${metrics.avgAccountBalance.toLocaleString()} RWF`}
          icon={DollarSign}
          trend={3.8}
          trendDirection="up"
          color="blue"
          subtitle="Of churners"
        />
        <MetricCard
          title="Avg Tenure"
          value={`${metrics.avgTenure} years`}
          icon={Clock}
          trend={-0.5}
          trendDirection="down"
          color="blue"
          subtitle="Of at-risk customers"
        />
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Churn Distribution */}
        <motion.div variants={itemVariants}>
          <div className="bg-white border border-blue-200 rounded-xl p-6 h-96">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Churn Distribution</h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Churn ({metrics.churnRate}%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <span className="text-gray-600">Retained ({metrics.retentionRate}%)</span>
                </div>
              </div>
            </div>
            <ChurnDistributionChart 
              churnRate={metrics.churnRate} 
              retentionRate={metrics.retentionRate} 
            />
          </div>
        </motion.div>

        {/* Feature Importance */}
        <motion.div variants={itemVariants}>
          <div className="bg-white border border-blue-200 rounded-xl p-6 h-96">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black">Feature Importance</h3>
              <span className="text-sm text-gray-600">XGBoost + Logistic Regression Ensemble</span>
            </div>
            <FeatureImportanceChart />
          </div>
        </motion.div>
      </div>

      {/* Monthly Trends */}
      <motion.div variants={itemVariants}>
        <div className="bg-white border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-black">Monthly Churn Trends</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Predicted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span className="text-gray-600">Actual</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <MonthlyChurnTrendsChart />
          </div>
        </div>
      </motion.div>

      {/* Top Risk Customers Table */}
      <motion.div variants={itemVariants}>
        <div className="bg-white border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-black">Top Risk Customers</h3>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-500 transition-colors">
              <span className="text-sm">View All</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
          <TopRiskCustomersTable />
        </div>
      </motion.div>

      {/* Real Data Visualizations */}
      <motion.div variants={itemVariants}>
        <div className="bg-white border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black mb-6">Key Data Insights from Colab Analysis</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RealVisualizationCard
              title="Churn Distribution"
              imagePath="/images/visualizations/churn-distribution.jpg"
              description="Shows the class imbalance with 29.6% churn rate (350-360 churned vs 840-850 retained customers)."
            />
            <RealVisualizationCard
              title="Feature Importance"
              imagePath="/images/visualizations/feature-importance.jpg"
              description="Gender_Male (23.21) and Branch_Visits (17.55) are the most predictive features for churn."
            />
            <RealVisualizationCard
              title="ROC Curve Performance"
              imagePath="/images/visualizations/roc-curve.jpg"
              description="Model shows poor discriminative ability with AUC = 0.46, indicating need for improvement."
            />
            <RealVisualizationCard
              title="Feature Correlations"
              imagePath="/images/visualizations/feature-correlations.jpg"
              description="Strong correlations between Total_Monthly_Spend and Transaction_Frequency (0.68)."
            />
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <div className="bg-white border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center space-x-3 p-4 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-lg transition-all duration-200 group">
              <Search className="text-white group-hover:text-white" size={20} />
              <span className="text-white font-medium">Search Customer</span>
            </button>
            <button className="flex items-center justify-center space-x-3 p-4 bg-blue-500 hover:bg-blue-600 border border-blue-500 rounded-lg transition-all duration-200 group">
              <Users className="text-white group-hover:text-white" size={20} />
              <span className="text-white font-medium">View Retention List</span>
            </button>
            <button className="flex items-center justify-center space-x-3 p-4 bg-blue-400 hover:bg-blue-500 border border-blue-400 rounded-lg transition-all duration-200 group">
              <TrendingUp className="text-white group-hover:text-white" size={20} />
              <span className="text-white font-medium">Generate Report</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;

