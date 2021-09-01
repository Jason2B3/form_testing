import React, { useState, createContext, useContext } from "react";
const AAA = createContext();
export const useCustomContextHook= () => useContext(AAA)

export default function GlobalContext(props) {
  // Name and email input field states
  const [nameValid, setNameValid] = React.useState("untouched");
  const [emailValid, setEmailValid] = React.useState("untouched");

  const distribution = { nameValid, setNameValid, emailValid, setEmailValid };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}