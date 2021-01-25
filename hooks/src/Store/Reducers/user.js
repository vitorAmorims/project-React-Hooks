function userReducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "login":
      // return { ...state, user: { name: 'Vitor' } } //podemos não deixar name fixo
      return { ...state, user: { name: action.payload } }; // deixar o nome variável
    default:
      return state;
  }
}
export default userReducer;
