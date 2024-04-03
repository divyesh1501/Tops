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
                    <h1>User Deatils</h1>
                    <img src={user} alt="" className='w-44 h-44' />
                </div>
                <div className=''>
                    <ul className='leading-10'>
                        <li tag={Heading5}>Name:{userData.name}</li>
                        <li tag={Heading5}>Email:{userData.email}</li>
                        <li tag={Heading5}>Number:{userData.number}</li>
                        <li tag={Heading5}>Age:{userData.age}</li>
                    </ul>
                </div>
                <Button onClick={logoutHandler}>Log Out</Button>
            </div>
        </>
    )
}
