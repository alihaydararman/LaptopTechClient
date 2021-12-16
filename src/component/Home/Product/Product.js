import axios from "axios";
import React from "react";
import Rating from "react-rating";
import { useHistory } from "react-router";
// import useAuth from "../../Hooks/useAuth";
import "./product.css";

const Product = ({ product, button, order, setIsDelete }) => {
  // const { user } = useAuth();

  const { name, img, describiton, rating, _id, price } = product || {};
  const history = useHistory();
  const HandleOrder = (_id) => {
    history.push(`/order/${_id}`);
  };

  const handleProductDelete = (id) => {
    const istrue = window.confirm("Are you sure you want to delete it?");
    if (istrue) {
      axios
        .delete(`https://aqueous-wildwood-06277.herokuapp.com/products/${id}`)
        .then((result) => {
          console.log(result.data);
          setIsDelete(_id);
          alert("delete successfully");
        });
    }
  };

  return (
    <div className="col-lg-4">
      <div
        className="text-center p-lg-3 m-lg-3 my-3"
        style={{ height: "500px" }}
      >
        <img
          className="rounded"
          style={{ backgroundColor: "#111E1A", padding: "10px" }}
          height="200"
          src={img}
          alt=""
        />
        <h5 className="text-success mt-2">{name}</h5>
        <h6 className="text-primary mt-2"> $ {price}</h6>
        <h6 style={{ fontSize: "13px" }}>
          <Rating
            emptySymbol="far fa-star empty"
            fullSymbol="fas fa-star full"
            initialRating={rating}
            readonly
          />
          ({rating})
        </h6>
        <p className="text-dark text-lowercase">{describiton.slice(0, 150)}</p>

        {order && (
          <button onClick={() => HandleOrder(_id)} className="btn btn-primary ">
            Order now
          </button>
        )}
        {button && (
          <button
            onClick={() => handleProductDelete(_id)}
            className="btn btn-danger ms-4"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
