import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Tab from "./../tab/Tab";
import "./Main.css";
import { fetchData } from "./../../redux/actions/fetchAction";
import data from "../../constants/data";

const Main = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(fetchData(data));
  }, [dispatch]);

  return (
    <div className="main">
      <h1>Main metrics</h1>
      <Tab />
    </div>
  );
};

export default Main;
