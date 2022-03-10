import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();
import { composeWithDevTools } from "redux-devtools-extension";

// THE STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Run Redux Saga
sagaMiddleware.run(rootSaga);

// Creating Data Provider
const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
