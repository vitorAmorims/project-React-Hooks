import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
	user: null,
	cart: [],
	products: [],
	//foco
	number: 0,
};

function reducer(state, action) {
    switch (action.type) {
      case "add2":
        return { ...state, number: state.number + 2 };
      case "login":
        // return { ...state, user: { name: 'Vitor' } } //podemos não deixar name fixo
        return { ...state, user: { name: action.name } }; // deixar o nome variável
      default:
        return state;
    }
}

const UseReducer = (props) => {
    const [state, dispath] = useReducer(reducer, initialState)
    return (
      <div className="UseReducer">
        <PageTitle
          title="Hook UseReducer"
          subtitle="Uma outra forma de ter estado em componentes funcionais!"
        />
        <div>
          <span>{state.number}</span>
          <div>
            {state.user ? (
              <span>{state.user.name}</span>
            ) : (
              <span>Sem usuário</span>
            )}
          </div>
          <button onClick={() => dispath({ type: "add2" })}>+2</button>
          <button
            onClick={() => dispath({ type: "login" })} // deixei fixo
            onClick={() => dispath({ type: "login", name: "Lucas" })} //setando nome Lucas no estado
          >
            Login
          </button>
          <input  
          type="text" 
          placeholder="inseria uma palavra"
          onChange={(event) => dispath({type: 'login', name: event.target.value })} />
        </div>
      </div>
    );
}

export default UseReducer
