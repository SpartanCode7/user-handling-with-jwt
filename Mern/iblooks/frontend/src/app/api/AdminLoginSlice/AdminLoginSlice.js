import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// console.log(loginApi); // Add this line to check the loginApi object

export const { useUserLoginMutation } = loginApi;