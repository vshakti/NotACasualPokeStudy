import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function PieChart({ analysis, typeColorsBorder, typeColorsBg }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && analysis && analysis.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = {
        labels: analysis.map(
          (pokemon) =>
            pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1).replace(/-+/g, " ")
        ),
        datasets: [
          {
            label: "Stats",
            data: analysis.map((pokemon) =>
              pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.3)",
              "rgba(54, 162, 235, 0.3)",
              "rgba(255, 206, 86, 0.3)",
              "rgba(75, 192, 192, 0.3)",
              "rgba(153, 102, 255, 0.3)",
              "rgba(255, 159, 64, 0.3)",
              "rgba(255, 0, 0, 0.3)",
              "rgba(0, 255, 0, 0.3)",
              "rgba(0, 0, 255, 0.3)",
              "rgba(255, 255, 0, 0.3)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(255, 159, 64)",
              "rgb(255, 0, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 0, 255)",
              "rgb(255, 255, 0)",
            ],
            borderWidth: 1,
          },
        ],
      };

      chartInstance.current = new Chart(chartRef.current, {
        type: "pie",
        data: data,
        options: {
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                font: {
                  size: 12,
                  family: "'Arial', sans-serif",
                  weight: "bold",
                },
                color: "#000",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [analysis]);

  return (
    <div className="flex items-center justify-center flex-col">
      <canvas className="size-96" ref={chartRef} />
    </div>
  );
}
