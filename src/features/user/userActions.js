import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../const";
import { STATUSES, setStatus, setUserInfo } from "./userInfoSlice";
import { setShop, setShopStatus } from "./shopSlice";
import { setCategory, setCategoryStatus } from "./categorySlice";
export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
    return value;
  } catch (e) {
    return e;
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return e;
  }
};

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async (module, { rejectWithValue }) => {
    debugger;
    try {
      // make request to backend
      const hi = await axios.post(`${url}/api/auth/register`, module.data);
      console.log(hi.status);

      if (hi.status === 201) {
        module.navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error.response.data.message);
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
  async (obj, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON

      const hy = await axios.post(`${url}/api/auth/login`, obj.data);
      // console.log(hy);

      if (hy.status === 200) {
        obj.navigation.navigate("HomeScreen");
      }
      console.log("STATUS", hy.status);

      // store user's token in local storage
      await storeData(hy.data.data.token);
      const userTokenok = await getData("@storage_Key");
      console.log("TOKAAAAAAAAAAAN", userTokenok);

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
/*******************fetchUserProfileInfo************************** */
export function fetchUserInfo() {
  return async function fetchUserInfoThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const token = await getData();
      const res = await axios.get(`${url}/api/users/profile/`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;

      dispatch(setUserInfo(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
/*******************fetchAllShops************************** */

export function fetchShop() {
  return async function fetchShopThunk(dispatch, getState) {
    dispatch(setShopStatus(STATUSES.LOADING));
    try {
      // const token = await getData();
      const res = await axios.get(`${url}/api/jobs/`);
      const data = res.data.data;
      // data.data[0]?.title;
      dispatch(setShop(data));
      // console.log(
      //   "THIS IS THE SHOP DATA",
      //   res.data.data,
      //   "and the image is ",
      //   data[0].images[0]
      // );
      dispatch(setShopStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setShopStatus(STATUSES.ERROR));
    }
  };
}
/*****************FetchCategoryList******************************** */
export function FetchCategoryList() {
  return async function FetchCategoryThunk(dispatch, getState) {
    dispatch(setCategory(STATUSES.LOADING));
    try {
      // const token = await getData();
      const res = await axios.get(`${url}/api/categories/`);
      const data = res.data.data;
      // data.data[0]?.title;
      dispatch(setCategory(data));
      console.log(
        "THIS IS THE Category DATA",
        res.data.data,
        "and the image is "
      );
      dispatch(setCategoryStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setCategoryStatus(STATUSES.ERROR));
    }
  };
}
