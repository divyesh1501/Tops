import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../UI/Components/Header/Header';
import HomePage from '../UI/Pages/HomePage/HomePage';
import Footer from '../UI/Components/Footer/Footer';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
