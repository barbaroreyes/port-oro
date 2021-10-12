import React from 'react'
import Main from '../compo/Main'
import Button from '../compo/Button'
import Header from '../compo/Header'

const Home = (props) => {
return (
    <div className="main">
     
     <Button 
     {...props}
     />
    <Main 
    {...props}
    />

    </div>
  )
}

export default Home
