import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "home",
  initialState: {
    selected_option: "home",
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selected_option = action.payload.selected_option;
    },
  },
  extraReducers: {},
});

export const { setSelectedOption } = headerSlice.actions;
export default headerSlice.reducer;