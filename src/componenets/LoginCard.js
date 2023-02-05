import React from "react";
import "./HomeLogin.css";
import Nav from "./Nav";
import { FcBusinessman } from "react-icons/fc";

export default function LoginCard(props) {
  
  return (
    <>
        <Nav />
        <div className="home-container">
        <div className="card">
            <h2 className="home-text">Welcome Back</h2>
            <div className="icon">
            <FcBusinessman />
            </div>
            <input
            className="input"
            type="password"
            name="name"
            value={props.pin}
            onChange={(e) => {
                props.onPinChange(e);
            }}
            placeholder="Enter the PIN"
            />
            <span>{props.error}</span>
            <button className="home-btn" onClick={props.onLogin}>Login</button>
        </div>
        </div>
    </>
  );
}
