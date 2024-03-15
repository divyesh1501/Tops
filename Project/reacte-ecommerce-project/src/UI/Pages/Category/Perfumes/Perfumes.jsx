import React from 'react'
import { Button } from 'reactstrap';
import peproduct1 from '../Perfumes/Images/PEProduct1.avif';
import peproduct2 from '../Perfumes/Images/PEProduct2.avif';
import peproduct3 from '../Perfumes/Images/PEProduct3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StarRating from '../StarRating';


export default function Perfumes() {
    const IndianRupee = () => <span>&#8377;</span>
    return (
        <>
            <div className='flex flex-row justify-center gap-6 mt-16'>
                <div className="grid rounded-lg shadow-lg w-52 h-100 place-content-center hover:bg-gradient-to-r from-gray-400">
                    <div>
                        <h5 className="text-xl font-bold text-center uppercase">
                            perfume
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
                        alt="Wild Stone Ultra Sensual Perfume"
                        src={peproduct1}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className=" w-60">
                        <h5 className="font-bold">
                            Wild Stone Ultra Sensual Perfume,100ml
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={5} />
                                <span className="ml-2">5(7 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 599.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 299.00
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
                        alt="Wild Stone Night Rider Perfume"
                        src={peproduct2}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className="w-60">
                        <h5 className="font-bold">
                            Wild Stone Night Rider Perfume,100ml
                        </h5>
                        <h6 className="mb-2 text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={4} />
                                <span className="ml-2">4(5 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex mb-2">
                            <span className='me-1'>MRP </span>
                            <del><IndianRupee /> 599.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 299.00
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
                        alt="Wild Stone Forest Spice Perfume"
                        src={peproduct3}
                        className="relative w-full"
                    />
                    <span className='absolute w-20 my-1 font-bold text-center text-white bg-yellow-600 rounded-xl ms-52' >50% off</span>
                    <div className="w-60">
                        <h5 className='font-bold'>
                            Wild Stone Forest Spice Perfume,100ml
                        </h5>
                        <h6 className="mb-2 text-center text-gray-500">
                            <div className="flex items-center">
                                <StarRating rating={3} />
                                <span className="ml-2">3(5 Reviews)</span>
                            </div>
                        </h6>
                        <div className="flex items-start justify-start mb-2">
                            <span className='me-1'>MRP</span>
                            <del><IndianRupee /> 599.00 </del>
                            <span className="ml-2 font-bold">
                                <IndianRupee /> 299.00
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
