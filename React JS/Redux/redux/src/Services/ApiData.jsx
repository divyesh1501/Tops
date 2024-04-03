import React from 'react'
import { PostApi, useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from "./PostApi";
import { Button } from 'reactstrap';

export default function ApiData() {
    const info = useGetAllPostQuery()
    const idinfo = useGetPostByIdQuery(5)
    const limitinfo = useGetPostByLimitQuery(5)
    const [removePost, removeinfo] = useDeletePostMutation()
    const [createPost, createinfo] = useCreatePostMutation()
    const [updatePost, updateinfo] = useUpdatePostMutation()

    // const newPost = {
    //     title: 'new title',
    //     body: 'new body',
    //     userId: 1,
    // }
    const updatePostData = {
        id: 1,
        title: 'update title',
        body: 'update body',
        userId: 1,
    }



    // console.log("🚀 ~ ApiData ~ removePost:", removePost)
    // console.log("🚀 ~ ApiData ~ removeinfo:", removeinfo)

    // console.log("🚀 ~ ApiData ~ limitinfo:", limitinfo)

    // console.log("🚀 ~ ApiData ~ idinfo:", idinfo)


    // console.log("🚀 ~ apiData ~ info:", info)
    console.log("🚀 ~ apiData ~ info:", updateinfo.data)
    console.log("🚀 ~ apiData ~ success:", updateinfo.isSuccess)

    if (info.isLoading) return <div>Loading...</div>
    if (info.isError) return <h1>An error occured {info.error.error}</h1>
    return (
        <>
            {/* get all data */}
            {/* <div>
                {
                    info.data.map((PostApi, i) =>
                        <div className='border border-2 border-black m-5 p-3' key={i}>
                            <h2>{PostApi.id} : {PostApi.title}</h2>
                            <p>{PostApi.body}</p>
                        </div>
                    )
                }
            </div> */}

            {/* get single data by id */}
            {/* <div className='border border-2 border-black m-5 p-3'>
                <h2>{idinfo.data.id} : {idinfo.data.title}</h2>
                <p>{idinfo.data.body}</p>
            </div> */}

            {/* get limited data */}
            {/* <div>
                {
                    limitinfo.data.map((PostApi, i) =>
                        <div className='border border-2 border-black m-5 p-3' key={i}>
                            <h2>{PostApi.id} : {PostApi.title}</h2>
                            <p>{PostApi.body}</p>
                        </div>
                    )
                }
            </div> */}

            {/* delete data */}
            {/* <div>
                {
                    info.data.map((PostApi, i) =>
                        <div className='border border-2 border-black m-5 p-3' key={i}>
                            <h2>{PostApi.id} : {PostApi.title}</h2>
                            <p>{PostApi.body}</p>
                            <Button onClick={() => { removePost() }}>Delete Post</Button>
                        </div>
                    )
                }
            </div> */}

            {/* create data */}
            {/* <div >
                <Button className='ms-5 mt-5' onClick={() => { createPost(newPost) }}>Create Post</Button>
                {
                    info.data.map((PostApi, i) =>
                        <div className='border border-2 border-black m-5 p-3' key={i}>
                            <h2>{PostApi.id} : {PostApi.title}</h2>
                            <p>{PostApi.body}</p>

                        </div>
                    )
                }
            </div> */}

            {/* update data */}

            <div >
                <Button className='ms-5 mt-5' onClick={() => { updatePost(updatePostData) }}>Update Post</Button>
                {
                    info.data.map((PostApi, i) =>
                        <div className='border border-2 border-black m-5 p-3' key={i}>
                            <h2>{PostApi.id} : {PostApi.title}</h2>
                            <p>{PostApi.body}</p>

                        </div>
                    )
                }
            </div>



        </>
    )
}
