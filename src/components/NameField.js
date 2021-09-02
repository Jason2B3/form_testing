import React, { useState, useRef, useCallback, useEffect } from "react";
import { useCustomContextHook } from "../GlobalContext";

export default function NameField() {
  const { nameValid, setNameValid } = useCustomContextHook();
  const [inputValue, setInputValue] = useState("");

  // prettier-ignore
  const verifyName = useCallback(function (inputVal) {
      //$ We rely on a parameter to verify the name, instead of the state which updates slowly
      if (inputVal.trim() === "") {
        setNameValid(false); // set to false if it's blank or whitespace
        return;
      }
      setNameValid(true);
      return;
  },[]);
  // -------------------------------------------------------
  // Conditional JSX and Classes
  const inputClass = !nameValid ? "invalid" : "";
  // prettier-ignore
  let failureText = !nameValid ? (<p className="error-text">Name cannot be empty</p>) : ""
  return (
    <div className="form-control">
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        value={inputValue}
        onBlur={(e) => verifyName(e.target.value)}
        onChange={(e) => {
          setInputValue(e.target.value); //% delayed state update
          verifyName(e.target.value); //% verify email with event object instead of state 
        }}
        className={inputClass}
      />
      {failureText}
    </div>
  );
}
