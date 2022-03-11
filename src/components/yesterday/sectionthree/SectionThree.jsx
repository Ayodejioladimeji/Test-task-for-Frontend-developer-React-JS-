import React from "react";
import { useSelector } from "react-redux";

import click from "../../../assets/click.png";
import "./SectionThree.css";

const SectionTwo = () => {
  const { fetch } = useSelector((state) => state);

  // destructuring from fetch
  const { data } = fetch;

  if (data.length === 0) return null;

  return (
    <>
      <div className="section-three-left">
        <img src={click} alt="left_one" />
        <div className="left-active"></div>
      </div>

      <div className="section-three-right">
        <div className="right-one">
          <div className="right-one-box">
            <h4>Clicks</h4>
            <div className="tag">-13%</div>
          </div>

          <div className="right-one-box">
            <h3>{data[0].data[0].clicks_current_yesterday}</h3>
            <div className="">Yesterday</div>
          </div>

          <div className="right-one-box">
            <h3 className="deep">280</h3>
            <div className="deep">Last friday</div>
          </div>
        </div>

        <div className="right-two">
          <h3>CTR: {data[0].data[0].ctr_yesterday.toFixed(2)}%</h3>
          <p>Conversion from searches to clicks on all devices.</p>
          <small>
            Help: <span>CTR, Cliks</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
