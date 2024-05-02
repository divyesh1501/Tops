import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader} from 'reactstrap';
import Swal from 'sweetalert2'
import { BE_URL } from '../../../../Config';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";

const intialData = {
    email: "",
    password: "",
}

export default function LoginModal({ logModal, logToggle, regtoggle }) {

    const creartaccount = () => {
        logToggle()
        regtoggle()
    }


    const { register, handleSubmit, formState: { errors }, } = useForm()
    let [loginData, setLoginData] = useState(intialData);
    let [cookies, setCookie] = useCookies([]);



    const loginUser = (data) => {
        console.log("🚀 ~ loginUser ~ data:", data)
        console.log("======")

        axios({
            method: "post",
            url: `${BE_URL}/user/signin`,
            data: data
        })
            .then((res) => {
                setCookie("user", res?.data?.data);
                setCookie("token", res?.data?.data);
                console.log("🚀 ~ login", res);
                logToggle(); // Close the modal after successful registration
            })
            .catch((err) => {
                toast.error("Denied Access failed. Please try again later.");
            });

    };

    return (
        <>
            <Modal isOpen={logModal} toggle={logToggle}>
                <ModalHeader toggle={logToggle}>Login Form</ModalHeader>
                <div className='flex flex-col w-96 h-96 m-auto items-center justify-center'>
                    <form onSubmit={handleSubmit(loginUser)}>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email" className='font-bold'>Email</label>
                            <input type="text"
                                id='email'
                                className='border border-black'
                                {...register("email", { required: "Email is required" })} />

                            {errors.email && (<p>{errors?.email?.message}</p>)}
                            <label htmlFor="password" className='font-bold'>Password</label>
                            <input type="password"
                                id='email'
                                className='border border-black'
                                {...register("password", { required: "Password is required" })} />

                            {errors.password && (<p>{errors?.password?.message}</p>)}
                        </div>
                        <p>Don't have a account Creat account <span role='button' onClick={creartaccount} style={{ color: "Blue" }}>Click Here!</span></p>
                        <div>
                            <button className='mt-3 h-8 w-20 border border-black bg-slate-500 rounded-md'>Sign In</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
