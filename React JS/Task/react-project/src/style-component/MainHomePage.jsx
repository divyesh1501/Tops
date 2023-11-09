import React from 'react'
import SubHeader from './SubHeader'
import Nav from './Nav'
import Header from './Header'
import Catagory from './Catagory'
import HomePage from './HomePage'

export default function MainHomePage() {
    return (
        <>
            <SubHeader />
            <Nav />
            <Header />
            <HomePage />
            <Catagory/>
        </>
    )
}