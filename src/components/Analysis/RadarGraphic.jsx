import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function RadarChart({
  pokemon,
  analysis,
  typeColorsBorder,
  typeColorsBg,
}) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && analysis && analysis.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const colors = [
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
      ];
      const borderColor = [
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
      ];
      const pointBackgroundColor = [
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
      ];

      chartInstance.current = new Chart(chartRef.current, {
        type: "radar",
        data: {
          labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
          datasets: analysis.map((pokemon, index) => ({
            label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            data: [
              pokemon.stats[0].base_stat,
              pokemon.stats[1].base_stat,
              pokemon.stats[2].base_stat,
              pokemon.stats[3].base_stat,
              pokemon.stats[4].base_stat,
              pokemon.stats[5].base_stat,
            ],
            fill: true,
            backgroundColor: colors[index % colors.length],
            borderColor: borderColor[index % borderColor.length],
            borderWidth: 2,
            pointBackgroundColor:
              pointBackgroundColor[index % pointBackgroundColor.length],
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: borderColor[index % borderColor.length],
          })),
        },
        options: {
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 150,
              grid: {
                color: "rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(0, 0, 0, 0.8)",
                borderWidth: 1,
              },
              ticks: {
                display: false,
              },
              angleLines: {
                color: "rgba(0, 0, 0, 0.5)",
              },
              pointLabels: {
                font: {
                  size: 16,
                  family: "'Arial', sans-serif",
                  weight: "bold",
                },
                color: "#000",
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                font: {
                  size: 16,
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
