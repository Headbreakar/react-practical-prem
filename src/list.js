import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [records, setRecords] = useState([]);

  // Read records from localStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recordData")) || [];
    setRecords(storedData);
  }, []);

  // Delete a record by its index
  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    localStorage.setItem("recordData", JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
  };

  return (
    <div className="container mt-5 w-50">
      <h2>Contact Records</h2>
      {records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.usrname}</td>
                <td>{record.useremail}</td>
                <td>{record.userAddress}</td>
                <td>{record.userMessage}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRecord(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
