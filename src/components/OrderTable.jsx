import React, { useState } from "react";
import { MdMyLocation } from "react-icons/md";

const OrderTable = () => {
  const [orders, setOrders] = useState([
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Sravannah Niguyen",
      orderNo: "78514568",
      amount: "$128.00",
      status: "Delivered",
    },
  ]);

  const statusClasses = {
    Delivered:
      "bg-green-700 hover:bg-green-800 text-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    Cancelled:
      "bg-red-700 hover:bg-red-800 focus:ring-red-300 text-red-400 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    Pending:
      "bg-red-700 hover:bg-red-800 focus:ring-red-300 text-red-400 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  };

  return (
    <div className="relative overflow-x-auto md:max-w-3xl max-w-lg shadow-md sm:rounded-lg text-white bg-gray-900">
      <h3 className="p-3 ml-3 font-bold">Recent Orders</h3>
      <table className="text-sm text-left rtl:text-right text-white ">
        <thead className="text-xs text-white  bg-gray-900">
          <tr>
            <th scope="col" className="px-6 py-2">
              Customer
            </th>
            <th scope="col" className="px-14 py-2">
              Order No.
            </th>
            <th scope="col" className="px-14 py-2">
              Amount
            </th>
            <th scope="col" className="px-10 py-2">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="bg-gray-900 border-b-gray-200">
              <th
                scope="row"
                className="flex items-center px-6 py-2  whitespace-nowrap "
              >
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
                    className="rounded-full"
                  />
                </div>
                <div className="text-base font-normal">{order.customer}</div>
              </th>
              <td className="px-14 py-2 font-normal">{order.orderNo}</td>
              <td className="px-14 py-2">
                <div className="font-medium">{order.amount}</div>
              </td>
              <td className="px-10 py-4">
                <button
                  type="button"
                  className={`text-sm px-3 py-0.5 text-center me-2 mb-2 font-medium rounded-full text-red-400 focus:outline-none focus:ring-4 ${
                    statusClasses[order.status]
                  }`}
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
