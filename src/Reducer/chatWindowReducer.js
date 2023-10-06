// This is a reducer that we will use to perform actions in right side window of whats app clone

import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "chats";
// localStorage.removeItem(localStorageKey)
if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, JSON.stringify([]));
}

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
      newChat.push(currChats);
      return newChat;
    },
    updateChats:(state, action)=>{
      const currChats = action.payload; // {name:"",data:"",id:""}
      console.log(currChats);
      const currState = state;
      const newObj = {}  // creating this object to push it into chats
      newObj[currChats.name] = currChats.data;
      currState.forEach(item=>{
        if(item.id===currChats.id){
          item.chats.push(newObj)
        }
      })

      return currState;
    }
  },
});

export const currUserChatsSlice = createSlice({
  name: "chatOfCurrUser",
  initialState: initialState.chatofCurrentContact,
  reducers: {
    addCurrUserChats: (state, action) => {
      const currChats = action.payload;  //{data:"",id:"",name:""}
      console.log(currChats);
      const newChat = {}
        newChat[currChats.name] = currChats.data;
        newChat["name"] = currChats.name;
        newChat["id"] = currChats.id
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
