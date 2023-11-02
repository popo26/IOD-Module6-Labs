import { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  // const [formula, setFormula] = useState({
  //   num1:"",
  //   num2:"",
  //   operator:""
  // })
  const [finalResult, setFinalResult] = useState("");

  const handleClick = () => {
    const num1Float = parseFloat(num1);
    const num2Flaot = parseFloat(num2);
    // setFormula({num1:num1Float, num2:num2Flaot, operator:operator})
    let result;
    console.log(operator);
    if (operator == "+") {
      result = num1Float + num2Flaot;
    } else if (operator == "-") {
      result = num1Float - num2Flaot;
    } else if (operator == "/") {
      result = num1Float / num2Flaot;
    } else if (operator == "*") {
      result = num1Float * num2Flaot;
    } else if (operator == "%") {
      result = num1Float % num2Flaot;
    }
    console.log(result);
    setFinalResult(result);
  };

  return (
    <>
      <Form
        name="num1"
        htmlFor="num1"
        type="number"
        title="First Number"
        // onChange={(e) => {console.log(e.target.value);setNum1(e.target.value);}}
        onNum1={(e) => setNum1(e.target.value)}
      />
      <Form
        name="operator"
        htmlFor="operator"
        type="text"
        title="Operator"
        onChange={(e) => setOperator(e.target.value)}
      />
      <Form
        name="num2"
        htmlFor="num2"
        type="number"
        title="Second Number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <div>{finalResult}</div>
    </>
  );
}

export default App;
