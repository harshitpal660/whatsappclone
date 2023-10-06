// This is a reducer that we will use to perform actions in left side window of whats app clone

import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    // contacts:{},
    contactClicked:{},
    newChatContainer:[],
    showNewChat:false,
    // preview:"",
  };
  
  export const contactClickedSlice = createSlice({
    name: "contactClicked",
    initialState: initialState.contactClicked,
    reducers: {
      setContactClicked: (state, action) => {
        return action.payload;
      },
    },
  });

  export const newChatContainerSlice = createSlice({
    name: "newChatContainer",
    initialState: initialState.newChatContainer,
    reducers: {
      setnewChatContainer: (state, action) => {
        return action.payload;
      },
    },
  });

  export const showNewChatSlice = createSlice({
    name: "showNewChat",
    initialState: initialState.showNewChat,
    reducers: {
      setShowNewChat: (state, action) => {
        return action.payload;
      },
    },
  });

  export const {setContactClicked} = contactClickedSlice.actions;
  export const {setnewChatContainer} = newChatContainerSlice.actions;
  export const {setShowNewChat} = showNewChatSlice.actions;
