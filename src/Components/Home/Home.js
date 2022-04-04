import React from "react";
import "./Home.css";
import img from "../../img/1.jpg";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div>
          {" "}
          <h1 className="text-blue-500">
            CHOOSE YOUR GADGET <br /> <span>GIVE US HAPPINESS</span>
          </h1>
          <p className="text-neutral-500 mt-5">
            This site is for garage reviewing and selecting products. <br /> If
            you need any good product you can search for anything <br /> from
            this side and buy it. Happy Shopping.
          </p>
          <button className="border p-5 rounded-md bg-slate-300 hover:bg-blue-500 hover:text-white mt-5">
            More Products
          </button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="reviews">
        <h1>Customer Reviews</h1>
      </div>
      <CustomerReview />
    </div>
  );
};

export default Home;
