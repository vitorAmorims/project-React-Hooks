import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
//   setFatorial(calcFatorial(number)); error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  useEffect(() => {
    setFatorial(calcFatorial(number))
  }, [number]);
  
  useEffect(() => {
    if (fatorial > 500) document.title = "Fatorial maior que 500"
  }, [fatorial])
//   function fatorial(number) {
//     let num = number;
//     let fatorial = 1;
//     while (num > 0) {
//       fatorial *= num;
//       num = num - 1;
//     }
//     return fatorial;
//   }
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
        </div>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          className="input"
        />
        <div>
          <button onClick={() => setNumber(number + 1)} className="btn">
            +
          </button>
          <button onClick={() => setNumber(number - 1)} className="btn">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
