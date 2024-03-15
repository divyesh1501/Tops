import React, { useEffect, useRef } from 'react'
import WST from "../AboutUs/Video/WildStoneTeaser.mp4";

export default function AboutUs() {
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;

        const handleScroll = () => {
            const rect = video.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            // Check if the video exists and is in the viewport
            if (video && rect.bottom >= 0 && rect.top <= viewHeight) {
                // Play the video when it's in the viewport
                video.play();
            } else if (video) {
                // Pause the video when it's out of the viewport
                video.pause();
            }
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='flex flex-col items-center justify-center my-10 items'>
                <video ref={videoRef} src={WST} className='object-cover w-7/12 rounded-3xl' autoPlay loop muted playsInline></video>
                <div className='flex flex-col items-center'>
                    <h1 className='flex justify-center my-10 text-4xl font-bold underline uppercase'>about us</h1>
                    <p className='flex text-xl text-center text-gray-500' style={{ width: "55%" }}>
                        For a Wild Stone guy, life’s an occasion. Every moment is worth a celebration. Wild Stone helps you celebrate life to the core by keeping you prepared for all the special moments. Don’t just live them, make it memorable.</p>
                </div>
            </div>

        </>
    )
}
