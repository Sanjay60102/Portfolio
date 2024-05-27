import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        {/* <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement"> */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>6+</div>
        <span  style={{color: darkMode?'white':''}}>Certificates </span>
        <span>Done</span>
      </div>
    </div>
  );
};

export default Experience;