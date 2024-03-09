import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>&#9733;</span>
    ));

    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};

export default StarRating;
