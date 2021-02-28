import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Row , Col } from 'react-bootstrap';
import Header from './components/Header';
import StockList from './components/StockList';
import StockDetail from './components/StockDetail';
import stockAPI from "./apis/stock.js";

const watchList = ["bitcoin", "ethereum", "litecoin" , "dash" , "monero" , "zcash", "ripple"];

const App = () => {
  const [stockList, setStockList] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState('');

  useEffect(() => {
    async function fetchStock() {
      let response = await stockAPI.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setStockList(response.data);
      setSelectedStocks(response.data[0]);
    }

    fetchStock();
  },[])
  
  return (
    <>
      <Container fluid="lg">
        <Row className="border-bottom">
            <Header />
        </Row>
        <Row>
            <Col md={4} className="p-0">
              <StockList 
                stocks={stockList}
                onStockClick={(stock_data)=> setSelectedStocks(stock_data)}
              />
            </Col>
            <Col md={8} className="d-flex w-100 p-0">
              <StockDetail selectedStocks={selectedStocks}/>
            </Col>    
        </Row>
      </Container>
    </>
  );
}
export default App;

