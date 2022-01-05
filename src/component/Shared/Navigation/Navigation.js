import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import { HashLink } from "react-router-hash-link";
import profileimg from "../../../img/profileimg.png";
import "./Navigation.css";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg  navbar-light sticky-top full-nav">
      <div className="container text-center">
        <a
          className="navbar-brand fs-4 fw-bold text-uppercase text-success"
          href="/home"
        >
          <img src={logo} style={{ width: "50px", height: "50px" }} className="mb-2  d-inline-block" alt="" />
          <span style={{ color: "black" }} className="fs-6 mt-2">
            Laptop Tech
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto navbar-container">
            <HashLink aria-current="page" to="/home#banner">
              Home
            </HashLink>
            <HashLink to="/home#products">Products</HashLink>
            <HashLink to="/explore">Explore</HashLink>
            <HashLink to="/home#contact">Contact</HashLink>
            <HashLink to="/offerProdicts">Offer Products</HashLink>

            {user.email && <HashLink to="/dashboard">Dashbord</HashLink>}
          </ul>
          <span className="mb-5 fw-bold"> 0 </span>
          <i className="fas text-success fa-shopping-cart fs-2 me-4 d-inline-block mt-2"></i>
          {user.email ? (
            <button onClick={logOut} className="logOut-btn">
              logOut
            </button>
          ) : (
            <Link className="longin-btn text-white" to="/login">
              Sign In
            </Link>
          )}

          {user.email && (
            <div
              className="d-flex align-items-center ms-lg-5  ms-0   
          flex-row-reverse flex-lg-row justify-content-center mt-lg-0 mt-2"
            >
              <span className="me-3 ms-lg-0 ms-3">{user.displayName}</span>
              <img
                style={{ height: "35px", width: "35px" }}
                className="rounded-circle"
                src={user.photoURL || profileimg}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
