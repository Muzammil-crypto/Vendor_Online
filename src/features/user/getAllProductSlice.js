import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./userInfoSlice";

const getAllProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setProductStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProduct, setProductStatus } = getAllProductSlice.actions;

export default getAllProductSlice.reducer;
