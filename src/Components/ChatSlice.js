import styles from "../Styles/chatslice.module.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { contactClicked } from "../Reducer/chatContainerReducer";
export const ChatSlice = ({contact}) => {

  const dispatch = useDispatch();


  const handleContactClick=(contact)=>{
    console.log(contact);
    dispatch(contactClicked(contact))
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
