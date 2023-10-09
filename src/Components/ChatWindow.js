import { LockIcon } from "./iconstorage";
import DefaultChatWindowIMG from "../Images/defaultChatWindow.png";
import { NavChatWind } from "./NavChatWind";
import styles from "../Styles/chatWindow.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TrypingArea } from "./TypingArea";

import { SendersTextMessage } from "./Chat/MessageBox";
import { useEffect } from "react";

// this is a chat window of our app present in right hand side where we chat
export const ChatWindow = () => {
  // user details which we click for chatting
  const user = useSelector((state) => state.contactClicked);
  const keysOfUser = Object.keys(user).length;
  const chatsOfCurrentUser = useSelector((state) => state.chatofCurrentContact);

  // [today,tommorow,yesterday]  tags for chats which fall in category of currday-chatday

  const keysOfCurrChat = Object.keys(chatsOfCurrentUser);

  console.log(chatsOfCurrentUser, chatsOfCurrentUser.length);
  useEffect(() => {
    console.log("inside chat window");
  }, [chatsOfCurrentUser]);

  return (
    <>
      {keysOfUser !== 0 && (
        <>
          <NavChatWind chatopen={user} />
          <div
            className={`h-full ${styles.chatWrapper}`}
          >
           {keysOfCurrChat !=0 && <div className={styles.chatContainer}>
            {chatsOfCurrentUser.length > 0 &&
              chatsOfCurrentUser.map((item) => {
                return <SendersTextMessage item={item} />;
              })}
          </div>}

          </div>
          <TrypingArea />
        </>
      )}
      {keysOfUser === 0 && (
        <div className={`${styles.chatWindow} h-full overflow-y-scroll`}>
          <div className={styles.flexdiv}>
            <div className={styles.defaultImgWrapper}>
              <img src={DefaultChatWindowIMG}></img>
            </div>
            <div className={styles.largeText}>
              <p>Download WhatsApp for Windows</p>
            </div>
            <div className={styles.smallText}>
              <p>
                Make calls, share your screen and get a faster exerience when
                you download the Windows app.
              </p>
            </div>
            <div className={styles.getAppButton}>
              <button>Get the app</button>
            </div>
            <div className={styles.encryption}>
              <div className="flex flex-row justify-center">
                <LockIcon />
                <p>Your personal messages are end-to-end encrypted</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
