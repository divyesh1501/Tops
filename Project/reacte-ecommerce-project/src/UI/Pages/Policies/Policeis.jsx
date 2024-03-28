import React from 'react'
import PL1 from "../Policies/Images/PL1.avif";
import PL2 from "../Policies/Images/PL2.avif";
import PL3 from "../Policies/Images/PL3.avif";
import PL4 from "../Policies/Images/PL4.avif";

export default function Policeis() {
    return (
        <>
            <hr className="border-t-4 border-gray-200 my-4" />
            <div className='px-6 mx-36 flex justify-between'>
                <div className='mt-10 flex items-center gap-5'>
                    <img src={PL1} alt="COD" />
                    <p className='flex flex-col text-gray-600'>COD<span>Available</span></p>
                </div>
                <div className='mt-10 flex items-center gap-5'>
                    <img src={PL2} alt="COD" />
                    <p className='flex flex-col text-gray-600'>Finest<span>Quality</span></p>
                </div>
                <div className='mt-10 flex items-center gap-5'>
                    <img src={PL3} alt="COD" />
                    <p className='flex flex-col text-gray-600'>No Harsh<span>Chemicals</span></p>
                </div>
                <div className='mt-10 flex items-center gap-5'>
                    <img src={PL4} alt="COD" />
                    <p className='flex flex-col text-gray-600'>Free<span>Shipping</span></p>
                </div>
            </div>
        </>
    )
}
