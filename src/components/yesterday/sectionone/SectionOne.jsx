import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import "./SectionOne.css";

const SectionOne = () => {
  const { fetch } = useSelector((state) => state);

  // destructuring from fetch
  const { data } = fetch;

  if (data.length === 0) return null;

  return (
    <>
      <div className="section-one-box">
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Errors: {data[0].data[0].errors_yesterday.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_yesterday.toFixed(1)}%</p>
          </div>
        </div>
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Zeroes: {data[0].data[0].zeroes_yesterday.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_yesterday.toFixed(1)}%</p>
          </div>
        </div>
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Timeouts: {data[0].data[0].timeout_yesterday.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_yesterday.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="progress">
        <div className="error-one"></div>
        <div className="error-two"></div>
        <div className="error-three"></div>
        <div className="error-other"></div>
      </div>

      <div className="error-code">
        <div className="code-box">
          <div className="code-one"></div>
          <div className="code-name">
            Error
            {data[0].errors_yesterday[0].code} :
            {data[0].errors_yesterday[0].count}
          </div>
        </div>
        <div className="code-box">
          <div className="code-two"></div>
          <div className="code-name">
            Error {data[0].errors_yesterday[1].code} :
            {data[0].errors_yesterday[1].count}
          </div>
        </div>
        <div className="code-box">
          <div className="code-three"></div>
          <div className="code-name">Error 502: 650</div>
        </div>
        <div className="code-box">
          <div className="code-other"></div>
          <div className="code-name">Other: 330</div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
