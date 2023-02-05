import React, { useState } from "react";

import "./HomeLogin.css";
import AfterOwnerLogin from "./AfterOwnerLogin";

import LoginCard from "./LoginCard";


export default function Owner() {
  
  const [isLogin,setIsLogin] = useState(false)
  const [pin, setPin] = useState("");
  const [error, setError] = useState("")

  function onPinChange(e) {
    setPin(e.target.value)
  }

  function onLogin() {
    let pass = Number(pin)
    if(pass === 12345) {
        setIsLogin(true)
    }
    else {
        setError("Please enter the write PIN")
    }
  }
  return (
    <>
      {!isLogin ? 
      <LoginCard 
        onLogin = {onLogin}
        onPinChange = {onPinChange}
        pin = {pin}
        error = {error}
       />
       : <AfterOwnerLogin />}
    </>
  );
}

   