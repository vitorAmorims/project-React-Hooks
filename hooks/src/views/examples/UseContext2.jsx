import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../data/Provider';

const ComponenteX = () => {
  const context = useContext(AppContext);
  const { stateA, stateB, setStateA, setStateB } = context;

  useEffect(() => {
    if (stateA.length < 20) document.title = "Aprender";
  }, [stateA])

  return (
    <div className="center">
      <div>
        <p className="text">{stateA}</p>
        <input
          type="text"
          onChange={(event) => setStateA(event.target.value)}
        />
      </div>
      <div>
        <p className="text">{stateB}</p>
        <input
          type="text"
          onChange={(event) => setStateB(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ComponenteX;