import { apiSlice } from "../apiSlice";

const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",
    }),
    deleteTransaction: builder.mutation({
      query: (_id) => ({
        url: `/api/transactions/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default transactionsApiSlice;
