import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <Link to='/'className="box">
        Home
    </Link>
    <Link className="box">
       Projects
    </Link>
    <Link className="box">
        Contact
    </Link>
    </footer>
  )
}

export default Footer
