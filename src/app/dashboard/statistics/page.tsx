"use client";

import React from "react";
import Chart, { ChartConfiguration, ChartDataSets } from "chart.js";
import DashboardLayout from "@/components/ui/layout/dashbaordLayout";

export default function CardBarChart() {
  React.useEffect(() => {
    let config: ChartConfiguration = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Views", // Convert the label to a string
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: "Videos", // Convert the label to a string
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: 2,
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: 2,
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
        },
      },
    };
    let canvas = document.getElementById("bar-chart") as HTMLCanvasElement;
    let ctx = canvas?.getContext("2d");

    if (ctx) {
      // Now ctx is of type CanvasRenderingContext2D
      // You can use it safely
      window.myBar = new Chart(ctx, config);
    } else {
      // Handle the case where canvas or context is null
      console.error("Canvas or context is null");
    }
  }, []);
  return (
    <DashboardLayout>
      <div className="flex justify-between mb-7">
        <div className="px-10 py-10 border-2 card rounded-2xl bg-[#391952] text-white">
          <p> Number of Videos</p>
          <figure className="text-center">4</figure>
        </div>
        <div className="px-10 py-10 border-2 card rounded-2xl bg-[#BA80E6] text-[#391952]">
          <p>Number of Registered Used</p>
          <figure className="text-center">5</figure>
        </div>
      </div>
      <>
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
          <div className="px-4 py-3 mb-0 bg-transparent rounded-t">
            <div className="flex flex-wrap items-center">
              <div className="relative flex-1 flex-grow w-full max-w-full">
                <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-400">
                  Statistics
                </h6>
                {/* <h2 className="text-xl font-semibold text-blueGray-700">
                  Total orders
                </h2> */}
              </div>
            </div>
          </div>
          <div className="flex-auto p-10">
            {/* Chart */}
            <div className="relative h-450">
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
}
