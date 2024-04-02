import React from 'react'
import SliderComponent from "../../Components/Slider/SliderComponent";
import Category from '../Category/Category'
import Product from '../Product/Product'
import AboutUs from '../AboutUs/AboutUs';
import FeedAndTrendSlider from "../../Components/FeedBackAndTrending/FeedAndTrendSlider";
import ManGuide from '../ManGuide/ManGuide';
import AboutWS from '../AboutWS/AboutWS';
import Policeis from '../Policies/Policeis';

export default function HomePage() {
  return (
    <>
      <SliderComponent />
      <Product />
      <Category />
      <AboutUs />
      <FeedAndTrendSlider />
      <ManGuide />
      <Policeis />
      <AboutWS />
      {/* <h1>Hwllo worldnpm </h1> */}
    </>
  )
}
