import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from "reactstrap";
import { ChevronDown, CircleUser, Heart, Search, ShoppingCart } from "lucide-react";
import wlogo from "../Header/Images/wild-stone.avif";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
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

                    {/* <div className='hidden gap-4 text-sm font-bold text-gray-800 uppercase navMenu md:flex'> */}
                    <div className={`md:flex md:items-center md:gap-4 text-sm font-bold text-gray-800 uppercase navMenu ${isNavOpen ? 'block' : 'hidden'}`}>
                        <NavLink to={'/'} className="text-gray-800 hover:text-gray-900">Home</NavLink>
                        <NavLink to={'/perfume'} className="text-gray-800 hover:text-gray-900">Perfume</NavLink>
                        <NavLink to={'/deodarant'} className="flex items-center gap-1 text-gray-800 hover:text-gray-900">Deodarant <ChevronDown /></NavLink>
                        <NavLink to={'/pocket-perfume'} className="text-gray-800 hover:text-gray-900">Pocket Perfume</NavLink>
                        <NavLink to={'/grooming'} className="flex items-center gap-1 text-gray-800 hover:text-gray-900">Grooming <ChevronDown /></NavLink>
                        <NavLink to={'/combos'} className="text-gray-800 hover:text-gray-900">Combos</NavLink>
                        <NavLink to={'/gifts'} className="text-gray-800 hover:text-gray-900">Gifts</NavLink>
                        <NavLink to={'/by-fragrance'} className="flex items-center gap-1 text-gray-800 hover:text-gray-900">By fragrance <ChevronDown /></NavLink>
                    </div>

                    <div className='flex gap-3 text-gray-800 header-icon'>
                        <a href="" className="focus:outline-none"><Search /></a>
                        <a href=""><Heart /></a>
                        <a href="" className="md:hidden"><CircleUser /></a>
                        <a href=""><ShoppingCart /></a>
                    </div>

                    {/* <div>
                        <Button color="black" onClick={() => setIsNavOpen(!isNavOpen)} className='md:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </Button>
                    </div> */}
                </div>
            </Navbar>
        </>
    )
}
