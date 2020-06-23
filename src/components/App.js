import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Events from './Events'
import EventForm from './EventForm.js'
import AppContext from '../contexts/AppContext'
import OperationLogs from './OperationLogs'

function App() {
  const appState = localStorage.getItem('appWithRedux')
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    //localStorageは文字列を扱うため、json.stringify()で文字列に変換する必要がある
    localStorage.setItem('appWithRedux', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;