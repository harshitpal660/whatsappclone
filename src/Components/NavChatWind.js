import {
  Menu,
  Status,
  Channels,
  NewChat,
  User,
  Communities,
  SearchIcon2,
  VideoCall,
} from "./iconstorage";
import styles from "../Styles/navChatCont.module.css";
import { useSelector } from "react-redux";


// this is a navbar of chat window which is present in right hand side of app it contains video call, search and menu options
export const NavChatWind = ({chatopen}) => {

  const loading = useSelector((state)=>state.loading);

  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">
        <div className="cursor-pointer flex flex-row">
          <div className={styles.dp}>
            {chatopen.profilePic==="" ? (<User />):(
              <img src={chatopen.profilePic}></img>
            )}
          </div>
          <div className={`ml-4 ${!loading && "mt-2"} flex flex-col h-4`}><div>{chatopen.name}</div> {loading && <div className={styles.typing}>typing...</div>}</div>
        </div>

        <div className="flex flex-row mr-4">
          <div className="m-2 cursor-pointer">
            <VideoCall />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <SearchIcon2 />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <Menu/>
          </div>
        </div>
      </div>
    </div>
  );
};
