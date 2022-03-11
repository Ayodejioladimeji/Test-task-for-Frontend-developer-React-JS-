import React from "react";

// PACKAGES
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import Yesterday from "../yesterday/Yesterday";
import Today from "../today/Today";
import LastHour from "../lastHour/LastHour";
import { GLOBALTYPES } from "./../../redux/actions/globalTypes";
import "./Tab.css";
import Last3Days from "../last3days/Last3Days";

const Tab = () => {
  const { tab } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="tabcontainer">
      <div className="tabcenter">
        {/* THE SECTION OF THE TABS */}
        <div className="bloctabs">
          <button
            className={tab === 1 ? "activetab" : "tabs"}
            onClick={() => dispatch({ type: GLOBALTYPES.TAB, payload: 1 })}
          >
            Last hour
          </button>

          <button
            className={tab === 2 ? "activetab" : "tabs"}
            onClick={() => dispatch({ type: GLOBALTYPES.TAB, payload: 2 })}
          >
            Today
          </button>

          <button
            className={tab === 3 ? "activetab" : "tabs"}
            onClick={() => dispatch({ type: GLOBALTYPES.TAB, payload: 3 })}
          >
            Yesterday
          </button>

          <button
            className={tab === 4 ? "activetab" : "tabs"}
            onClick={() => dispatch({ type: GLOBALTYPES.TAB, payload: 4 })}
          >
            Last 3 days
          </button>
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className="contenttabs">
          <div className={tab === 1 ? "activecontent" : "content"}>
            <LastHour />
          </div>

          <div className={tab === 2 ? "activecontent" : "content"}>
            <Today />
          </div>

          <div className={tab === 3 ? "activecontent" : "content"}>
            <Yesterday />
          </div>

          <div className={tab === 4 ? "activecontent" : "content"}>
            <Last3Days />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
