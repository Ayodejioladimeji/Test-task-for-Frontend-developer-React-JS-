import { useEffect } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import "./GlobalStyle.css";
import Main from "./components/main/Main";
import { fetchData } from "./redux/actions/fetchAction";
import data from "./constants/data";

function App() {
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(fetchData(data));
  }, [dispatch]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
