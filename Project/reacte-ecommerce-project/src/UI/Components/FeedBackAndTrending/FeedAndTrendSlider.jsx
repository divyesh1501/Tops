import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hm from "../FeedBackAndTrending/Images/heading-mark.webp";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from "react-modal";
import F1 from "../FeedBackAndTrending/Video/F1.mp4";
import F2 from "../FeedBackAndTrending/Video/F2.mp4";
import F3 from "../FeedBackAndTrending/Video/F3.mp4";
import F4 from "../FeedBackAndTrending/Video/F4.mp4";
import F5 from "../FeedBackAndTrending/Video/F5.mp4";
import F6 from "../FeedBackAndTrending/Video/F6.mp4";
import F7 from "../FeedBackAndTrending/Video/F7.mp4";
import F8 from "../FeedBackAndTrending/Video/F8.mp4";
import F9 from "../FeedBackAndTrending/Video/F9.mp4";

const videos = [F1, F2, F3, F4, F5, F6, F7, F8, F9];

export default function FeedAndTrendSlider() {
    const sliderRef = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    const settings = {
        infinite: false,
        dots: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false
    };

    const handleMouseEnter = event => {
        event.target.play();
    };

    const handleMouseLeave = event => {
        event.target.pause();
    };

    const handleVideoClick = index => {
        setSelectedVideoIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="relative">
            <div className='flex justify-center w-full my-5 bg-black'>
                <h1 className='my-2 text-4xl font-bold text-white capitalize'>wild & trending</h1>
                <div className='flex justify-end'>
                    <img className="filter invert brightness-150" src={hm} alt="hmark" />
                </div>
            </div>

            <Slider {...settings} className="flex flex-row my-5" ref={sliderRef}>
                {videos.map((video, index) => (
                    <div key={index}>
                        <a href="#" onClick={() => handleVideoClick(index)}>
                            <video src={video} className='rounded-3xl' muted playsInline onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></video>
                        </a>
                    </div>
                ))}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    },
                    content: {
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '450px',
                        maxHeight: '100%',
                        overflow: 'hidden',
                    }
                }}
            >
                <video autoPlay loop src={videos[selectedVideoIndex]}></video>
            </Modal>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black opacity-50"
            >
                <div className="bg-transparent border-none p-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md max-h-full overflow-hidden">
                    <video className="w-full h-auto" autoPlay loop src={videos[selectedVideoIndex]}></video>
                </div>
            </Modal> */}


            <div className="absolute left-0 mx-10 transform -translate-y-1/2 top-72">
                <button onClick={goToPrev} className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><ChevronLeft size={24} color="#444" /></button>
            </div>

            <div className="absolute right-0 mx-10 transform -translate-y-1/2 top-72">
                <button onClick={goToNext} className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"><ChevronRight size={24} color="#444" /></button>
            </div>
        </div>
    );
};
