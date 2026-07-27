import React, { useState } from "react";
import API from "../services/api";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerIntern = async (e) => {
    e.preventDefault();

    try {
      await API.post("/interns", formData);

      alert("Intern Registered Successfully");

      setFormData({
        name: "",
        email: "",
        walletAddress: "",
      });
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>Register Intern</h2>

      <form onSubmit={registerIntern}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Wallet Address"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;