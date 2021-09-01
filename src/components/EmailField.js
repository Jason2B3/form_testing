import React, { useState, useRef, useCallback, useEffect } from "react";
import { useCustomContextHook } from "../GlobalContext";

export default function EmailField() {
  const { emailValid, setEmailValid } = useCustomContextHook();
  const inputRef = React.useRef();

  // prettier-ignore
  const verifyInputFN = useCallback(function () {
      // If input field is blank, emailValid === false
      let userInput = inputRef.current.value;
      if (!userInput.includes("@")) {
        setEmailValid(false);
        return;
      }
      // If input field is not blank, emailValid === true
      setEmailValid(true);
  }, [inputRef]);

  //% Validate the input vield when we hit the submit button, remove focus on it, and tap a key
  // prettier-ignore
  const blurTapHandler = useCallback((e) => verifyInputFN(),[verifyInputFN]);

  // -------------------------------------------------------
  // Conditional JSX and Classes
  const inputClass = !emailValid ? "invalid" : "";
  // prettier-ignore
  let failureText = !emailValid ? (<p className="error-text">Email cannot be empty</p>) : ""
  return (
    <div className="form-control">
      <label htmlFor="email">Email</label>
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
