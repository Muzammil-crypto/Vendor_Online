import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./userActions";
// const JWT_STORAGE_NAME = "token";

// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const setJwt = (userToken) => {
//   try {
//     AsyncStorage.setItem(JWT_STORAGE_NAME, userToken);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const getJwt = () => {
//   try {
//     AsyncStorage.getItem(JWT_STORAGE_NAME);
//   } catch (error) {
//     console.log(error);
//   }
// };
const initialState = {
  user: null,
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.user = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    /***************Login Cases******************* */
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
      // console.log(payload.userToken);
      const token = AsyncStorage.getItem("userToken");
      console.log(token);
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
