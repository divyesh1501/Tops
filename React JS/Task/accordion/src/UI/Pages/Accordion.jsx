import React, { useState } from 'react';
import './accordion.css';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, defaultOpenIndexes }) {
    const [openIndexes, setOpenIndexes] = useState(defaultOpenIndexes || []);

    const toggleAccordion = (index) => {
        setOpenIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                        {item.title}
                        <span className="lucid-icon"><ChevronDown /></span>
                    </div>
                    {openIndexes.includes(index) ? (
                        <div className="accordion-body open">
                            {item.body}
                        </div>
                    ) : (
                        <div className="accordion-body closed">
                            {item.body}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};


