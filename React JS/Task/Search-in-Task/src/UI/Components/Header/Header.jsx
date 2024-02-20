import React, { useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import UserModal from '../Modal/UserModal';
import One5 from '../../Images/One5Logo.png';
import LoginModal from '../Modal/LoginModal';
import Swal from 'sweetalert2';
import AddModal from '../Modal/AddModal';
import { CircleUser } from "lucide-react";
import ProfileModal from '../Modal/ProfileModal';

export const Header = () => {
    const [regmodal, setRegModal] = useState(false);
    const [logmodal, setLogModal] = useState(false);
    const [profilemodal, setProfileModal] = useState(false);
    const regtoggle = () => setRegModal(!regmodal);
    const logtoggle = () => setLogModal(!logmodal);
    const profiletoggle = () => setProfileModal(!profilemodal);


    let navigate = useNavigate()

    const logData = JSON.parse(localStorage.getItem('loginData')) || {};

    const logoutHandler = () => {
        localStorage.setItem('loginData', JSON.stringify([]));
        navigate("/")
        setLogModal(true)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are Loged Out..!!",
        });
        profiletoggle();
        return false;
    };

    const showData = () => {
        profiletoggle();

    };

    const isLoggedIn = Object.keys(logData).length > 0;

    return (
        <>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">
                    <div className='d-flex justify-content-center'>
                        <img
                            alt='logo'
                            src={One5}
                            style={{
                                height: 50,
                                width: 50,
                            }}
                        />
                        <span style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'cursive' }}>One5</span>
                    </div>
                </NavbarBrand>

                <div className='d-flex gap-3 menu'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/userlist'}>UserList</NavLink>
                </div>

                <div>
                    {isLoggedIn ? (
                        <span onClick={showData} role='button' style={{ color: "palegoldenrod"}}> <CircleUser /></span>
                    ) : (
                        <Button onClick={logtoggle}>Log In</Button>
                    )}
                </div>
            </Navbar>

            <UserModal modal={regmodal} toggle={regtoggle} logtoggle={logtoggle} />
            <LoginModal modal={logmodal} toggle={logtoggle} regtoggle={regtoggle} />
            <ProfileModal profilemodal={profilemodal} setProfileModal={setProfileModal} profiletoggle={profiletoggle} logoutHandler={logoutHandler} loggedUser={logData} />
            {/* <AddModal modal={regmodal} toggle={regtoggle} regtoggle={regtoggle} />   */}
        </>
    );
};

