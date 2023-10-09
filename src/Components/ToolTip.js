import React from "react";
// import "./Tooltip.css"; // Create a CSS file for styling

const Tooltip = ({ text}) => {
    return (
      <div>
        <div className="tooltip" style={styles.tooltip}>
          {text}
        </div>
    </div>
    )
  };
export default Tooltip;

const styles = {
  tooltip: {
    position: "absolute",
    backgroundColor: "#202123",
    color: "#e1e1e2",
    padding: "3px",
    whiteSpace:"nowrap",
    zIndex: "9999",
    fontSize:"12px",
    border:"1px solid white"
  },
};
