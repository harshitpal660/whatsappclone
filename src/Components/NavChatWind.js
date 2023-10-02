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
export const NavChatWind = ({chatopen}) => {
  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">
        <div className="cursor-pointer flex flex-row">
          <div className={styles.dp}>
            {chatopen.profilePic==="" ? (<User />):(
              <img src={chatopen.profilePic}></img>
            )}
          </div>
          <div className="ml-4 mt-2">{chatopen.name}</div>
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
