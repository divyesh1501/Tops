import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../../../Images/Slider1.webp';
import Slide2 from '../../../Images/Slider2.webp';
import Slide3 from '../../../Images/Slider3.webp';
import Slide4 from '../../../Images/Slider4.webp';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

const SliderComponent = () => {
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
        <div className="relative">
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

            <div className="absolute left-0 transform -translate-y-1/2 top-1/2">
                <button onClick={goToPrev} className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-10"><ChevronLeftCircle size={48} color="#f3eded" strokeWidth={3} absoluteStrokeWidth /></button>
            </div>

            <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
                <button onClick={goToNext} className="mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-10"><ChevronRightCircle size={48} color="#f3eded" strokeWidth={3} absoluteStrokeWidth /></button>
            </div>
        </div>
    );
};

export default SliderComponent;
