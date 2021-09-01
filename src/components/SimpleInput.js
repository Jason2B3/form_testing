import React, { useState, useRef, useCallback } from "react";
import "./SimpleInput.css";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState("untouched");
  const inputRef = React.useRef();

  const verifyInputFN = useCallback(
    (inp) => {
      let userInput = inputRef.current.value;
      if (userInput.trim() === "") {
        setValidForm(false);
        return;
      }
      setValidForm(true);
      console.log(userInput);
    },
    [inputRef]
  );

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    verifyInputFN();
  }, [verifyInputFN]);

  const blurHandler = useCallback((e) => verifyInputFN(), [verifyInputFN]);

  // -------------------------------------------------------
  //^ Conditional JSX
  let failureText = !validForm ? (
    <p className="error-text">Name must not be empty</p>
  ) : (
    ""
  );
  //^ Conditional Classes
  const inputClass = !validForm ? "invalid" : "";

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef} // assign a ref attribute instead of a value one
          onBlur={blurHandler}
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
