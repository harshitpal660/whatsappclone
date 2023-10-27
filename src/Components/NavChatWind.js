import {
  Menu,
  User,
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
  const[profilePicToolTipVisible,setProfilePicTooltipVisible] = useState(false);
  const[videoCallToolTipVisible,setVideoCallTooltipVisible] = useState(false);
  const[searchToolTipVisible,setsearchTooltipVisible] = useState(false);
  const[menuToolTipVisible,setMenuTooltipVisible] = useState(false);


  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">
        <div className="cursor-pointer flex flex-row">
          <div className={styles.dp}>
            <span
              onMouseEnter={()=>setProfilePicTooltipVisible(!profilePicToolTipVisible)}
              onMouseLeave={()=>setProfilePicTooltipVisible(!profilePicToolTipVisible)}
            >
              {chatopen.profilePic === "" ? (
                <User />
              ) : (
                <img src={chatopen.profilePic} alt=""></img>
              )}
            </span>
            {profilePicToolTipVisible && <Tooltip
              text="Profile detail"
              key="profilepic"
              readOnly
            />}
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
              onMouseEnter={()=>setVideoCallTooltipVisible(!videoCallToolTipVisible)}
              onMouseLeave={()=>setVideoCallTooltipVisible(!videoCallToolTipVisible)}
            >
              <VideoCall />
            </span>
            {videoCallToolTipVisible && <Tooltip
              text="Get the app for calling"
              key="videcall"
              readOnly
            />}
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <span
              className="tooltip-trigger"
              onMouseEnter={()=>setsearchTooltipVisible(!searchToolTipVisible)}
              onMouseLeave={()=>setsearchTooltipVisible(!searchToolTipVisible)}
            >
              <SearchIcon2 />
            </span>
            {searchToolTipVisible && <Tooltip
              text="Search"
              key="search"
              readOnly
            />}
          </div>
          <div className="m-2 ml-5 cursor-pointer">
            <span
              className="tooltip-trigger"
              onMouseEnter={()=>setMenuTooltipVisible(!menuToolTipVisible)}
              onMouseLeave={()=>setMenuTooltipVisible(!menuToolTipVisible)}
            >
              <Menu />
            </span>
            {menuToolTipVisible && <Tooltip
              text="Menu"
              key="menu"
              readOnly
            />}
          </div>
        </div>
      </div>
    </div>
  );
};
