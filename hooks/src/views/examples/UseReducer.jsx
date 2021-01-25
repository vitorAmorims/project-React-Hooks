import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  user: null,
	cart: [],
  products: [],
  estados: [],
	//foco
	number: 0,
};

function reducer(state, action) {
  // console.log(state);
    switch (action.type) {
      case "add2":
        return { ...state, number: +(state.number) + 2 };
      case "login":
        // return { ...state, user: { name: 'Vitor' } } //podemos não deixar name fixo
        return { ...state, user: { name: action.name } }; // deixar o nome variável
      case 'multiplicar':
        return {...state, number: +(state.number) * 7 };
      case 'dividir':
        return {...state, number: +(state.number) / 25 };
      case 'arredondar':
        return {...state,  number: parseInt(state.number) };
      case 'n':
        return {...state, number: action.n}
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
          <button onClick={() => dispath({ type: "multiplicar" })}>
            *7
          </button>
          <button onClick={() => dispath({ type: "dividir" })}>
            /25
          </button>
          <button onClick={() => dispath({ type: "arredondar" })}>
            Arredondar
          </button>
          <button
            onClick={() => dispath({ type: "login" })} // deixei fixo
            onClick={() => dispath({ type: "login", name: "Lucas" })} //setando nome Lucas no estado
          >
            Login
          </button>
          <br></br>
          <br></br>
          <div>
            <label>Inserir um nome</label>
            <input
              type="text"
              placeholder="Digite uma palavra"
              onChange={(event) =>
                dispath({ type: "login", name: event.target.value })
              }
            />
          </div>
          <br></br>
          <div>
            <label>Alterar valor de n</label>
            <input
            type="number"
            placeholder="insira um valor"
            onChange={(event) =>
              dispath({ type: "n", n: event.target.value })
            }
            
          />
          </div>
        </div>
      </div>
    );
}

export default UseReducer
