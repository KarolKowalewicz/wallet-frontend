import { apiSlice } from "../apiSlice";

const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",

      providesTags: ["Transaction"],
    }),
    getPeriodTransactions: builder.query({
      query: ({ period }) => `/api/transactions/statistics/${period}`,
      transformResponse: (response) => {
        const transactions = response.transactions.data.reduce(
          (acc, transaction) => {
            const category = transaction.category || "Income";
            const amount = transaction.amount;
            if (!acc[category]) {
              acc[category] = 0;
            }
            acc[category] += amount;
            return acc;
          },
          {}
        );

        return {
          transactions: {
            count: response.transactions.count,
            data: Object.keys(transactions).map((key) => ({
              x: key,
              y: transactions[key],
            })),
          },
          statistics: response.statistics,
        };
      },
      providesTags: ["Transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: (_id) => ({
        url: `/api/transactions/${_id}`,
        method: "DELETE",
      }),

      //TODO: optimistic update

      invalidatesTags: ["Transaction"],
    }),
    addTransaction: builder.mutation({
      query: (body) => ({
        url: `/api/transactions`,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Transaction"],
    }),
    updateTransaction: builder.mutation({
      query: ({ _id, body }) => ({
        url: `/api/transactions/${_id}`,
        method: "PUT",
        body,
      }),

      //TODO: optimistic update

      invalidatesTags: ["Transaction"],
    }),
  }),
});

export default transactionsApiSlice;
