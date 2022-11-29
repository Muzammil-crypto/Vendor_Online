import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userInfoReducer from "../features/user/userInfoSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
  },
});
export default store;
