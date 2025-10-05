import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FeatureDistributionChart = ({ featureName, data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: featureName,
        data: data.values,
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
        },
        ticks: {
          color: 'rgba(75, 85, 99, 0.8)',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
        },
        ticks: {
          color: 'rgba(75, 85, 99, 0.8)',
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="h-64">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default FeatureDistributionChart;
