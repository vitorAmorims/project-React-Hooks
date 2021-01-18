import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtons from './UseCallBackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);
    
    // 1- criada função
    // function inc(delta) {
    //     setCount(count + delta);
    // }

    // 2- passar a função para dentro do callback
    // 3- array de dependências devo incluir a fn setCount, porque não há necessidade de chamar a fn setCount toda vez que mudar o número.

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta); // dentro da função é necessário passar callback
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc} />
                {/* <div>
                    <button className="btn" onClick={() => inc(6)}>+6</button>
                    <button className="btn" onClick={() => inc(12)}>+12</button>
                    <button className="btn" onClick={() => inc(18)}>+18</button>
                </div> */}
            </div>
        </div>
    )
}

export default UseCallback
