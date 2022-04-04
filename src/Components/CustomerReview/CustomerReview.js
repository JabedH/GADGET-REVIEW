import React, { useEffect, useState } from "react";
import UseProduct from "../Hooks/UseProduct";
import CustomerReviewData from "../CustomerReviewData/CustomerReviewData";
import "./CustomerReview.css";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  const [products, setProducts] = UseProduct();
  const myProducts = products.slice(0, 3);
  return (
    <div className="mb-10">
      <div className="customerReview">
        {myProducts.map((product) => (
          <CustomerReviewData key={product.id} product={product} />
        ))}
      </div>

      <Link
        to="/Reviews"
        className="seeReviews p-3 rounded-lg bg-slate-300 hover:bg-blue-500 hover:text-white"
      >
        See all Reviews
      </Link>
    </div>
  );
};

export default CustomerReview;
