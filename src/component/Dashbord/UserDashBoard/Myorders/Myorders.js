import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import OrderLIst from "../../../Shared/OrderList/OrderLIst";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios(
      `https://aqueous-wildwood-06277.herokuapp.com/order?email=${user.email}`
    ).then((result) => {
      setOrders(result.data);
    });
  }, [user.email]);

  const cancelHandle = (id) => {
    const isDelete = window.confirm("are you sure ?");
    if (isDelete) {
      axios
        .delete(`https://fierce-escarpment-48100.herokuapp.com/order/${id}`)
        .then((result) => {
          const newOrders = orders.filter((order) => order._id !== id);
          setOrders(newOrders);
          alert("Delete successfully");
        });
    }
  };

  let num = 1;
  return (
    <div>
      <div
        className="table-responsive bg-dark pb-5 mt-3"
        style={{ marginTop: "-20px" }}
      >
        <table
          className="table caption-top container "
          style={{ backgroundColor: "#75a3a3", borderRadius: "5px" }}
        >
          <caption className="fs-4 text-white">Your order list </caption>
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product</th>
              <th scope="col">Location</th>
              <th scope="col"> Date </th>
              <th scope="col"> Status </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          {orders?.map((order) => (
            <OrderLIst
              key={order._id}
              order={order}
              num={num++}
              cancelHandle={cancelHandle}
            ></OrderLIst>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Myorders;
