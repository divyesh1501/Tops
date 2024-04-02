import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input, Label } from 'reactstrap'

export default function Footer() {
    return (
        <>
            <div className='my-10 mx-36  flex justify-between'>
                <div className='flex gap-48 header relative'>
                    <div className='shop'>
                        <h2 className='text-xl font-bold capitalize mb-8'>shop</h2>
                        <ul className='leading-8 '>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Perfume</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Deodorant</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Shaving</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Soap</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Talc</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>All Products</li></NavLink>
                        </ul>
                    </div>
                    <div className=' usefullink'>
                        <h2 className='text-xl font-bold capitalize mb-8'>useful links</h2>
                        <ul className='leading-8'>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Blog</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Terms and Conditions</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Return & Cancellation Policy</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Privacy Policy</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Delivery and Shipping Policy</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Track Your Order</li></NavLink>
                        </ul>
                    </div>
                    <div className=' contact mr-5'>
                        <h2 className='text-xl font-bold capitalize mb-8'>contact</h2>
                        <ul className='leading-8'>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Contact</li></NavLink>
                            <NavLink to={''} className='text-gray-600 hover:text-gray-950 hover: no-underline'><li>Bulk Inquiry</li></NavLink>
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
                        <Button className='uppercase !bg-red-800 font-bold text-white rounded-full p-3 my-3 w-80'>Subscribe</Button>
                        <ul className='flex justify-between my-6'>
                            <NavLink to={''} className='hover:scale-110'><li><Facebook /></li></NavLink>
                            <NavLink to={''} className='hover:scale-110'><li><Instagram /></li></NavLink>
                            <NavLink to={''} className='hover:scale-110'><li><Youtube /></li></NavLink>
                            <NavLink to={''} className='hover:scale-110'><li><Twitter /></li></NavLink>
                        </ul>
                    </Form>
                    <p className='text-xs text-gray-600'>&copy;McNROE Consumer Products Pvt Ltd. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}
