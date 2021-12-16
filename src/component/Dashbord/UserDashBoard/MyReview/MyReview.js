import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "../../AdminDashBoard/AddProducts/AddProduct.css";

const MyReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.img = user?.photoURL;
    data.name = user?.displayName;
    console.log(data);
    axios
      .post("https://aqueous-wildwood-06277.herokuapp.com/review", data)
      .then((result) => {
        reset();
        if (result?.data?.insertedId) {
          alert("Review successfully done");
        }
      });
  };
  return (
    <div className="">
      <h2 className="text-center"> Give a review </h2>
      <hr className="w-25 mx-auto text-primary" />
      <form
        className="d-flex flex-column  mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email" className="text-success">
          Your email :{" "}
        </label>
        <input
          type="email"
          className="my-2 p-2 form-control is-valid"
          defaultValue={user?.email}
          {...register("email")}
        />
        <label className="text-success" htmlFor="comment">
          Your Comment :{" "}
        </label>
        <textarea
          className=" p-2 form-control is-valid"
          {...register("comment")}
        />
        <label className="mt-2 text-success" htmlFor="rating">
          Rating :{" "}
        </label>
        <select
          id="inlineFormCustomSelectPref"
          className="border-success mb-2 p-2 custom-select my-1 mr-sm-2"
          {...register("rating")}
          style={{ width: "50px" }}
        >
          <option defaultValue="5">5</option>
          <option defaultValue="4">4</option>
          <option defaultValue="3">3</option>
          <option defaultValue="2">2</option>
          <option defaultValue="1">1</option>
          <option defaultValue="0">0</option>
        </select>
        <input className="w-25 mt-2 btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default MyReview;
