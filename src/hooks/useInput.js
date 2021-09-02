import React, { useState } from "react";

function useInput(inputValid, verifyFN, label) {
  const [inputValue, setInputValue] = useState("");

  // Conditional JSX and Classes
  const inputClass = !inputValid ? "invalid" : "";
  // prettier-ignore
  let failureText = !inputValid ? (<p className="error-text">The input above is not valid</p>) : ""
  return (
    <div className="form-control">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        id="name"
        value={inputValue}
        onBlur={(e) => verifyFN(e.target.value)}
        onChange={(e) => {
          setInputValue(e.target.value); //% delayed state update
          verifyFN(e.target.value); //% verify email with event object instead of state
        }}
        className={inputClass}
      />
      {failureText}
    </div>
  );
}

export default useInput;
