import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function ProtectedRouter({ Component }) {
  const navigate = useNavigate()
  useEffect(() => {
    let normalData = JSON.parse(localStorage.getItem("loginuser")) || [];



    if (Object.keys(normalData).length === 0) {

      navigate("/login")
    }
  })

  return (
    <>
      {/* <h1>test</h1> */}
      {Component}
    </>
  )
}


export const AdminProtectedRouter = ({ Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("loginUser")) || []
    if (Object.keys(normaldata).length === 0 || normaldata.userType !== "Admin") {
      navigate("/unauthorised")
    }
  })
  return (
    <div>
      {Component}
    </div>
  )
}
