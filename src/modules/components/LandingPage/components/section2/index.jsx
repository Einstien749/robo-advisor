import "./index.css";
import { useState, useEffect } from "react";

const portfolio_attr = [
  "alternative",
  "commodities",
  "emerging_stocks",
  "foriegn_bonds",
  "foriegn_stocks",
  "nigerian_bonds",
  "nigerian_stocks",
  "real_estate",
  "t_bills",
  "tech_stocks",
];

const color = {
    alternative: "#E88B38 ",
    commodities: "#9B10E1 ",
    emerging_stocks: "#54E012 ",
    foriegn_bonds: "#1260E0 ",
    foriegn_stocks: "#F0E1E1 ",
    nigerian_bonds: "#05EDFC ",
    nigerian_stocks: "#E70EC9 ",
    real_estate: "#DFFF00",
    t_bills: "#008080",
    tech_stocks: "#008080",
  }

const HorizontalBar = ({ text, percent, color }) => {
  return (
    <div className="bar">
      <h4>
        <span>{text}</span>
      </h4>
      <div style={{ width: `${percent}%`, border: "2px #FFFFFF", backgroundColor: `${color}`, padding: percent == 0 ? "0" : "0 2px 0 2px" }}>
        <span>{Math.floor(percent/2)}%</span>
      </div>
    </div>
  );
};

const Section_Two = ({ portfolios }) => {
  const [index, setIndex] = useState(0);
  const [currPortfolio, setCurrentPort] = useState({
    alternative: 0,
    commodities: 7,
    emerging_stocks: 7,
    foriegn_bonds: 15,
    foriegn_stocks: 4,
    nigerian_bonds: 35,
    nigerian_stocks: 18,
    real_estate: 12,
    t_bills: 0,
    tech_stocks: 2,
  });

  const getCurrPort = (val) => {
    console.log(portfolios);
    let curr = portfolios.find((item) => {
      //console.log(item);
      return Number(item.risk_score) == Number(val);
    });
    setCurrentPort(curr);
    console.log(curr);
  };
  return (
    <div className="section2">
      <div className="rangeholder">
        <p>
          <span>Risk Score : {index}</span>
          <span>Example Portfolio</span>
        </p>
        <input
          value={index}
          type="range"
          step={1}
          onChange={(e) => {
            console.log(e.target.value);
            getCurrPort(e.target.value);
            setIndex(e.target.value);
          }}
          min={0}
          max={10}
        />
      </div>
      <div className="portholder">
        {portfolio_attr.map((item) => (
          <HorizontalBar text={item.charAt(0).toUpperCase() + item.slice(1)} percent={Number(currPortfolio[item]) * 2} color={color[item]}/>
        ))}
      </div>
    </div>
  );
};

export default Section_Two;
