import React from 'react';

const CorrelationHeatmap = () => {
  const features = [
    'Age',
    'Account Balance',
    'Transaction Frequency',
    'Tenure',
    'Credit Score',
    'Product Usage',
    'Mobile Banking',
    'Branch Visits'
  ];

  const correlationMatrix = [
    [1.00, -0.15, 0.23, 0.31, 0.28, -0.12, -0.08, 0.05], // Age
    [-0.15, 1.00, 0.45, 0.38, 0.42, 0.51, 0.18, -0.21],  // Account Balance
    [0.23, 0.45, 1.00, 0.29, 0.35, 0.38, 0.52, -0.15],   // Transaction Frequency
    [0.31, 0.38, 0.29, 1.00, 0.41, 0.33, 0.25, 0.12],    // Tenure
    [0.28, 0.42, 0.35, 0.41, 1.00, 0.29, 0.18, -0.08],   // Credit Score
    [-0.12, 0.51, 0.38, 0.33, 0.29, 1.00, 0.31, -0.18],  // Product Usage
    [-0.08, 0.18, 0.52, 0.25, 0.18, 0.31, 1.00, -0.22],  // Mobile Banking
    [0.05, -0.21, -0.15, 0.12, -0.08, -0.18, -0.22, 1.00] // Branch Visits
  ];

  const getColor = (value) => {
    const absValue = Math.abs(value);
    if (absValue >= 0.7) {
      return value > 0 ? 'bg-blue-600' : 'bg-red-600';
    } else if (absValue >= 0.5) {
      return value > 0 ? 'bg-blue-500' : 'bg-red-500';
    } else if (absValue >= 0.3) {
      return value > 0 ? 'bg-blue-400' : 'bg-red-400';
    } else if (absValue >= 0.1) {
      return value > 0 ? 'bg-blue-300' : 'bg-red-300';
    } else {
      return 'bg-slate-600';
    }
  };

  const getTextColor = (value) => {
    const absValue = Math.abs(value);
    return absValue >= 0.3 ? 'text-white' : 'text-slate-400';
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-slate-800/50 rounded-lg p-6 max-w-full overflow-x-auto">
        <div className="min-w-max">
          {/* Header row */}
          <div className="flex">
            <div className="w-24 h-8"></div> {/* Empty corner */}
            {features.map((feature, index) => (
              <div key={index} className="w-16 h-8 flex items-center justify-center text-xs text-slate-400 font-medium transform -rotate-45 origin-center">
                {feature.split(' ')[0]}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {features.map((feature, rowIndex) => (
            <div key={rowIndex} className="flex">
              {/* Feature label */}
              <div className="w-24 h-12 flex items-center text-xs text-slate-300 font-medium pr-2">
                {feature}
              </div>
              
              {/* Correlation values */}
              {correlationMatrix[rowIndex].map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-16 h-12 flex items-center justify-center text-xs font-medium ${getColor(value)} ${getTextColor(value)} rounded-sm mx-0.5`}
                  title={`${features[rowIndex]} vs ${features[colIndex]}: ${value.toFixed(2)}`}
                >
                  {Math.abs(value) >= 0.1 ? value.toFixed(2) : ''}
                </div>
              ))}
            </div>
          ))}

          {/* Color legend */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span>Strong Negative</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-400 rounded"></div>
              <span>Moderate Negative</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-slate-600 rounded"></div>
              <span>Weak</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span>Moderate Positive</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span>Strong Positive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrelationHeatmap;

