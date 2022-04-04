import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllReviews = (props) => {
  console.log(props.product.name);
  const { name, img, review, rating } = props.product;

  return (
    <div className="allData">
      <div className="reviewdata ">
        <figure className="bg-slate-100 rounded-xl p-8 allData">
          <img className="  rounded-full mx-auto" src={img} alt="" />
          <h1>{name}</h1>
          <div className="pt-6 space-y-4">
            <div className="review-hight">
              <p className="text-lg font-medium">{review}</p>
            </div>

            <div className="rating">
              <p>{rating} </p>
              <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default AllReviews;
