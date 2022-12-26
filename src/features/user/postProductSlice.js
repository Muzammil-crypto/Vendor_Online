import { createSlice } from "@reduxjs/toolkit";
import { postProduct } from "./userActions";
const initialState = {
  user: null,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const postProductSlice = createSlice({
  name: "postProduct",
  initialState,
  reducers: {},
  extraReducers: {
    //*********** register user Cases*********** */
    [postProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [postProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // post successful
      state.user = payload;
    },
    [postProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default postProductSlice.reducer;
