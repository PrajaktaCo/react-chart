import React, { useState, useEffect } from "react";
import LineGraph from "./graphs/LineChart";
import BarGraph from "./graphs/BarChart";
import PieGraph from "./graphs/PieChart";
import { data } from "./graphData/lineData";

function App() {
  const [graphData, setData] = useState(data[0]);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/exchange_rates")
      .then((res) => res.json())
      .then((json) => {
        setApiData(Object.values(json?.rates));
      });
  }, []);

  const handleClick = (e) => {
    if (e?.value === "2022") {
      setData(data[0]);
    } else {
      setData(data[1]);
    }
  };
  return (
    <div className="App">
      {!apiData.length ? (
        <>
          <h1 style={{ marginLeft: 50 }}>Line Graph</h1>
          <LineGraph data={apiData} handleClick={handleClick} />
          <h1 style={{ marginLeft: 50 }}>Bar Graph</h1>
          <BarGraph data={apiData} handleClick={handleClick} />
          <h1 style={{ marginLeft: 50 }}>Pie Chart</h1>
          <PieGraph data={apiData} handleClick={handleClick} />
        </>
      ) : (
        <div>Loading ... </div>
      )}
    </div>
  );
}

export default App;
