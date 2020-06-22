import React, { useState } from 'react';

App.defaultProps = {
  name: '',
  price: 1000
}

function App(props) {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
  
  return (
    <div>
      <p>{name} : {price}</p>
      <button onClick={() => setPrice(prevPrice => prevPrice + 1)}>+</button>
      <button onClick={() => setPrice(prevPrice => prevPrice - 1)}>-</button>
      <button onClick={reset}>reset</button>
      <input value={name} type="text" onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default App;