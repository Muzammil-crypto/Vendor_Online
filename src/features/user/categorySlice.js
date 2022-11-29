import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./userInfoSlice";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setCategory(state, action) {
      state.data = action.payload;
    },
    setCategoryStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setCategory, setCategoryStatus } = categorySlice.actions;

export default categorySlice.reducer;
