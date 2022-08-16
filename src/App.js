import React, { useState } from "react";
import LineGraph from "./graphs/LineChart";
import BarGraph from "./graphs/BarChart";
import PieGraph from "./graphs/PieChart";
import { data } from "./graphData/lineData";

function App() {
  const [graphData, setData] = useState(data[0]);

  const handleClick = (e) => {
    if (e?.value === "2022") {
      setData(data[0]);
    } else {
      setData(data[1]);
    }
  };
  return (
    <div className="App">
      <h1 style={{ marginLeft: 50 }}>Line Graph</h1>
      <LineGraph data={graphData} handleClick={handleClick} />
      <h1 style={{ marginLeft: 50 }}>Bar Graph</h1>
      <BarGraph data={graphData} handleClick={handleClick} />
      <h1 style={{ marginLeft: 50 }}>Pie Chart</h1>
      <PieGraph data={graphData} handleClick={handleClick} />
    </div>
  );
}

export default App;
