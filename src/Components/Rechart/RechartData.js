import React from "react";
import "./RechartData.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RechartData = (props) => {
  //   const { recharts } = props.recharts;
  //   console.log(recharts);
  const { investment, month, revenue, sell } = props.rechart;
  return (
    <div className="allChart">
      <LineChart
        width={500}
        height={300}
        data={props.recharts}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <BarChart width={500} height={300} data={props.recharts}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
        <Bar dataKey="sell" fill="#82ca9d" />
      </BarChart>
      <PieChart width={600} height={250} className="mt-10">
        <Pie
          data={props.recharts}
          dataKey="sell"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={props.recharts}
          dataKey="sell"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#82ca9d"
          label
        />
      </PieChart>
      <RadarChart
        outerRadius={90}
        width={600}
        height={250}
        data={props.recharts}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="revenue"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="sell"
          dataKey="sell"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RechartData;
