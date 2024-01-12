import React, { useState } from "react";
import "./App.css";
import Button from "./module/Button/Button";
import Input from "./module/Input/Input";

function App() {
  const numArr: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 0];
  const [newValue, setNewValue] = useState(0);
  const btFun = (btValue: number) => {
    console.log("btFun called", btValue);
    setNewValue(btValue);
  };
  const btArr = numArr.map((numValue) => (
    <Button key={numValue} btFun={btFun} btName={numValue} />
  ));

  return (
    <div>
      <h1> This is new Cal TypeScript </h1>
      <br />
      <div>
        <Input inputValue={newValue} btFun={btFun} />
      </div>
      <br />
      {btArr}
    </div>
  );
}

export default App;
