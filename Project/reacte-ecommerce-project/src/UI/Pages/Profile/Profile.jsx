import { Heading5 } from 'lucide-react'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import { Button } from 'reactstrap'
import user from "../Profile/Images/user.png";

export default function Profile() {
    const [cookies, setCookies, removeCookies] = useCookies(["user", "token"])

    let navigate = useNavigate()

    const logoutHandler = () => {
        removeCookies("user")
        removeCookies("token")
        navigate("/")
    }

    let userData = cookies?.user
    console.log("🚀 ~ Profile ~ userData:", userData)
    return (
        <>
            <div className='flex items-center  flex-col border'>
                <div className='flex items-center justify-center flex-col'>
                    <h1><ul>User Details</ul></h1>
                    <img src={user} alt="" className='w-44 h-44' />
                </div>
                <div className=''>
                    <h3 className='my-3'><strong>Name</strong> : {userData.name}</h3>
                    <hr />
                    <h3 className='my-3'><strong>Email</strong> : {userData.email}</h3>
                    <hr />
                    <h3 className='my-3'><strong>Number</strong> : {userData.number}</h3>
                    <hr />
                    <h3 className='my-3'><strong>Age</strong> : {userData.age}</h3>
                </div>
                <Button onClick={logoutHandler} className='!bg-red-700 border-0 w-52 my-10'>Log Out</Button>
            </div>
        </>
    )
}
