import { useDispatch, useSelector } from "react-redux";
import { contactsDummyData } from "../dummyData/contacts";
import { Left } from "../StatusComponents/Left";
import { Right } from "../StatusComponents/Right";

import styles from "../Styles/statusLeft.module.css"

// Status component
export const Status = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  console.log("contact ", contactsDummyData);
  console.log("chats ", chats);

  const status = useSelector((state) => state.clickedStatus);
  let statusLink = null;
  if (status.link) {
    statusLink = status.link;
  }
  console.log(status.link);

  return (
    <>
      <div className={`flex flex-row h-full ${styles.status}`}>
        
        {(status.link === undefined || typeof status.link === "undefined") && <div className={`h-full ${styles.left}`}>
          <Left />
        </div>}
        <div className={`h-full flex-1 ${styles.right}`}>
          <Right />
        </div>
      </div>
    </>
  );
};
