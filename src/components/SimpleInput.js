import React, { useState, useRef } from "react";
import "./SimpleInput.css";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState(9);
  const inputRef = React.useRef();
  // const nameChangeHandler = function (e) {
  //   setEnteredName(e.target.value);
  // };
  const submitHandler = function (e) {
    e.preventDefault();
    let userInput = inputRef.current.value;
    // If the suer submits nothing/whitespace, end this ƒ() early
    if (userInput.trim() === "") {
      setValidForm(false);
      return;
    }
    setValidForm(true);
    console.log(userInput); // access ref value here
  };
  // ---------------------------------------
  //^ Conditional JSX
  let failureText = !validForm ? (
    <p className="error-text">Name must not be empty</p>
  ) : ( "" );
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
