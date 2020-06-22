import React, { useState, useEffect } from 'react';



function App(props) {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log('open')
  })
  
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

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;