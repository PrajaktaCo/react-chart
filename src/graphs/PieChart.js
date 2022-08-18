import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PieGraph = ({ data, handleClick }) => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill={data?.year === 2022 ? "#8884d8" : "#82ca9d"}
        />
        <Tooltip label={"value"} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
