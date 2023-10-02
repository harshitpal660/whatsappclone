import {

  Menu,
  Status,
  Channels,
  NewChat,
  User,
  Communities,
} from "./iconstorage";
import styles from "../Styles/navChatCont.module.css";
export const NavChatCont = () => {
  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">
        <div className="cursor-pointer">
          <div className="">
            <User />
          </div>
        </div>
        <div className="flex flex-row mr-4">
          <div className="m-2 cursor-pointer">
            <Communities />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <Status />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <Channels />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <NewChat />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};
