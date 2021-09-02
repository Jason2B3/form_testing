import React, { useState, useRef, useCallback, useEffect } from "react";
import { useCustomContextHook } from "../GlobalContext";
import useInput from "../hooks/useInput";
export default function NameField() {
  const { nameValid, setNameValid } = useCustomContextHook();
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
  return useInput(nameValid, verifyName, "Your Name");
}
