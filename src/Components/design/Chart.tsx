"use client"
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "@/constants";

const LineChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip shared={false} trigger="click" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="trb" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
