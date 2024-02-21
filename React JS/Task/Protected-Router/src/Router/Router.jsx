import {BrowserRouter, Route, Routes} from "react-router-dom"

import React from 'react'
import Home from "../UI/Pages/Home"
import About from "../UI/Pages/About"
import Header from "../UI/Components/Header/Header"
import Footer from "../UI/Components/Footer/Footer"
import Profile from "../UI/Pages/Profile"
import ProtectedRouter from "./ProtectedRouter"
import UnauthorisedPage from "../UI/Pages/UnauthorisedPage"

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<ProtectedRouter Component={<About />} />} />
        <Route path="/unauthorised" element={<UnauthorisedPage />}/>
        <Route path="/unauthorised" element={<ProtectedRouter Component={UnauthorisedPage} />}></Route>
        
    </Routes>
    <Footer />
    
    </BrowserRouter>
    
    
    </>
  )
}
