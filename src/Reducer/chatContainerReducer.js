// This is a reducer that we will use to perform actions in left side window of whats app clone

import {createSlice} from "@reduxjs/toolkit"

// creating local storage for storing some persistent data in future
const localStorageKey = "myFavourites";
// localStorage.removeItem(localStorageKey)
if(!localStorage.getItem(localStorageKey)){
  localStorage.setItem(localStorageKey, JSON.stringify({}));
}


const initialState = {
    contacts:{},
    contactClicked:{},
    preview:"",
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

  export const {setContactClicked} = contactClickedSlice.actions;
