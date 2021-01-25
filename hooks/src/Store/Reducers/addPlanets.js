function ReducerAddPlanets(state, action) {
    console.log(action);
    switch (action.type) {
      case "addPlanets":
        return { ...state, data: action.data };
      default:
        return state;
    }
  }
  export default ReducerAddPlanets;
  