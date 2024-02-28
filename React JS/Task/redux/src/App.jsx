import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { Provider } from 'react-redux'
import { store } from "./Redux/app/store";
import Amount from './UI/pages/Amount';
import Count from './UI/pages/Count';
import Point from './UI/pages/point';
import InputData from './UI/pages/InputData';
import User from './UI/pages/User';

function App() {

  return (
    <>
      <Provider store={store}>
        <div>
        {/* <div className='d-flex gap-3 justify-content-center'> */}
        {/* <Count /> */}
        {/* <Amount /> */}
        {/* <Point /> */}
        {/* <InputData /> */}
        <User />
        </div>
      </Provider>,
    </>
  )
}

export default App
