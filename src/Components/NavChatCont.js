import {

  Menu,
  Status,
  Channels,
  NewChat,
  User,
  Communities,
} from "./iconstorage";
import styles from "../Styles/navChatCont.module.css";

import { useState } from "react";

import Tooltip from "./ToolTip";
import { setShowNewChat } from "../Reducer/chatContainerReducer";

import { useDispatch,useSelector } from "react-redux";

import { Link } from "react-router-dom";

// this is a navbar of chat constainer which is present in left hand side of app 
export const NavChatCont = ({setSearchName}) => {
  const dispatch = useDispatch();
  const  show = useSelector((state)=>state.showNewChatOption);

  // const[profilePicToolTipVisible,setProfilePicToolTipVisible] = useState(false);
  const[communityToolTipVisible,setCommunityToolTipVisible] = useState(false);
  const[statusToolTipVisible,setStatusToolTipVisible] = useState(false);
  const[channelToolTipVisible,setChannelToolTipVisible] = useState(false);
  const[newChatToolTipVisible,setnewChatToolTipVisible] = useState(false);
  const[menuToolTipVisible,setMenuToolTipVisible] = useState(false);

  // when new chat option is clicked
  const openNewChatOptions =()=>{
    // setting search name empty string so that when we open new chat option it shows all availale chat option and not just the search value
    setSearchName("")
    dispatch(setShowNewChat(!show));
  }

  
  // navbar of Chat Container or left side of the main page
  return (
    <div className={styles.contactOptionNav}>
      <div className="flex flex-row w-full justify-between">

        {/* User icon */}
        <div className="cursor-pointer">
            <User />
        </div>
        <div className="flex flex-row mr-4">

          {/* Communities icon */}
          <div className="m-2 cursor-pointer">
          <span 
            onMouseEnter={()=>setCommunityToolTipVisible(!communityToolTipVisible)}
            onMouseLeave={()=>setCommunityToolTipVisible(!communityToolTipVisible)}
          >
            <Communities />
            </span>
            {communityToolTipVisible && <Tooltip
              text="Communities"
              key="community"
            />}
          </div>

          {/* Status icon */}
          <div className="m-2 ml-5 cursor-pointer">
          <span 
            onMouseEnter={()=>setStatusToolTipVisible(!statusToolTipVisible)}
            onMouseLeave={()=>setStatusToolTipVisible(!statusToolTipVisible)}
          >
            <Link to={`/status`}>
              <Status />
            </Link>
            
            </span>
            {statusToolTipVisible && <Tooltip
              text="Status"
              key="status"
            />}
          </div>

          {/* Channels icon */}
          <div className="m-2 ml-5 cursor-pointer">
          <span 
            onMouseEnter={()=>setChannelToolTipVisible(!channelToolTipVisible)}
            onMouseLeave={()=>setChannelToolTipVisible(!channelToolTipVisible)}
          >
            <Channels />
            </span>
            {channelToolTipVisible && <Tooltip
              text="Channel"
              key="channel"
            />}
          </div>

          {/* NewChat icon */}
          <div className="m-2 ml-5 cursor-pointer" onClick={openNewChatOptions}>
          <span 
            onMouseEnter={()=>setnewChatToolTipVisible(!newChatToolTipVisible)}
            onMouseLeave={()=>setnewChatToolTipVisible(!newChatToolTipVisible)}
          >
            <NewChat/>
            </span>
            {newChatToolTipVisible && <Tooltip
              text="New Chat"
              key="new chat"
            />}
          </div>

          {/* Menu icon */}
          <div className="m-2 ml-5 cursor-pointer">
          <span 
            onMouseEnter={()=>setMenuToolTipVisible(!menuToolTipVisible)}
            onMouseLeave={()=>setMenuToolTipVisible(!menuToolTipVisible)}
          >
            <Menu/>
            </span>
            {menuToolTipVisible && <Tooltip
              text="Menu"
              key="menu"
            />}
          </div>
        </div>
      </div>
    </div>
  );
};
