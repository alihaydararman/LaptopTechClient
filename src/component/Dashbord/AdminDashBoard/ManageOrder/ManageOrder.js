import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderLIst from "../../../Shared/OrderList/OrderLIst";

const ManageOrder = () => {
  const [isApprove, setIsApprove] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios(`https://aqueous-wildwood-06277.herokuapp.com/order`).then(
      (result) => {
        setOrders(result.data);
      }
    );
  }, [isApprove]);

  const cancelHandle = (id) => {
    const isDelete = window.confirm("are you sure ?");
    if (isDelete) {
      axios
        .delete(`https://aqueous-wildwood-06277.herokuapp.com/order/${id}`)
        .then((result) => {
          const newOrders = orders.filter((order) => order._id !== id);
          setOrders(newOrders);
          alert("Delete successfully");
        });
    }
  };

  const handleApprove = (id) => {
    axios
      .put(`https://aqueous-wildwood-06277.herokuapp.com/order/${id}`)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          setIsApprove(true);
          alert("Order Done");
        }
      });
  };

  let num = 1;
  return (
    <div>
      <div
        className="table-responsive bg-dark pb-5 mt-2"
        style={{ marginTop: "-20px" }}
      >
        <table
          className="table caption-top container "
          style={{ backgroundColor: "#75a3a3", borderRadius: "5px" }}
        >
          <caption className="fs-4 ps-2 text-white">All Order list </caption>
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">OrderId</th>
              <th scope="col">Product</th>
              <th scope="col">Location</th>
              <th scope="col"> Date </th>
              <th scope="col"> Status </th>
              <th scope="col"> Delete </th>
              <th scope="col"> Approve </th>
            </tr>
          </thead>
          {orders?.map((order) => (
            <OrderLIst
              key={order._id}
              order={order}
              cancelHandle={cancelHandle}
              orderId={1}
              num={num++}
              isApprove={isApprove}
              handleApprove={handleApprove}
            ></OrderLIst>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
