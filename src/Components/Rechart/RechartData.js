import React from "react";
import "./RechartData.css";
import {
  Area,
  AreaChart,
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
      <div>
        <h1 className="mb-5 font-bold text-indigo-400 text-2xl">
          MONTH VS SEEL
        </h1>
        <LineChart
          width={400}
          height={300}
          data={props.recharts}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div>
        <h1 className="mb-5 font-bold text-indigo-400 text-2xl">
          REVENUE VS INVESTMENT
        </h1>
        <BarChart width={400} height={300} data={props.recharts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <h1 className="mb-5 mt-5 font-bold text-indigo-400 text-2xl">
          MONTH VS SEEL
        </h1>
        <PieChart width={400} height={250} className="mt-10">
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
      </div>
      <div>
        <h1 className="mb-5 mt-5  font-bold text-indigo-400 text-2xl">
          REVENUE VS INVESTMENT
        </h1>
        <AreaChart
          width={400}
          height={250}
          data={props.recharts}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default RechartData;
