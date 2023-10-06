import {

  Menu,
  Status,
  Channels,
  NewChat,
  User,
  Communities,
} from "./iconstorage";
import styles from "../Styles/navChatCont.module.css";

import { contactsDummyData } from "../dummyData/contacts";


import { setnewChatContainer,setShowNewChat } from "../Reducer/chatContainerReducer";
import { useDispatch,useSelector } from "react-redux";
// this is a navbar of chat constainer which is present in left hand side of app 
export const NavChatCont = () => {
  const dispatch = useDispatch();
  const  show = useSelector((state)=>state.showNewChatOption);

  const openNewChatOptions =()=>{
    // console.log("open");

    // toggling display or hide new chat option
    dispatch(setShowNewChat(!show))
    
  }
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
          <div className="m-2 ml-5 cursor-pointer" onClick={openNewChatOptions}>
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
