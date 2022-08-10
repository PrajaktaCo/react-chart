import React, { useState } from "react";
import LineGraph from "./graphs/LineChart";
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
      <LineGraph data={graphData} handleClick={handleClick} />
    </div>
  );
}

export default App;
