import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const increment2 = () => {
    for (let i = 0; i < 100; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const double = () => {
    setCount(prevCount => prevCount * 2)
  }

  const three = () => setCount(prevCount => (
    prevCount % 3 === 0 ? prevCount / 3 : prevCount
  ))

  return (
    <React.Fragment>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(prevCount => prevCount + 10)}>++</button>
      <button onClick={increment2}>+++</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(prevCount => prevCount - 10)}>--</button>

      <button onClick={double}>*</button>
      <button onClick={three}>-3-</button>
    </React.Fragment>
  );
}

export default App;