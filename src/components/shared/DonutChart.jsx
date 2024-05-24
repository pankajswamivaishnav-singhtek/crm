import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = ({ data, labels }) => {
  let donutDataArray = new Array(8).fill(0);

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
              data?.["need-analysis"] || 0, //need Analysis
              data?.["value-proposition"], //Value Proposition 
              data?.["identify-decision-maker"] || 0, // IdentityFy Descision Maker
              data?.["proposal"] || 0, //Proposal
              data?.["negotitation"] || 0,
              data?.["won"] || 0,
              data?.["lost"] || 0,
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
  }, [donutDataArray, labels, data]);

  return <canvas ref={chartRef} id="donutChart" />;
};

export default DonutChart;
