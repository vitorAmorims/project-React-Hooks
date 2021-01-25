import numberReducer from "./number";
import userReducer from "./user";
import ReducerAddPlanets from './addPlanets';

function reducer(state, action) {
  let newStatePlanets = ReducerAddPlanets(state, action);
  let newStateNumber = numberReducer(newStatePlanets, action);
  return userReducer(newStateNumber, action);
}

export default reducer;