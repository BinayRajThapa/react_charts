import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "../FAKE_DATA";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Weekly Step Count",
        font: {
          size: 20,
        },
        color: "#333",
      },
      legend: {
        position: "top",
        labels: {
          color: "#555",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#666",
        },
      },
      x: {
        ticks: {
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line options={options} data={lineChartData} />
    </div>
  );
};
