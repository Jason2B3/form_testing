import React, { useState, useRef, useCallback } from "react";
import "./SimpleInput.css";
import EmailField from "./EmailField";
import NameField from "./NameField";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState("untouched");

  // prettier-ignore
  const submitHandler = useCallback(function (e) {
    e.preventDefault();
    // Check if NameField and EmailField are both valid
    const nameValidity=0;
    const emailValidity=0;
    if (nameValidity && emailValidity) setValidForm(true);
    else {
      setValidForm(false);
      alert("Fill in the highlighted fields")
    }
}, [] );

  return (
    <form>
      <div className="form-actions">
        <NameField />
        <EmailField />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
