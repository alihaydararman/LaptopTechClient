import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "../../../Home/Product/Product";

const ManageProducts = () => {
  const { products } = useProducts(
    "https://aqueous-wildwood-06277.herokuapp.com/products"
  );
  const [isDelete, setIsDelete] = useState("");

  const newProducts = products.filter((product) => product._id !== isDelete);
  return (
    <div>
      <div className="container">
        <h1 className="text-success text-center"> Manage products </h1>
        <hr className="w-50 mx-auto" />
        <div className="row">
          {newProducts.map((product) => (
            <Product
              key={product._id}
              product={product}
              button={"Delete"}
              setIsDelete={setIsDelete}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
