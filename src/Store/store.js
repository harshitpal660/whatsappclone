import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { contactClickedSlice } from "../Reducer/chatContainerReducer";
import { typingSlice,loadingSlice } from "../Reducer/chatWindowReducer";
const rootReducer = combineReducers({
    contactClicked: contactClickedSlice.reducer,
    typing:typingSlice.reducer,
    loading:loadingSlice.reducer,
});

export const store = configureStore({
    reducer:rootReducer,
})