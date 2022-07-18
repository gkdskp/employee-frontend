import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => `employee`
        }),
    }),
})

export const { useGetEmployeesQuery } = employeeApi;