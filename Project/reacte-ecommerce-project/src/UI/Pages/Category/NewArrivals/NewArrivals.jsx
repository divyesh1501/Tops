import React from 'react'
import { Button } from 'reactstrap';
import naproduct1 from '../NewArrivals/Images/NAProduct1.avif';
import naproduct2 from '../NewArrivals/Images/NAProduct2.avif';
import naproduct3 from '../NewArrivals/Images/NAProduct3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../StarRating';


export default function NewArrivals() {
    const IndianRupee = () => <span>&#8377;</span>
    return (
        <>
            <div className='flex flex-row justify-center gap-6 mt-10'>
                <div className="grid rounded-lg shadow-lg w-52 h-100 place-content-center hover:bg-gradient-to-r from-gray-400">
                    <div >
                        <h5 className="text-xl font-bold text-center uppercase ">
                            New Arrivals
                        </h5>
                        <Button
                            className="w-40 h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full"
                        >
                            explore
                        </Button>
                        <div className="flex mt-4">
                            <span className="mr-4">
                                <ChevronLeft />
                            </span>
                            <span>
                                <ChevronRight />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img
                        alt="Wild Stone Whisky Perfume"
                        src={naproduct1}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className=" w-60">
                        <h5 className="font-bold">
                            Wild Stone Whisky Perfume for Men,100ml
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={4} />
                                <span className="ml-2">4(24 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 799.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 399.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <Button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            Coming Soon
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img
                        alt="Wild Stone Cigar Perfume"
                        src={naproduct2}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className="w-60">
                        <h5 className="font-bold">
                            Wild Stone Cigar Perfume for Men,100ml
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={4} />
                                <span className="ml-2">4(24 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 799.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 399.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <Button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            add to cart
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img
                        alt="Wild Stone Ammo Perfume"
                        src={naproduct3}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className="w-60">
                        <h5 className='font-bold'>
                            Wild Stone Ammo Perfume for Men,100ml
                        </h5>
                        <h6 className="mb-2 text-center text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={4} />
                                <span className="ml-2">4(24 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex items-start justify-start mb-2">
                            <span className='me-1'>MRP</span>
                            <del><IndianRupee /> 799.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 399.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <Button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
