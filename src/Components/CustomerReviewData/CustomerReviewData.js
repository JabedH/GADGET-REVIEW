import React from "react";
import "./CustomerReviewData.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerReviewData = (props) => {
  const { name, img, review, rating } = props.product;
  console.log(props.product.name);
  return (
    <div className="">
      <div className="flex justify-between ">
        <figure class="bg-slate-100 rounded-xl p-8 ">
          <img
            class="  rounded-full mx-auto"
            src={img}
            alt=""
            width="384"
            height="512"
          />
          <h1>{name}</h1>
          <div class="pt-6 space-y-4">
            <blockquote>
              <p class="text-lg font-medium">{review}</p>
            </blockquote>
            <figcaption>
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
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default CustomerReviewData;
