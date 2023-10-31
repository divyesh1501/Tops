import React from 'react'
import './index.css'
import ContentSec from './ContentSec'

export default function MainContent() {
  return (
    <div className="container-fluid">
      <ContentSec />
      <div className="maincontent">
        <h1>Main Content</h1>
      </div>
      <ContentSec />
    </div>
  )
}
