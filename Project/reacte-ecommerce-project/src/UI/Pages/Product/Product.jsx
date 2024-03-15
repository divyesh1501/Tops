import React from 'react';
import perfume from "../Product/Images/Perfume.webp";
import deodorant from "../Product/Images/Deodorant.webp";
import grooming from "../Product/Images/Grooming.webp";
import { ArrowRight } from 'lucide-react';

export default function Product() {
  return (
    <div className="flex justify-center gap-10 mx-10 my-10 md:mx-20 md:my-10">
      <a href="" className="text-decoration-none">
        <div>
          <img src={perfume} className='h-60 w-60 rounded-2xl md:h-96 md:w-96' alt="" />
          <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading font-barlow md:text-xl">
            Perfume
            <span>
              <ArrowRight strokeWidth={1} absoluteStrokeWidth />
            </span>
          </h5>
        </div>
      </a>

      <a href="" className="text-decoration-none">
        <div>
          <img src={deodorant} className='h-60 w-60 rounded-2xl md:h-96 md:w-96' alt="" />
          <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading font-barlow md:text-xl">
            Deodorant
            <span>
              <ArrowRight strokeWidth={1} absoluteStrokeWidth />
            </span>
          </h5>
        </div>
      </a>

      <a href="" className="text-decoration-none">
        <div>
          <img src={grooming} className='h-60 w-60 rounded-2xl md:h-96 md:w-96' alt="" />
          <h5 className="flex gap-2 mt-8 font-bold uppercase bottom-heading font-barlow md:text-xl">
            Grooming
            <span>
              <ArrowRight strokeWidth={1} absoluteStrokeWidth />
            </span>
          </h5>
        </div>
      </a>
    </div>
  );
};