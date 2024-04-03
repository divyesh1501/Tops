import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
})

