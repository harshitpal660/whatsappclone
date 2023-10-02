import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { contactClickedSlice } from "../Reducer/chatContainer";

const rootReducer = combineReducers({
    contactClicked: contactClickedSlice.reducer,

});

export const store = configureStore({
    reducer:rootReducer,
})