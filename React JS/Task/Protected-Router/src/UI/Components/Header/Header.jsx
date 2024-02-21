import React, { useState } from 'react'
import "./index.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { Button } from 'reactstrap';
import RegModal from '../Modal/RegModal';
import LoginModal from '../Modal/LoginModal';
import { toast } from 'react-toastify';

export default function Header() {
  const [RegisterModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("loginuser")) || [];
  const RegData = JSON.parse(localStorage.getItem("newuser")) || [];
  const navigate = useNavigate();

  // const registerToggle = () => setRegisterModal(!RegisterModal);
  // const loginToggle = () => setLoginModal(!loginModal);

  const data = JSON.parse(localStorage.getItem("loginuser")) || []
  // console.log("🚀 ~ file: Header.jsx:17 ~ Header ~ data:", data)

  const logoutHandler = () => {
    // console.log("first")
    localStorage.setItem("loginuser", JSON.stringify({}));
    navigate("/")
    toast.danger("You are loged out", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      theme: "light",
    })
    // setLoginModal(true)
    // toggle();
  };

  const loginToggle = () =>
    setLoginModal(!loginModal, console.log("===>"));
  const registerToggle = () => setRegisterModal
  (!RegisterModal);

  return (
    <>
      <LoginModal toggle={loginToggle} modal={loginModal} />
      <RegModal toggle={registerToggle} modal={RegisterModal} />



      <header className="header">
        <div className="container">
          <div className="header__logo">
            <h1 className="header__logo__name">One5</h1>
          </div>
          <div className='w-100 d-flex justify-content-between align-items-center'>
            <div className="header__nav">
              <NavLink to={"/"}><a href="">Home</a></NavLink>
              <NavLink to={"/about"}><a href="">About</a></NavLink>
              <NavLink to={"/profile"}>Profile</NavLink>
              {loginData.userType === "Admin" && (<NavLink to={"/admin"}><a href=""><CircleUser color="#2929f9" /></a></NavLink>)}
              
            </div>

            <div className="header__btn">
              {Object.keys(data).length > 0 ?

                (
                  <Button className='bg-danger border-0' onClick={logoutHandler}>Log Out
                  </Button>
                )
                :
                (
                  <Button Button className='bg-success border-0' onClick={loginToggle}>Login
                  </Button>
                )
              }
              <Button className='bg-warning border-0' onClick={registerToggle}>Register</Button>
            </div>
          </div>
        </div>
      </header >

    </>
  )
}
