import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userInfoReducer from "../features/user/userInfoSlice";
import shopReducer from "../features/user/shopSlice";
import categoryReducer from "../features/user/categorySlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
    shop: shopReducer,
    category: categoryReducer,
  },
});
export default store;
