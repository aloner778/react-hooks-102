import React, { useState } from 'react';

App.defaultProps = {
  name: '',
  price: 1000
}

function App(props) {
  const [state, setState] = useState(props)
  const {name, price} = state
  
  return (
    <div>
      <p>{name} : {price}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+</button>
      <button onClick={() => setState({...state, price: price - 1})}>-</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} type="text" onChange={e => setState({...state, name: e.target.value})} />
    </div>
  )
}

export default App;