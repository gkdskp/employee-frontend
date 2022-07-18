import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from '../api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [employeeApi.reducerPath]: employeeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

setupListeners(store.dispatch);