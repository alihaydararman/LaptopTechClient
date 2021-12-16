import axios from "axios";
import React from "react";
import "./AddProduct.css";

import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddProducts = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.rating = 1.5;
    axios
      .post("https://aqueous-wildwood-06277.herokuapp.com/products", data)
      .then((result) => {
        if (result.data.acknowledged) {
          alert("successfully added");
          reset();
        }
      });
  };
  return (
    <div className="px-2">
      <div
        className="container p-3  text-success rounded"
        style={{ backgroundColor: "#454545" }}
      >
        <h1 className="text-center text-primary"> Add Products </h1>
        <hr className="w-50 mx-auto" />
        <form
          className="d-flex flex-column  mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name"> Product img :</label>
          <input
            style={{ outline: 0 }}
            className="p-2 border-0 rounded bg-secondary "
            type="url"
            {...register("img")}
            required
          />

          <label htmlFor="name"> Product name :</label>
          <input
            className="p-2 border-0 rounded bg-secondary "
            style={{ outline: 0 }}
            {...register("name")}
            required
          />

          <label htmlFor="name"> Product Price :</label>
          <input
            className="w-25 p-2 border-0 rounded bg-secondary"
            style={{ outline: 0 }}
            type="number"
            {...register("price")}
            required
          />

          <label htmlFor="name"> Product description :</label>
          <textarea
            className="p-2 border-0 rounded bg-secondary"
            style={{ outline: 0 }}
            {...register("describiton")}
            required
          />
          <input
            type="submit"
            className="btn mt-3 btn-primary"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
