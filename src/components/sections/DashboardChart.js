"use client";
import * as React from "react";
import Chart from "react-apexcharts";

export default function DashboardChart() {
  React.useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);
  }, []);
  const data = [
    {
      name: "series-1",
      data: [
        3.2, 3.2, 2.2, 3, 2.9, 3, 4.7, 4, 5, 7.8, 9, 5.8, 4.2, 3, 5, 2.9, 4,
        2.8, 5, 3,
      ],
    },
  ];

  const options = {
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
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
        "28",
        "29",
        "30",
        "31",
      ],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    colors: ["#450D87", "#fff"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.5,
        opacityTo: 0.3,
      },
    },
    chart: {
      toolbar: {
        show: false,
        //   tools: {
        //     download: false,
        //   },
      },
    },

    responsive: [
      {
        breakpoint: 767,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <Chart
        series={data}
        width={"100%"}
        height={500}
        options={options}
        id="lineChart"
        type="area"
      />
    </>
  );
}
