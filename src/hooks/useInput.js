import React from "react";

function useInput(initialValue) {
  // Set up stateful variables to hold current value of the input field
  const [value, setValue] = useState(initialValue);
  // Function resets input value to whatever initVal was given as a parameter
  const reset = () => setValue(initialValue); 
  const bind = {
    value,
    onChange: function (e) {
      // Sets stateful "value" variable equal to the event target's value
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
}

export default useInput;
