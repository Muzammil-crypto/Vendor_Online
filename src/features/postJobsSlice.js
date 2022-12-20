import { createSlice } from "@reduxjs/toolkit";
import { postShop } from "./user/userActions";
const initialState = {
  user: null,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const postShopSlice = createSlice({
  name: "postShop",
  initialState,
  reducers: {},
  extraReducers: {
    //*********** register user Cases*********** */
    [postShop.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [postShop.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // post successful
      state.user = payload;
    },
    [postShop.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default postShopSlice.reducer;
