import React, { useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import F1 from '../FeedBack&Trending/Video/F1.mp4';
import F2 from '../FeedBack&Trending/Video/F2.mp4';
import F3 from '../FeedBack&Trending/Video/F3.mp4';
import F4 from '../FeedBack&Trending/Video/F4.mp4';
import F5 from '../FeedBack&Trending/Video/F5.mp4';
import F6 from '../FeedBack&Trending/Video/F6.mp4';
import F7 from '../FeedBack&Trending/Video/F7.mp4';
import F8 from '../FeedBack&Trending/Video/F8.mp4';
import F9 from '../FeedBack&Trending/Video/F9.mp4';
import hm from "../FeedBack&Trending/Images/heading-mark.webp";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./feedandtrendslider.css"

export default function FeedAndTrendSlider() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: false,
        dots:true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="relative" >
            <div className='flex justify-center w-full my-5 bg-black'>
                <h1 className='my-2 text-4xl font-bold text-white uppercase'>wild and trending</h1>
                <div className='flex justify-end'>
                    <img style={{ filter: "invert(1) brightness(1.5)", height: "80%" }} src={hm} alt="hmark" />
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className="flex flex-row my-5">
                    <div className=''>
                        <a href="#">
                        <video src={F1} className='rounded-3xl' autoPlay loop playsInline></video>
                        </a>
                    </div>
                    <div className="">
                        <video src={F2} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F3} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F4} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F5} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F6} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F7} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F8} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
                    <div className="">
                        <video src={F9} className='rounded-3xl' autoPlay loop playsInline></video>
                    </div>
            </Slider>

            <div className="absolute left-0 mx-10 transform -translate-y-1/2 top-1/2">
                <button onClick={goToPrev} className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><ChevronLeft size={24} color="#444" strokeWidth={3} absoluteStrokeWidth /></button>
            </div>

            <div className="absolute right-0 mx-10 transform -translate-y-1/2 top-1/2">
                <button onClick={goToNext} className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><ChevronRight size={24} color="#444" strokeWidth={3} absoluteStrokeWidth /></button>
            </div>
        </div>
    );
};