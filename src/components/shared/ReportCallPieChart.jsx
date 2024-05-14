import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ReportCallPieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef} id="pieChart" />;
};

export default ReportCallPieChart;
