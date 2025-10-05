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
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChurnTrendsChart = ({ period = '6months', showPredictions = false }) => {
  const getDataByPeriod = (period) => {
    switch (period) {
      case '3months':
        return {
          labels: ['Jan', 'Feb', 'Mar'],
          actual: [4.8, 5.1, 4.9],
          predicted: [4.9, 5.2, 5.0]
        };
      case '6months':
        return {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          actual: [4.7, 4.5, 4.8, 5.2, 4.9, null],
          predicted: [4.6, 4.4, 4.7, 5.3, 4.8, 5.1]
        };
      case '1year':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          actual: [4.2, 4.8, 5.1, 4.9, 5.3, 5.0, 4.7, 4.5, 4.8, 5.2, 4.9, null],
          predicted: [4.1, 4.9, 5.0, 4.8, 5.4, 4.9, 4.6, 4.4, 4.7, 5.3, 4.8, 5.1]
        };
      default:
        return {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          actual: [4.7, 4.5, 4.8, 5.2, 4.9, null],
          predicted: [4.6, 4.4, 4.7, 5.3, 4.8, 5.1]
        };
    }
  };

  const chartData = getDataByPeriod(period);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Actual Churn Rate',
        data: chartData.actual,
        borderColor: 'rgba(249, 115, 22, 1)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: 'rgba(249, 115, 22, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        spanGaps: true,
      },
    ],
  };

  if (showPredictions) {
    data.datasets.push({
      label: 'Predicted Churn Rate',
      data: chartData.predicted,
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      borderDash: [5, 5],
    });
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(148, 163, 184, 0.8)',
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(148, 163, 184, 0.8)',
        },
      },
      y: {
        beginAtZero: true,
        max: 6,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(148, 163, 184, 0.8)',
          callback: function(value) {
            return `${value}%`;
          }
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChurnTrendsChart;

