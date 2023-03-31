import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperation";

export const authSlice = createSlice({
  name: "auth",
  initialState: { userId: null, nickname: null },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {});
  },
});
