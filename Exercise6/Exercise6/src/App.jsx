import { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const handleChangeNum1 = (value) => {
    setNum1(value);
  };

  const handleChangeNum2 = (value) => {
    setNum2(value);
  };

  const handleChangeOperator = (value) => {
    setOperator(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const num1Float = parseFloat(num1);
    const num2Float = parseFloat(num2);
    let result;
    if (operator == "+") {
      result = num1Float + num2Float;
    } else if (operator == "-") {
      result = num1Float - num2Float;
    } else if (operator == "/") {
      result = num2Float == 0 ? num1Float : num1Float / num2Float;
    } else if (operator == "*") {
      result = num1Float * num2Float;
    } else if (operator == "%") {
      result = num2Float == 0 ? 0 : num1Float % num2Float;
    } else {
      result = "Available operators are +, -, *, /, %. That's all.";
    }
    setFinalResult(result);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <Form
          name="num1"
          htmlFor="num1"
          type="number"
          title="First Number"
          value={num1}
          onChangeNum1={handleChangeNum1}
        />

        <Form
          name="operator"
          htmlFor="operator"
          type="text"
          title="Operator"
          value={operator}
          onChangeOperator={handleChangeOperator}
        />

        <Form
          name="num2"
          htmlFor="num2"
          type="number"
          title="Second Number"
          value={num2}
          onChangeNum2={handleChangeNum2}
        />

        <button className="calculate-btn">Calculate</button>
      </form>
      <div className="result">{finalResult}</div>
    </>
  );
}

export default App;
