import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  DoughnutController,
  Legend,
  Tooltip,
  Title,
  ChartData,
} from "chart.js";
import { FC } from "react";

Chart.register(ArcElement, DoughnutController, Legend, Tooltip, Title);

interface IDonutChart {
  title: string;
  data: ChartData<"doughnut", number[], string>;
}

export const DonutChart: FC<IDonutChart> = ({ title, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    // rotation: -90,
    // circumference: 180,
  };

  return <Doughnut data={data} options={options as any} />;
};
