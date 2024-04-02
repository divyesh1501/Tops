import React from 'react'
import hmark from "../Category/Images/heading-mark.webp";
import Perfumes from './Perfumes/Perfumes';
import Grooming from './Grooming/Grooming';
import Gifts from './Gifts/Gifts';
import Deodarant from './Deodarant/Deodarant';
import NewArrivals from './NewArrivals/NewArrivals';

export default function Category() {
    return (
        <div className="flex flex-col">
            <div className='flex justify-center w-full my-5 bg-black'>
                <h1 className='my-2 text-4xl font-bold text-white uppercase'>wild stone products</h1>
                <div className='flex justify-end'>
                    <img style={{ filter: "invert(1) brightness(1.5)", height: "80%" }} src={hmark} alt="hmark" />
                </div>
            </div>
            <NewArrivals />
            <Perfumes />
            <Grooming />
            <Gifts />
            <Deodarant />
        </div>
    )
}
