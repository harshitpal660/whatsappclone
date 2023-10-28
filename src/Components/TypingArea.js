import { Mike, Emoji, Plus, Send } from "./iconstorage";
import styles from "../Styles/typing.module.css";
// import OpenAI from "openai";

import {
  isTyping,
  isLoading,
  addCurrUserChats,
} from "../Reducer/chatWindowReducer";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { updateChats } from "../Reducer/chatWindowReducer";
import { AICALL } from "../Utils/AICalls";

// this is a typing area where we type and chat with AI
export const TrypingArea = () => {
  // Its the text which user inters in his input box while chatting
  const text = useSelector((state) => state.typing);

  // using loading state to show typing... status of other user
  const loading = useSelector((state) => state.loading);

  // gives info about whome we are chatting with
  const chattingWith = useSelector((state) => state.contactClicked);

  // these are the chats of all the contacts
  // const chats = useSelector((state) => state.chats);

  // current user chat
  const currChats = useSelector((state) => state.chatofCurrentContact);

  const option = JSON.parse(JSON.stringify(chattingWith.option));

  // these are chats of current user
  // const curruserChats = chats[chattingWith.name];
  // console.log("current user chats", currChats);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const newText = e.target.value;
    dispatch(isTyping(newText));
  };

  useEffect(() => {
    // we want to send message when enter button is clicked

    document
      .getElementById("myInput")
      .addEventListener("keypress", handleKeyPress);

    // if (loading) {
    //   dispatch(isTyping(""));
    // }
    // // Cleanup the event listener when component unmounts
    const inputElement = document.getElementById("myInput");
    if (inputElement) {
      inputElement.addEventListener("keypress", handleKeyPress);

      return () => {
        inputElement.removeEventListener("keypress", handleKeyPress);
      };
    }
  }, [text]);
  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetching...");
      //

      try {
        const userChat = { role: "user", content: text };
        option.messages.push(userChat);
        console.log("heyyy");
        console.log(currChats);
        if (currChats[currChats.length - 1].name === "user") {
          const AIRes = await AICALL(option);

          const currentDate = new Date();
          const currUserChat = {
            name: chattingWith.name,
            data: AIRes,
            id: chattingWith.id,
            time: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
            date: `${currentDate.getDate()}`,
            month: `${currentDate.getMonth()}`,
            year: `${currentDate.getFullYear()}`,
          };

          dispatch(updateChats(currUserChat));
          dispatch(addCurrUserChats(currUserChat));

          dispatch(isLoading(false));
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading, currChats]); //[loading,text,currChats]

  // when enter button clicked
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && text !== "") {
      handleSend();
    }
  };

  // when send button click
  const handleSend = () => {
    // Dates

    dispatch(isTyping(""));
    const currentDate = new Date();
    const currUserChat = {
      name: "user",
      data: text,
      id: chattingWith.id,
      time: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      date: `${currentDate.getDate()}`,
      month: `${currentDate.getMonth()}`,
      year: `${currentDate.getFullYear()}`,
    };
    console.log(currUserChat);

    dispatch(addCurrUserChats(currUserChat));
    dispatch(updateChats(currUserChat));
    console.log(currChats);
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
        id="myInput"
        onChange={handleInputChange}
        value={text.length !== 0 ? text : ""}
        placeholder="Type a message"
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
