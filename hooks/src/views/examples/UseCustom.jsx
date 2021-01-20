import React from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from "../../components/layout/SectionTitle";
import useCounter from '../../hooks/UseCounter';

const UseRef = (props) => {
    const [count, inc, dec, updateState] = useCounter(); //se não quiser determinado valor [count,,]
    return (
      <div className="UseCustom">
        <PageTitle
          title="Seu Hook"
          subtitle="Vamos aprender como criar o nosso próprio Hook!"
        />
        <SectionTitle title="Exercício #01" />
        <div className="center">
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
      </div>
    );
}

export default UseRef
