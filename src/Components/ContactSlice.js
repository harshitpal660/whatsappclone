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
import { useEffect } from "react";
// this is a single contact slice on which we click to chat with that person
export const ContactSlice = ({ contact,preview }) => {
  const show = useSelector((state) => state.showNewChatOption);

  // currUser
  const user = useSelector((state) => state.contactClicked);

  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[contact])

  const handleContactClick = (contact) => {
    console.log(contact);
    // console.log(Object.keys(chats).length===0 || !chats.hasOwnProperty(contact.id));

    // find whether chats array contain the chat of currently clicked user or not
    let index = -1;
    let contains = false;
    chats.forEach((item, i) => {
      if (item.id === contact.id) {
        console.log("index ", i);
        index = i;
        contains = true;
      }
    });
    console.log(Object.keys(chats).length === 0 || !contains);
    console.log(
      "Object.keys(chats).length===0 ",
      Object.keys(chats).length === 0
    ); //chat is a array not object
    console.log(
      "!chats.hasOwnProperty(contact.id) ",
      !chats.hasOwnProperty(contact.id)
    );
    console.log("!contains ", !contains);
    // setting the current contact which gets clicked by the user
    dispatch(setContactClicked(contact));

    // after clicking on contactSlice which were present in new chat section we will change the show to false so that it can go back to original state
    if (show) {
      dispatch(setShowNewChat(!show));
    }

    // when we change user to chat we must always remember to set currChats as empty array if user is new and not already present in chat array
    // or set currchats with previous chats of user if his data is present in chats data
    if (user.id != contact.id && !contains) {
      console.log(user.id, " ", contact.id);
      console.log(
        "user.id != contact.id && !contains",
        user.id != contact.id && !contains
      );
      dispatch(removeAllChats([]));
    } else if (user.id != contact.id && contains) {
      console.log("inside log ", index, " ", chats[index].chats);
      console.log(chats[index].chats);
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
      console.log("inside log ", index, " ", chats[index].chats);

      // Removing all chats otherwise it displays previous as well as current chats
      dispatch(removeAllChats([]))

      
      const id = chats[index].id;
      const name = chats[index].name;
      chats[index].chats.forEach((item,i) => {
        let newObjforCurrchats = {}; //as schema of currChats and chats are different with each other so we need to do the necessary changes
        //{data:"",id:"",name:""}  schema of currchats
        newObjforCurrchats["id"] = id;
        console.log(item," ",i);
        if(i%2==0){
          newObjforCurrchats["data"] = item.user
        }else{

          newObjforCurrchats["data"] = item[name]

        }
        
        newObjforCurrchats["name"] = contact.name;
        console.log(newObjforCurrchats);
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
              <p>12:00</p>
            </div>
          )}
        </div>

        <div className="flex flex-row justify-between">
          <div className={styles.preview}>
            {!show ? (
              <p>
                {preview}
              </p>
            ) : (
              <p>{contact.about}</p>
            )}
          </div>
          {!show && (
            <div className={styles.messageCount}>
              <p>6</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
