'use client';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '@/app/api/ProductSlice/ProductSlice';
import { loginApi } from '@/app/api/AdminLoginSlice/AdminLoginSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(loginApi.middleware),
});

setupListeners(store.dispatch)
