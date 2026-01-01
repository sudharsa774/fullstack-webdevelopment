import React, { useState } from "react";
import "./LoginFormValidation.css";

function LoginFormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    /* 1. Required Field Validation */
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    /* 2. Regular Expression Validation (Email) */
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    /* 3. Range Validation (Age between 18–60) */
    if (!formData.age) {
      formErrors.age = "Age is required";
    } else if (formData.age < 18 || formData.age > 60) {
      formErrors.age = "Age must be between 18 and 60";
    }

    /* 4. Regular Expression Validation (Phone) */
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    /* Required + Length Validation (Password) */
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    /* 5. Compare Validation (Password Match) */
    if (!formData.confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (formData.confirmPass !== formData.password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        age: "",
phone: "",
        password: "",
        confirmPass: "",
      });
    }
  };

  return (
    <div className="container">
      <h2>Login Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <span className="error">{errors.age}</span>
<input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span className="error">{errors.phone}</span>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span className="error">{errors.password}</span>

        <input
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
          value={formData.confirmPass}
          onChange={handleChange}
        />
        <span className="error">{errors.confirmPass}</span>

        <button type="login">Login</button>
      </form>
    </div>
  );
}

export default LoginFormValidation;
