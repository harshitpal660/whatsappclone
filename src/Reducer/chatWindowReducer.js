// This is a reducer that we will use to perform actions in right side window of whats app clone

import {createSlice} from "@reduxjs/toolkit"

const localStorageKey = "chats";
// localStorage.removeItem(localStorageKey)
if(!localStorage.getItem(localStorageKey)){
  localStorage.setItem(localStorageKey, JSON.stringify({}));
}

const initialState = {
    typing:"",
    loading:false,
    chatofCurrentContact:{},
    chats: JSON.parse(localStorage.getItem(localStorageKey)) || {},

  };
  
  export const typingSlice = createSlice({
    name: "contactClicked",
    initialState: initialState.typing,
    reducers: {
      isTyping: (state, action) => {
        return action.payload;
      },
    },
  });

  export const loadingSlice = createSlice({
    name: "contactClicked",
    initialState: initialState.loading,
    reducers: {
      isLoading: (state, action) => {
        return action.payload;
      },
    },
  });

  export const chatsSlice = createSlice({
    name: "contactClicked",
    initialState: initialState.chats,
    reducers: {
      setChats: (state, action) => {
        
        return action.payload;
      },
      addChats:(state,action)=>{
        const currChats = {...action.payload}
        console.log(currChats);
        const newChat = state;
        newChat[currChats.id] = currChats.chats;
        // state =  currChats;
        return newChat;
      }
    },
  });

  export const currUserChatsSlice = createSlice({
    name: "chatOfCurrUser",
    initialState: initialState.chatofCurrentContact,
    reducers: {
      setCurrUserChats: (state, action) => {
        
        return action.payload;
      },
    },
  });

export const {isTyping} = typingSlice.actions;
export const {isLoading} = loadingSlice.actions
export const {setChats,addChats} = chatsSlice.actions;
// export const {} = chatsSlice.actions;

export const {setCurrUserChats} = currUserChatsSlice.actions
