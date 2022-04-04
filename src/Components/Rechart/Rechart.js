import React, { useEffect, useState } from "react";
import RechartData from "./RechartData";
import "./Rechart.css";

const Rechart = () => {
  const [recharts, setRechart] = useState([]);
  const myChart = recharts.slice(0, 1);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRechart(data));
  }, []);
  console.log(recharts);
  return (
    <div className="rechart">
      {myChart.map((rechart) => (
        <RechartData recharts={recharts} rechart={rechart} />
      ))}
      {/* <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="investment" />
        <YAxis />
        <Tooltip />
      </LineChart> */}
    </div>
  );
};

export default Rechart;
