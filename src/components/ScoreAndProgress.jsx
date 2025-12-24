import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function ScoreAndProgress({ overallScore, reportData }) {
  const barColors = [
    "rgba(59, 130, 246, 0.8)",
    "rgba(16, 185, 129, 0.8)",
    "rgba(245, 158, 11, 0.8)", 
    "rgba(139, 92, 246, 0.8)",
  ];

  const data = {
    labels: Object.keys(reportData.skills).map(
      (skill) => skill.charAt(0).toLocaleUpperCase() + skill.slice(1)
    ),
    datasets: [
      {
        label: "Student Scores",
        data: Object.values(reportData.skills),
        backgroundColor: barColors,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 2000,
        easing: "easeOutQuart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value,
        font: {
          weight: "bold",
          size: 14,
        },
        color: (context) => barColors[context.dataIndex],
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Overall Score Card */}
      <div className="flex flex-col items-center justify-center p-10 bg-blue-50 rounded-lg border border-blue-100">
        <span className="text-sm font-semibold text-blue-600 uppercase">
          Overall Score
        </span>
        <div className="text-7xl font-black text-blue-900 mt-2">
          {overallScore}
          <span className="text-2xl text-blue-400">/9</span>
        </div>
      </div>

      {/* Radar Chart Replacement  */}
      <div className="p-4 bg-white rounded-lg border border-gray-100 flex justify-center">
        <div className="w-full flex items-center justify-center h-64">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
