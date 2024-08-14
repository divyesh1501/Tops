import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'


export default function ProtectedRouter({ Component }) {
    let navigate = useNavigate()
    useEffect(() => {
        let protectedData = JSON.parse(localStorage.getItem("loginData")) || []
        console.log("🚀 ~ useEffect ~ protectedData:", protectedData)
        if (Object.keys(protectedData).length === 0) {
            navigate("/")
        }

    }, [])
    return (
        <>
            {Component}

        </>
    )
}

export const AdminProtectedRouter = ({ Component }) => {
    let navigate = useNavigate()
    useEffect(() => {
        let adminProtectedData = JSON.parse(localStorage.getItem("loginData")) || []
        if (Object.keys(adminProtectedData).length === 0 || adminProtectedData.userType !== "Admin") {
            navigate("/")
        }

    }, [])
    return (
        <>
            {Component}

        </>
    )
}
