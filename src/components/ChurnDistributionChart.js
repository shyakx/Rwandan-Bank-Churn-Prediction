import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { CHART_COLORS, CHART_COLORS_SOLID, ANIMATION_DURATION } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChurnDistributionChart = ({ churnRate, retentionRate }) => {
  const data = {
    labels: ['Churn Risk', 'Retained'],
    datasets: [
      {
        data: [churnRate, retentionRate],
        backgroundColor: [
          CHART_COLORS.RED,
          CHART_COLORS.GREEN,
        ],
        borderColor: [
          CHART_COLORS_SOLID.RED,
          CHART_COLORS_SOLID.GREEN,
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          CHART_COLORS.RED.replace('0.8', '0.9'),
          CHART_COLORS.GREEN.replace('0.8', '0.9'),
        ],
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
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
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
      duration: ANIMATION_DURATION,
    },
  };

  return (
    <div className="relative h-64 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <Pie data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">{churnRate}%</div>
            <div className="text-sm text-gray-600">Churn Risk</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurnDistributionChart;

