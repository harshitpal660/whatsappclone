import React from "react";
// import "./Tooltip.css"; // Create a CSS file for styling

const Tooltip = ({ triggerElement,text, isVisible }) => {
    return (
      <div>
      {triggerElement}
      {isVisible && (
        <div className="tooltip" style={styles.tooltip}>
          {text}
        </div>
      )}
    </div>
    )
  };
export default Tooltip;

const styles = {
  tooltip: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    padding: "5px",
    zIndex: "9999",
    fontSize:"12px",
    border:"1px solid white"
  },
};
