import { createSlice } from "@reduxjs/toolkit";

export const openingDatesSlice = createSlice({
  name: "openingDates",
  initialState: {
    openings: [
      ["Sunday", 9.3, 12.0, 15.3, 22.0],
      ["Monday", 8.3, 12.0, 15.3, 19.0],
      ["Tuesday", 8.3, 12.0, 15.4, 24.22],
      ["Wednesday", 8.3, 12.0, 15.3, 19.0],
      ["Thursday", 8.3, 12.0, 15.3, 19.0],
      ["Friday", 8.3, 11.3],
      ["Saturday"],
    ],
  },
  reducers: {},
});
export const {} = openingDatesSlice.actions;
export default openingDatesSlice.reducer;
