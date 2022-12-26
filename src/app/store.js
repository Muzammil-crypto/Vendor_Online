import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userInfoReducer from "../features/user/userInfoSlice";
import shopReducer from "../features/user/shopSlice";
import categoryReducer from "../features/user/categorySlice";
import userLoginReducer from "../features/user/userLoginSlice";
import postShopReducer from "../features/user/postJobsSlice";
import postProductReducer from "../features/user/postProductSlice";
import getAllProductReducer from "../features/user/getAllProductSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
    shop: shopReducer,
    category: categoryReducer,
    userLogin: userLoginReducer,
    postShop: postShopReducer,
    postProduct: postProductReducer,
    allProducts: getAllProductReducer,
  },
});
export default store;
