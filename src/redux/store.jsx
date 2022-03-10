import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

// THE STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Creating Data Provider
const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
