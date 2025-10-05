import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ColabVisualization from './ColabVisualization';

const ColabVisualizationGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const visualizations = [
    {
      id: 'age-distribution',
      title: 'Distribution of Age',
      imagePath: '/images/visualizations/age.jpg',
      description: 'Histogram showing the age distribution of customers with KDE overlay. The distribution is multi-modal with peaks around ages 20-25, 40-45, and 50-55, indicating different customer segments.'
    },
    {
      id: 'account-balance-distribution',
      title: 'Distribution of Account Balance',
      imagePath: '/images/visualizations/acc-balance.jpg',
      description: 'Account balance distribution showing a multimodal pattern with peaks around 2M and 4.5M RWF. Most customers have balances between 0-45M RWF with varying frequencies.'
    },
    {
      id: 'transaction-frequency-distribution',
      title: 'Distribution of Transaction Frequency',
      imagePath: '/images/visualizations/txn-frequency.jpg',
      description: 'Transaction frequency distribution ranging from 0-50 transactions. Shows multiple peaks with the highest frequency around 48-50 transactions, indicating active users.'
    },
    {
      id: 'average-transaction-value-distribution',
      title: 'Distribution of Average Transaction Value',
      imagePath: '/images/visualizations/transaction-value.jpg',
      description: 'Average transaction value distribution from 0-500K RWF. The distribution is right-skewed with a prominent peak around 350K RWF, showing most transactions are in the lower value range.'
    },
    {
      id: 'complaint-history-distribution',
      title: 'Distribution of Complaint History',
      imagePath: '/images/visualizations/complaint-history.jpg',
      description: 'Complaint history distribution from 0-5 complaints. Shows relatively uniform distribution with slight variations, indicating consistent complaint patterns across customers.'
    },
    {
      id: 'mobile-banking-usage-distribution',
      title: 'Distribution of Mobile Banking Usage',
      imagePath: '/images/visualizations/mobile-banking.jpg',
      description: 'Mobile banking usage distribution from 0-30. Highly right-skewed with a massive peak at maximum usage (30), indicating heavy mobile banking adoption.'
    },
    {
      id: 'branch-visits-distribution',
      title: 'Distribution of Branch Visits',
      imagePath: '/images/visualizations/branch-visit.jpg',
      description: 'Branch visits distribution from 0-10 visits. Shows varied patterns with peaks at 0, 8, and 9 visits, indicating different customer interaction preferences.'
    },
    {
      id: 'tenure-distribution',
      title: 'Distribution of Tenure',
      imagePath: '/images/visualizations/tenure.jpg',
      description: 'Customer tenure distribution from 0-25 years. Shows irregular multi-modal pattern with peaks around 1-2, 9-10, 16, and 19-20 years tenure.'
    },
    {
      id: 'total-monthly-spend-distribution',
      title: 'Distribution of Total Monthly Spend',
      imagePath: '/images/visualizations/total-monthly-spend.jpg',
      description: 'Total monthly spend distribution from 0-25M RWF. Heavily right-skewed with most customers having low monthly spend and a long tail of high spenders.'
    },
    {
      id: 'balance-to-age-ratio-distribution',
      title: 'Distribution of Balance to Age Ratio',
      imagePath: '/images/visualizations/balance-to-age.jpg',
      description: 'Balance to age ratio distribution from 0-2.5M. Heavily right-skewed with peak around 0.5-0.6M, showing most customers have lower ratios.'
    },
    {
      id: 'complaints-per-product-distribution',
      title: 'Distribution of Complaints Per Product',
      imagePath: '/images/visualizations/Complaints.jpg',
      description: 'Complaints per product distribution from 0-5. Highly multimodal with major peaks near 0 and 1, indicating most products have very few complaints.'
    },
    {
      id: 'mobile-app-engagement-ratio-distribution',
      title: 'Distribution of Mobile App Engagement Ratio',
      imagePath: '/images/visualizations/app-engagement.jpg',
      description: 'Mobile app engagement ratio distribution from 0-30. Extremely right-skewed with massive concentration at very low values, indicating low mobile app engagement overall.'
    },
    {
      id: 'churn-distribution',
      title: 'Churn Distribution',
      imagePath: '/images/visualizations/churn-distribution.jpg',
      description: 'Binary churn distribution showing class imbalance. Category 0 (no churn) has ~840-850 instances while Category 1 (churn) has ~350-360 instances, indicating a 29.6% churn rate.'
    },
    {
      id: 'feature-correlations',
      title: 'Feature Correlations Heatmap',
      imagePath: '/images/visualizations/feature-correlations.jpg',
      description: 'Pearson correlation matrix showing relationships between 17 features. Strong positive correlations between Total_Monthly_Spend and Transaction_Frequency (0.68), and strong negative correlations between Age and Balance_to_Age_Ratio (-0.53).'
    },
    {
      id: 'feature-importance',
      title: 'Top Features Influencing Churn',
      imagePath: '/images/visualizations/feature-importance.jpg',
      description: 'Feature importance analysis showing Gender_Male (23.21) as the most important feature, followed by Branch_Visits (17.55) and Account_Type_Savings (15.87). Customer_ID shows high importance (14.87), suggesting potential data leakage.'
    },
    {
      id: 'roc-curve',
      title: 'ROC Curve',
      imagePath: '/images/visualizations/roc-curve.jpg',
      description: 'ROC curve showing model performance with AUC = 0.46. The curve lies below the random classifier line, indicating poor discriminative ability - worse than random chance (0.5).'
    }
  ];

  const openModal = (visualization) => {
    setSelectedImage(visualization);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = visualizations.findIndex(v => v.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % visualizations.length;
    setSelectedImage(visualizations[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = visualizations.findIndex(v => v.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? visualizations.length - 1 : currentIndex - 1;
    setSelectedImage(visualizations[prevIndex]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">Data Visualizations from Colab Notebook</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          These visualizations show the actual data distributions, model performance, and feature analysis 
          from our machine learning pipeline. Click on any image to view it in full size.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visualizations.map((viz) => (
          <motion.div
            key={viz.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => openModal(viz)}
          >
            <ColabVisualization
              title={viz.title}
              imagePath={viz.imagePath}
              description={viz.description}
              className="hover:shadow-lg transition-shadow duration-200"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for full-size image viewing */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-6xl max-h-full overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-black">{selectedImage.title}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevImage}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                src={selectedImage.imagePath}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '70vh' }}
              />
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColabVisualizationGallery;
