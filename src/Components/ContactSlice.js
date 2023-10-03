import styles from "../Styles/chatslice.module.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { setContactClicked } from "../Reducer/chatContainerReducer";
import { addChats,setCurrUserChats } from "../Reducer/chatWindowReducer";
// this is a single contact slice on which we click to chat with that person
export const ContactSlice = ({contact}) => {
  const chats = useSelector((state)=>state.chats);
  const dispatch = useDispatch();


  const handleContactClick=(contact)=>{
    console.log(contact);
    
    if(Object.keys(chats).length===0 || !chats.hasOwnProperty(contact.id)){
      const currChats = {};
      currChats["chats"] = {};
      currChats["id"] = contact.id;
      dispatch(addChats(currChats))
      dispatch(setCurrUserChats({}));
      dispatch(setContactClicked(contact))
      return;
    }
    dispatch(setCurrUserChats(chats[contact.id]));
  }
  return (
    <div className={`${styles.slice} w-full flex flex-row`} onClick={()=>handleContactClick(contact)}>
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
          <div className={styles.time}>
            <p>12:00</p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className={styles.preview}>
            <p>
              this is a preview text this will help me to identify designing
            </p>
          </div>
          <div className={styles.messageCount}>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
};
