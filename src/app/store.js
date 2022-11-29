import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userInfoReducer from "../features/user/userInfoSlice";
import shopReducer from "../features/user/shopSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
    shop: shopReducer,
  },
});
export default store;
