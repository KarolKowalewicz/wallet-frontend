import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/api/apiSlice";
import authSliceReducer from "./slices/auth/authSlice";
import modalSliceReducer from "./slices/modal/modalSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    modal: modalSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
