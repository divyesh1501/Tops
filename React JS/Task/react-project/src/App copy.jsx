// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './task/layout/index.css'
// import ProductTable from './task/ProductTable'
// import DataTable from './task/DataTable'
// import WebPage from './task/layout/webpage'
// import CurdTask from './task/CurdTask'
// import FullCurd from './task/FullCurd'
// import IncDec from './task/IncDec'
// import ListView from './task/ListView'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     {/* <ProductTable /> */}
//     {/* <DataTable /> */}
//     {/* <WebPage /> */}
//     {/* <CurdTask /> */}
//     {/* <FullCurd /> */}
//     {/* <IncDec /> */}
//     <ListView  />
//     {/* <NonIdiomaticList /> */}
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListView from './task/ListView';

function App() {
  const items = ['Use Array.map', 'Not for loop', 'Give each item a unique key', 'Avoid using array index as the key'];

  return (
    <div style={{
      display:"flex",
      justifyContent:"center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center", alignItems: "center", flexDirection: "column",
        height: "300px", width: "600px",
        backgroundColor: "green"
      }}>
        <h1 style={{
          fontSize: "30px"
        }}>The "React Way" to Render a List</h1>
        <ListView items={items} />

      </div>
    </div>
  );
}

export default App