import React from 'react'
import SliderComponent from './Section1/SliderComponent'
import Category from './Section2/Category'
import Products from './Section3/Products'
// import  "../../../App.css";

export default function HomePage() {
    return (
        <>
            <SliderComponent />
            <Category />
            <Products />
            <h1 className=''>hello world</h1>
            <span className='text-3xl italic font-bold underline'>hello world</span>
        </>
    )
}
