import axios from "axios";
import React, { useEffect, useState } from "react";
import Allreview from "../../../Shared/Allreview/Allreview";

const ManageReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://aqueous-wildwood-06277.herokuapp.com/review")
      .then((result) => {
        setReviews(result.data);
      });
  }, []);

  const handleDeleteReview = (id) => {
    fetch(`https://aqueous-wildwood-06277.herokuapp.com/review/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          const newReview = reviews.filter((review) => review._id !== id);
          setReviews(newReview);
          alert("deleted successfully");
        }
      });
  };

  return (
    <div className="container">
      <h3 className="text-success text-center"> Manage Reviews </h3>
      <hr className="text-success w-25 mx-auto" />

      <div className="row">
        {reviews.map((review) => (
          <Allreview
            key={review._id}
            review={review}
            delet={"delete"}
            handleDeleteReview={handleDeleteReview}
          ></Allreview>
        ))}
      </div>
    </div>
  );
};

export default ManageReview;
