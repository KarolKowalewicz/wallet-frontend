import { apiSlice } from "../apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    current: build.query({
      query: () => "/api/users/current",
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation({
      query: (credentials) => ({
        url: "/api/users/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "/api/users/logout",
        method: "POST",
      }),
    }),
  }),
});

export default authApiSlice;
