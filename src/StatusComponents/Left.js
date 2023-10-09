import React from "react";
import styles from "../Styles/statusLeft.module.css";

import { StatusSlice } from "./StatusSlice";
import { User } from "../Components/iconstorage";
import { LockIcon } from "../Components/iconstorage";

import { contactsDummyData } from "../dummyData/contacts";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

export const Left = () => {
  console.log(contactsDummyData);
  const status = useSelector((state) => state.availableStatus);
  console.log("status", status);

  const chats = useSelector((state) => state.chats);
  console.log("chats", chats);
  if (Object.keys(status).length === 0) {
    return <Navigate to="/" replace={true} />;
  }


  return (
    <div className="p-6 flex flex-col">
      <div className={`mt-6`}>
        <div className={`flex flex-row pb-8 ${styles.leftTop}`}>
          <div className={`${styles.profilePic}`}>
            <User />
          </div>
          <div
            className={`${styles.MyStatus} flex flex-col justify-center ml-4`}
          >
            <div className={`${styles.MyStatusText}`}>My Status</div>
            <div className={`${styles.noUpdates}`}>No updates</div>
          </div>
        </div>
      </div>

      <div className="flex-1 h-full">
        <div className={styles.recentHeading}>RECENT</div>

        <div className={`overflow-scroll ${styles.statusScrolldiv}`}>
          {chats.map((item, i) => (
            <StatusSlice status={status[item.id]} name={item.name} />
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-6">
          <div>
            <LockIcon/>
          </div>
          <div className={styles.encryptedMsg}>
            Your status updates are <span className={styles.encryptedMsgSpc}>end-to-end encrypted</span>
          </div>
        </div>
    </div>
  );
};
