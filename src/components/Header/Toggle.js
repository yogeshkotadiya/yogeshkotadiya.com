import React from "react";
import "../styles/Toggle.css";
import { ThemeContext } from "../GlobalTheme";

const Toggle = () => {
  const { Theme, handleOnChange } = React.useContext(ThemeContext);
  return (
    <div className="toggleWrapper">
      <input
        checked={Theme === "dark"}
        onChange={handleOnChange}
        type="checkbox"
        className="dn"
        id="dn"
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1" />
          <span className="crater crater--2" />
          <span className="crater crater--3" />
        </span>
        <span className="star star--1" />
        <span className="star star--2" />
        <span className="star star--3" />
        <span className="star star--4" />
        <span className="star star--5" />
        <span className="star star--6" />
      </label>
    </div>
  );
};

export default React.memo(Toggle);
