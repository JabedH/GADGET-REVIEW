import React, { useEffect, useState } from "react";
import UseProduct from "../Hooks/UseProduct";
import img from "../../img/1.jpg";
import CustomerReviewData from "../CustomerReviewData/CustomerReviewData";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [products, setProducts] = UseProduct();
  const myProducts = products.slice(0, 3);
  console.log(products);

  return (
    <div className="customerReview">
      {myProducts.map((product) => (
        <CustomerReviewData key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CustomerReview;
