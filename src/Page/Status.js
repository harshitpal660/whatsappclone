import { useSelector } from "react-redux";
import { Left } from "../StatusComponents/Left";
import { Right } from "../StatusComponents/Right";

import styles from "../Styles/statusLeft.module.css"

// Status Page
export const Status = () => {
  const status = useSelector((state) => state.clickedStatus);
 
  return (
    <>
      <div className={`flex flex-row h-full ${styles.status}`}>
        
        {/* left side displays all the available status */}
        {(status.link === undefined || typeof status.link === "undefined") && <div className={`h-full ${styles.left}`}>
          <Left />
        </div>}

        {/* right side displays the status of clicked slice */}
        <div className={`h-full flex-1 ${styles.right}`}>
          <Right />
        </div>
      </div>
    </>
  );
};
