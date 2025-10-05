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

const ConfusionMatrixChart = () => {
  // Confusion Matrix data from Colab notebook results
  const confusionMatrixData = [
    [26, 143], // True Negatives, False Positives
    [11, 60]   // False Negatives, True Positives
  ];

  const data = {
    labels: ['Predicted No Churn', 'Predicted Churn'],
    datasets: [
      {
        label: 'Actual No Churn',
        data: [26, 143],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)', // True Negative - Green
          'rgba(239, 68, 68, 0.8)', // False Positive - Red
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Actual Churn',
        data: [11, 60],
        backgroundColor: [
          'rgba(249, 115, 22, 0.8)', // False Negative - Orange
          'rgba(34, 197, 94, 0.8)',  // True Positive - Green
        ],
        borderColor: [
          'rgba(249, 115, 22, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(75, 85, 99, 0.8)',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            const labels = ['True Negative', 'False Positive', 'False Negative', 'True Positive'];
            const index = context.datasetIndex * 2 + context.dataIndex;
            return `${labels[index]}: ${context.parsed.y}`;
          }
        }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Predicted',
          color: 'rgba(75, 85, 99, 0.8)',
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
        },
        ticks: {
          color: 'rgba(75, 85, 99, 0.8)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
          color: 'rgba(75, 85, 99, 0.8)',
        },
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
    <div className="h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ConfusionMatrixChart;
