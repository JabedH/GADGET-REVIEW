import React from "react";
import "./Home.css";
import img from "../../img/1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>
          CHOOSE YOUR GADGET <br /> <span>GIVE US HAPPINESS</span>
        </h1>
        <p className="text-neutral-500 mt-5">
          This site is for garage reviewing and selecting products. <br /> If
          you need any good product you can search for anything <br /> from this
          side and buy it. Happy Shopping.
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
