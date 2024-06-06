import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

import { data } from "@/constants";

const ResponsiveBarChart = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartWidth = width > 768 ? 800 : 350; 

  return (
    <BarChart
      width={chartWidth}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip shared={false} trigger="click"  />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="trb" fill="#82ca9d" />
    </BarChart>
  );
};

export default ResponsiveBarChart;
