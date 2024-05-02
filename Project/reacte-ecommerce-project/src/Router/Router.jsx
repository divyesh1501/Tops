import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../UI/Components/Header/Header';
import HomePage from '../UI/Pages/HomePage/HomePage';
import Footer from '../UI/Components/Footer/Footer';
import Profile from '../UI/Pages/Profile/Profile';
import Cart from '../UI/Components/Cart/Cart';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/cart' element={<Cart />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
