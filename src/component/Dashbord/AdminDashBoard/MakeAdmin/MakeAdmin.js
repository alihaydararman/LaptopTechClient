import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "../AddProducts/AddProduct.css";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useAuth();
  const onSubmit = (data) => {
    const email = data.email;

    axios
      .put(`https://aqueous-wildwood-06277.herokuapp.com/user/${email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((resutl) => {
        if (resutl?.data?.modifiedCount) {
          alert("Make admin successfully");
        } else if (resutl?.data?.matchedCount === 0) {
          alert("No user found");
        } else if (
          resutl?.data?.modifiedCount !== 0 &&
          resutl?.data?.matchedCount
        ) {
          alert("User already admin");
        }
        reset();
      });
  };
  return (
    <div className="px-3">
      <h3 className="text-center text-primary"> Make an admin</h3>
      <hr className="w-25 mx-auto" />
      <form
        className="d-flex flex-column  mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-success" htmlFor="name">
          User email :
        </label>
        <input
          className="p-2 mb-3"
          type="email"
          style={{ outline: 0 }}
          {...register("email")}
          required
        />

        <input
          className="btn btn-primary w-100"
          type="submit"
          value="Make admin "
        ></input>
      </form>
    </div>
  );
};

export default MakeAdmin;