import React from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from "../../components/layout/SectionTitle";
import useCounter from '../../hooks/UseCounter';
import {useFetch} from '../../hooks/useFetch';

const UseRef = (props) => {
    const [count, inc, dec, updateState] = useCounter(); //se não quiser determinado valor [count,,]
    
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url);
    const { data } = response;
    const show = (data) => {
      return data.map(state => <li key={state.nome}> {`${state.nome} - ${state.sigla}`} </li>)
    };

    return (
      <div className="UseCustom">
        <PageTitle
          title="Seu Hook"
          subtitle="Vamos aprender como criar o nosso próprio Hook!"
        />
        <SectionTitle title="Exercício #01" />
        <div className="center">
          <h3>Usando custom Hooks useCounter</h3>
          <span className="text">{count}</span>
          <div className="center">
            <button className="btn" onClick={() => inc()}>
              +1
            </button>
            <button className="btn" onClick={() => dec()}>
              -1
            </button>
            <input
              type="number"
              onChange={(event) => updateState(event.target.value)}
              placeholder="alterar numero inicial"
            />
          </div>
        </div>
        <SectionTitle title="Exercício #02" />
        <div className="center">
          <h3>Usando custom Hooks useFetch</h3>
        <ul>
          {!response.loading ? show(response.data) : false }
        </ul>
        </div>
      </div>
    );
}

export default UseRef
