"use client";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useState } from "react";

const rangeSelect = [
    {
      value: "v1",
      label: 10,
    },
    {
      value: "v2",
      label: 20,
    },
    {
      value: "v3",
      label: 30,
    },
    {
      value: "v4",
      label: 50,
    },
  ];

const colorStyles = {
    control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    borderColor: "#EFEFEF",
    borderRadius: "999px",
    height: "50px",
    boxShadow: "none",
    ":hover": {
        borderColor: "#EFEFEF",
    },
    }),
    option: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    transition: "all 0.3s ease-out 0s",
    ":hover": {
        backgroundColor: "transparent",
        color: "#450d87",
    },
    ":active": {
        backgroundColor: "transparent",
    },
    padding: "6px",
    color: "#0E0D0F",
    cursor: "pointer",
    }),

    menu: (base) => ({
    ...base,
    padding: "0px",
    borderRadius: "14px",
    width: "100%",
    border: "1px solid #EFEFEF",
    backgroundColor: "#fff",
    boxShadow: "none",
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            paddingLeft: "12px",
            color: '#0E0D0F',
            fontWeight: 500,
            
        }
    }
};


export default function DashboardChart() {

    const [formDate, setFormDate] = useState(new Date())

    const [toDate, setToDate] = useState(new Date())


  const data = [
    {
      name: "series",
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
        <form className="meta-chart-option">
            <div className="content-left">
                <div className="top d-flex gap-6 align-items-center">
                    <span className="dot"></span>
                    <span className="text">Revenue</span>
                </div>
                <div className="bottom d-flex align-items-center gap-10">
                    <span className="num">$37,802</span>
                    <div className="d-flex gap-8 align-items">
                        <i className="icon icon-arr-chart"></i>
                        <span className="value fw-bold">0.56%</span>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <Select
                    className="react-select"
                    placeholder="Choose range"
                    options={rangeSelect}
                    isSearchable={false}
                    styles={colorStyles}
                    formatOptionLabel={(rangeSelect) => (
                    <div className="react-select-option">
                        <p>{rangeSelect.label}</p>
                    </div>
                    )}
                />
                <span className="or">Or</span>
                <div className="ip-datepicker">
                    <DatePicker placeholderText="Form date" selected={formDate} dateFormat="dd/MM/yyyy" onChange={(date) => setFormDate(date)} />
                    <i className="icon icon-calendar-2"></i>
                </div>
                <div className="ip-datepicker">
                    <DatePicker placeholderText="To date" selected={toDate} dateFormat="dd/MM/yyyy" onChange={(date) => setToDate(date)} />
                    <i className="icon icon-calendar-2"></i>
                </div>
                <button className="tf-btn btn-line-primary">Filter</button>
            </div>
        </form>
        <Chart
            series={data}
            width={"100%"}
            height={500}
            options={options}
            id="areaChart"
            type="area"
        />
    </>
  );
}
