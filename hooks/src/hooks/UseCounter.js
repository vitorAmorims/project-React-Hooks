import React, {useState} from 'react'; // ou import {useState} from 'react'

const useCounter = (initialValue = 0) => {
  let [count, setCount] = useState(initialValue);

  function updateState(value) {
    setCount(count = +value);
  }

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return [count, inc, dec, updateState]; //poderia ter retornado obj também
};

export default useCounter;
