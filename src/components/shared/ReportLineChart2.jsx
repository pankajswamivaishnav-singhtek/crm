import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ReportLineChart2 = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: "line",
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

  return (
    <canvas
      ref={chartRef}
      id="lineChart"
      style={{ height: "150px" }}
    />
  );
};

export default ReportLineChart2;
