import React from 'react'
import SliderComponent from "../../Components/Slider/SliderComponent";
import Category from '../Category/Category'
import Product from '../Product/Product'

export default function HomePage() {
  return (
    <>
      <SliderComponent />
      <Product />
      <Category />
    </>
  )
}
