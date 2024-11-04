import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const onInput = (e) => {
    setNumber(e.target.value);
  };
  const square = (number) => {
    console.log("Number Squared");
    return Math.pow(number, 2);
  };
  const getSquaredNum = useMemo(() => square(number), [number]);

  return (
    <div className="App">
      <input type="number" value={number} onChange={onInput} />
      <p>Square of Number:{getSquaredNum}</p>
      <button onClick={() => setCount(count + 1)}>Counter++</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
