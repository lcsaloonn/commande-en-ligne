import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scroll: false,
  },
  reducers: {
    updateScroll: (state, action: PayloadAction<boolean>) => {
      state.scroll = action.payload;
    },
  },
});

export const { updateScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
