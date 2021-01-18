import React from 'react';

const UseCallbackButtons = props => {
    console.log('quantidade de chamadas do componente UseCallBackButtons...')
    return (
      <div>
        <button className="btn" onClick={() => props.inc(6)}>
          +6
        </button>
        <button className="btn" onClick={() => props.inc(12)}>
          +12
        </button>
        <button className="btn" onClick={() => props.inc(18)}>
          +18
        </button>
      </div>
    );
}


//React.memo cria um componente cacheado
export default React.memo(UseCallbackButtons);