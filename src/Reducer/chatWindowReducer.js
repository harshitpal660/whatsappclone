// This is a reducer that we will use to perform actions in right side window of whats app clone

import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "chats";
localStorage.removeItem(localStorageKey)

// I am using local storage to make data persist
if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, JSON.stringify([]));
}

// typing stores the message which we type while we chat
// loading tells that opposite user/AI is processing your message
// chatofCurrentContact gives the info about the chats of the user which is opened in right side window
// chats contains the chats of all the users 
const initialState = {
  typing: "",
  loading: false,
  chatofCurrentContact: [],
  chats: JSON.parse(localStorage.getItem(localStorageKey)) || [],
};

export const typingSlice = createSlice({
  name: "typing",
  initialState: initialState.typing,
  reducers: {
    isTyping: (state, action) => {
      return action.payload;
    },
  },
});

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState.loading,
  reducers: {
    isLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const chatsSlice = createSlice({
  name: "chats",
  initialState: initialState.chats,
  reducers: {
    addChats: (state, action) => {
      const currChats = action.payload;  // {chats:{},id:1,name:""}
      console.log(currChats);
      const newChat = state;
      // const newChat = JSON.parse(localStorage.getItem(localStorageKey));
      console.log(newChat);
      newChat.unshift(currChats)
      // newChat.push(currChats);
      localStorage.setItem(localStorageKey,JSON.stringify(newChat));
      return newChat;

    },
    updateChats:(state, action)=>{
      const currChats = action.payload; // {name:"",data:"",id:"",date:"",time:"",month:"",year:""}
      console.log(currChats);
      const currState = state;
      // const currState = JSON.parse(localStorage.getItem(localStorageKey));
      console.log(currState);
      const newObj = {}  // creating this object to push it into chats
      newObj[currChats.name] = currChats.data;
      newObj["time"] = currChats.time;
      newObj["date"] = currChats.date;
      newObj["month"] = currChats.month;
      newObj["year"] = currChats.year;
      currState.forEach(item=>{
        if(item.id===currChats.id){
          item.chats.push(newObj)
        }
      })
      localStorage.setItem(localStorageKey,JSON.stringify(currState));
      return currState;
    }
  },
});

export const currUserChatsSlice = createSlice({
  name: "chatOfCurrUser",
  initialState: initialState.chatofCurrentContact,
  reducers: {
    addCurrUserChats: (state, action) => {
      const currChats = action.payload;  //{name:"",data:"",id:"",date:"",time:"",month:"",year:""}
      console.log(currChats);
      const newChat = {}
        newChat[currChats.name] = currChats.data;
        newChat["name"] = currChats.name;
        newChat["id"] = currChats.id;
        newChat["time"] = currChats.time;
        newChat["date"] = currChats.date;
        newChat["month"] = currChats.month;
        newChat["year"] = currChats.year;
        console.log(newChat);     //{user:"",id:"",name:""}
        state.push(newChat);
      // return currChats;
   
    },
    removeAllChats:(state, action)=>{
      console.log(action.payload);
      return action.payload
    }
  },
});

export const { isTyping } = typingSlice.actions;
export const { isLoading } = loadingSlice.actions;
export const { addChats,updateChats } = chatsSlice.actions;
// export const {} = chatsSlice.actions;

export const { addCurrUserChats,removeAllChats } = currUserChatsSlice.actions;
