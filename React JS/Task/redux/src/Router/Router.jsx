import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from '../UI/pages/UserData';
import User from '../UI/pages/User';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/userdata" element={<UserData />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


// Router.jsx
// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserData from '../UI/pages/UserData';
// import User from '../UI/pages/User';

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/userdata" element={<UserData />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


// // Router.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserData from '../UI/pages/UserData';
// import User from '../UI/pages/User';

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/userdata" element={<UserData />} />
//         <Route path="/" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
