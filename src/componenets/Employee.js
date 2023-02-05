import React, { useState } from "react";

import "./HomeLogin.css";

import LoginCard from "./LoginCard";
import AfterEmployeeLogin from "./AfterEmployeeLogin";


export default function Employee() {
  
  const [isLogin,setIsLogin] = useState(false)
  const [pin, setPin] = useState("");
  const [error, setError] = useState("")

  function onPinChange(e) {
    setPin(e.target.value)
  }

  function onLogin() {
    let pass = Number(pin)
    if(pass === 54321) {
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
       : <AfterEmployeeLogin />}
    </>
  );
}

   