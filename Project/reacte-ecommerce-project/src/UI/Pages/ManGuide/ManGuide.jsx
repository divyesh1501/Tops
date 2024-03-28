import React from 'react';
import hmark from "../ManGuide/Images/heading-mark.webp";
import MG1 from "../ManGuide/Images/MG1.webp";
import MG2 from "../ManGuide/Images/MG2.webp";
import MG3 from "../ManGuide/Images/MG3.webp";
import ArticleCard from './ArticleCard';

const articles = [
    {
        title: "Holi Essentials for Men",
        description: "Can you sense the Holi spirit electrifying the atmosphere? Goodbye, dull winter days! It's time to welcome the colourful spring season and soak up the festive Holi vibes.",
        image: MG1,
        // link: "/holi-essentials"
    },
    {
        title: "Valentine's Grooming Guide: Elevate Your Style...",
        description: "When it comes to self-care, grooming plays a crucial role in defining a man's personal style and confidence. Beyond the basics of shaving and haircuts, a comprehensive grooming routine encompasses...",
        image: MG2,
        // link: "/valentines-grooming-guide"
    },
    {
        title: "Unforgettable Valentine’s Day Date Ideas",
        description: "The month of love has already arrived, and Valentine's Day is just around the corner. February is renowned as the time for expressing affection and emotions, with Valentine's Day falling ...",
        image: MG3,
        // link: "/valentines-day-date-ideas"
    }
];

export default function ManGuide() {
    return (
        <div className='my-10'>
            <div className='flex justify-center w-full my-5 bg-black'>
                <h1 className='my-2 text-4xl font-bold text-white capitalize'>wild stone man guide</h1>
                <div className='flex justify-end'>
                    <img className="filter invert brightness-150 h-20" src={hmark} alt="hmark" />
                </div>
            </div>
            <div className='flex gap-10 my-10 mx-5'>
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </div>
    );
}
