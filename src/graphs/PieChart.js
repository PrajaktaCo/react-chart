import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const PieGraph = ({ data, handleClick }) => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="emps"
          isAnimationActive={false}
          data={data?.data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={data?.year === 2022 ? "#8884d8" : "#82ca9d"}
          label
        />
        <Tooltip label={"emps"} />
        <Legend
          align={"right"}
          verticalAlign="middle"
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
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
