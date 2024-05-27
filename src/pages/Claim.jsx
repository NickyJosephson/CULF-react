import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Report.css";

export default function Claim() {
    const [formData, setFormData] = useState({
      itemID: "",
      description: "",
  });
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would usually send the form data to a server or handle it as needed
      console.log(formData);
      alert("Form submitted. Please check the console for the form data.");
  };
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h1 style={{ color: "#ff5047", textAlign: "center"}}>Report a Lost Item</h1>
              <h5 style={{textAlign: "center"}}>Submit the item number and we'll connect you with the student who has the item</h5>
              <label>Item ID:</label>
              <input
                  type="text"
                  id="imemID"
                  name="itemID"
                  placeholder="Item ID"
                  value={formData.itemID}
                  onChange={handleChange}
                  required
              />
              <label>Detailed Description of Your Item:</label>
              <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
              />
              <button type="submit">Connect</button>
          </form>
      </div>
  );
}
