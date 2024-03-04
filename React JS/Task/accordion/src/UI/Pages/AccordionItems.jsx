import React from 'react';
import Accordion from './Accordion';
import { ChevronDown } from "lucide-react";

export default function AccordionItems() {
    const accordionItems = [
        { title: <div style={{width:"100%"}}><span>What is your return policy?</span><span className=''><ChevronDown /></span></div>, body: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab error officiis dolores! Omnis fugit perferendis temporibus mollitia minus fugiat itaque unde error dignissimos esse iure, tenetur placeat illo et sapiente.</span> },
        { title: 'How do  I track my order?', body: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos numquam est tempore vero incidunt libero laborum iste, ab natus sit laboriosam in ea deserunt consequatur. Numquam quas molestiae autem veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae placeat veniam consequuntur eligendi distinctio consequatur, nobis laboriosam. Dolor, a? Perferendis quia nam voluptatum ipsum quas nihil qui eos ab corrupti.</span> },
        { title: 'Can I purchase items again?', body: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore, amet repudiandae dolorum voluptatum itaque voluptatem veritatis sunt tempore! Dolore, optio error quidem esse saepe repellat et similique iusto porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas doloribus rem nostrum enim. Harum sit optio quibusdam quos vitae inventore maiores itaque. Consequatur non eligendi doloribus enim? Accusamus, rem laborum?</span> },
    ];

    const defaultOpenIndexes = [0];

    return (
        <div>
            <h1>Accordion Example</h1>
            <Accordion items={accordionItems} defaultOpenIndexes={defaultOpenIndexes} />
        </div>
    );
};

