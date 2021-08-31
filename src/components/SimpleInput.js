import React from "react"
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = React.useState("");
  const nameChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    console.log(enteredName)
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button type="submit" onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
