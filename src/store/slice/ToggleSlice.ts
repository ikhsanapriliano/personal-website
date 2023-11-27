import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isToggle: boolean;
};

const initialState: InitialState = {
  isToggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export default toggleSlice.reducer;
export const { setToggle } = toggleSlice.actions;
