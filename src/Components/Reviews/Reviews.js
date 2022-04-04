import React from "react";
import { useParams } from "react-router-dom";
import AllReviews from "../AllReviews/AllReviews";
import UseProduct from "../Hooks/UseProduct";

const Reviews = () => {
  const [products, setProducts] = UseProduct();

  console.log(products);
  return (
    <div className="customerReview">
      {products.map((product) => (
        <AllReviews key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Reviews;
