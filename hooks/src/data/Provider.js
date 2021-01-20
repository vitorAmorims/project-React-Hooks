import React, { useState } from 'react';

const initialState = {
    stateA: 'Brincando de aprender',
    stateB: 'Usando useContext'
}

export const AppContext = React.createContext(initialState)


function Provider(props) {
  const [state, setState] = useState(initialState)
  
  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }


  return (
    <AppContext.Provider value={{
        stateA: state.stateA,
        stateB: state.stateB,
        setStateA: t => updateState('stateA', t),
        setStateB: t => updateState('stateB', t),
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default Provider;