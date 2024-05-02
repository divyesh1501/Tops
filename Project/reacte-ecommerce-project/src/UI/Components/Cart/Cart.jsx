import { ArrowRight, ChevronRight, Trash2 } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const IndianRupee = () => <span>&#8377;</span>

    let navigate = useNavigate();
    function navToHome() {
        navigate('/');
    }
    return (
        <>
            {/* Cart-Section */}
            <section className='container flex flex-col w-full gap-2 px-4 mx-auto navBar'>
                <hr className='md:my-6' />

                <p className='flex items-center capitalize md:text-base text-xs text-gray-500' role='button'><span onClick={navToHome}>home</span><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /> <span className='text-black'>cart</span></p>

                <div className=''>
                    <h1 className='font-black md:text-4xl text-2xl uppercase'>your cart</h1>
                    <div className='flex justify-between md:gap-10 lg:gap-5 flex-col md:flex-col lg:flex-row '>
                        <div className='border rounded-xl md:p-5 p-2 md:my-2 my-4'>
                            <div className='flex md:gap-5 gap-2 '>
                                <img src='https://www.wildstone.in/cdn/shop/products/012_305c92c7-6384-4fd1-9a5a-ec9b02264819_1024x1024.jpg?v=1663058205' alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw] rounded-xl' />
                                <div className=''>
                                    <div className='flex space-x-14 md:space-x-80 lg:space-x-44 '>
                                        <p className='capitalize font-semibold md:text-base text-xs'>Wild Stone Classic Musk Deodorant,225ml</p>
                                        <p><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>

                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1 cur'><span className="ml-2">
                                            <IndianRupee /> 158.00
                                        </span></p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                            <hr className='md:my-6 my-4' />
                            <div className='flex md:gap-5 gap-2 '>
                                <img src='https://www.wildstone.in/cdn/shop/products/012_305c92c7-6384-4fd1-9a5a-ec9b02264819_1024x1024.jpg?v=1663058205' alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw] rounded-xl' />
                                <div className=''>
                                    <div className='flex space-x-14 md:space-x-80 lg:space-x-44 '>
                                        <p className='capitalize font-semibold md:text-base text-xs'>Wild Stone Classic Musk Deodorant,225ml</p>
                                        <p><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>

                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1 cur'><span className="ml-2">
                                            <IndianRupee /> 158.00
                                        </span></p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                            <hr className='md:my-6 my-4' />
                            <div className='flex md:gap-5 gap-2 '>
                                <img src='https://www.wildstone.in/cdn/shop/products/012_305c92c7-6384-4fd1-9a5a-ec9b02264819_1024x1024.jpg?v=1663058205' alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw] rounded-xl' />
                                <div className=''>
                                    <div className='flex space-x-14 md:space-x-80 lg:space-x-44 '>
                                        <p className='capitalize font-semibold md:text-base text-xs'>Wild Stone Classic Musk Deodorant,225ml</p>
                                        <p><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>

                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1 cur'><span className="ml-2">
                                            <IndianRupee /> 158.00
                                        </span></p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Checkout-Section */}
                        <div className=''>
                            <div className='capitalize border rounded-xl p-5 md:my-2'>
                                <h2 className='font-bold md:text-xl text-lg '>order summary</h2>
                                <div className='flex items-center  md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>subtotal</p>
                                    <p className='md:text-base text-xs'><span className="ml-2">
                                        <IndianRupee /> 474.00
                                    </span></p>
                                </div>
                                <div className='flex items-center  md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>discount(-20%)</p>
                                    <p className='text-red-500 md:text-base text-xs'><span className="ml-2">
                                        <IndianRupee /> 94.00
                                    </span></p>
                                </div>
                                <div className='flex items-center md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>delivery fee</p>
                                    <p className='md:text-base text-xs'><span className="ml-2">
                                        <IndianRupee /> 25.00
                                    </span></p>
                                </div>
                                <hr className='md:my-6 my-4' />
                                <div className='flex items-center md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>total</p>
                                    <p className='md:text-base text-xs'><span className="ml-2">
                                        <IndianRupee /> 405.00
                                    </span></p>
                                </div>
                                <div className='flex justify-center md:gap-9 gap-1  md:my-6 my-4'>
                                    <input type="text" name="" id="" placeholder='Add promo code' className='bg-slate-200 p-2 rounded-full text-center w-80 outline-none' />
                                    <button type="submit" className='bg-black md:p-2 p-3 rounded-full text-center text-white capitalize w-32 md:text-base text-xs'>apply</button>
                                </div>
                                <div className=' md:my-6 my-4'>
                                    <button type="submit" className='bg-black p-3 rounded-full  text-white md:text-base text-xs capitalize w-full grid place-content-center'><p className='flex items-center gap-2 '>go to checkout<ArrowRight className='md:h-auto md:w-auto h-4 w-4'/></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
