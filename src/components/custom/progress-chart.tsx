'use client';

import { useState } from 'react';
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
import { XPEvolution } from '@/lib/types/progress';
import { Calendar, TrendingUp, BarChart3 } from 'lucide-react';

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

interface ProgressChartProps {
  dailyData: XPEvolution[];
  weeklyData: XPEvolution[];
  monthlyData: XPEvolution[];
}

type ChartPeriod = 'daily' | 'weekly' | 'monthly';

export default function ProgressChart({ dailyData, weeklyData, monthlyData }: ProgressChartProps) {
  const [period, setPeriod] = useState<ChartPeriod>('weekly');

  const getData = () => {
    switch (period) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
    }
  };

  const currentData = getData();

  const chartData = {
    labels: currentData.map((d) => d.label),
    datasets: [
      {
        label: 'XP Ganho',
        data: currentData.map((d) => d.xp),
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(234, 179, 8)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
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
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(234, 179, 8)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context: any) => `${context.parsed.y} XP`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Evolução de XP</h3>
          <p className="text-sm text-gray-400">Acompanhe seu progresso ao longo do tempo</p>
        </div>
        <TrendingUp className="w-6 h-6 text-yellow-500" />
      </div>

      {/* Filtros de período */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPeriod('daily')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            period === 'daily'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Diário
        </button>
        <button
          onClick={() => setPeriod('weekly')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            period === 'weekly'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Semanal
        </button>
        <button
          onClick={() => setPeriod('monthly')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            period === 'monthly'
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Mensal
        </button>
      </div>

      {/* Gráfico */}
      <div className="h-64 sm:h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
