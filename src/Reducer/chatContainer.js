import {createSlice} from "@reduxjs/toolkit"

// creating local storage for storing some persistent data in future
const localStorageKey = "myFavourites";
// localStorage.removeItem(localStorageKey)
if(!localStorage.getItem(localStorageKey)){
  localStorage.setItem(localStorageKey, JSON.stringify({}));
}


const initialState = {
    contacts:{},
    contactClicked:{}
  };
  
  export const contactClickedSlice = createSlice({
    name: "contactClicked",
    initialState: initialState.contactClicked,
    reducers: {
      contactClicked: (state, action) => {
        return action.payload;
      },
    },
  });

  export const {contactClicked} = contactClickedSlice.actions;
