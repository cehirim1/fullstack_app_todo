import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
  reducerPath: "todoAPI",
  tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      headers.set("Authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => `/`,
      providesTags: ["Todo"],
    }),
    deleteOneTask: builder.mutation({
      query: ({ taskID }) => ({
        url: `/delete-task/${taskID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useGetAllTasksQuery, useDeleteOneTaskMutation } = todoAPI;
