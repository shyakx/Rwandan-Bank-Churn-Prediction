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

const PrecisionRecallChart = () => {
  // Mock Precision-Recall curve data based on typical ML model performance
  const data = {
    labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    datasets: [
      {
        label: 'Precision-Recall Curve',
        data: [0.85, 0.82, 0.78, 0.72, 0.65, 0.58, 0.52, 0.47, 0.42, 0.38, 0.35],
        borderColor: 'rgba(147, 51, 234, 1)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.1,
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
          text: 'Recall',
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
      y: {
        title: {
          display: true,
          text: 'Precision',
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

export default PrecisionRecallChart;
