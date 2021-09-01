import React, { useState, useRef, useCallback } from "react";
import { useCustomContextHook } from "../GlobalContext";
import "./SimpleInput.css";
import EmailField from "./EmailField";
import NameField from "./NameField";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState(false);
  const { nameValid, emailValid } = useCustomContextHook(); // contextAPI states

  const submitHandler = useCallback(
    function (e) {
      e.preventDefault();
      if (emailValid === "untouched" || nameValid === "untouched") {
        alert("Cannot submit empty fields");
        return;
      }
      // Check if NameField and EmailField are both valid
      if (emailValid && nameValid) {
        setValidForm(true);
        alert("success! form is valid");
        return;
      } else {
        setValidForm(false);
        alert("Fill in the highlighted fields");
        return;
      }
    },
    [emailValid, nameValid]
  );

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
