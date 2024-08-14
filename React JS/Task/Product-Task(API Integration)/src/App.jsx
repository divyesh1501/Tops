import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router/Router';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import ToastContainer from 'react-toastify'


export default function App() {
  return (
    <>
    <Router/>
    <ToastContainer />
    </>
  )
}


