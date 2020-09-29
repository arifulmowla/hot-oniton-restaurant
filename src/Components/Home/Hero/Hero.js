import React from "react";
import "./hero.css";
import banner from "../../../images/banner.jpg";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(" + banner + ")" }}>
      <h1 className="heading">Best food waiting for your belly</h1>
      <div className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search food item"
        />
        <button className="btn search-btn">Search</button>
      </div>
    </div>
  );
};

export default Hero;
