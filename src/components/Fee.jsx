import React, { useState, useEffect } from "react";
import "../cssfiles/Fee.css";

const Fee = () => {

  const defaultFees = [
    { name: "Tuition Fee", amount: 150000 },
    { name: "Hostel Fee", amount: 180000 },
    { name: "Admission Fee", amount: 10000 },
  ]
  const [fees, setFees] = useState([])
  const [paymentStatus, setPaymentStatus] = useState("Pending")
  useEffect(() => {
    const storedFees = localStorage.getItem("fees")
    const storedStatus = localStorage.getItem("paymentStatus")

    if (storedFees) {
      setFees(JSON.parse(storedFees));
    } else {
      localStorage.setItem("fees", JSON.stringify(defaultFees));
      setFees(defaultFees);
    }

    if (storedStatus) {
      setPaymentStatus(storedStatus);
    } else {
      localStorage.setItem("paymentStatus", "Pending");
    }
  }, []);

  const total = fees.reduce((sum, f) => sum + f.amount, 0);

  const handlePayment = () => {
    setPaymentStatus("Paid");
    localStorage.setItem("paymentStatus", "Paid");
  };

  return (
    <div className="fees-page">
      <h1 className="page-title">Fees</h1>

      <table className="fees-table">
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.name}</td>
              <td>{fee.amount}/-</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total</td>
            <td>{total}/-</td>
          </tr>
        </tbody>
      </table>

      <div className="payment-status">
        Payment Status:{" "}
        <span className={paymentStatus === "Paid" ? "status-paid" : "status-pending"}>
          {paymentStatus}
        </span>
      </div>

      {paymentStatus === "Pending" && (
        <button className="btn btn-pay" onClick={handlePayment}>
          Pay Online
        </button>
      )}

      <div className="notices">
        <h2>Notices</h2>
        <ul>
          <li>Last date to pay fees: 28th Feb 2026</li>
          <li>Late fee will be charged after due date</li>
        </ul>
      </div>
    </div>
  );
};

export default Fee;