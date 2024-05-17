import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = ({ data, labels }) => {
  let donutDataArray = new Array(8).fill(0);
  for (let i = 0; i < data.length; i++) {
    donutDataArray[i] = data[i];
  }
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
            data: [
              donutDataArray[2],
              donutDataArray[3], //Lost to compition
              donutDataArray[4], // IdentityFy Descision Maker
              donutDataArray[1], //Proposal
              donutDataArray[6], //need Analysis
              donutDataArray[0], //Purposoal Data
              donutDataArray[5], //Won Data
            ],
            backgroundColor: [
              "rgba(222, 83, 250, 0.644)", //need analysis
              "rgba(255, 206, 86, 0.5)", //Value
              "#69C2E5", // IdentityFy Descision Maker
              "#c062b0", //purposal
              "#FF7006", //Negosiation
              "#2ec282", //Green
              "#5869FF", //Lost
            ],
            borderColor: [
              "rgba(222, 83, 250, 0.644)",
              "rgba(255, 206, 86, 0.5)",
              "#69C2E5", // IdentityFy Descision Maker
              "#c062b0", //purposal
              "#FF7006", //Negosiation
              "#2ec282", //Green
              "#5869FF", //Lost
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
  }, [donutDataArray, labels]);

  return <canvas ref={chartRef} id="donutChart" />;
};

export default DonutChart;
