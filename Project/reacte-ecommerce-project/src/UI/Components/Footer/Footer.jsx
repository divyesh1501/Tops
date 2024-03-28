import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Button, Form, Input, Label } from 'reactstrap'

export default function Footer() {
    return (
        <>
            <div className='my-10 mx-36 px-6 flex justify-between'>
                <div className='flex gap-48 header relative'>
                    <div className='shop'>
                        <h2 className='text-xl font-bold capitalize mb-8'>shop</h2>
                        <ul className='leading-8'>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Perfume</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Deodorant</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Shaving</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Soap</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Talc</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>All Products</li></a>
                        </ul>
                    </div>
                    <div className=' usefullink'>
                        <h2 className='text-xl font-bold capitalize mb-8'>useful links</h2>
                        <ul className='leading-8'>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Blog</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Terms and Conditions</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Return & Cancellation Policy</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Privacy Policy</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Delivery and Shipping Policy</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Track Your Order</li></a>
                        </ul>
                    </div>
                    <div className=' contact mr-5'>
                        <h2 className='text-xl font-bold capitalize mb-8'>contact</h2>
                        <ul className='leading-8'>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Contact</li></a>
                            <a href="" className='text-gray-600 hover:text-gray-950 hover:underline'><li>Bulk Inquiry</li></a>
                        </ul>
                    </div>
                    {/* <!-- Vertical line --> */}
                    <div className="absolute top-0 bottom-0 right-0 bg-gray-400 w-px ml-16"></div>

                </div>
                <div className='flex flex-col mx-10'>
                    <h2 className='text-xl font-bold mb-8 w-80'>To keep up with the latest in Men's grooming</h2>
                    <Form className='flex flex-col'>
                        <Label className='text-gray-600 mb-4'>Signup our newsletter</Label>
                        <Input
                            type='text'
                            placeholder='Email'
                            className='border border-black rounded-xl p-3 w-80'
                        />
                        <Button className='uppercase bg-red-800 font-bold text-white rounded-full p-3 my-3 w-80'>Subscribe</Button>
                        <ul className='flex justify-between my-6'>
                            <a href="" className='hover:scale-110'><li><Facebook /></li></a>
                            <a href="" className='hover:scale-110'><li><Instagram /></li></a>
                            <a href="" className='hover:scale-110'><li><Youtube /></li></a>
                            <a href="" className='hover:scale-110'><li><Twitter /></li></a>
                        </ul>
                    </Form>
                    <p className='text-xs text-gray-600'>&copy;McNROE Consumer Products Pvt Ltd. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}
