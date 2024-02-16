import React, { useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import UserModal from '../Modal/UserModal';
import One5 from '../../Images/One5Logo.png';
import LoginModal from '../Modal/LoginModal';
import Swal from 'sweetalert2';
import { UserList } from '../../Pages/UserList';

export const Header = () => {
    const [regmodal, setRegModal] = useState(false);
    const [logmodal, setLogModal] = useState(false);
    const regtoggle = () => setRegModal(!regmodal);
    const logtoggle = () => setLogModal(!logmodal);

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
          return false;
    };

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
                    {Object.keys(logData).length > 0 ? (
                        <Button onClick={logoutHandler}>Logout</Button>
                    ) : (
                        <Button onClick={logtoggle}>Login</Button>
                    )}
                </div>
            </Navbar>

            <UserModal modal={regmodal} toggle={regtoggle} logtoggle={logtoggle} />
            <LoginModal modal={logmodal} toggle={logtoggle} regtoggle={regtoggle} />
            {/* <UserList modal={regmodal} toggle={regtoggle} /> */}
        </>
    );
};

