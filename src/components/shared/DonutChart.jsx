import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Data",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(0, 255, 255)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(30, 177, 226)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }, [data, labels]);

  return <canvas ref={chartRef} id="donutChart" />;
};

export default DonutChart;
