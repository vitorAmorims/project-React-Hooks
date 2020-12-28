import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    // console.log(useState(0))
    // const number = useState(0)[0]
    // const setNumber = useState(0)[1]
    const [count, setcount] = useState(0)
    const [name, setName] = useState('')
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button onClick={() => setcount(count + 1)} className="btn">+</button>
                        <button onClick={() => setcount(count - 1)} className="btn">-</button>
                        <button onClick={() => setcount(count + 10)} className="btn">+10</button>
                        <button onClick={() => setcount(current => current - 10)} className="btn">-10</button>
                    </div>
                </div>
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default UseState
