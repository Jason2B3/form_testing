import React, { useState, useRef, useCallback } from "react";
import "./SimpleInput.css";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState("untouched");
  const inputRef = React.useRef();

  // prettier-ignore
  const verifyInputFN = useCallback(function () {
      // If input field is blank, validForm === false
      let userInput = inputRef.current.value;
      if (userInput.trim() === "") {
        setValidForm(false);
        return;
      }
      // If input field is not blank, validForm === true
      setValidForm(true);
  }, [inputRef]);

  //% Validate the input vield when we hit the submit button, remove focus on it, and tap a key
  // prettier-ignore
  const blurTapHandler = useCallback((e) => verifyInputFN(),[verifyInputFN]);

  // prettier-ignore
  const submitHandler = useCallback(function (e) {
      e.preventDefault();
      verifyInputFN();
  }, [verifyInputFN] );

  // -------------------------------------------------------
  // Conditional JSX and Classes
  const inputClass = !validForm ? "invalid" : "";
  // prettier-ignore
  let failureText = !validForm ? (<p className="error-text">Name cannot be empty</p>) : ""

  return (
    <form>
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
      <div className="form-actions">
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
