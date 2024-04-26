import React, { useState } from "react";
import useForm from "../api/Authentication.js";
import "./Register.css"; // Import the CSS file

export default function RegisterPage() {
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState("");
    const validateForm = (data) => {
        if (!data.email.toLowerCase().includes("@cornell.edu")){
            setFormError({
                email:"You must use a cornell email"
            })
            return false;
        } else if (data.password != data.cpassword) {
            setFormError({
                cpassword:"Password must match"
            });
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce(
                (obj, input) =>
                    Object.assign(obj, { [input.name]: input.value }),
                {}
            );
        if (validateForm(data)){
            return;
        } else {
            return;
        }
        
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 style={{ color: "#ff5047", textAlign: "left"}}>Register</h2>
            {message && <p className="message">{message}</p>}
            <div className="inputGroup">
                <label>Name:</label>
                <input
                    type="text"
                    class="input"
                    name="name"
                    placeHolder="Enter name"
                    required
                />
            </div>
            <div className="inputGroup">
                <label>Cornell Email:</label>
                <input
                    type="text"
                    class="input"
                    name="email"
                    placeHolder="Enter email address"
                    required
                />
                <p className="error-message">{formError.email}</p>
            </div>
            <div className="inputGroup">
                <label>Phone Number:</label>
                <input
                    type="text"
                    class="input"
                    name="phone"
                    placeHolder="Enter phone number"
                    required
                />
            </div>
            <div className="inputGroup">
                <label>Password:</label>
                <input
                    type="password"
                    class="input"
                    name="password"
                    placeHolder="Enter password"
                    required
                />
            </div>
            <div className="inputGroup">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    className="input"
                    name="cpassword"
                    placeHolder="Enter password"
                    required
                />
                <p className="error-message">{formError.cpassword}</p>
            </div>
            <button type="submit" className="button">
                Register
            </button>
        </form>
    );
}
