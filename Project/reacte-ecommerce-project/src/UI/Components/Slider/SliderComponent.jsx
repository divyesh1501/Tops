import React, { useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../Slider/Images/Slider1.webp';
import Slide2 from '../Slider/Images/Slider2.webp';
import Slide3 from '../Slider/Images/Slider3.webp';
import Slide4 from '../Slider/Images/Slider4.webp';
import { ChevronLeft, ChevronLeftCircle, ChevronRight, ChevronRightCircle } from 'lucide-react';
import "./slider.css"

export default function SliderComponent() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
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
        <div className="relative flex justify-center" >
            <Slider ref={sliderRef} {...settings} className="w-full">
                <div className="w-full">
                    <img src={Slide1} alt="Slide 1" role="button" className="w-full h-auto" />
                </div>
                <div className="w-full">
                    <img src={Slide2} alt="Slide 2" role="button" className="w-full h-auto" />
                </div>
                <div className="w-full">
                    <img src={Slide3} alt="Slide 3" role="button" className="w-full h-auto" />
                </div>
                <div className="w-full">
                    <img src={Slide4} alt="Slide 4" role="button" className="w-full h-auto" />
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