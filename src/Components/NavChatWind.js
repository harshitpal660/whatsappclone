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
import Tooltip from "./ToolTip";

import { useState } from "react";
// this is a navbar of chat window which is present in right hand side of app it contains video call, search and menu options
export const NavChatWind = ({ chatopen }) => {
  const loading = useSelector((state) => state.loading);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = (event) => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">
        <div className="cursor-pointer flex flex-row">
          <div className={styles.dp}>
            <span
              className="tooltip-trigger"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {chatopen.profilePic === "" ? (
                <User />
              ) : (
                <img src={chatopen.profilePic}></img>
              )}
            </span>
            <Tooltip
              // triggerElement={
              //   <span className="tooltip-trigger">
              //     {chatopen.profilePic === "" ? (
              //       <User />
              //     ) : (
              //       <img src={chatopen.profilePic}></img>
              //     )}
              //   </span>
              // }
              text="Profile detail"
              isVisible={isTooltipVisible}
            />
          </div>
          <div className={`ml-4 ${!loading && "mt-2"} flex flex-col h-4`}>
            <div>{chatopen.name}</div>{" "}
            {loading && <div className={styles.typing}>typing...</div>}
          </div>
        </div>

        <div className="flex flex-row mr-4">
          <div className="m-2 cursor-pointer">
            <span
              className="tooltip-trigger"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <VideoCall />
            </span>
            <Tooltip
              // triggerElement={
              //   <span className="tooltip-trigger">
              //     <VideoCall />
              //   </span>
              // }
              text="Get the app for calling"
              key="videcall"
              isVisible={isTooltipVisible}
            />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <span
              className="tooltip-trigger"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <SearchIcon2 />
            </span>
            <Tooltip
              // triggerElement={
              //   <span className="tooltip-trigger">
              //     <SearchIcon2 />
              //   </span>
              // }
              text="Search"
              key="search"
              isVisible={isTooltipVisible}
            />
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <span
              className="tooltip-trigger"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Menu />
            </span>
            <Tooltip
              // triggerElement={
              //   <span
              //     className="tooltip-trigger"
                 
              //   >
              //     <Menu />
              //   </span>
              // }
              text="Menu"
              key="menu"
              isVisible={isTooltipVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
