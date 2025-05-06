import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChartData } from "../FAKE_DATA";

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Expenses",
        font: {
          size: 20,
        },
        color: "#333",
      },
      legend: {
        display: false,
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
      <Bar options={options} data={BarChartData} />
    </div>
  );
};
