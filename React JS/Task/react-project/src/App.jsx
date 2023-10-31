import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './task/layout/index.css'
import ProductTable from './task/ProductTable'
import DataTable from './task/DataTable'
import WebPage from './task/layout/webpage'
import CurdTask from './task/CurdTask'
import FullCurd from './task/FullCurd'
import IncDec from './task/IncDec'
import ListView from './task/ListView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ProductTable /> */}
    {/* <DataTable /> */}
    {/* <WebPage /> */}
    {/* <CurdTask /> */}
    {/* <FullCurd /> */}
    {/* <IncDec /> */}
    {/* <ListView /> */}
    <NonIdiomaticList />
    </>
  )
}

export default App
