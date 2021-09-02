import React, { useState, useRef, useCallback, useEffect } from "react";
import { useCustomContextHook } from "../GlobalContext";

export default function EmailField() {
  const { emailValid, setEmailValid } = useCustomContextHook();
  const [inputValue, setInputValue] = useState("");

  // prettier-ignore
  const verifyEmail = useCallback(function (inputVal) {
      // If input field DN contain @, emailValid === false
      if (inputVal.includes("@")) {
        setEmailValid(true);
        return;
      }
      // If input field is not blank, emailValid === true
      setEmailValid(false);
      return;
  }, []);
  // -------------------------------------------------------
  // Conditional JSX and Classes
  const inputClass = !emailValid ? "invalid" : "";
  // prettier-ignore
  let failureText = !emailValid ? (<p className="error-text">Email not accepted</p>) : ""
  return (
    <div className="form-control">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="name"
        value={inputValue}
        onBlur={(e) => verifyEmail(e.target.value)} // verify the input on blur
        onChange={(e) =>{
          setInputValue(e.target.value) //% delayed state update
          verifyEmail(e.target.value); //% verify email with event object instead of state 
        }} // update the inputValue variable
        className={inputClass}
      />
      {failureText}
    </div>
  );
}
