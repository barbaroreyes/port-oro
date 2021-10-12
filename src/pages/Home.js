import React from 'react'
import Main from '../compo/Main'
import Button from '../compo/Button'

const Home = (props) => {
  return (
    <div>
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
