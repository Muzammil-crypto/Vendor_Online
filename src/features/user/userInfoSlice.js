import { createSlice } from "@reduxjs/toolkit";
import { object } from "yup";
import { getUserInfo, registerUser, userLogin } from "./userActions";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setUserInfo(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setUserInfo, setStatus } = userInfoSlice.actions;

export default userInfoSlice.reducer;
