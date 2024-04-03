import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { Provider } from 'react-redux'
import { store } from "./Redux/app/store";
import Count from './UI/pages/count';
import Amount from './UI/pages/Amount';
import Point from './UI/pages/point';
import InputData from './UI/pages/InputData';
import { PostApi } from './Services/PostApi';
import ApiData from './Services/apiData';

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
          {/* <PostApi /> */}
          <ApiData />
        </div>
      </Provider>,
    </>
  )
}

export default App
