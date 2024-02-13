import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from '../UI/Components/Header/Header';
import { HomePage } from "../UI/Pages/HomePage";
import { About } from "../UI/Pages/About";
import { UserList } from '../UI/Pages/UserList';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/userlist' element={<UserList />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    )
}
