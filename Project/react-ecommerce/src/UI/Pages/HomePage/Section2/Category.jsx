import React from 'react';
import { Card } from 'react-bootstrap';
import perfume from "../Section2/Images/Perfume.webp";
import deodorant from "../Section2/Images/Deodorant.webp";
import grooming from "../Section2/Images/Grooming.webp";
import { ArrowRight } from 'lucide-react';
import "./category.css";


export default function Category() {
    return (
        <div className="mx-20 my-10 card-container">
            <a href="" className="text-decoration-none">
                <Card className='card'>
                    <Card.Img className='h-350 w-350 img' variant="top" src={perfume} />
                    <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading">Perfume<span><ArrowRight strokeWidth={1} absoluteStrokeWidth /></span></h5>
                </Card>
            </a>

            <a href="" className="text-decoration-none">
                <Card className='card'>
                    <Card.Img className='img h-350 w-350 rounded-2xl' variant="top" src={deodorant} />
                    <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading font-barlow">Deodorant<span><ArrowRight strokeWidth={1} absoluteStrokeWidth /></span></h5>
                </Card>
            </a>

            <a href="" className="text-decoration-none">
                <Card className='card'>
                    <Card.Img className='img h-350 w-350 rounded-2xl' variant="top" src={grooming} />
                    <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading font-barlow">Grooming<span><ArrowRight strokeWidth={1} absoluteStrokeWidth /></span></h5>
                </Card>
            </a>
        </div>
    );
};

