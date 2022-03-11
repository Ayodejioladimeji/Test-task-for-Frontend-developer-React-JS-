import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import "./SectionOne.css";

const SectionOne = () => {
  const { fetch } = useSelector((state) => state);

  // destructuring from fetch
  const { data } = fetch;
  console.log(data[0].data);

  return (
    <>
      <div className="section-one-box">
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Errors: {data[0].data[0].errors_last_3days.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_last_3days.toFixed(1)}%</p>
          </div>
        </div>
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Zeroes: {data[0].data[0].zeroes_last_3days.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_last_3days.toFixed(1)}%</p>
          </div>
        </div>
        <div className="box">
          <div className="circle"></div>
          <div className="contents">
            <h2>Timeouts: {data[0].data[0].timeout_yesterday.toFixed(1)}%</h2>
            <p>Average: {data[0].data[0].avg_price_last_3days.toFixed(1)}%</p>
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
            {data[0].errors_last_3days[2].code} :
            {data[0].errors_last_3days[2].count}
          </div>
        </div>
        <div className="code-box">
          <div className="code-two"></div>
          <div className="code-name">
            Error
            {data[0].errors_last_3days[1].code} :
            {data[0].errors_last_3days[1].count}
          </div>
        </div>
        <div className="code-box">
          <div className="code-three"></div>
          <div className="code-name">
            Error
            {data[0].errors_last_3days[0].code} :
            {data[0].errors_last_3days[0].count}
          </div>
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
