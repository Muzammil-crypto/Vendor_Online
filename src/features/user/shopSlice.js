import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./userInfoSlice";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setShop(state, action) {
      state.data = action.payload;
    },
    setShopStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setShop, setShopStatus } = shopSlice.actions;

export default shopSlice.reducer;
