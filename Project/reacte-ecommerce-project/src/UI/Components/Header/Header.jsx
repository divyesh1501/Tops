import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from "reactstrap";
import { ChevronDown, CircleUser, Heart, Search, ShoppingCart } from "lucide-react";
import wlogo from "../Header/Images/wild-stone.avif";

export default function Header() {
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

                    <div className='hidden gap-4 text-sm font-bold text-gray-800 uppercase navMenu md:flex'>
                        
                        <NavLink to={'/'} className="hidden">Home</NavLink>

                        <NavLink to={'/perfume'} className="text-gray-800 hover:text-gray-500 hover:underline">Perfume</NavLink>

                        <NavLink to={'/deodarant'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline">Deodarant <ChevronDown /></NavLink>

                        <NavLink to={'/pocket-perfume'} className="text-gray-800 hover:text-gray-500 hover:underline">Pocket Perfume</NavLink>

                        <NavLink to={'/grooming'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline">Grooming <ChevronDown /></NavLink>

                        <NavLink to={'/combos'} className="text-gray-800 hover:text-gray-500 hover:underline">Combos</NavLink>

                        <NavLink to={'/gifts'} className="text-gray-800 hover:text-gray-500 hover:underline">Gifts</NavLink>

                        <NavLink to={'/by-fragrance'} className="flex items-center gap-1 text-gray-800 hover:text-gray-500 hover:underline">By fragrance <ChevronDown /></NavLink>
                    </div>

                    <div className='flex gap-3 text-gray-800 header-icon'>
                        <a href="" className='hover:scale-110'><Search /></a>
                        <a href=""><Heart /></a>
                        <a href=""><CircleUser /></a>
                        <a href=""><ShoppingCart /></a>
                    </div>

                   
                </div>
            </Navbar>
        </>
    )
}
