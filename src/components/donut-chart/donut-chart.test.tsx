import { render, screen } from "@testing-library/react";
import { DonutChart } from "./donut-chart";
import { ChartData } from "chart.js";
import "@testing-library/jest-dom";


// Mock Chart.js to avoid canvas-related issues
jest.mock("react-chartjs-2", () => ({
  Doughnut: () => <div data-testid="doughnut-chart"></div>,
}));

describe("DonutChart Component", () => {
  const mockData: ChartData<"doughnut", number[], string> = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  test("renders the DonutChart component", () => {
    render(<DonutChart title="Test Chart" data={mockData} />);
    const chartElement = screen.getByTestId("doughnut-chart");
    expect(chartElement).toBeInTheDocument();
  });

});
