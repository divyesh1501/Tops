import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function User() {
    let user = useSelector((store)=>{
        return store.apiSlice;
    })
    console.log("🚀 ~ user ~ user:", user)
    const dispatch = useDispatch()
  return (
    <>
    </>
  )
}
