import React from 'react'
import { Button } from 'reactstrap';
import grproduct1 from '../Grooming/Images/GRProduct1.avif';
import grproduct2 from '../Grooming/Images/GRProduct2.avif';
import grproduct3 from '../Grooming/Images/GRProduct3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../StarRating';

export default function Grooming() {
    const IndianRupee = () => <span>&#8377;</span>
    return (
        <>
            <div className='flex flex-row justify-center mt-10 gap-6'>
                <div className="grid rounded-lg shadow-lg w-52 h-100 place-content-center hover:bg-gradient-to-r from-gray-400">
                    <div>
                        <h5 className="text-xl font-bold text-center uppercase">
                            grooming
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
                        alt="Wild Stone Musk Soap"
                        src={grproduct1}
                        className="w-full rounded-t-lg"
                    />
                    <div className="mt-8 w-60">
                        <h5 className="font-bold">
                            Wild Stone Musk Soap,<p>125gm</p>
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={0} />
                                <span className="ml-2">0(0 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">

                            <span className="ml-2 font-bold">
                                <IndianRupee /> 60.00
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
                    <span className='w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >18% off</span>
                    <img
                        alt="Wild Stone Ultra Sensual Talc"
                        src={grproduct2}
                        className="w-full"
                    />
                    <div className="w-60">
                        <h5 className="font-bold">
                            Wild Stone Ultra Sensual Talc,100gm
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={5} />
                                <span className="ml-2">5(1 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 99.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 81.00
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
                        alt="Wild Stone Ultra Sensual Soap"
                        src={grproduct3}
                        className="rounded-t-lg w-full"
                    />
                    <div className="mt-8 w-60">
                        <h5 className='font-bold'>
                            Wild Stone Ultra Sensual Soap,125gm
                        </h5>
                        <h6 className="mb-2 text-center text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={0} />
                                <span className="ml-2">0(0 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex items-start justify-start mb-2">

                            <span className="ml-2 font-bold">
                                <IndianRupee /> 60.00
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
