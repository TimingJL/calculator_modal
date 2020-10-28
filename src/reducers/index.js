import { combineReducers } from "redux";
import calculatorReducer from "reducers/calculatorReducer";

const rootReducer = combineReducers({
  calculatorReducer,
});

export default rootReducer;
