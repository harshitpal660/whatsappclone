import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    typing:"",
    loading:false,
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

export const {isTyping} = typingSlice.actions;
export const {isLoading} = loadingSlice.actions