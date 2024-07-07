import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function SpeedBarChart({ analysis }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && analysis && analysis.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const labels = analysis.map(
        (pokemon) =>
          pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1).replace(/-+/g, " ")
      );
      const data = analysis.map((pokemon) => pokemon.stats[5].base_stat);

      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "HP",
              data: data,
              backgroundColor: "rgba(255, 206, 86, 0.5)",
              borderColor: "rgb(255, 206, 86)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0,
              },
            },
          },
          ticks: {
            font: {
              size: 10,
              family: "'Arial', sans-serif",
              weight: "bold",
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
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
    <div className="flex items-center justify-center px-0.5 w-full flex-col">
      <canvas className="size-96" ref={chartRef} />
    </div>
  );
}
