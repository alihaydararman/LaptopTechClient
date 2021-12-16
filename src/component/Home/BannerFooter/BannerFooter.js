import React from "react";
import "../Banner/Banner.css";

const watch = [
  {
    id: 1,
    style: "To make what we make.",
    img: "https://i.ibb.co/fGZdm38/Seek-Png-com-laptop-png-43882.png",
  },
  {
    id: 2,
    style: `To say that Perfact`,
    img: "https://i.ibb.co/M7CYyqp/kindpng-3426544-1.png",
  },
  {
    id: 3,
    style: "Better Normal For All",
    img: "https://i.ibb.co/2q8hCWB/pngfind-com-laptop-png-2452827.png",
  },
];

const BannerFooter = () => {
  return (
    <div className="container banner-footer-container">
      <div className="row">
        {watch.map((wt) => {
          return (
            <div key={wt.id} className="col-lg-4">
              <div
                style={{ backgroundColor: "#0A93BB" }}
                className="d-flex align-items-center justify-content-evenly p-3 my-lg-0 my-2  rounded"
              >
                <div>
                  <span style={{ color: "White" }} className="fw-bold">
                    BRAND NEW Laptop
                  </span>
                  <h4 className="w-75 text-dark fw-normal"> {wt.style}</h4>
                </div>
                <img height="100" src={wt.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerFooter;
