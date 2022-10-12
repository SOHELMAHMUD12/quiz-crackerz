import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const question = useLoaderData();
  console.log(question);
  const { data } = question;
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="total" stroke="#8884d8" />
      <CartesianGrid stroke="#000" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default Statistics;
