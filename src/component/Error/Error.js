import { useHistory } from "react-router";
import img from "../../img/1.jpg";

const Error = () => {
  const history = useHistory();
  const handleing = () => {
    history.push("/home");
  };

  return (
    <div>
      <div className="mt-5">
        <img
          src={img}
          alt=""
          className="mx-auto d-block rounded"
          width="50%"
          height="50%"
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary px-5 mt-3 my-4 d-inline-block "
          onClick={handleing}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Error;
