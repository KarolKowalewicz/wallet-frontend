import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001`,
    // if token is stored in authSlice, set authorization header with the token
    prepareHeaders: async (headers, { getState }) => {
      const token = await getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),

  endpoints: (builder) => ({}),
});
