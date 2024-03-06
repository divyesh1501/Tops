import React from 'react'
import wlogo from "../../Images/wild-stone.avif";
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import  './header.css'
import { ChevronDown, CircleUser, Heart, Search, ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        <>
            <Navbar className='Header'>
                <div className='navBar'>
                    <NavbarBrand href="/">
                        <div className=''>
                            <img
                                alt='logo'
                                src={wlogo}
                                style={{
                                    width:"180px"
                                }}
                            />
                        </div>
                    </NavbarBrand>

                    <div className='navMenu' style={{ textDecoration: "none", fontStyle: "uppercase" }}>
                        <NavLink to={'/'} style={{ display: "none" }}>Home</NavLink>
                        <NavLink to={'/perfume'}>Perfume</NavLink>
                        <NavLink to={'/deodarant'} >Deodarant<span><ChevronDown /></span></NavLink>
                        <NavLink to={'/pocket-perfume'}>Pocket Perfume</NavLink>
                        <NavLink to={'/grooming'}>Grooming<ChevronDown /></NavLink>
                        <NavLink to={'/combos'}>Combos</NavLink>
                        <NavLink to={'/gifts'}>Gifts</NavLink>
                        <NavLink to={'/by-fragrance'}>By fragrance<ChevronDown /></NavLink>
                    </div>

                    <div className='gap-3 d-flex header-icon'>
                        <a href="" style={{focusable:"true"}}><Search /></a>
                        <a href=""><Heart /></a>
                        <a href=""><CircleUser /></a>
                        <a href=""><ShoppingCart /></a>
                    </div>
                </div>
            </Navbar>
        </>
    )
}


// import React from 'react';
// import wlogo from '../../Images/wild-stone.avif';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { ChevronDown, CircleUser, Heart, Search, ShoppingCart } from 'lucide-react';

// export default function Header() {
//   return (
//     <>
//       <Navbar className="Header">
//         <div className="flex items-center justify-between w-full">
//           <NavbarBrand href="/">
//             <div className="">
//               <img
//                 alt="logo"
//                 src={wlogo}
//                 style={{
//                   width: '180px',
//                 }}
//               />
//             </div>
//           </NavbarBrand>

//           <div className="hidden gap-4 text-sm uppercase md:flex align-center">
//             <NavLink to={'/'} className="hidden">
//               Home
//             </NavLink>
//             <NavLink to={'/perfume'}>Perfume</NavLink>
//             <NavLink to={'/deodarant'} className="flex items-center">
//               Deodarant<span className="ml-1"><ChevronDown /></span>
//             </NavLink>
//             <NavLink to={'/pocket-perfume'}>Pocket Perfume</NavLink>
//             <NavLink to={'/grooming'} className="flex items-center">
//               Grooming<ChevronDown className="ml-1" />
//             </NavLink>
//             <NavLink to={'/combos'}>Combos</NavLink>
//             <NavLink to={'/gifts'}>Gifts</NavLink>
//             <NavLink to={'/by-fragrance'} className="flex items-center">
//               By fragrance<ChevronDown className="ml-1" />
//             </NavLink>
//           </div>

//           <div className="flex gap-3 header-icon">
//             <a href="">
//               <Search />
//             </a>
//             <a href="">
//               <Heart />
//             </a>
//             <a href="">
//               <CircleUser />
//             </a>
//             <a href="">
//               <ShoppingCart />
//             </a>
//           </div>
//         </div>
//       </Navbar>
//     </>
//   );
// }
