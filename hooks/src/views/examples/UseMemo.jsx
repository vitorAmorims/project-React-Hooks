import React, { useState, useMemo,useEffect } from "react";
import PageTitle from '../../components/layout/PageTitle'

const sum = (a, b) => {
    const future = Date.now() + 2000; //consigo simular lag de processamento
    while(Date.now() < future) {} //lógica enquanto data atual < data futura não realiza soma
    return a + b;
}

const UseMemo = (props) => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    
    // primeira resolução, tem que importar useEffect do react
    // const [result, setResult] = useState(0);
    // useEffect(() => {
    //     setResult(sum(number1, number2));
    // }, [number1, number2]);

    // segunda resolução
    const result  = useMemo(() => sum(number1, number2), [number1, number2]);

    return (
      <div className="UseMemo">
        <PageTitle
          title="Hook UseMemo"
          subtitle="Retorna um valor memoizado!"
        />
        
        <div className="center">
            <span className="text">{result}</span>
            <p>implementada lógica assincrona para os dois primeiros inputs</p>
            <p>Soma dos dois primeiros inputs</p>
        <input
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
          type="number"
          className="input"
        />
        <input
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
          type="number"
          className="input"
        />
        <input
          value={number3}
          onChange={(e) => setNumber3(parseInt(e.target.value))}
          type="number"
          className="input"
        />
        </div>
      </div>
    );
}

export default UseMemo
