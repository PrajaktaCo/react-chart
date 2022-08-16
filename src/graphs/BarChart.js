import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarGraph = ({ data, handleClick }) => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
      <BarChart width={150} height={40} data={data?.data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Legend
          onClick={(e) => handleClick(e)}
          payload={[
            {
              value: "2022",
              type: data?.year === 2022 ? "line" : "square",
              id: "ID01",
              color: "#8884d8",
            },
            {
              value: "2021",
              type: data?.year === 2021 ? "line" : "square",
              id: "ID02",
              color: "#82ca9d",
            },
          ]}
        />
        <Bar
          dataKey="emps"
          fill={data?.year === 2022 ? "#8884d8" : "#82ca9d"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
