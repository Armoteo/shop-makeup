import { combineReducers } from "redux";
import reducers from "./translates/reducers";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  translates: reducers,
  authState: authReducer,
});

export default rootReducer;
