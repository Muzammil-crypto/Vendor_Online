import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES, setStatus, setUserInfo } from "./userInfoSlice";
import { setShop, setShopStatus } from "./shopSlice";
import { setCategory, setCategoryStatus } from "./categorySlice";
import { url } from "../../../constants/const";
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
    try {
      // make request to backend
      const hi = await axios.post(`${url}/api/auth/register`, module.data);
    } catch (error) {
      // console.log(error.response.data.message);
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

      // store user's token in local storage
      await storeData(hy.data.data.token);
      const token = await getData("@storage_Key");
      // console.log("LOGIN DATA", hy.status);

      return hy.status;
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
      // console.log(err);
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
      const res = await axios.get(`${url}/api/jobs/type/job`);
      const data = res.data.data;
      // data.data[0]?.title;
      dispatch(setShop(data));

      dispatch(setShopStatus(STATUSES.IDLE));
    } catch (err) {
      // console.log(err);
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
      console.log("THIS IS THE Category DATA", data, "and the image is ");
      dispatch(setCategoryStatus(STATUSES.IDLE));
    } catch (err) {
      // console.log(err);
      dispatch(setCategoryStatus(STATUSES.ERROR));
    }
  };
}
//Post Shop Action
export const postShop = createAsyncThunk(
  // action type string
  "postShop/shops",
  // callback function--->
  async (module, { rejectWithValue }) => {
    try {
      const token = await getData();
      // console.log("Data", module);
      const request = await axios.post(`${url}/api/jobs/`, module.data, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(request);
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

export const postProduct = createAsyncThunk(
  // action type string
  "postProduct/product",
  // callback function--->
  async (module, { rejectWithValue }) => {
    try {
      const token = await getData();
      // console.log("Data", module);
      const request = await axios.post(
        `${url}/api/products/shopId=${shopId}`,
        module.data
      );
      console.log(request);
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
