import React from 'react'
import {Link} from 'react-router-dom'
const LandinPage = () => {
  return (
    <div className="landin-page">
      
      <Link to='/about' className="box-inlanding">About</Link>
      <Link to='/projects' className="box-inlanding">Portafolio</Link>
      <Link to='/contact' className="box-inlanding">Contact</Link>
      
      
      
    </div>
  )
}

export default LandinPage
