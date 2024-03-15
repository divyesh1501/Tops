// import React from 'react';
// import './StarRating.css';

// export default function StarRating({ rating }) {
//     const stars = Array.from({ length: 5 }, (_, index) => (
//         <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>&#9733;</span>
//     ));

//     return (
//         <div className="star-rating">
//             {stars}
//         </div>
//     );
// };

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
