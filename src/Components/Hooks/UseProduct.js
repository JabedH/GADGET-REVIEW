import { useEffect, useState } from "react";

const UseProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default UseProduct;
