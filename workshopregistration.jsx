import React, { useState } from "react";

function WorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    mode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.workshop || !formData.mode) {
      alert("⚠️ Please fill all fields");
      return;
    }

    alert("✅ Workshop Registration Successful!");
  };

  return (
    <div style={styles.container}>
      {/* Form Section */}
      <div style={styles.formBox}>
        <h2>Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="workshop"
            value={formData.workshop}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Workshop</option>
            <option value="React Basics">React Basics</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Web Development">Web Development</option>
          </select>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Mode of Attendance</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>

      {/* Live Preview Section */}
      <div style={styles.previewBox}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {formData.name || "—"}</p>
        <p><strong>Email:</strong> {formData.email || "—"}</p>
        <p><strong>Workshop:</strong> {formData.workshop || "—"}</p>
        <p><strong>Mode:</strong> {formData.mode || "—"}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    fontFamily: "Arial",
  },
  formBox: {
    width: "320px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  previewBox: {
    width: "300px",
    padding: "20px",
    border: "1px solid #4CAF50",
    borderRadius: "10px",
    backgroundColor: "#f9fff9",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default WorkshopRegistration;
