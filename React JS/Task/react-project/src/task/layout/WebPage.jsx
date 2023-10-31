import React from 'react'
import './index.css'
import MainContent from './MainContent'
import FooterSec from './FooterSec'
import NavigationMenu from './NavigationMenu'
import HeaderSec from './HeaderSec'


function WebPage() {
  return (
    <div className='webpage'>
       <HeaderSec />
       <NavigationMenu />
       <MainContent />
       <FooterSec />
    </div>
  )
}

export default WebPage