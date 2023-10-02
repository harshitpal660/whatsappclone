import { LockIcon } from "./iconstorage"
import DefaultChatWindowIMG from "../Images/defaultChatWindow.png"
import { NavChatWind } from "./NavChatWind";
import styles from "../Styles/chatWindow.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TrypingArea } from "./TypingArea";
export const ChatWindow = ()=>{
    const chatopen = useSelector((state)=> state.contactClicked)
    const keys = Object.keys(chatopen).length;
    return(

        <>
        {keys !== 0 && <><NavChatWind chatopen={chatopen}/><TrypingArea/></>

        }
        {keys===0 && <div className= {`${styles.chatWindow} h-full overflow-auto`}>
            <div className={styles.flexdiv}>
                <div className={styles.defaultImgWrapper}><img src={DefaultChatWindowIMG}></img></div>
                <div className={styles.largeText}><p>Download WhatsApp for Windows</p></div>
                <div className={styles.smallText}><p>Make calls, share your screen and get a faster exerience when you download the Windows app.</p></div>
                <div className={styles.getAppButton}><button>Get the app</button></div>
                <div className={styles.encryption}><div className="flex flex-row justify-center"><LockIcon/><p>Your personal messages are end-to-end encrypted</p></div></div>
            </div>

        </div>}

        </>
        

    )
}