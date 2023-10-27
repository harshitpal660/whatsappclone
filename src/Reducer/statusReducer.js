// This is a reducer that we will use to perform actions in left side window of whats app clone

import { createSlice } from "@reduxjs/toolkit";

// available status tells all the contacts which have some status and we chat with them at some point in time
const initialState = {
  availableStatus:{},
  statusClicked: {},
};

export const statusClickedSlice = createSlice({
  name: "statusClicked",
  initialState: initialState.statusClicked,
  reducers: {
    setStatusClicked: (state, action) => {
      const status = action.payload;
      const availableData = {};
      if (status["link"].length > 0) {
        availableData["link"] = status["link"];
      } else if (status["video"].length > 0) {
        availableData["video"] = status["video"];
      } else if (status["text"].length > 0) {
        availableData["text"] = status["text"];
      }
      return availableData;
    },
    removeStatusClicked:(state,action) =>{
      return action.payload
    }
  },
});

export const availableStatusSlice = createSlice({
  name: "availableStatus",
  initialState: initialState.availableStatus,
  reducers: {
    setAvailableStatus: (state, action) => {
      const status = action.payload;
      const stateCopy = state;
      stateCopy[status.id] = status[status.id]

      console.log(stateCopy);
      return stateCopy;

    },
  },
});

export const { setStatusClicked,removeStatusClicked } = statusClickedSlice.actions;
export const { setAvailableStatus } = availableStatusSlice.actions;
