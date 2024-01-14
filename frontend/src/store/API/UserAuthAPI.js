import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAuthAPI = createApi({
  reducerPath: "UserAuthAPI",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ email, password }) => ({
        url: `/auth/signup`,
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = UserAuthAPI;
