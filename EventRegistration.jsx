import React, { useState } from "react";

function EventRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.event) {
      alert("⚠️ Please fill all the fields");
      return;
    }

    alert(
      `✅ Registration Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nEvent: ${formData.event}`
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      event: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Event</option>
          <option value="Tech Talk">Tech Talk</option>
          <option value="Workshop">Workshop</option>
          <option value="Hackathon">Hackathon</option>
        </select>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default EventRegistration
