import React, { useState } from 'react'
import './App.css'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './UI/Pages/HomePage/HomePage'
import Router from './Router/Router';

export default function App() {

  return (
    <>
      {/* <HomePage /> */}
      <Router />
      <h1 className="text-9xl font-bold text-red-500 underline">
        Hello world!
      </h1>
    </>
  )
}