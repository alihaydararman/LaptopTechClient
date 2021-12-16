import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import icon from "../../img/google-icon.png";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import { Alert } from "@mui/material";

const Login = () => {
  const { handleGoogleSign, user, loading, logIn, error } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();
  const location = useLocation();
  const locationis = location?.state?.from || "/home";

  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password, history, locationis);
    reset();
  };

  if (loading) {
    return (
      <div className="text-center" style={{ marginTop: "100px" }}>
        <div
          style={{ width: "3rem", height: "3rem", fontSize: "30px" }}
          className="spinner-border text-primary "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-dark overflow-hidden login-container">
      <div>
        <h1 className="fs-bold uppercase text text-center mt-2 text-white">
          Login Now
          <hr className="w-50 mx-auto" />
        </h1>
        <form
          className="d-flex flex-column  mx-auto mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="Your email *"
            className="py-2"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Your password*"
            className="my-3 py-2"
            {...register("password")}
          />
          {error ? (
            <Alert
              variant="outlined"
              sx={{ color: "#E1290F", border: "0" }}
              severity="error"
            >
              {error}
            </Alert>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-between mb-2">
            <Link to={`/register${locationis.pathname || "/home"}`}>
              New ? Register Now
            </Link>
            <a href="#"> Forget Password</a>
          </div>
          <input className="mt-2" type="submit" value="Sign In" />
          <button
            onClick={() => handleGoogleSign(locationis, history)}
            className="mt-4"
          >
            <img width="30" className="me-3" src={icon} alt="" />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
