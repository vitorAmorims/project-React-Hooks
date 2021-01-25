import React, {useReducer} from 'react';

import initialState from '../../Store'; //estado inicial 
import reducer from '../../Store/Reducers/index'; //fn reducer
import { numberAdd2, multiplicar, dividir, arredondar, n, login } from '../../Store/Actions/index';

const UseReducer2 = () => {
    const [state, dispath] = useReducer(reducer, initialState) //dentro do state temos o estadoGlobal
    // console.log(state);
    // console.log(dispath);
    // console.log(login)
    return (
      <div>
        <label>{state.user.name}</label>
        <label>{state.number}</label>
        <button type="button" onClick={() => numberAdd2(dispath)}>
          +2
        </button>
        <button type="button" onClick={() => multiplicar(dispath)}>
          *7
        </button>
        <button type="button" onClick={() => dividir(dispath)}>
          /25
        </button>
        <button type="button" onClick={() => arredondar(dispath)}>
          Arredondar
        </button>
        <input type="number" placeholder="Alterar número" onChange={(event) => n(dispath, event.target.value)}/>
        <label><button type="button" onClick={() => login(dispath, "vitor")}>
          setar Vitor
        </button></label>
        <input type="text" placeholder="Insira um texto qualquer!" onChange={(event) => login(dispath, event.target.value)}/>
        

      </div>
    );
}

export default UseReducer2;