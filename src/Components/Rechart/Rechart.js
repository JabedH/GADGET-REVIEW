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
    </div>
  );
};

export default Rechart;
