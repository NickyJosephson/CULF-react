import React, { useState } from "react";
import { LocationPicker } from "../components/Map.jsx";
import "leaflet/dist/leaflet.css";
import "./Report.css";

export default function ReportPage() {
    const [formData, setFormData] = useState({
        itemName: "",
        location: "",
        description: "",
        contactEmail: "",
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
    const handleLocationSelect = (latlng) => {
        setFormData({
            ...formData,
            location: `Lat: ${latlng.lat}, Lng: ${latlng.lng}`,
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: "#ff5047", textAlign: "center"}}>Report a Lost Item</h1>
                <label>Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    required
                />
                <label>Last Seen Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <LocationPicker onLocationSelect={handleLocationSelect} />
                <label>Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Report</button>
            </form>
        </div>
    );
}
