import React from 'react';

export default function ArticleCard({ title, description, image }) {
    return (
        <div className="flex flex-col" role='button'>
                <div className='mb-10 relative overflow-hidden rounded-3xl' >
                    <img src={image} alt={title} className='w-full h-80 transition-transform duration-500 transform hover:scale-105' />
                </div>
                <div>
                    <h2 className='capitalize font-bold text-2xl mb-3'>{title}</h2>
                    <p className='text-gray-600'>{description}</p>
                </div>
        </div>
    );
}
