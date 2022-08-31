import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1);
    // setCount((prev) => prev + 1)
  }

  const DecreaseCount = () => {
    setCount(count - 1);
    // setCount((prev) => prev - 1)
  }

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <div>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
