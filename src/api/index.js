import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => 'employee',
            providesTags: ['emp-list']
        }),

        createEmployee: builder.mutation({
            invalidatesTags: ['emp-list'],
            query: payload  => ({
                url: 'employee',
                method: 'POST',
                body: payload,

            })
        }),
        deleteEmployee: builder.mutation({
            invalidatesTags: ['emp-list'],
            query: id => ({
                url: `employee/${id}`,
                method: 'DELETE'
            })
        }),
        getEmployeeById: builder.query({
            query: id => `employee/${id}`,
            providesTags: ['emp']
        }),
        editEmployee: builder.mutation({
            invalidatesTags: ['emp-list', 'emp'],
            query: (payload) => {
                debugger;
                return ({
                url: `employee/${payload.id}`,
                method: 'PUT',
                body: payload.newEmployee
            })
        }
        })
    }),
})

export const { 
    useGetEmployeesQuery,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeeByIdQuery,
    useEditEmployeeMutation
} = employeeApi;