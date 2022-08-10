import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineGraph = ({ data, handleClick }) => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data?.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
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
        <Line
          type="monotone"
          dataKey="emps"
          stroke={data?.year === 2022 ? "#8884d8" : "#82ca9d"}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
