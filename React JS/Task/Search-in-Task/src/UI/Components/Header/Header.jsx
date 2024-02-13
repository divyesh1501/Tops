import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import UserModal from '../Modal/UserModal';
import One5 from "../../Images/One5Logo.png";
import LoginModal from '../Modal/LoginModal';

export const Header = () => {
    const [regmodal, setRegModal] = useState(false);
    const [logmodal, setLogModal] = useState(false);
    const regtoggle = () => setRegModal(!regmodal);
    const logtoggle = () => setLogModal(!logmodal);

    const logData = JSON.parse(localStorage.getItem("loginData")) || {};

    const logoutHandler = () => {
        localStorage.setItem("loginData", JSON.stringify([]))
    }

    return (
        <>
            <Navbar color="dark" dark>
                <NavbarBrand href="/">
                    <div className='d-flex justify-content-center'>
                        <img
                            alt="logo"
                            src={One5}
                            style={{
                                height: 50,
                                width: 50
                            }}
                        />
                        <span style={{ fontSize: "30px", fontWeight: "bold", fontFamily: "cursive" }}>One5</span>
                    </div>
                </NavbarBrand>

                <div className='d-flex gap-3 menu'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/userlist"}>UserList</NavLink>
                </div>
                {/* <div>
                    <Button onClick={toggle}>Add User</Button>
                </div> */}
                <div>
                    {Object.keys(logData).length > 0 ? (
                        <Button onClick={logoutHandler}>Logout</Button>
                    ) : (
                        <Button onClick={logtoggle}>Login</Button>
                    )}
                </div>
            </Navbar>

            <UserModal modal={regmodal} toggle={regtoggle} logtoggle={logtoggle} />
            <LoginModal modal={logmodal} toggle={logtoggle} regtoggle={regtoggle}/>
        </>
    );
};
