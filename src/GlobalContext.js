import React, { useState, createContext, useContext } from "react";
const AAA = createContext();
export const useCustomContextHook= () => useContext(AAA)

export default function GlobalContext(props) {
  const [theme, setTheme] = useState("dark");
  const distribution = { theme, setTheme };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}