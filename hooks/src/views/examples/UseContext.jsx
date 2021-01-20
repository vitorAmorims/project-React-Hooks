import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext';
import SectionTitle from "../../components/layout/SectionTitle";
import { AppContext } from '../../data/Store';


const UseContext = (props) => {
    const context = useContext(DataContext);
    const { state, setState } = context;
    // console.log(state);
    const {number, text, setNumber, setText} = useContext(AppContext)
    
    function addNumber(delta) {
      setState({
        ...state, //spread
        number: state.number + delta, //alterando somente a chave de interesse
      });
    }

    useEffect(() => {
      if (number > 1250) {
        setText('Eita..')
      }
    }, [number])

    return (
      <div className="UseContext">
        <PageTitle
          title="Hook UseContext"
          subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
        />
        <SectionTitle title="Exercício #01" />
        <div className="center">
          <span className="text">{state.number}</span>
          <span className="text">{state.text}</span>
          <div>
            <button className="btn" onClick={() => addNumber(1)}>
              +1
            </button>
            <button className="btn" onClick={() => addNumber(-1)}>
              -1
            </button>
          </div>
        </div>
        <SectionTitle title="Exercício #02" />
        <div className="center">
          <span className="text">{number}</span>
          <span className="text">{text}</span>
          <div>
            <button className="btn" onClick={() => setNumber(number -1)}>
              -1
            </button>
            <button className="btn" onClick={() => setNumber(number +1)}>
              +1
            </button>
          </div>
        </div>
      </div>
    );
}

export default UseContext;

//aula 1
//cofiguração de Hook useContext

//criar os dados fora dos componentes, e depois passar os dados à partir de um provider

//Nota: É comum usar contextAPI com useReducer.

// useReducer é uma alternativa ao useState, para os casos de estados mais complexos

//# aula 01

// -----------1- etapa

//src/data/DataContext.js  //criando context

//import React from 'react';

// export const data = {
// 	number: 123,
// 	text: 'Context API...'
// };

// const DataContext = React.createContext(null);

// export default DataContext;


//---------------2 - etapa
// -------------------Podemos usar DataContext em index.js ou App.js

//config arquivo index.js

// import DataContext, {data} from '../data/DataContext';

// React.DOM.render(
//   <DataContext.Provider value={data}>
//     <App />
//   </DataContext.Provider>, document.getElementById('root')
// )

// ou

//config arquivo App.js 

// import DataContext, {data} from '../data/DataContext';

// const App = props => {
// 	const [state, setState] = useState(data); //inicializando estado com objeto data
// 	return (
// 		<DataContext.Provider value={{state, setState}}> 
// 		// poderia usar value={{state: state, setState: setState}}
// 			<div> 
// 				<Router>
// 					<Menu />
					
// 					<Content />
// 				</Router>
// 			</div>
// 		</DataContext.Provider>
// 	)
// }


//----------------3 - etapa 
//entrar no componente que desejamos usar o context

// ex: renderizando com config index.js

// import DataContext from '../../data/DataContext';

// const context = useContext(DataContext); // neste ponto estou atribuindo { number: 123, text: 'Context API...' }

// render(
// 	<div>
// 		<span>{context.number}</span> //deve renderizar 123
// 		<span>{context.text}</span> //deve renderizar Context API...
		
// // --------------------ex: renderizando com config App.js
// // neste exemplo usaremos a fn setState para alterar o número.

// import DataContext from '../../data/DataContext';

 
// // posso destruturar const {state, setState} = useContext(DataContext) 
// // podendo chamar, state e setState diretamente


// const context = useContext(DataContext); // neste ponto estou atribuindo { number: 123, text: 'Context API...' }



// function addNumber(delta) {
// 	context.setState({
// 		...context.state, //spread
// 		number: context.state.number + delta //alterando somente a chave de interesse
// 	});
// }

// ex: renderizando com config index.js
// render(
// 	<div>
// 		<span>{context.state.number}</span> //deve renderizar 123
// 		<span>{context.state.text}</span> //deve renderizar Context API...
// 		<div>
// 			<button onClick-{() => addNumber(-1)}>-1</button>
// 			<button onClick-{() => addNumber(1)}>-1</button>

//-----------------------aula 2

// aula 02 - useContext - passo mais organizado (encapsulado)

// // ---------------------------1- primeira etapa /src/data/Store.jsx

// componente que tem estado interno que vai controlar o estado de nossa aplicação


// import React, { useState } from 'react';

// const initialState = {
// 	number: 1234,
// 	text: "Context API + Hooks"
// };

// export const AppContext = React.createContext(initialState);

// const Store = props => {
// 	const [state, setState] = useState(initialState);
	
// 	function updateState(key, value) {
// 		setState({
// 			...state, 
// 			[key]: value,
// 			});
// 	}
	
// 	return(
// 		<AppContext.Provider value={{
// 			number: state.number,
// 			text: state.text,
// 			setNumber: n => updateState('number', n),
// 			setText: t => updateState('text', t),
// 		}}
// 		>
// 		   {props.children}
// 		</AppContext.Provider />
// 	)
// }

// export default Store


// // ----------------------------2 - segunda etapa /src/App.jsx

// 1 - import Store from '../data/Store';

// 2 - encapsular o Store

// 3 - voltar /src/data/Store.jsx e inserir {props.children}

//  render(
// 	<Store> //este componente será responspavel por criar o Provider
// 		<DataContext.Provider value={{state, setState}}>
// 		....
// 		</DataContext.Provider>
// 	</Store>
// 	)
//  }
		
// // ------------------------------- 3 -terceira etapa dentro do component UseContext.jsx
// // 1- inserir componente <SectionTitle title="Exercício #01" >
// // 2- inserir componente <SectionTitle title="Exercício #02" >
// // 3 verificar se importou o arquivo '../../data/Store //acessar o outro estado
	
	
// 	//antes de return ....
// 	const {number, text SetNumber, setText} = useContext(AppContext)
	
// 	useEffect(() => {
// 		if (number > 1250) {
// 			setText('Eita..')
// 		}
// 	}, [number])
	
// <SectionTile title="Exercício 02" />
// 	<div classname="center">
// 		<span className="text">{text}</span	
// 		<span className="text">{number}</span>
// 		<div>
// 			<button 
// 				className="btn" 
// 				onClick={() => setNumber('number', -1)}>
// 				-1
// 			</button>
// 			<button 
// 				className="btn" 
// 				onClick={() => setNumber('number', +1)}>
// 				+1
// 			</button>
// 		</div>
		