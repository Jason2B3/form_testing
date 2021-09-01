import React, { useState, useRef, useCallback } from "react";
import { useCustomContextHook } from "../GlobalContext";

export default function NameField() {
  const { nameValid, setNameValid } = useCustomContextHook();
  const inputRef = React.useRef();

  // prettier-ignore
  const verifyInputFN = useCallback(function () {
      // If input field is blank, nameValid === false
      let userInput = inputRef.current.value;
      if (userInput.trim() === "") {
        setNameValid(false);
        return;
      }
      // If input field is not blank, nameValid === true
      setNameValid(true);
      return;
  }, [inputRef]);

  //% Validate the input vield when we hit the submit button, remove focus on it, and tap a key
  // prettier-ignore
  const blurTapHandler = useCallback((e) => verifyInputFN(),[verifyInputFN]);

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
        ref={inputRef} // assign a ref attribute instead of a value one
        onBlur={blurTapHandler}
        onChange={blurTapHandler}
        className={inputClass}
      />
      {failureText}
    </div>
  );
}
