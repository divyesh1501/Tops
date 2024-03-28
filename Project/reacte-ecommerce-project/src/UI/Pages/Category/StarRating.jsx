import React from 'react';

export default function StarRating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span
            key={index}
            className={`text-3xl ${
                index < rating ? 'text-yellow-400' : 'text-gray-400'
            } cursor-pointer`}
        >
            &#9733;
        </span>
    ));

    return <div className="flex">{stars}</div>;
}
