import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from "reactstrap";
import { ChevronDown, CircleUser, Heart, Search, ShoppingCart, User, UserCircle } from "lucide-react";
import wlogo from "../Header/Images/wild-stone.avif";
import RegModal from '../Modal/RegisterModal/RegModal';
import LoginModal from '../Modal/LoginModal/LoginModal';
import { useCookies } from 'react-cookie';

export default function Header() {
    const [logmodal, setLogModal] = useState(false);
    const [regmodal, setRegModal] = useState(false);
    const logtoggle = () => setLogModal(!logmodal);
    const regtoggle = () => setRegModal(!regmodal);
    const [cookies, setCookies] = useCookies(["user", "token"])
    console.log("🚀 ~ Header ~ cookies:", cookies)

    function navProfile() {
        navigate('/profile');
    }
    function navCart() {
        navigate('/cart');
    }

    let navigate = useNavigate()
    return (
        <>
            <Navbar className='bg-transparent Header' expand="md">
                <div className='container flex items-center justify-center w-full gap-20 px-4 mx-auto my-3 navBar'>
                    <NavbarBrand href="/">
                        <div className=''>
                            <img
                                alt='logo'
                                src={wlogo}
                                className="w-40"
                            />
                        </div>
                    </NavbarBrand>

                    <div className='hidden gap-4 text-sm font-bold uppercase navMenu md:flex'>

                        <NavLink to={'/'} className="hidden">Home</NavLink>

                        <NavLink to={'/perfume'} className="text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Perfume</NavLink>

                        <NavLink to={'/deodarant'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Deodarant <ChevronDown /></NavLink>

                        <NavLink to={'/pocket-perfume'} className="text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Pocket Perfume</NavLink>

                        <NavLink to={'/grooming'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Grooming <ChevronDown /></NavLink>

                        <NavLink to={'/combos'} className="text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Combos</NavLink>

                        <NavLink to={'/gifts'} className="text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">Gifts</NavLink>

                        <NavLink to={'/by-fragrance'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline active:text-gray-950 no-underline">By fragrance <ChevronDown /></NavLink>
                    </div>

                    <div className='flex gap-3 text-gray-800 header-icon'>
                        <Search role='button' />
                        <Heart role='button' />
                        {
                            cookies.user ? <UserCircle onClick={navProfile} /> :
                                <User role='button' onClick={logtoggle} />
                        }
                        <ShoppingCart role='button' onClick={navCart} />
                    </div>


                </div>
            </Navbar>

            <RegModal regModal={regmodal} regToggle={regtoggle} logtoggle={logtoggle} />
            <LoginModal logModal={logmodal} logToggle={logtoggle} regtoggle={regtoggle} />
        </>
    )
}
