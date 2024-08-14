import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../UI/Pages/Product/Product'
import HomePage from '../UI/Pages/HomePage'
import About from '../UI/Pages/About'
import Header from '../UI/Components/Header/Header'
import Footer from '../UI/Components/Footer/Footer'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <div className='mx-5'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/product' element={<Product />} />
                    </Routes>
                </div>
                    <Footer />
            </BrowserRouter>
        </>
    )
}
