import React, { useState } from "react";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabcontainer">
      <div className="tabcenter">
        {/* THE SECTION OF THE TABS */}
        <div className="bloctabs">
          <button
            className={toggleState === 1 ? "activetab" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Last hour
          </button>

          <button
            className={toggleState === 2 ? "activetab" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Today
          </button>

          <button
            className={toggleState === 3 ? "activetab" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Yesterday
          </button>

          <button
            className={toggleState === 4 ? "activetab" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Last 3 days
          </button>
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className="contenttabs">
          <div className={toggleState === 1 ? "activecontent" : "content"}>
            Last hour
          </div>

          <div className={toggleState === 2 ? "activecontent" : "content"}>
            Today
          </div>

          <div className={toggleState === 3 ? "activecontent" : "content"}>
            Yesterday
          </div>

          <div className={toggleState === 4 ? "activecontent" : "content"}>
            Last 3days
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
