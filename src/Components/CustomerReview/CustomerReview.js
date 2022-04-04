import React, { useEffect, useState } from "react";
import UseProduct from "../Hooks/UseProduct";
import img from "../../img/1.jpg";
import Reviews from "../Reviews/Reviews";
import ReviewData from "../ReviewData/ReviewData";
import AllReviews from "../AllReviews/AllReviews";
import CustomerReviewData from "../CustomerReviewData/CustomerReviewData";

const CustomerReview = () => {
  const [products, setProducts] = UseProduct();
  const myProducts = products.slice(0, 3);
  console.log(products);

  return (
    <div className="">
      {myProducts.map((product) => (
        <CustomerReviewData key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CustomerReview;
