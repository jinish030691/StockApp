import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
import Image from 'react-bootstrap/Image';

const HistoryChart = (props) => {
    console.log("data : ",props.data);
    const chartRef = useRef();
    const { day, week, month ,year } = props.data;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
      switch (timeFormat) {
        case "24h":
          return day;
        case "7d":
          return week;
        case "30d":
          return month;
        case "1y":
          return year;
        default:
          return day;
      }
    };

    useEffect(() => {
      //console.log("called history")
      let ctx = document.getElementById('myChart').getContext("2d")
      let gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, '#ffffff')
      gradient.addColorStop(1, 'rgba(31,175,115,0.1)')
      if (chartRef && chartRef.current) {
        const chartInstance = new Chartjs(chartRef.current, {
          type: "line",
          data: {
            datasets: [
              {
                label: `price`,
                data: determineTimeFormat(),
                //backgroundColor: "rgba(174, 305, 194, 0.5)",
                borderColor: "#009fbf",
                pointRadius: 0,
                fill: 'end',
                lineTension: 0,
                borderWidth : 2,
                backgroundColor: gradient,
              },
            ],
          },
          options: {
            ...historyOptions,
          },
        });
        console.log(chartInstance);
      }
    });
    const renderPercentagePrice = () => {
      //console.log("price_change_24h :: ",props.selectedStocks.price_change_24h);
      if(props.selectedStocks){
        return (
          <div className="d-flex align-items-center justify-content-end">
            <h1 className="my-0 mr-3 font-weight-bold">${props.selectedStocks.current_price.toFixed(2)}</h1>
            <h3
              className={
                props.selectedStocks.price_change_24h < 0
                  ? "font-weight-bold text-danger my-0"
                  : "font-weight-bold text-success my-0"
              }
            >
              {props.selectedStocks.price_change_percentage_24h.toFixed(2)}%
            </h3>
          </div>
        );
      }
      
    };
    return (
      <div className="bg-white mt-2 rounded p-3 w-100">
        <div className="d-flex align-items-center mt-3">
          <Image className="icon-img" src={props.selectedStocks.image} width={50} height={50} />
          <h1 className="text-capitalize ml-4">{props.selectedStocks.id}</h1>
          <h3 className="text-uppercase ml-1 ctext-secondary mb-0">{`(${props.selectedStocks.symbol})`}</h3>
        </div>
        <div className="mt-5 position-relative">
          <div className="position-absolute princing-block">{renderPercentagePrice()}</div>
          <canvas ref={chartRef} className="pt-4" id="myChart" width={250} height={400}></canvas>
        </div>

        <div className="chart-button mt-5">
          <button
            onClick={() => setTimeFormat("1y")}
            className={(timeFormat === '1y') ? "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold active" : "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold"}
          >Year</button>
          <button
            onClick={() => setTimeFormat("30d")}
            className={(timeFormat === '30d') ? "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold active" : "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold"}
          >Month</button>
          <button
            onClick={() => setTimeFormat("7d")}
            className={(timeFormat === '7d') ? "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold active" : "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold"}
          >Week</button>
          <button
            onClick={() => setTimeFormat("24h")}
            className={(timeFormat === '24h') ? "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold active" : "btn bg-transparent shadow-none btn-sm border-0 font-weight-bold"}
          >Day</button>
        </div>
      </div>
    );
};

export default HistoryChart;
