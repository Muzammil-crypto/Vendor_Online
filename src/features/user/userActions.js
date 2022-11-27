import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async (data, { rejectWithValue }) => {
    debugger;
    try {
      // make request to backend
      const hi = await axios.post(
        "http://localhost:8080/api/auth/register",
        data
      );
      console.log(hi);
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

/*********************LoginApi**************************** */
export const userLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    debugger;
    try {
      // configure header's Content-Type as JSON

      const hy = await axios.post("http://localhost:8080/api/auth/login", data);
      // store user's token in local storage
      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
