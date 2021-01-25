function numberReducer(state, action) {
  console.log(action);
    switch (action.type) {
      case "numberAdd2":
        return { ...state, number: +state.number + 2 };
      case "multiplicar":
        return { ...state, number: +state.number * 7 };
      case "dividir":
        return { ...state, number: +state.number / 25 };
      case "arredondar":
        return { ...state, number: parseInt(state.number) };
      case "n":
        return { ...state, number: +action.payload };
      default:
        return state;
    }
}

export default numberReducer