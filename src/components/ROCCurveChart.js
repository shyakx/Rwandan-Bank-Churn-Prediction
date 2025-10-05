import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ROCCurveChart = () => {
  // Mock ROC curve data based on typical ML model performance
  const data = {
    labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    datasets: [
      {
        label: 'ROC Curve (AUC = 0.46)',
        data: [0, 0.12, 0.18, 0.25, 0.32, 0.38, 0.42, 0.44, 0.45, 0.46, 0.46],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Random Classifier',
        data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        borderColor: 'rgba(156, 163, 175, 1)',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
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
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'False Positive Rate',
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
          text: 'True Positive Rate',
          color: 'rgba(75, 85, 99, 0.8)',
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
        },
        ticks: {
          color: 'rgba(75, 85, 99, 0.8)',
        },
        min: 0,
        max: 1,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default ROCCurveChart;
