import { Mike, Emoji, Plus, Send } from "./iconstorage";
import styles from "../Styles/typing.module.css";

import { setContactClicked } from "../Reducer/chatContainerReducer";
import { isTyping,isLoading } from "../Reducer/chatWindowReducer";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setChats } from "../Reducer/chatWindowReducer";


// this is a typing area where we type and chat with AI
export const TrypingArea = () => {
  // Its the text which user inters in his input box while chatting
  const text = useSelector((state) => state.typing);

  // using loading state to show typing... status of other user
  const loading = useSelector((state) => state.loading);

  // gives info about whome we are chatting with
  const chattingWith = useSelector((state) => state.contactClicked);

  // these are the chats of all the contacts
  const chats = useSelector((state)=>state.chats)

  // these are chats of currint user
  const curruserChats = chats[chattingWith.name];
  console.log("current user chats",curruserChats);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const newText = e.target.value;
    dispatch(isTyping(newText));
  };

  useEffect(() => {
    // here we will call open ai api
    if (loading) {
      // after api call finished we will again set loading false
      console.log("fetching...");

      
      dispatch(isLoading(false));
    }
  }, [loading,text]);

  // when send button click
  const handleSend = () => {
    console.log(chattingWith.option.messages[0]);


    dispatch(isTyping(""));
    
    dispatch(isLoading(true));
  };

  return (
    
    <div className={styles.typing}>
      {console.log("rendered")}
      <div className="p-2 cursor-pointer">
        <Emoji />
      </div>
      <div className="p-2 cursor-pointer">
        <Plus />
      </div>
      <input
        className={styles.message}
        type="text"
        onChange={handleInputChange}
        value={text.length !== 0 ? (text):("")}
        placeholder= "Type a message"
      ></input>
      <div className="p-2 cursor-pointer">
        {text.length === 0 ? (
          <div>
            <Mike />
          </div>
        ) : (
          <div onClick={handleSend}>
            <Send />
          </div>
        )}
      </div>
    </div>
  );
};
