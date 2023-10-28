import styles from "../Styles/chatslice.module.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  setContactClicked,
  setShowNewChat,
} from "../Reducer/chatContainerReducer";
import {
  addChats,
  addCurrUserChats,
  removeAllChats,
} from "../Reducer/chatWindowReducer";

import { setAvailableStatus } from "../Reducer/statusReducer";

import { useEffect } from "react";
// this is a single contact slice on which we click to chat with that person
export const ContactSlice = ({ contact, preview, time, date, month, year }) => {
  const show = useSelector((state) => state.showNewChatOption);

  // currUser
  const user = useSelector((state) => state.contactClicked);

  const chats = useSelector((state) => state.chats);

  const availableStatus = useSelector((state)=>state.availableStatus);
  const dispatch = useDispatch();


  // adding status becasuse we show status of only those with whome we have talked
  const id = contact.id;
  const status = contact.status;
  const statusToSend = { [id]: status,"id":id };

  // console.log("statusTosend",statusToSend);
  if(chats.length>Object.keys(availableStatus).length){
    // console.log("statusTosend",statusToSend);
    dispatch(setAvailableStatus(statusToSend));

  }

  // console.log(preview);

  // neeed curr date so that we know which date to render in contact slice instead of just 24:00 hrs format timinfg
  const currDate = new Date();

  // deciding suitable time to display for last message
  let timeTodisplay = null;
  if (
    currDate.getFullYear() - year === 0 &&
    currDate.getMonth() - month === 0
  ) {
    if (currDate.getDate() - date === 0) {
      timeTodisplay = formatTime(time);
      // console.log(timeTodisplay);
    } else {
      timeTodisplay = date + "/" + month + "/" + year;
      // console.log(timeTodisplay);
    }

  }else{
    timeTodisplay = date + "/" + month + "/" + year;
    // console.log(timeTodisplay);

  }

  // console.log(timeTodisplay);
  function formatTime(time) {
    let newTime = "";
    const timeHelperArray = time.split(":");
    for (let i = 0; i < timeHelperArray.length; i++) {
      if (timeHelperArray[i].length < 2) {
        newTime += 0 + timeHelperArray[i];
      } else {
        newTime += timeHelperArray[i];
      }

      if (newTime.length === 2) {
        newTime += ":";
      }
    }

    return newTime;
  }

  const handleContactClick = (contact) => {
    // console.log(contact);
    // console.log(Object.keys(chats).length===0 || !chats.hasOwnProperty(contact.id));

    // find whether chats array contain the chat of currently clicked user or not
    let index = -1;
    let contains = false;
    chats.forEach((item, i) => {
      if (item.id === contact.id) {
        // console.log("index ", i);
        index = i;
        contains = true;
      }
    });
   
    // setting the current contact which gets clicked by the user
    dispatch(setContactClicked(contact));

    // after clicking on contactSlice which were present in new chat section we will change the show to false so that it can go back to original state
    if (show) {
      dispatch(setShowNewChat(!show));
    }

    // when we change user to chat we must always remember to set currChats as empty array if user is new and not already present in chat array
    // or set currchats with previous chats of user if his data is present in chats data
    if (user.id != contact.id && !contains) {

      dispatch(removeAllChats([]));
    } else if (user.id != contact.id && contains) {

      dispatch(addCurrUserChats(chats[index].chats));
    }

    // agar kisi se abhi ab tak baat na hui ho ya toh vo user chat database me na ho
    if (Object.keys(chats).length === 0 || !contains) {
      const currChats = {};
      currChats["chats"] = [];
      currChats["id"] = contact.id;
      currChats["name"] = contact.name;
      dispatch(addChats(currChats));
      // dispatch(addCurrUserChats([]));

      return;
    } else {
      // console.log("inside log ", index, " ", chats[index].chats);

      // Removing all chats otherwise it displays previous as well as current chats
      dispatch(removeAllChats([]));

      const id = chats[index].id;
      const name = chats[index].name;
      chats[index].chats.forEach((item, i) => {
        let newObjforCurrchats = {}; //as schema of currChats and chats are different with each other so we need to do the necessary changes
        //{data:"",id:"",name:""}  schema of currchats
        newObjforCurrchats["id"] = id;
        // console.log(item, " ", i);
        if (i % 2 == 0) {
          newObjforCurrchats["data"] = item.user;
        } else {
          newObjforCurrchats["data"] = item[name];
        }

        newObjforCurrchats["name"] = contact.name;
        newObjforCurrchats["time"] = item.time;
        newObjforCurrchats["date"] = item.date;

        // console.log(newObjforCurrchats);
        dispatch(addCurrUserChats(newObjforCurrchats));
      });
    }
    // dispatch(addCurrUserChats(chats[contact.id]));
  };




  return (
    <div
      className={`${styles.slice} w-full flex flex-row`}
      onClick={() => handleContactClick(contact)}
    >
      <div className={styles.profilePicdiv}>
        <div className={styles.profilePicWrapper}>
          <img src={contact.profilePic}></img>
        </div>
      </div>
      <div className={styles.name}>
        <div className="flex flex-row">
          <div className={styles.title}>
            <p>{contact.name}</p>
          </div>
          {!show && (
            <div className={styles.time}>
              <p>{timeTodisplay}</p>
            </div>
          )}
        </div>

        <div className="flex flex-row justify-between">
          <div className={styles.preview}>
            {!show ? <p>{preview}</p> : <p>{contact.about}</p>}
          </div>
          {!show && <div className={styles.messageCount}>{/* <p>1</p> */}</div>}
        </div>
      </div>
    </div>
  );
};
