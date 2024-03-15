import React from 'react'
import { Button } from 'reactstrap';
import ddproduct1 from '../Deodarant/Images/DDProduct1.avif';
import ddproduct2 from '../Deodarant/Images/DDProduct2.avif';
import ddproduct3 from '../Deodarant/Images/DDProduct3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../StarRating';

export default function Deodarant() {
    const IndianRupee = () => <span>&#8377;</span>

    return (
        <>
            <div className='flex flex-row justify-center mt-10 gap-6'>
                <div className="grid rounded-lg shadow-lg w-52 h-100 place-content-center hover:bg-gradient-to-r from-gray-400">
                    <div>
                        <h5 className="text-xl font-bold text-center uppercase">
                            deodorant
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
                        alt="Wild Stone Intense Black and Trance No Gas Deodorant Gift Set"
                        src={ddproduct1}
                        className="w-full rounded-t-lg"
                        style={{ position: "relative" }}
                    />
                    <span className='w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' style={{ position: "absolute" }} >50% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild Stone Classic Musk Deodorant,225ml
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={0} />
                                <span className="ml-2">0(0 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 315.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 158.00
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
                        alt="Wild Stone Edge, Legend and Red Deodorant Pack of 3"
                        src={ddproduct2}
                        className="w-full rounded-t-lg"
                        style={{ position: "relative" }}
                    />
                    <span className='w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' style={{ position: "absolute" }} >39% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild Stone Edge, Legend and Red Deodorant Pack of 3 (150ml each)
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={0} />
                                <span className="ml-2">0(0 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 675.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 410.00
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
                        alt="Wild Stone Edge, Legend and Red Deodorant Pack of 3"
                        src={ddproduct3}
                        className="w-full rounded-t-lg"
                        style={{ position: "relative" }}
                    />
                    <span className='w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' style={{ position: "absolute" }} >39% off</span>
                    <div className="mt-3 w-60">
                        <h5 className="font-bold line-clamp-2">
                            Wild Stone Edge, Legend and Red Deodorant Pack of 3 (150ml each)
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={0} />
                                <span className="ml-2">0(0 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 675.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 410.00
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
