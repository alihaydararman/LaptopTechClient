import React from "react";
import img from "../../../img/banner-img/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner">
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "80vh", backgroundColor: "#559AB8" }}
      >
        <div className="container p-3 rounded banner-middle" style={{ backgroundColor: '#AEDAF2' }}>
          <div className="d-flex justify-content-evenly align-items-center flex-column flex-lg-row">
            <div>
              <h5 className="heading-5 text-uppercase text-white">
                Update Generation Laptop
              </h5>
              <h1 className=" heading-1 text-uppercase w-75">
                It's more than a laptop – it's a way of life.
              </h1>
              <button className="btn btn-primary"> Learn more</button>
              <div></div>
            </div>
            <div>
              <div className="mt-lg-0 mt-4 p-5">
                <img width="520px" height="fit-content" src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
