import React from "react";

const OrderLIst = ({
  order,
  cancelHandle,
  orderId,
  num,
  handleApprove,
  isApprove,
}) => {
  return (
    <tbody>
      <tr>
        <th>{num}</th>
        <td>{order.name}</td>
        <td>{order.email}</td>
        {orderId && <td>({order._id})</td>}
        <td>{order.productName}</td>
        <td>{order.address}</td>
        <td>{order.date}</td>

        <td
          className={
            order.status === "Approve" ? "text-success" : "text-primary"
          }
        >
          {order.status}
        </td>
        <td>
          {order.status === "Approved" ? (
            <button className="border-0 bg-success text-white fs-6 rounded py-1">
              Done
            </button>
          ) : (
            <button
              onClick={() => cancelHandle(order._id)}
              className="border-0 bg-danger text-white fs-6 rounded py-1"
            >
              Cancel
            </button>
          )}
        </td>
        <td>
          {orderId && order.status === "Approved" && (
            <button className="border-0 bg-success rounded text-white fs-6 py-1">
              accepted
            </button>
          )}

          {orderId && order.status === "pending" && (
            <button
              onClick={() => handleApprove(order._id)}
              className="border-0 bg-primary rounded text-white fs-6 py-1"
            >
              accept
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default OrderLIst;