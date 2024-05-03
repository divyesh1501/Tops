import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../UI/Components/Header/Header';
import HomePage from '../UI/Pages/HomePage/HomePage';
import Footer from '../UI/Components/Footer/Footer';
import Profile from '../UI/Pages/Profile/Profile';
import Cart from '../UI/Components/Cart/Cart';
import Dashboard from '../UI/Pages/Admin/Dashboard';
import Order from '../UI/Pages/Admin/Order';
import User from '../UI/Pages/Admin/User';
import Product from '../UI/Pages/Admin/Product/Product';


export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/cart' element={<Cart />} />
                    {/* =========================ADMIN============================= */}
                    <Route path='/admin-product' element={<Product />} />
                    <Route path='/admin-dashboard' element={<Dashboard />} />
                    <Route path='/admin-order' element={<Order />} />
                    <Route path='/admin-user' element={<User />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
