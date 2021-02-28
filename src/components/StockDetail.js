import React, { useEffect, useState } from "react";
import HistoryChart from "./HistoryChart";
import stockAPI from "../apis/stock.js";
import ReactLoading from "react-loading";

const StockDetail = (props) => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    
    const fetchData = async () => {
      setIsLoading(true);
      if(props.selectedStocks.id){

        const [day, week, month ,year] = await Promise.all([
          stockAPI.get(`/coins/${props.selectedStocks.id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }),
          stockAPI.get(`/coins/${props.selectedStocks.id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }),
          stockAPI.get(`/coins/${props.selectedStocks.id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "30",
            },
          }),
          stockAPI.get(`/coins/${props.selectedStocks.id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "365",
            },
          }),
        ]);
        setCoinData({
          day: formatData(day.data.prices),
          week: formatData(week.data.prices),
          month : formatData(month.data.prices),
          year: formatData(year.data.prices),
        });
        setIsLoading(false);
      }
    };
    fetchData();
    /* set interval and call API for getting the live data
    const timer = setInterval(() => fetchData(), 5000);
    return () => clearInterval(timer);
    */
    

    
  }, [props.selectedStocks]);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="d-flex w-100 align-items-center justify-content-center">
          <ReactLoading type="bars" color="#009fbf"/>
        </div>
      )
    }
    return (
      <div className="coinlist w-100">
        <HistoryChart data={coinData} selectedStocks={props.selectedStocks}/>
      </div>
    );
  };

  return renderData();
};

export default StockDetail;
