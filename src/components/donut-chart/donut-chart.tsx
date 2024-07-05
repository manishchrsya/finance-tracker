import { FC } from "react";
import { ChartProps } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";

// Define the props type for the DonutChart component
interface IDonutChart extends Omit<ChartProps<"doughnut">, "type"> {
  data: ChartData<"doughnut">;
}

const DonutChart: FC<IDonutChart> = ({ data, ...props }) => {
  return <Doughnut data={data} {...props} />;
};

export default DonutChart;
