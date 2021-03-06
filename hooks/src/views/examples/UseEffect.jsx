import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function parOuImpar(n) {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

const renderizar = () => {
  const future = Date.now() + 5000; //consigo simular lag de processamento
  while(Date.now() < future) {}
  return false;
}


const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState('impar');

  // ex01
  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(() => {
    if (fatorial > 500) document.title = "Fatorial maior que 500";
  }, [fatorial]);
  //   function fatorial(number) {
  //     let num = number;
  //     let fatorial = 1;
  //     while (num > 0) {
  //       fatorial *= num;
  //       num = num - 1;
  //     }
  //     return fatorial;
  //   }

  // ex02
  useEffect(() => {
    setStatus(parOuImpar(number));
  },[number]);

  // useEffect(() => {
  //   renderizar()
  // })


  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      {/* <button disabled={renderizar()}>Renderizar async</button> */}
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
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
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status input - </span>
          <span className="text">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
