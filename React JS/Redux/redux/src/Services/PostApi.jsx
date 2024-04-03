import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),

        getPostById: builder.query({
            query: (id) => {
                console.log("🚀 ~ id:", id)
                return {
                    url: `posts/${id}`,
                    method: 'GET'
                }
            }
        }),

        getPostByLimit: builder.query({
            query: (num) => {
                console.log("🚀 ~ num:", num)
                return {
                    url: `posts?_limit=${num}`,
                    method: 'GET'
                }
            }
        }),

        deletePost: builder.mutation({
            query: (id) => {
                console.log("🚀 ~ id:", id)
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'
                }
            }
        }),

        createPost: builder.mutation({
            query: (newpost) => {
                console.log("🚀 ~ newpost:", newpost)
                return {
                    url: `posts`,
                    method: 'POST',
                    body: newpost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),

        updatePost: builder.mutation({
            query: (updatePostData) => {
                console.log("🚀 ~ updatepost:", updatePostData)
                const { id, ...data } = updatePostData
                console.log("🚀 ~ Actual Update data:", data)
                return {
                    url: `posts/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),
    }),


})


export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = PostApi
