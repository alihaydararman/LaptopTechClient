import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-center" style={{ marginTop: "100px" }}>
        <div
          style={{ width: "3rem", height: "3rem", fontSize: "25px" }}
          className="spinner-border text-primary "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
