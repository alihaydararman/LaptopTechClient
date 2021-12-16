import React from "react";
import Rating from "react-rating";
import profileimg from "../../../img/profileimg.png";

const Allreview = ({ review, delet, handleDeleteReview }) => {
  return (
    <div key={review._id} className="col-lg-4 text-center">
      <div className="p-3 m-2">
        <img
          width="40"
          height="40"
          className="rounded-circle me-3 mb-2"
          src={review.img || profileimg}
          alt=""
        />
        <p> {review.name || "No name"}</p>
        <h6>
          <Rating
            emptySymbol="far fa-star empty"
            fullSymbol="fas fa-star full"
            initialRating={review.rating}
            readonly
          />
          ({review.rating})
        </h6>
        <span> {review.comment} </span>
        <br />
        {delet === "delete" && (
          <button
            className="btn btn-danger mt-3"
            onClick={() => handleDeleteReview(review._id)}
          >
            {delet}
          </button>
        )}
      </div>
    </div>
  );
};

export default Allreview;
