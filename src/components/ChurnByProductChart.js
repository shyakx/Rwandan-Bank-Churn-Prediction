import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChurnByProductChart = () => {
  const data = {
    labels: [
      'Checking Only',
      'Checking + Savings',
      'Multiple Products',
      'Full Suite'
    ],
    datasets: [
      {
        data: [8.5, 6.2, 3.8, 2.1],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',   // red-500
          'rgba(249, 115, 22, 0.8)',  // orange-500
          'rgba(234, 179, 8, 0.8)',   // yellow-500
          'rgba(34, 197, 94, 0.8)',   // green-500
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          'rgba(239, 68, 68, 0.9)',
          'rgba(249, 115, 22, 0.9)',
          'rgba(234, 179, 8, 0.9)',
          'rgba(34, 197, 94, 0.9)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'rgba(148, 163, 184, 0.8)',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed}% churn rate (${percentage}% of total)`;
          }
        }
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-96 h-96">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ChurnByProductChart;

