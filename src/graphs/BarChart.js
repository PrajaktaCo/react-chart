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
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar
          dataKey="value"
          fill={data?.year === 2022 ? "#8884d8" : "#82ca9d"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
