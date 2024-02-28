import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from '../UI/Components/Header/Header';
import { HomePage } from "../UI/Pages/HomePage";
import { About } from "../UI/Pages/About";
import { UserList } from '../UI/Pages/UserList';
import { AdminProtectedRouter } from './ProtectedRouter';
import Footer from '../UI/Components/Footer/Footer';
import { Button } from 'reactstrap';

export default function Router() {
    const [regmodal, setRegModal] = useState(false);
    const regtoggle = () => setRegModal(!regmodal);

    return (
        <>
            <BrowserRouter>
                <Header regmodal={regmodal} regtoggle={regtoggle} setRegModal={setRegModal} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/userlist' element={<AdminProtectedRouter Component={<UserList regtoggle={regtoggle}/>} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
