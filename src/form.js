import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let contactData = [];

  const addRecord = (e) => {
    e.preventDefault();
    let contactData = JSON.parse(localStorage.getItem("recordData")) || [];

    contactData.push({
      usrname: name,
      useremail: email,
      userAddress: address,
      userMessage: message,
    });

    localStorage.setItem("recordData", JSON.stringify(contactData));
    alert("record inserted successfully");
  };
  return (
    <div>
      <div class="container mt-5 w-50">
        <form>
          <div class="mb-3">
            <label for="" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              placeholder="write your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name=""
              id=""
              placeholder="write your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              placeholder="Your Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Your Message
            </label>
            <textarea
              class="form-control"
              name=""
              id=""
              rows="3"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button onClick={addRecord} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
