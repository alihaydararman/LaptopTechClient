import React from "react";

const Samsung = ({ product }) => {
  const { name, img } = product || {};
  return (
    <div className="col-lg-4">
      <div className="text-center p-2 m-3">
        <img className="rounded" height="170" width="170" src={img} alt="" />
        <h5 className="text-success mt-2">Samsung {name}</h5>
      </div>
    </div>
  );
};

export default Samsung;
