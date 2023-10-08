import { createSlice } from "@reduxjs/toolkit";
import authApiSlice from "../api/auth/authApiSlice";

const initialState = {
  name: null,
  email: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.current.matchFulfilled,
      (state, action) => {
        const { name, email, token } = action.payload.user;
        state.name = name;
        state.email = email;
        state.token = token;
        localStorage.setItem("token", token);
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        const { name, email, token } = action.payload.user;
        state.name = name;
        state.email = email;
        state.token = token;
        localStorage.setItem("token", token);
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.logout.matchFulfilled,
      (state, _action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        localStorage.removeItem("token");
      }
    );
  },
});

export default authSlice.reducer;
