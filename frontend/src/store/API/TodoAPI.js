import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
  reducerPath: "todoAPI",
  // tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: ({ userID }) => `/${userID}`,
    }),
    deleteOneTask: builder.mutation({
      query: ({ taskID }) => ({
        url: `/delete-task/${taskID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllTasksQuery, useDeleteOneTaskMutation } = todoAPI;
