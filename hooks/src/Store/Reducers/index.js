import numberReducer from "./number";
import userReducer from "./user";

function reducer(state, action) {
  let newStateNumber = numberReducer(state, action);
  return userReducer(newStateNumber, action);
}

export default reducer;