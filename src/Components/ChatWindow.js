import { LockIcon } from "./iconstorage";
import DefaultChatWindowIMG from "../Images/defaultChatWindow.png";
import { NavChatWind } from "./NavChatWind";
import styles from "../Styles/chatWindow.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TrypingArea } from "./TypingArea";

import { SendersTextMessage } from "./Chat/MessageBox";


// this is a chat window of our app present in right hand side where we chat
export const ChatWindow = () => {
  const chatopen = useSelector((state) => state.contactClicked);
  const keys = Object.keys(chatopen).length;


  return (
    <>
      {keys !== 0 && (
        <>
          <NavChatWind chatopen={chatopen} />
          <div className={`flex-1 flex flex-col justify-end ${styles.chatWrapper}`}>
            {/* <SendersTextMessage/> */}
            {/* <div className={`flex flex-row`}>
              <div className={`h-fit w-fit max-w-lg ${styles.message}`}>Response checking ghfbdhfvbdvhjdbnvhj fudh fidg hidug fdfgchgfcghfcjgfcgfxhfdcjv hjvhgvhgcvghfcjhc yf hfcj hf hjhfjhgfvhgvhjgc fhg hjgvj hgvh m</div>
            </div> */}
            
          </div>
          <TrypingArea />
        </>
      )}
      {keys === 0 && (
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
