import React, { useState, useEffect } from "react";
import "../cssfiles/Certificate.css";
const Certificate = () => {
  const defaultCertificates = [
    { name: "Academic Excellence", date: "2025-06-15", status: "Issued" },
    { name: "Sports Achievement", date: "2025-08-20", status: "Pending" },
    { name: "Library Completion", date: "2025-12-05", status: "Issued" },
  ]
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    const storedCertificates = localStorage.getItem("certificates");
    if (storedCertificates) {
      setCertificates(JSON.parse(storedCertificates));
    } else {
      localStorage.setItem("certificates", JSON.stringify(defaultCertificates));
      setCertificates(defaultCertificates);
    }
  }, []);
  return (
    <div className="certificate-page">
      <h1 className="page-title">Certificates</h1>
      <table className="certificate-table">
        <thead>
          <tr>
            <th>Certificate Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert, index) => (
            <tr key={index}>
              <td>{cert.name}</td>
              <td>{cert.date}</td>
              <td className={ cert.status === "Issued" ? "status-issued" : "status-pending" } >
                {cert.status}
              </td>
              <td>
                {cert.status === "Issued" ? (<button className="btn btn-download">Download</button>) :
                 (<button className="btn btn-request">Request</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Certificate;