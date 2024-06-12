import { useState } from "react";
function Calculator() {
  const [value, setValue] = useState(0);

  const addValue = () => {
    if (value >= 15) {
      return console.log("Max Number limit reached");
    }
    // value = value + 1;
    setValue((prevVal) => prevVal + 1);
    setValue((prevVal) => prevVal + 1);
    setValue((prevVal) => prevVal + 1);
    setValue((prevVal) => prevVal + 1);
    setValue((prevVal) => prevVal + 1);
   
    console.log("Value Added Successfully.", value);
  };

  const removeValue = () => {
    if (value === 0) {
      return console.log("Min Number limit reached");
    }
    // value = value - 1;
    setValue((prevVal) => prevVal - 1);
    console.log("Value Substract Successfully.", value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Chai aur Code</h1>
      <h3 style={{ textAlign: "center" }}>Counter value: {value}</h3>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <button onClick={addValue}> Add Value</button>
        <button onClick={removeValue}> Remove Value</button>
      </div>
    </>
  );
}

export default Calculator;
