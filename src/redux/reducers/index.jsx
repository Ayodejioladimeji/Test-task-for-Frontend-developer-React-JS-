import { combineReducers } from "redux";
import tab from "./tabReducer";
import fetch from "./fetchReducer";

export default combineReducers({
  tab,
  fetch,
});
