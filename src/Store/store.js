import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { contactClickedSlice,showNewChatSlice } from "../Reducer/chatContainerReducer";
import { typingSlice,loadingSlice,chatsSlice,currUserChatsSlice } from "../Reducer/chatWindowReducer";
import { statusClickedSlice,availableStatusSlice } from "../Reducer/statusReducer";


// This is our store which store all our states
const rootReducer = combineReducers({
    contactClicked: contactClickedSlice.reducer,
    typing:typingSlice.reducer,
    loading:loadingSlice.reducer,
    chats:chatsSlice.reducer,
    chatofCurrentContact:currUserChatsSlice.reducer,
    // newChatContainer:newChatContainerSlice.reducer,
    showNewChatOption:showNewChatSlice.reducer,
    clickedStatus:statusClickedSlice.reducer,
    availableStatus:availableStatusSlice.reducer,
});

export const store = configureStore({
    reducer:rootReducer,
})