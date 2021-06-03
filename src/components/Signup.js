import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");

    const signup = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/signup", {
                username: username,
                name: name,
                email: email,
                password: password,
                address: address,
                mobile: mobile,
            })
            .then((res) => {
                console.log(res);
                console.log("POST request for signup sent to port 4000...");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={signup}>
            <h2>Sign up</h2>
            <div className="">
                <label>Username</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <small>must be a unique identification for you</small>
            </div>
            <div className="">
                <label>Full Name</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <div className="">
                <label>Email address</label>
                <input
                    type="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <div className="">
                <label>Password</label>
                <input
                    type="password"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <small>
                    must contain at least 8 characters, a number, an alphabet
                    and a symbol
                </small>
            </div>
            <div className="">
                <label>Address</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
            </div>
            <div className="">
                <label>Mobile number</label>
                <input
                    type="tel"
                    required
                    onChange={(e) => {
                        setMobile(e.target.value);
                    }}
                />
            </div>
            <button type="submit" className="btn">
                Sign up
            </button>
        </form>
    );
}
