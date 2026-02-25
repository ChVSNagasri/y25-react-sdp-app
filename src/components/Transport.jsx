import React, { useState, useEffect } from "react";
import "./Transport.css";

const Transport = () => {

  const defaultTransport = {
    busNumber: "U101",
    route: "Main Gate → Library → Hostel → Sports Complex",
    pickupTime: "07:30 AM",
    dropTime: "05:30 PM",
    stops: ["Main Gate", "Library", "Hostel", "Sports Complex"],
    status: "Active",
  };

  const [transportInfo, setTransportInfo] = useState(null);

  useEffect(() => {
    const storedTransport = localStorage.getItem("transport");

    if (storedTransport) {
      setTransportInfo(JSON.parse(storedTransport));
    } else {
      localStorage.setItem("transport", JSON.stringify(defaultTransport));
      setTransportInfo(defaultTransport);
    }
  }, []);

  if (!transportInfo) return null;

  return (
    <div className="transport-page">
      <h1 className="page-title">Transport</h1>

      <table className="transport-table">
        <tbody>
          <tr>
            <td>Bus Number</td>
            <td>{transportInfo.busNumber}</td>
          </tr>
          <tr>
            <td>Route</td>
            <td>{transportInfo.route}</td>
          </tr>
          <tr>
            <td>Pickup Time</td>
            <td>{transportInfo.pickupTime}</td>
          </tr>
          <tr>
            <td>Drop Time</td>
            <td>{transportInfo.dropTime}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td
              className={
                transportInfo.status === "Active"
                  ? "status-active"
                  : "status-inactive"
              }
            >
              {transportInfo.status}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="stops">
        <h2>Bus Stops</h2>
        <ul>
          {transportInfo.stops.map((stop, i) => (
            <li key={i}>{stop}</li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <button className="btn btn-request">
          Request Transport
        </button>
      </div>
    </div>
  );
};

export default Transport;