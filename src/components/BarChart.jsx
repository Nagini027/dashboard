import React from "react";
import { Bar } from "react-chartjs-2";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
    ],
    datasets: [
      {
        data: [
          4000, 10000, 4500, 4000, 6000, 6000, 5100, 5200, 5000, 2000, 7000,
          7100, 6100, 11000, 9000, 12000, 15000, 11000, 8000, 5000, 6000, 11000,
          7000, 6000, 7000, 6000, 15000, 11000,
        ],
        backgroundColor: " rgb(99 102 241)",
        borderColor: "rgba(54, 162, 235, 1)",
        // borderWidth: 10,
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 1.0,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,

        ticks: {
          autoSkip: true,
          maxTicksLimit: 20,
        },
      },
      y: {
        beginAtZero: true,
        max: 15000,
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Light color for y-axis grid lines
        },
        ticks: {
          callback: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
          stepSize: 5000,
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 shadow-md rounded-xl p-3 text-white md:w-[580px] w-[400px] md:h-[230px]">
      <div className=" font-bold flex justify-between">
        <div>
          <h2>Activity</h2>
        </div>
        <div className="md:-mr-36 -mr-32 ">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-gray-600 rounded-full "
          >
            Weekly
            <span class="inline-flex items-center justify-center w-4 h-4  text-xs font-semibold ">
              <RiArrowDownSFill />
            </span>
          </button>
        </div>
      </div>
      <div className="h-[calc(100%-3rem)] md:w-[700px] w-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
