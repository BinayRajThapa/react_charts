import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";
import { PieChartData } from "../FAKE_DATA";

Chartjs.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Time Spent on Social Media",
        font: {
          size: 20,
        },
        color: "#333",
      },
      legend: {
        position: "right",
        labels: {
          color: "#555",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Pie options={options} data={PieChartData} />
    </div>
  );
};
