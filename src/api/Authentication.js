import react, { useState } from "react";
import axios from 'axios';
import {resolve} from './resolve.js';
export default function useForm({ additionalData }) {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");
        console.log(e.target.elements)
        
            // fetch(finalFormEndpoint, {
            //     method: "POST",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then((response) => {
            //         if (response.status !== 200) {
            //             throw new Error(response.statusText);
            //         }

            //         return response.json();
            //     })
            //     .then(() => {
            //         setMessage("Registration pending, verify your email.");
            //         setStatus("verify-email");
            //     })
            //     .catch((err) => {
            //         setMessage(err.toString());
            //         setStatus("error");
            //     });
            setMessage('submitted api call')
        if (additionalData) {
            Object.assign(data, additionalData);
        }
    };

    return { handleSubmit, status, message, formError };
}

export async function login(body){
    const token = localStorage.getItem("jwt-token");
    return await resolve(axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/users/login`,
        JSON.stringify(body)
    ))
}

export async function signup(body){
    return await resolve(axios.post(
        `${import.meta.env.VITE_BASE_URL}api/v1/users/signup`,
        JSON.stringify(body),
        {headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}
    ))
}

export async function forgotPassword(body){
    return await resolve(axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/forgotPassword`,
        body,
        {headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}
    ))
}