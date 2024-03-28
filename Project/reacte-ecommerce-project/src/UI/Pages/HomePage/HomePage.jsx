import React from 'react'
import SliderComponent from "../../Components/Slider/SliderComponent";
import Category from '../Category/Category'
import Product from '../Product/Product'
import AboutUs from '../AboutUs/AboutUs';
import FeedAndTrendSlider from "../../Components/FeedBackAndTrending/FeedAndTrendSlider";

export default function HomePage() {
  return (
    <>
      <SliderComponent />
      <Product />
      <Category />
      <AboutUs />
      <FeedAndTrendSlider />
    </>
  )
}
