import React from 'react'
import gfproduct1 from '../Gifts/Images/GFProduct1.avif';
import gfproduct2 from '../Gifts/Images/GFProduct2.avif';
import gfproduct3 from '../Gifts/Images/GFProduct3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../StarRating';

export default function Gifts() {
    const IndianRupee = () => <span>&#8377;</span>

    return (
        <>
            <div className='flex flex-row justify-center gap-6 mt-10'>
                <div className="grid rounded-lg shadow-lg w-52 place-content-center hover:bg-gradient-to-r from-gray-400">
                    <div>
                        <h5 className="text-xl font-bold text-center uppercase">
                            gifts
                        </h5>
                        <button
                            className="w-40 h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full"
                        >
                            explore
                        </button>
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
                        alt="Wild Stone Intense Black and Trance No Gas Deodorant Gift Set"
                        src={gfproduct1}
                        className="relative w-full rounded-t-lg "
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >45% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild Stone Intense Black and Trance No Gas Deodorant Gift Set for Men, Pack of 3 (120ml each)
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={4} />
                                <span className="ml-2">4(4 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 799.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 439.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            add to cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img
                        alt="Wild Stone Intense No Gas Deodorant Travel Pack with Black, Ocean, Trance and Wood Mini Deodorants"
                        src={gfproduct2}
                        className="relative w-full rounded-t-lg"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >35% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild Stone Intense No Gas Deodorant Travel Pack with Black, Ocean, Trance and Wood Mini Deodorants for Men, Pack of 4 (40ml each)
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={5} />
                                <span className="ml-2">5(1 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 436.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 286.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            add to cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img
                        alt="Wild stone Ultra Sensual Fragrance Combo"
                        src={gfproduct3}
                        className="relative w-full rounded-t-lg"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52'>32% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild stone Ultra Sensual Fragrance Combo for Men (Perfume - 50 ml & Deodorant -150 ml)
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={5} />
                                <span className="ml-2">5(1 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 624.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 426.00
                            </span>
                        </div>
                        <p className='text-gray-500'>
                            (Inclusive of all taxes)
                        </p>
                        <button
                            className="h-12 my-5 font-bold text-white uppercase bg-red-800 border-none rounded-full w-60"
                        >
                            add to cart
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
