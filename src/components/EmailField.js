import React, { useState, useRef, useCallback, useEffect } from "react";
import { useCustomContextHook } from "../GlobalContext";
import useInput from "../hooks/useInput"
export default function EmailField() {
  const { emailValid, setEmailValid } = useCustomContextHook();
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
  return useInput(emailValid, verifyEmail, "Your email");

}
