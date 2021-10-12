import React from 'react'
import {Link} from 'react-router-dom'
const LandinPage = () => {
  return (
    <div className="landin-page">
      
      <Link to='/about' className="box-inlanding box1">About</Link>
      <Link to='/projects' className="box-inlanding box4">Portafolio</Link>
      <Link to='/contact' className="box-inlanding box2">Contact</Link>
      <Link to='/contact' className="box-inlanding box3">Boxk</Link>
      
      
      
    </div>
  )
}

export default LandinPage
