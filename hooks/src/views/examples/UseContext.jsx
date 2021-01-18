import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext';

const UseContext = (props) => {
    const context = useContext(DataContext);
    const { state, setState } = context;

    function addNumber(delta) {
      setState({
        ...state, //spread
        number: state.number + delta, //alterando somente a chave de interesse
      });
    }

    return (
      <div className="UseContext">
        <PageTitle
          title="Hook UseContext"
          subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
        />
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
      </div>
    );
}

export default UseContext


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