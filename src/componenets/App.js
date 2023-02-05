import React, { useState } from "react";

import HomeLogin from "./HomeLogin";
import "./App.css";
import Owner from "./Owner";
import Employee from "./Employee";

function App() {
  const [status, setStatus] = useState({
    ownerLogin: false,
    employeeLogin: false,
  });

  function handleOwnerLogin() {
    setStatus((prev) => {
      return { ...prev, ownerLogin: true };
    });
  }

  function handleEmployeeLogin() {
    setStatus((prev) => {
      return { ...prev, employeeLogin: true };
    });
  }

  return (
    <>
      {!status.ownerLogin && !status.employeeLogin && (
        <HomeLogin
          handleOwnerLogin={handleOwnerLogin}
          handleEmployeeLogin={handleEmployeeLogin}
        />
      )}
      {status.ownerLogin && !status.employeeLogin && <Owner />}

      {!status.ownerLogin && status.employeeLogin && <Employee />}
    </>
  );
}

export default App;
