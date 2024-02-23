import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((preVal) => {
      const newVal = preVal + 1;
      return newVal;
    });
  };
  const handleOnResetClick = () => {
    setCount(0);
  };

  return (
    <>
      <h1>This is the App component</h1>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleOnClick}>Click me</button>
        <button onClick={handleOnResetClick}>Reset</button>
      </div>
    </>
  );
}
