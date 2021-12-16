import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const Order = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { name, describiton, img, rating, _id } = product || {};
  useEffect(() => {
    axios(`https://aqueous-wildwood-06277.herokuapp.com/products/${id}`).then(
      (result) => {
        setProduct(result.data);
        reset({
          name: product.name,
        });
      }
    );
  });
  const onSubmit = (data) => {
    data.userEamil = user.email;
    data.productId = _id;
    data.status = "pending";
    console.log(data);
    fetch("https://aqueous-wildwood-06277.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order successfully done");
        }
        reset("");
      });
  };
  const { register, handleSubmit, reset } = useForm();

  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "#b3d9ff", overflow: "hidden" }}>
        <div className="container">
          <h2 className="text-success text-center my-2">Order Now</h2>
          <hr className="w-25 mx-auto" />
          <div className="row">
            <div className="col-lg-6">
              <div>
                <div>
                  <div className="text-center p-3 m-3">
                    <img
                      className="rounded"
                      width="300"
                      height="300"
                      src={img}
                      alt=""
                    />
                    <h5 className="text-success mt-2">{name}</h5>
                    <h5>
                      <Rating
                        emptySymbol="far fa-star empty"
                        fullSymbol="fas fa-star full"
                        initialRating={rating}
                        readonly
                      />
                      ({rating})
                    </h5>
                    <p className="text-dark text-lowercase">{describiton}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div>
                <form
                  className="d-flex flex-column  mx-auto mt-5 w-75"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label htmlFor="name"> Your name : </label>
                  <input
                    type="text"
                    className="mb-2 py-1 px-3"
                    defaultValue={user?.displayName}
                    {...register("name")}
                  />
                  <label htmlFor="email"> Your email : </label>
                  <input
                    type="email"
                    className="mb-2 py-1 px-3"
                    defaultValue={user?.email}
                    {...register("email")}
                  />

                  <label htmlFor="name"> Product name : </label>
                  <input
                    type="text"
                    className="mb-2 py-1 px-3 disabled"
                    defaultValue={product.name}
                    {...register("productName")}
                  />
                  <label htmlFor="name"> Your address : </label>
                  <input
                    required
                    type="text"
                    className="mb-2 py-1 px-3 disabled"
                    {...register("address")}
                  />
                  <label htmlFor="date"> Date : </label>
                  <input
                    type="date"
                    required
                    className="mb-2 py-1 px-3"
                    {...register("date")}
                  />
                  <label htmlFor="name"> Your number : </label>
                  <input
                    required
                    type="tel"
                    placeholder="Your Number *"
                    className="mb-2 py-1 px-3"
                    {...register("number")}
                  />
                  <input
                    className="mt-2 btn btn-success"
                    type="submit"
                    value="Place Order"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
